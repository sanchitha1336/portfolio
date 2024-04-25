import React, { useEffect, useState } from 'react';
import './App.css';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaArrowUp } from 'react-icons/fa';

function Portfolio() {
    const [isOpen, setIsOpen] = useState(false);
    const [showScroll, setShowScroll] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<any>({
        dropdown1: false,
        dropdown2: false,
        dropdown3: false,
        dropdown4: false,
        dropdown5: false,
    });

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (dropdown:any) => {
        setDropdownOpen({
            ...dropdownOpen,
            [dropdown]: !dropdownOpen[dropdown],
        });
    };

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, []);

    return (
        <div className="App">
            <header className="header">
                <div className="header-container">
                    <h1 className="header-title">Sanchitha S</h1>
                    <button className="nav-toggle" onClick={toggleNav}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                    <nav className={`laptop`}>
                        <ul className="nav-list">
                            <li className="nav-item"><a href="#profile" onClick={() => { toggleNav(); }}>Profile</a></li>
                            <li className="nav-item"><a href="#skills" onClick={() => { toggleNav(); }}>Skills</a></li>
                            <li className="nav-item"><a href="#education" onClick={() => { toggleNav(); }}>Education</a></li>
                            <li className="nav-item"><a href="#experience" onClick={() => { toggleNav(); }}>Work Experience</a></li>
                            <li className="nav-item"><a href="#resume" onClick={() => { toggleNav(); }}>Resume</a></li>
                            <li className="nav-item"><a href="#language" onClick={() => { toggleNav(); }}>Languages</a></li>
                            <li className="nav-item"><a href="#interest" onClick={() => { toggleNav(); }}>Interests</a></li>

                        </ul>
                    </nav>
                </div>
                <nav className={`header-nav ${isOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#profile" onClick={() => { toggleNav(); }}>Profile</a></li>
                        <li className="nav-item"><a href="#skills" onClick={() => { toggleNav(); }}>Skills</a></li>
                        <li className="nav-item"><a href="#education" onClick={() => { toggleNav(); }}>Education</a></li>
                        <li className="nav-item"><a href="#experience" onClick={() => { toggleNav(); }}>Work Experience</a></li>
                        <li className="nav-item"><a href="#resume" onClick={() => { toggleNav(); }}>Resume</a></li>
                        <li className="nav-item"><a href="#language" onClick={() => { toggleNav(); }}>Languages</a></li>
                        <li className="nav-item"><a href="#interest" onClick={() => { toggleNav(); }}>Interests</a></li>
                    </ul>
                </nav>
            </header>

            <section id="profile" className="container main-section">
                <div className="profile-container">
                    <img src="/IMG_20240411_114448.jpg" alt="Sanchitha S" className="profile-image" />
                    <h2 className="p-section-title">Profile</h2>
                    <p className="p-section-content">
                        Passionate and experienced Full Stack Developer with a strong background in MERN stack and Next.js. With over 2.8 years of hands-on experience in designing, developing, and deploying scalable web applications, I excel in both frontend and backend development. Committed to producing high-quality code, optimizing performance, and creating user-friendly interfaces, I thrive in fast-paced environments and enjoy tackling new challenges.
                    </p>
                </div>
            </section>

            <section id="skills" className="container main-section">
                <h2 className="skill-section-title">Skills</h2>
                <div className="skill-section-list">
                    <button className="skill-button">GitHub Management</button>
                    <button className="skill-button">HTML, Reactjs  Nextjs</button>
                    <button className="skill-button">TypeScript,JavaScript</button>
                    <button className="skill-button">Tailwind css, scss,Bootstrap</button>
                    <button className="skill-button">MongoDb, Node js,sql,postgresql</button>
                </div>
            </section>

            <section id="education" className="container main-section">
                <h2 className="ed-section-title">Education</h2>
                <div className="ed-section-list">
                    <div className="ed-card">
                        <p className="ed-section-content">
                            <strong>Government Engineering College, Haveri</strong><br />
                            B.E Computer Science Engineering<br />
                            CGPA- 6.0<br />
                            2016-2020
                        </p>
                    </div>
                    <div className="ed-card">
                        <p className="ed-section-content">
                            <strong>Kasturba College, Shimoga</strong><br />
                            Percentage- 74%<br />
                            PUC (Intermediate)<br />
                            2013-2015
                        </p>
                    </div>
                    <div className="ed-card">
                        <p className="ed-section-content">
                            <strong>Sharadha Vilasa High School, Mattur</strong><br />
                            Percentage- 79%<br />
                            2002-2013<br />
                            Karnataka Secondary Education Board
                        </p>
                    </div>
                </div>
            </section>

            <section id="experience" className="container main-section">
                <h2 className="w-section-title">Work Experience</h2>
                <div className="job">
                    <h3 className="job-title">Full Stack Developer (MERN)</h3>
                    <p className="job-company"><strong>ParentOf solutions Pvt Ltd</strong><br />2022-2024  1.8 Years</p>
                    <ul className="job-list">
                        <li>Created web pages using React js and Scss</li>
                        <li>Migrated React js web pages to Next js along with Tailwind Css</li>
                        <li>Created API’s in Next js</li>
                    </ul>
                    <div>
                        <h4 className="job-section-title">Projects</h4>
                        {[
                            {
                                title: "ParentOf",
                                description: "The 'Parent of' project is designed to facilitate the registration and monitoring of students by parents or teachers. It involves assigning mentors to students to enhance their performance and skill development...",
                                details: [
                                    "Website Development: This project entails the creation of a website that offers various features, such as video carousels, sliders, and more. These elements are used to present content in an engaging and interactive manner, making the user experience more appealing.",
                                    "Registration Forms: Built registration forms to enable parents or teachers to register their children or students. These forms likely include fields for personal information, contact details, and other relevant data.",
                                    "Bug Fixing with React: React, a popular JavaScript library for building user interfaces, was used to develop the frontend of the website. It also involved handling bug fixes to ensure a smooth user experience.",
                                    "CSS Styling with Tailwind CSS: Tailwind CSS was employed to style the webpages, providing a consistent and responsive design across all pages. Tailwind CSS is known for its utility-first approach to styling, making it efficient and adaptable.",
                                    "Responsiveness: Ensured that the webpages are responsive, meaning they adapt to various screen sizes and devices. This is essential for delivering a user-friendly experience on desktops, tablets, and smartphones.",
                                    <a href="https://app.parentof.com" target="_blank" rel="noopener noreferrer">Visit Project</a>
                                ],
                            },
                            {
                                title: "Writo/Drawgo",
                                description: "Developed frontend UI components for a Next.js project focused on handwriting and drawing analysis of children...",
                                details: [
                                    "Implementation: Implemented backend Node.js APIs including generateReport API and model API for analyzing handwriting images.",
                                    "Collaboration: Collaborated with cross-functional teams to ensure seamless integration of frontend and backend systems.",
                                    "Design & Architecture: Contributed to the design and architecture discussions to enhance project scalability and performance.",
                                    "Quality Assurance: Ensured code quality and maintained high standards through comprehensive testing and code reviews.",
                                    "Agile Development: Actively participated in agile development methodologies to meet project milestones and deliverables.",
                                    <a href="https://app.parentof.com" target="_blank" rel="noopener noreferrer">Visit Project</a>
                                ],
                            },
                            {
                                title: "SafeMango",
                                description: "The 'Safe Mango' project focuses on offering support and guidance to students who have been affected by bullying...",
                                details: [
                                    "App Development: This project includes developing an app section within the platform, catering to the needs of students affected by bullying. The app is likely designed to be user-friendly and provide easy access to the available resources and support.",
                                    "NextJs Integration: Next.js, a popular React framework, was utilized to build the app section. Next.js offers server-side rendering and other features that enhance the performance and SEO of web applications.",
                                    "Next AUTH Integration: User management was streamlined by incorporating Next AUTH. This allows for user authentication, authorization, and management, ensuring that the platform is secure and user data is protected.",
                                    "Tailwind CSS Styling: Like the previous project, Tailwind CSS was used for styling in the 'Safe Mango' project. This ensures consistency in design and responsiveness for a seamless user experience.",
                                    "API Integration: An API was developed and integrated into the platform, likely using Next.js as well. This API would handle interactions with external services, data retrieval, and updates, and potentially manage user data.",
                                    "Responsiveness: Ensured that the pages in the 'Safe Mango' project are responsive on all devices, making it accessible to students regardless of the device they are using.",
                                    <a href="https://safemango.com" target="_blank" rel="noopener noreferrer">Visit Project</a>
                                ],
                            },
                            {
                                title: "Data Visualization app",
                                description: "The Data Visualization project is initiated to provide a systematic and intuitive representation of the vast array of data within ParentOf Company, facilitating deeper insights, strategic planning, and enhanced operational efficiency.",
                                details: [
                                    "Spearheaded the development of a data visualization application using React, showcasing comprehensive information about the parentof company.",
                                    "Designed and implemented various graphs and charts to visualize parent company details, including parent-child relationships, assessments, and user locations.",
                                    "Utilized React libraries such as D3.js or Chart.js to create interactive and responsive data visualizations that enhance user understanding.",
                                    "Collaborated closely with backend Node.js developers to ensure seamless integration of frontend components with backend APIs.",
                                    "Conducted thorough testing and optimization of data visualization components to ensure performance and reliability across different devices and browsers.",
                                    "Actively participated in design discussions and provided insights to enhance user experience and usability of the visualization application.",
                                    <a href="https://vfrontend.parentof.com/" target="_blank" rel="noopener noreferrer">Visit Project</a>
                                ],
                            },
                        ].map((project, index) => (
                            <div key={index}>
                                <strong style={{ color: "#333", marginBottom: "8px" }}>{project.title}</strong><br />
                                <p className="job-section-title" onClick={() => toggleDropdown(`dropdown${index + 1}`)}>
                                    {project.description}
                                    <div className={`drop-icon ${dropdownOpen[`dropdown${index + 1}`] ? 'rotate' : ''}`}>▼</div>
                                </p>
                                {dropdownOpen[`dropdown${index + 1}`] && (
                                    <div className="project-dropdown">
                                        {project.details.map((detail, detailIndex) => (
                                            <p key={detailIndex}>{detail}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="job">
                    <h3 className="job-title">Associate Software Engineer</h3>
                    <p className="job-company"><strong>BYJU'S</strong><br />2021-2022  1.4 Years</p>
                    <ul className="job-list">
                        <li>Creating webpages using HTML,CSS, Bootstrap and JS( Frontend) Handling database (Mongo Db) and backend (Node Js and Express Js) for webpages.</li>
                        <li>Created webpage in React.js</li>
                        <li>Supporting team.</li>
                        <li>Code debugging.</li>
                    </ul>
                    <h4 className="job-section-title">Projects</h4>
                    {[
                        {
                            title: "Learn Portal 2.0",
                            description: "This project includes customers registering and attending classes. Reviewed application requirements and interface designs to ensure compatibility with existing applications...",
                            details: [
                                "Creating UI Components: Creating and handling multiple UI components with responsiveness.",
                                "Storybook for React Component: Creating Storybook for react component.",
                                "Api Integration in Frontend: Api integration in frontend.",
                                <a href="https://byjus.com/learn/account/login" target="_blank" rel="noopener noreferrer">Visit Project</a>
                            ],
                        },
                        {
                            title: "Byju's Home page",
                            description: "Byju's Home page This project includes customer registering online classes and redirection to Learn Portal. Building UI which is responsive in all devices. Building components to show the data...",
                            details: [
                                "Building UI: Building UI which is responsive in all devices.",
                                "Building Components: Building components to show the data.",
                                <a href="https://byjus.com/learn/account/login" target="_blank" rel="noopener noreferrer">Visit Project</a>
                            ],
                        },
                    ].map((project, index) => (
                        <div key={index}>
                            <strong style={{ color: "#333", marginBottom: "8px" }}>{project.title}</strong><br />
                            <p className="job-section-title" onClick={() => toggleDropdown(`dropdown${index + 4}`)}>
                                {project.description}
                                <div className={`drop-icon ${dropdownOpen[`dropdown${index + 4}`] ? 'rotate' : ''}`}>▼</div>
                            </p>
                            {dropdownOpen[`dropdown${index + 4}`] && (
                                <div className="project-dropdown">
                                    {project.details.map((detail, detailIndex) => (
                                        <p key={detailIndex}>{detail}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <section id="resume" className="container main-section">
    <h2 className="resume-section-title">Resume</h2>
    <iframe src="https://drive.google.com/file/d/1bPbN1tdGAxh_p0qoGtIVWbSwRbROzDiX/preview" width="100%" height="600px"></iframe>
</section>

            <section id="language" className="container main-section">
                <h2 className="lang-section-title">Languages</h2>
                <div className="lang-section-list">
                    <button className="lang-button">English</button>
                    <button className="lang-button">Kannada</button>
                    <button className="lang-button">Hindi</button>
                </div>
            </section>
            <section id="interest" className="container main-section">
                <h2 className="int-section-title">Interests</h2>
                <div className="int-section-list">
                    <button className="int-button">Coding</button>
                    <button className="int-button">Reading</button>
                    <button className="int-button">Travelling</button>
                    <button className="int-button">Sports</button>
                </div>
            </section>
            <button className={`scroll-top ${showScroll ? 'show' : ''}`} onClick={scrollTop}>
                <FaArrowUp />
            </button>
            <footer className="footer">
                <div className="container">
                    <div className="contact-list">
                        <a href="tel:9483223631" className="contact-item">
                            <FaPhoneAlt />
                        </a>
                        <a href="mailto:sanchithashimoga@gmail.com" className="contact-item">
                            <FaEnvelope />
                        </a>
                        <a href="https://www.linkedin.com/in/sanchitha-s-943103192/" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <FaLinkedin />
                        </a>
                    </div>
                    <p className="footer-text">© 2024 Sanchitha S</p>
                </div>
            </footer>
        </div>
    );
}

export default Portfolio;
