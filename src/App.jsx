import { useEffect, useState } from "react";
import "./index.css";

function App() {

  /* ================= ACTIVE SECTION ================= */

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "contact",
      ];

      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {

        const element = document.getElementById(section);

        if (element) {

          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(section);
            break;
          }

        }

      }

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  /* ================= DARK MODE ================= */

  const [darkMode, setDarkMode] = useState(() => {

    const savedMode = localStorage.getItem(
      "portfolio-dark-mode"
    );

    // Default = Dark Mode
    if (savedMode === null) {
      return true;
    }

    return savedMode === "true";

  });


  useEffect(() => {

    document.body.classList.toggle(
      "dark-mode",
      darkMode
    );

    localStorage.setItem(
      "portfolio-dark-mode",
      darkMode
    );

  }, [darkMode]);


  return (
    <>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav className="navbar navbar-expand-lg fixed-top portfolio-navbar">

        <div className="container">

          {/* Logo */}

          <a
            className="navbar-brand portfolio-logo"
            href="#home"
          >
            Prabash <span>Sandakalum</span>
          </a>


          {/* Mobile Toggle */}

          <button
            className="navbar-toggler portfolio-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#portfolioNavbar"
            aria-controls="portfolioNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>


          {/* Navigation */}

          <div
            className="collapse navbar-collapse"
            id="portfolioNavbar"
          >

            <ul className="navbar-nav ms-auto align-items-lg-center">


              {/* Home */}

              <li className="nav-item">

                <a
                  className={`nav-link portfolio-link ${
                    activeSection === "home"
                      ? "active"
                      : ""
                  }`}
                  href="#home"
                >
                  Home
                </a>

              </li>


              {/* About */}

              <li className="nav-item">

                <a
                  className={`nav-link portfolio-link ${
                    activeSection === "about"
                      ? "active"
                      : ""
                  }`}
                  href="#about"
                >
                  About
                </a>

              </li>


              {/* Skills */}

              <li className="nav-item">

                <a
                  className={`nav-link portfolio-link ${
                    activeSection === "skills"
                      ? "active"
                      : ""
                  }`}
                  href="#skills"
                >
                  Skills
                </a>

              </li>


              {/* Projects */}

              <li className="nav-item">

                <a
                  className={`nav-link portfolio-link ${
                    activeSection === "projects"
                      ? "active"
                      : ""
                  }`}
                  href="#projects"
                >
                  Projects
                </a>

              </li>


              {/* Contact */}

              <li className="nav-item">

                <a
                  className={`nav-link portfolio-link ${
                    activeSection === "contact"
                      ? "active"
                      : ""
                  }`}
                  href="#contact"
                >
                  Contact
                </a>

              </li>


              {/* Theme Toggle */}

              <li className="nav-item theme-item">

                <button
                  className="theme-toggle"
                  onClick={() =>
                    setDarkMode(!darkMode)
                  }
                  aria-label="Toggle theme"
                >

                  <i
                    className={
                      darkMode
                        ? "bi bi-sun-fill"
                        : "bi bi-moon-fill"
                    }
                  ></i>

                </button>

              </li>


              {/* Let's Talk */}

              <li className="nav-item">

                <a
                  href="#contact"
                  className="lets-talk-btn"
                >
                  Let's Talk
                </a>

              </li>

            </ul>

          </div>

        </div>

      </nav>


      {/* =====================================================
          HERO
      ====================================================== */}

      <section id="home" className="hero">

        <div className="container">

          <div className="row align-items-center min-vh-100">


            <div className="col-lg-7">

              <div className="hero-content">

                <p className="hero-small">
                  HELLO, I'M
                </p>


                <h1>
                  Prabash <span>Sandakalum</span>
                </h1>


                <h2>
                  Computer Science Undergraduate
                </h2>


                <p className="hero-text">

                  I am a passionate Computer Science
                  undergraduate focused on software
                  development, web technologies and
                  cybersecurity.

                  I enjoy building modern,
                  user-friendly and meaningful
                  digital solutions.

                </p>


                <div className="hero-buttons">


                  {/* View Work */}

                  <a
                    href="#projects"
                    className="btn btn-primary btn-lg me-3"
                  >
                    View My Work

                    <i className="bi bi-arrow-right ms-2"></i>

                  </a>


                  {/* CV */}

                  <a
                    href="/Prabash-Sandakalum-CV.pdf"
                    className="btn btn-outline-primary btn-lg"
                    target="_blank"
                    rel="noreferrer"
                  >

                    <i className="bi bi-file-earmark-pdf me-2"></i>

                    View CV

                  </a>

                </div>


                {/* Social Links */}

                <div className="social-links mt-4">


                  <a
                    href="https://github.com/prabash0929"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="bi bi-github"></i>
                  </a>


                  <a
                    href="https://www.linkedin.com/in/prabashsandakalum/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>


                  <a
                    href="mailto:prabashsandakalum0207@gmail.com"
                    aria-label="Email"
                  >
                    <i className="bi bi-envelope"></i>
                  </a>

                </div>

              </div>

            </div>


            {/* Profile */}

            <div className="col-lg-5 text-center">

              <div className="profile-wrapper">

                <div className="profile-circle">

                  <img
                    src="/profile.jpg"
                    alt="Prabash Sandakalum"
                  />

                </div>


                <div className="profile-badge badge-one">

                  <i className="bi bi-code-slash"></i>

                </div>


                <div className="profile-badge badge-two">

                  <i className="bi bi-laptop"></i>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="about-section py-5"
      >

        <div className="container py-5">


          <div className="text-center mb-5">

            <p className="section-subtitle">
              GET TO KNOW ME
            </p>

            <h2 className="section-title">
              About Me
            </h2>

          </div>


          <div className="row align-items-center">


            {/* Photo */}

            <div className="col-lg-5 text-center mb-5 mb-lg-0">

              <div className="about-photo">

                <img
                  src="/profile.jpg"
                  alt="Prabash Sandakalum"
                />

              </div>

            </div>


            {/* Content */}

            <div className="col-lg-7">

              <h3>
                Turning Ideas Into Digital Solutions
              </h3>


              <p>

                I am a Computer Science undergraduate
                with a strong interest in software
                development and modern web technologies.

              </p>


              <p>

                I enjoy creating applications that solve
                real-world problems.

                My experience includes React,
                JavaScript, Flutter, C#, PHP, MySQL,
                SQL Server and Git.

              </p>


              <p>

                I am also interested in cybersecurity,
                problem solving and continuously
                improving my technical knowledge by
                working on practical projects.

              </p>


              <div className="row mt-4">


                {/* Education */}

                <div className="col-sm-6 mb-3">

                  <div className="about-info">

                    <i className="bi bi-mortarboard"></i>

                    <div>

                      <strong>
                        Education
                      </strong>

                      <p>
                        BSc (Hons) Computer Science
                      </p>

                    </div>

                  </div>

                </div>


                {/* Focus */}

                <div className="col-sm-6 mb-3">

                  <div className="about-info">

                    <i className="bi bi-laptop"></i>

                    <div>

                      <strong>
                        Focus
                      </strong>

                      <p>
                        Software & Web Development
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SKILLS
      ====================================================== */}

      <section
        id="skills"
        className="skills-section py-5"
      >

        <div className="container py-5">


          <div className="text-center mb-5">

            <p className="section-subtitle">
              WHAT I WORK WITH
            </p>

            <h2 className="section-title">
              My Skills
            </h2>

          </div>


          <div className="row g-4">


            {/* Frontend */}

            <div className="col-md-6 col-lg-4">

              <div className="skill-card">

                <div className="skill-icon">
                  <i className="bi bi-code-square"></i>
                </div>

                <h4>
                  Frontend Development
                </h4>

                <p>
                  HTML, CSS, JavaScript, React and Bootstrap.
                </p>

                <div className="skill-tags">

                  <span>HTML</span>
                  <span>CSS</span>
                  <span>React</span>
                  <span>Bootstrap</span>

                </div>

              </div>

            </div>


            {/* App Development */}

            <div className="col-md-6 col-lg-4">

              <div className="skill-card">

                <div className="skill-icon">
                  <i className="bi bi-phone"></i>
                </div>

                <h4>
                  App Development
                </h4>

                <p>
                  Mobile application development
                  using Flutter and Firebase.
                </p>

                <div className="skill-tags">

                  <span>Flutter</span>
                  <span>Dart</span>
                  <span>Firebase</span>

                </div>

              </div>

            </div>


            {/* Backend */}

            <div className="col-md-6 col-lg-4">

              <div className="skill-card">

                <div className="skill-icon">
                  <i className="bi bi-database"></i>
                </div>

                <h4>
                  Backend & Database
                </h4>

                <p>
                  Backend development and database management.
                </p>

                <div className="skill-tags">

                  <span>PHP</span>
                  <span>MySQL</span>
                  <span>C#</span>
                  <span>SQL Server</span>

                </div>

              </div>

            </div>


            {/* Development Tools */}

            <div className="col-md-6 col-lg-4">

              <div className="skill-card">

                <div className="skill-icon">
                  <i className="bi bi-git"></i>
                </div>

                <h4>
                  Development Tools
                </h4>

                <p>
                  Tools and platforms I use for
                  development and collaboration.
                </p>

                <div className="skill-tags">

                  <span>Git</span>
                  <span>GitHub</span>
                  <span>VS Code</span>
                  <span>Android Studio</span>

                </div>

              </div>

            </div>


            {/* Cybersecurity */}

            <div className="col-md-6 col-lg-4">

              <div className="skill-card">

                <div className="skill-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>

                <h4>
                  Cybersecurity
                </h4>

                <p>
                  Security concepts, network security
                  and ethical hacking fundamentals.
                </p>

                <div className="skill-tags">

                  <span>Network Security</span>
                  <span>Ethical Hacking</span>

                </div>

              </div>

            </div>


            {/* Soft Skills */}

            <div className="col-md-6 col-lg-4">

              <div className="skill-card">

                <div className="skill-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>

                <h4>
                  Soft Skills
                </h4>

                <p>
                  Skills that help me work effectively
                  on individual and collaborative projects.
                </p>

                <div className="skill-tags">

                  <span>Problem Solving</span>
                  <span>Teamwork</span>
                  <span>Creativity</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="projects-section py-5"
      >

        <div className="container py-5">


          <div className="text-center mb-5">

            <p className="section-subtitle">
              MY RECENT WORK
            </p>

            <h2 className="section-title">
              Featured Projects
            </h2>

            <p className="section-description">

              A selection of projects I have developed
              using different technologies and frameworks.

            </p>

          </div>


          <div className="row g-4">


            {/* ================= PROJECT 01 ================= */}

            <div className="col-md-6 col-lg-4">

              <div className="project-card">

                <div className="project-icon">
                  <i className="bi bi-heart-fill"></i>
                </div>

                <div className="project-content">

                  <div className="project-number">
                    01
                  </div>

                  <h4>
                    Minggle App
                  </h4>

                  <p>

                    A premium dating mobile application
                    built with Flutter and Firebase,
                    featuring user matching,
                    location-based connections and
                    real-time interactions.

                  </p>

                  <div className="project-tech">

                    <span>Flutter</span>
                    <span>Dart</span>
                    <span>Firebase</span>

                  </div>

                  <a
                    href="https://github.com/prabash0929/Minggle_App"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >

                    View on GitHub

                    <i className="bi bi-arrow-up-right"></i>

                  </a>

                </div>

              </div>

            </div>


            {/* ================= PROJECT 02 ================= */}

            <div className="col-md-6 col-lg-4">

              <div className="project-card">

                <div className="project-icon">
                  <i className="bi bi-calculator"></i>
                </div>

                <div className="project-content">

                  <div className="project-number">
                    02
                  </div>

                  <h4>
                    MathsMaster LK
                  </h4>

                  <p>

                    A PHP and MySQL based Learning
                    Management System designed for
                    Grade 10 and 11 Mathematics students.

                  </p>

                  <div className="project-tech">

                    <span>PHP</span>
                    <span>MySQL</span>
                    <span>Bootstrap</span>

                  </div>

                  <a
                    href="https://github.com/prabash0929/MathsMaster_LK"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >

                    View on GitHub

                    <i className="bi bi-arrow-up-right"></i>

                  </a>

                </div>

              </div>

            </div>


            {/* ================= PROJECT 03 ================= */}

            <div className="col-md-6 col-lg-4">

              <div className="project-card">

                <div className="project-icon">
                  <i className="bi bi-check2-square"></i>
                </div>

                <div className="project-content">

                  <div className="project-number">
                    03
                  </div>

                  <h4>
                    Smart Task Manager
                  </h4>

                  <p>

                    A responsive To-Do List web application
                    designed to organize daily tasks using
                    a clean and simple interface.

                  </p>

                  <div className="project-tech">

                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>

                  </div>

                  <a
                    href="https://github.com/prabash0929/Smart-Task-Manager"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >

                    View on GitHub

                    <i className="bi bi-arrow-up-right"></i>

                  </a>

                </div>

              </div>

            </div>


            {/* ================= PROJECT 04 ================= */}

            <div className="col-md-6 col-lg-4">

              <div className="project-card">

                <div className="project-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>

                <div className="project-content">

                  <div className="project-number">
                    04
                  </div>

                  <h4>
                    Idea-Link
                  </h4>

                  <p>

                    A C# based project focused on
                    connecting and managing ideas through
                    a structured application.

                  </p>

                  <div className="project-tech">

                    <span>C#</span>

                  </div>

                  <a
                    href="https://github.com/prabash0929/Idea-Link"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >

                    View on GitHub

                    <i className="bi bi-arrow-up-right"></i>

                  </a>

                </div>

              </div>

            </div>


            {/* ================= PROJECT 05 ================= */}

            <div className="col-md-6 col-lg-4">

              <div className="project-card">

                <div className="project-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>

                <div className="project-content">

                  <div className="project-number">
                    05
                  </div>

                  <h4>
                    Secure Coding Review
                  </h4>

                  <p>

                    A Python-based cybersecurity project
                    focused on reviewing code for common
                    security issues and secure coding practices.

                  </p>

                  <div className="project-tech">

                    <span>Python</span>
                    <span>Cybersecurity</span>

                  </div>

                  <a
                    href="https://github.com/prabash0929/CodeAlpha_SecureCodingReview"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >

                    View on GitHub

                    <i className="bi bi-arrow-up-right"></i>

                  </a>

                </div>

              </div>

            </div>


            {/* ================= PROJECT 06 ================= */}

            <div className="col-md-6 col-lg-4">

              <div className="project-card">

                <div className="project-icon">
                  <i className="bi bi-activity"></i>
                </div>

                <div className="project-content">

                  <div className="project-number">
                    06
                  </div>

                  <h4>
                    Basic Network Sniffer
                  </h4>

                  <p>

                    A Python-based networking and
                    cybersecurity project created to explore
                    network packet monitoring concepts.

                  </p>

                  <div className="project-tech">

                    <span>Python</span>
                    <span>Networking</span>
                    <span>Cybersecurity</span>

                  </div>

                  <a
                    href="https://github.com/prabash0929/CodeAlpha_BasicNetworkSniffer"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >

                    View on GitHub

                    <i className="bi bi-arrow-up-right"></i>

                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* GitHub */}

          <div className="text-center mt-5">

            <a
              href="https://github.com/prabash0929"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary px-4 py-2"
            >

              <i className="bi bi-github me-2"></i>

              View All Projects

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="contact-section py-5"
      >

        <div className="container py-5">


          {/* Heading */}

          <div className="text-center mb-5">

            <p className="section-subtitle">
              GET IN TOUCH
            </p>

            <h2 className="section-title">
              Let's Work Together
            </h2>

            <p className="section-description">

              Have a project idea, internship opportunity,
              or just want to connect?

              Feel free to send me a message.

            </p>

          </div>


          <div className="row g-5 align-items-start">


            {/* =================================================
                CONTACT INFORMATION
            ================================================== */}

            <div className="col-lg-5">


              {/* Email */}

              <div className="contact-card mb-4">

                <div className="contact-icon">

                  <i className="bi bi-envelope-fill"></i>

                </div>

                <div>

                  <h5>
                    Email
                  </h5>

                  <a href="mailto:prabashsandakalum0207@gmail.com">

                    prabashsandakalum0207@gmail.com

                  </a>

                </div>

              </div>


              {/* LinkedIn */}

              <div className="contact-card mb-4">

                <div className="contact-icon">

                  <i className="bi bi-linkedin"></i>

                </div>

                <div>

                  <h5>
                    LinkedIn
                  </h5>

                  <a
                    href="https://www.linkedin.com/in/prabashsandakalum/"
                    target="_blank"
                    rel="noreferrer"
                  >

                    linkedin.com/in/prabashsandakalum

                  </a>

                </div>

              </div>


              {/* GitHub */}

              <div className="contact-card mb-4">

                <div className="contact-icon">

                  <i className="bi bi-github"></i>

                </div>

                <div>

                  <h5>
                    GitHub
                  </h5>

                  <a
                    href="https://github.com/prabash0929"
                    target="_blank"
                    rel="noreferrer"
                  >

                    github.com/prabash0929

                  </a>

                </div>

              </div>


              {/* Location */}

              <div className="contact-card">

                <div className="contact-icon">

                  <i className="bi bi-geo-alt-fill"></i>

                </div>

                <div>

                  <h5>
                    Location
                  </h5>

                  <p>
                    Kurunegala, Sri Lanka
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                CONTACT FORM
            ================================================== */}

            <div className="col-lg-7">

              <div className="contact-form-card">


                <h3>
                  Send Me a Message
                </h3>


                <p className="form-description">

                  Fill out the form below and I'll get back
                  to you as soon as possible.

                </p>


                {/* ================= FORMSPREE FORM ================= */}

                <form
                  action="https://formspree.io/f/xbgrnpek"
                  method="POST"
                >

                  <div className="row g-3">


                    {/* Name */}

                    <div className="col-md-6">

                      <label htmlFor="name">
                        Your Name
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                      />

                    </div>


                    {/* Email */}

                    <div className="col-md-6">

                      <label htmlFor="email">
                        Email Address
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />

                    </div>


                    {/* Message */}

                    <div className="col-12">

                      <label htmlFor="message">
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Write your message..."
                        required
                      ></textarea>

                    </div>


                    {/* Submit */}

                    <div className="col-12">

                      <button
                        type="submit"
                        className="btn btn-primary contact-submit"
                      >

                        Send Message

                        <i className="bi bi-send-fill ms-2"></i>

                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="footer">

        <div className="container">


          <div className="footer-main">


            {/* Brand */}

            <div className="footer-brand">

              <h3>

                Prabash<span>.</span>

              </h3>


              <p>

                Computer Science Undergraduate &
                Full-Stack Developer

              </p>


              <div className="footer-status">

                <span className="status-dot"></span>

                Available for opportunities

              </div>

            </div>


            {/* Quick Links */}

            <div className="footer-links">

              <h5>
                Quick Links
              </h5>

              <a href="#home">
                Home
              </a>

              <a href="#about">
                About
              </a>

              <a href="#projects">
                Projects
              </a>

              <a href="#contact">
                Contact
              </a>

            </div>


            {/* Connect */}

            <div className="footer-connect">

              <h5>
                Let's Connect
              </h5>


              <p>

                Have a project or opportunity in mind?

                <br />

                Feel free to reach out.

              </p>


              <div className="footer-socials">


                {/* GitHub */}

                <a
                  href="https://github.com/prabash0929"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >

                  <i className="bi bi-github"></i>

                </a>


                {/* LinkedIn */}

                <a
                  href="https://www.linkedin.com/in/prabashsandakalum/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >

                  <i className="bi bi-linkedin"></i>

                </a>


                {/* Email */}

                <a
                  href="mailto:prabashsandakalum0207@gmail.com"
                  aria-label="Email"
                >

                  <i className="bi bi-envelope"></i>

                </a>

              </div>

            </div>

          </div>


          <hr />


          <div className="footer-bottom">

            <p>

              © {new Date().getFullYear()}

              {" "}

              <strong>
                Prabash Sandakalum
              </strong>.

              {" "}
              All Rights Reserved.

            </p>


            <p className="footer-made">

              Designed & Built with

              {" "}

              <span>♥</span>

              {" "}

              by Prabash

            </p>

          </div>

        </div>

      </footer>

    </>
  );
}

export default App;