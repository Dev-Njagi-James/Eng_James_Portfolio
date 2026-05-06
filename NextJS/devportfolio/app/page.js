import Image from "next/image";
import Projects from "./func.js";

export default function Home() {
  return (
    <>
      <header>
        <nav className="nav-left">
          <ul>
            <li data-label="Home">
              <a href="#home"><i className="fa-solid fa-house"></i></a>
            </li>
            <li data-label="About">
              <a href="#about"><i className="fa-solid fa-circle-info"></i></a>
            </li>
            <li data-label="Projects">
              <a href="#projects"><i className="fa-solid fa-pen-nib"></i></a>
            </li>
            <li data-label="Contact">
              <a href="#contact"><i className="fa-solid fa-phone"></i></a>
            </li>
          </ul>
        </nav>
        <nav className="nav-right">
          <ul>
            <li data-label="CV">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-file-pdf"></i></a>
            </li>
            <li data-label="GitHub">
              <a href="https://github.com/Eng-James-Njagi"><i className="fa-brands fa-github"></i></a>
            </li>
            <li data-label="Email">
              <a href="mailto:m89789098@gmail.com"><i className="fa-solid fa-envelope"></i></a>
            </li>
            <li data-label="Phone">
              <a href="tel:+254115 338036"><i className="fa-solid fa-phone"></i></a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <article id="home" className="intro">
          {/* LEFT: text content */}
          <div className="intro-content">
            <div className="title">
              <p>
                Hello,
                <span>I am James.</span>
              </p>
              <p id="skill-title">
                Software Developer: Specialist in BackEnd Development
              </p>
            </div>

            <div className="title-body">
              Hello, I am James. I build structured, scalable software systems
              with a focus on clarity, performance, and maintainability. My work
              centers on translating complex requirements into clean architecture
              and reliable products. I approach development as engineering, not
              decoration — every line of code serves a purpose. I specialize in
              building modern web applications that are efficient, secure, and
              designed for growth.
            </div>

            <div className="intro-btns">
              <a href="#projects" className="view-btn">View Projects &rarr;</a>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="view-btn cv-btn">View CV &rarr;</a>
            </div>
          </div>

          {/* RIGHT: photo */}
          <div className="intro-photo">
            <Image src="/Photo.jpg" alt="James" width={400} height={400} priority loading="eager" />
          </div>
        </article>

        <article className="about">
          <div className="about-top">
            <Image src="/10.jpg" alt="James" className="about-photo" width={300} height={300} />
            <div id="about" className="about-right">
              <h2>About Me</h2>
              <span className="about-tag">BackEnd Developer</span>
              <p className="about-intro">
                I am a backend-focused software developer and founder of Stravon Tech Labs. 
                I placed 2nd in the Software Development category at the Mt. Kenya West TVET Fair 2025, 
                competing against institutions across the region. I have participated in national 
                TVET skills competitions since 2024. I also served as a peer web 
                development instructor at Murang&apos;a TTI during my second and third year transition, assisting 
                fellow students with core development skills.
                I can also work on <strong>frontend development</strong> if the need arises.
              </p>
            </div>
          </div>
          <p className="about-body">
            As a self-taught developer, I value consistency and continuous
            learning. I currently serve as founder and lead developer at Stravon Tech Labs,
            building backend systems and client projects.
          </p>
          <p className="about-link">
            Stravon Tech Labs:{" "}
            <a href="https://stravontechlabs.com">https://stravontechlabs.com</a>
          </p>
        </article>

        <article id="skills" className="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills-body">
            <div className="skills-competencies">
              <ul className="competency-list">
                <li>API design &amp; architecture</li>
                <li>Database design &amp; normalization</li>
                <li>Authentication &amp; security implementation</li>
                <li>Frontend implementation &amp; component design</li>
                <li>REST API integrations including payment systems</li>
                <li>Version control &amp; deployment workflows</li>
              </ul>
            </div>

            <div className="skills-tech">
              <div className="tech-row">
                <span className="tech-label">Languages</span>
                <div className="tech-tags">
                  <span className="tag"><i className="fa-brands fa-js"></i> JavaScript</span>
                  <span className="tag"><i className="fa-brands fa-java"></i> Java</span>
                  <span className="tag"><i className="fa-solid fa-database"></i> SQL</span>
                  <span className="tag"><i className="fa-brands fa-html5"></i> HTML</span>
                  <span className="tag"><i className="fa-brands fa-css3-alt"></i> CSS</span>
                </div>
              </div>
              <div className="tech-row">
                <span className="tech-label">Runtime</span>
                <div className="tech-tags">
                  <span className="tag"><i className="fa-brands fa-node-js"></i> Node.js</span>
                </div>
              </div>
              <div className="tech-row">
                <span className="tech-label">Frameworks</span>
                <div className="tech-tags">
                  <span className="tag"><i className="fa-solid fa-server"></i> Express</span>
                  <span className="tag"><i className="fa-brands fa-react"></i> React</span>
                  <span className="tag"><i className="fa-solid fa-n"></i> Next.js</span>
                  <span className="tag"><i className="fa-brands fa-angular"></i> Angular</span>
                  <span className="tag"><i className="fa-brands fa-vuejs"></i> Vue</span>
                </div>
              </div>
              <div className="tech-row">
                <span className="tech-label">Databases</span>
                <div className="tech-tags">
                  <span className="tag"><i className="fa-solid fa-database"></i> PostgreSQL</span>
                  <span className="tag"><i className="fa-solid fa-database"></i> MySQL</span>
                  <span className="tag"><i className="fa-solid fa-database"></i> MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <Projects id="projects" />
      </main>
    </>
  );
}