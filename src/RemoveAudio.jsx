import { useRef, useState } from 'react';

export default function NotAboutUs() {
  const videoRef = useRef(null);
  const [videoURL, setVideoURL] = useState('');
  const [downloadURL, setDownloadURL] = useState('');

  const handleVideoUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setVideoURL(url); // This will trigger re-render and show the video
  };

  const handleMetadataLoaded = async () => {
    console.log("Video metadata loaded");

    if (videoRef.current) {
      const videoElement = videoRef.current;
      videoElement.play(); // Ensure the video starts playing to get the full stream

      try {
        // Capture the video stream
        const stream = await captureVideoStream(videoElement);
        console.log("Captured stream:", stream);

        // Remove audio from the stream
        const newStream = removeAudioFromStream(stream);

        // Check if the stream has video tracks
        if (newStream.getVideoTracks().length === 0) {
          console.error("No video tracks found in the stream.");
          return;
        }

        // Convert the new stream to a downloadable blob after the video has fully played
        const videoBlob = await convertStreamToBlob(newStream);
        console.log("Video Blob size:", videoBlob.size);

        const newDownloadURL = URL.createObjectURL(videoBlob);
        console.log("New download URL:", newDownloadURL);
        setDownloadURL(newDownloadURL);
      } catch (error) {
        console.error("Error processing video:", error);
      }
    }
  };

  const captureVideoStream = async (videoElement) => {
    const stream = videoElement.captureStream();
    console.log("Capture stream result:", stream);
    return stream;
  };

  const removeAudioFromStream = (stream) => {
    // Get only video tracks from the stream
    const videoTracks = stream.getVideoTracks();

    if (videoTracks.length === 0) {
      throw new Error("No video tracks available in the stream.");
    }

    const newStream = new MediaStream(videoTracks); // Create a new stream with only video tracks
    console.log("New stream with only video tracks:", newStream);
    return newStream;
  };

  const convertStreamToBlob = async (stream) => {
    return new Promise((resolve, reject) => {
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/mp4' });
      const chunks = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
          console.log("Data chunk received:", e.data.size);
        }
      };

      mediaRecorder.onstop = () => {
        if (chunks.length > 0) {
          const videoBlob = new Blob(chunks, { type: 'video/mp4' });
          resolve(videoBlob);
        } else {
          reject(new Error("No data recorded."));
        }
      };

      mediaRecorder.onerror = (error) => {
        console.error("MediaRecorder error:", error);
        reject(error);
      };

      // Start recording the stream
      mediaRecorder.start();

      // Stop recording when the video stream ends (ensure the whole video is recorded)
      stream.getVideoTracks()[0].onended = () => {
        if (mediaRecorder.state !== "inactive") {
          mediaRecorder.stop();
          console.log("Stopped recording when video ended");
        }
      };
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Remove Audio from Video</h1>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
      
      {videoURL && (
        <div style={{ marginTop: '20px' }}>
          {/* Ensure the video element updates when videoURL changes */}
          <video
            ref={videoRef}
            src={videoURL}
            controls
            width="400"
            key={videoURL} // Force re-render of the video element
            onLoadedMetadata={handleMetadataLoaded}
          />
        </div>
      )}

      {downloadURL && (
        <div style={{ marginTop: '20px' }}>
          <a href={downloadURL} download="video-without-audio.webm">
            Download Video without Audio
          </a>
        </div>
      )}
    </div>
  );
}
