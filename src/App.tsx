import { ArrowDown, ArrowUpRight, Download, Mail, MapPin } from 'lucide-react';
import { portfolio } from './data/portfolio';

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Mohamed Hussain P, home">
          Mohamed Hussain P
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="header-contact" href={`mailto:${portfolio.email}`}>
          Contact <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {portfolio.role.toUpperCase()}</p>
            <h1>Full-Stack .NET &amp;<br /><span>React Developer</span></h1>
            <p className="hero-intro">AI-Assisted Development with Claude</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">View experience <ArrowDown size={16} aria-hidden="true" /></a>
              <a className="button button-secondary" href="/resume.pdf" download="Mohamed-Hussain-Resume.pdf">
                Download Resume <Download size={16} aria-hidden="true" />
              </a>
              <a className="text-link" href={`mailto:${portfolio.email}`}>Get in touch <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} aria-hidden="true" /> {portfolio.location}</span>
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="skills-showcase">
              <div className="experience-highlight">
                <span className="experience-years">14+</span>
                <div><strong>YEARS EXPERIENCE</strong><span>Building enterprise software</span></div>
              </div>
              <h2 className="skills-showcase-title">TECHNICAL SKILLS</h2>
              <div className="skills-showcase-list">
                <article className="skills-showcase-item">
                  <div><h3>Backend</h3><p>Application development and service logic</p></div>
                  <div className="skill-tags"><span>ASP.NET 4.0</span><span>.NET Core</span><span>C#</span><span>REST APIs</span></div>
                </article>
                <article className="skills-showcase-item">
                  <div><h3>Frontend</h3><p>Interactive and type-safe user interfaces</p></div>
                  <div className="skill-tags"><span>React</span><span>TypeScript</span><span>JavaScript</span></div>
                </article>
                <article className="skills-showcase-item">
                  <div><h3>Database &amp; APIs</h3><p>Data storage and application integration</p></div>
                  <div className="skill-tags"><span>SQL Server 2012</span></div>
                </article>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} aria-hidden="true" /></a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-label"><span>01</span> ABOUT</div>
          <div className="about-content">
            <h2>Experienced in<br /><span>business software.</span></h2>
            <p className="about-summary">
              From CRM and ERP modules to offline desktop tools, I focus on practical, maintainable software.
            </p>
          </div>
        </section>

        <section className="experience section-wrap section-block" id="experience">
          <div className="section-label"><span>02</span> EXPERIENCE</div>
          <div className="section-main">
            <div className="section-heading">
              <div><p className="eyebrow">CAREER HISTORY</p><h2>Professional<br />experience.</h2></div>
              <span className="section-count">03 ROLES</span>
            </div>
            <div className="timeline">
              {portfolio.experience.map((job, index) => (
                <article className="timeline-item" key={job.company}>
                  <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>
                  <div className="job-content">
                    <div className="job-heading">
                      <div><h3>{job.role}</h3><p className="company">{job.company} <span>· {job.location}</span></p></div>
                      <span className="job-dates">{job.dates}</span>
                    </div>
                    <p className="job-summary">{job.summary}</p>
                    {job.highlight && <p className="job-highlight">{job.highlight}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <p className="eyebrow">CONTACT</p>
          <h2>Let’s talk.</h2>
          <a className="button button-primary" href={`mailto:${portfolio.email}`}><Mail size={16} aria-hidden="true" /> {portfolio.email} <ArrowUpRight size={16} aria-hidden="true" /></a>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">Mohamed Hussain P</a>
        <p>© {new Date().getFullYear()} {portfolio.name}</p>
        <div><a href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a><a href={`mailto:${portfolio.email}`}>Email <ArrowUpRight size={13} aria-hidden="true" /></a></div>
      </footer>
    </>
  );
}

export default App;
