import { ArrowDown, ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Code2, Mail, MapPin } from 'lucide-react';
import { portfolio } from './data/portfolio';

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Mohamed Hussain P, home">
          MH<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </nav>
        <a className="header-contact" href={`mailto:${portfolio.email}`}>
          Get in touch <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEERING · ENTERPRISE APPLICATIONS</p>
            <h1>Building useful<br />software that <span>works.</span></h1>
            <p className="hero-intro">
              I’m {portfolio.name}, a {portfolio.role} with 14+ years of experience building enterprise
              applications across CRM, ERP, billing and e-commerce.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">Explore my work <ArrowDown size={16} aria-hidden="true" /></a>
              <a className="text-link" href={`mailto:${portfolio.email}`}>Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} aria-hidden="true" /> {portfolio.location}</span>
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-aside" aria-label="Professional focus">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="orbit-center"><Code2 size={34} strokeWidth={1.5} aria-hidden="true" /></div>
            <span className="orbit-label orbit-label-top">14+ YEARS</span>
            <span className="orbit-label orbit-label-bottom">FULL-STACK ENGINEERING</span>
            <span className="orbit-node node-one" />
            <span className="orbit-node node-two" />
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} aria-hidden="true" /></a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-label"><span>01</span> ABOUT</div>
          <div className="about-content">
            <h2>Experience built on<br />solving <span>real problems.</span></h2>
            <div className="about-columns">
              <p>{portfolio.summary}</p>
              <p>
                My work spans long-lived business systems and modern web experiences—from complex
                transactional workflows to desktop software that stays useful offline and syncs when
                connectivity returns.
              </p>
            </div>
            <div className="focus-row">
              <span><Code2 size={17} aria-hidden="true" /> Application development</span>
              <span><BriefcaseBusiness size={17} aria-hidden="true" /> Enterprise platforms</span>
              <span><ArrowDownRight size={17} aria-hidden="true" /> Legacy modernization</span>
            </div>
          </div>
        </section>

        <section className="experience section-wrap section-block" id="experience">
          <div className="section-label"><span>02</span> EXPERIENCE</div>
          <div className="section-main">
            <div className="section-heading">
              <div><p className="eyebrow">CAREER HISTORY</p><h2>Where I’ve<br />made an impact.</h2></div>
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
                    {job.highlights.length > 0 && (
                      <ul className="highlights">
                        {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                      </ul>
                    )}
                    <div className="tag-list">
                      {job.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="section-label"><span>03</span> SELECTED WORK</div>
          <div className="section-main">
            <div className="section-heading">
              <div><p className="eyebrow">PLATFORMS & PRODUCTS</p><h2>Work shaped by<br />business needs.</h2></div>
              <span className="section-count">04 PROJECTS</span>
            </div>
            <div className="project-grid">
              {portfolio.projects.map((project, index) => (
                <article className="project-card" key={project.name}>
                  <div className="project-topline"><span>0{index + 1} / PROJECT</span><Code2 size={19} aria-hidden="true" /></div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-details">{project.details}</p>
                  <div className="tag-list">
                    {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-label"><span>04</span> TOOLKIT</div>
          <div className="section-main">
            <div className="section-heading">
              <div><p className="eyebrow">TECHNICAL SKILLS</p><h2>Tools for the<br />whole stack.</h2></div>
            </div>
            <div className="skill-list">
              {portfolio.skills.map((group, index) => (
                <div className="skill-group" key={group.category}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{group.category}</h3>
                  <div className="tag-list">{group.items.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="education section-wrap section-block" id="education">
          <div className="section-label"><span>05</span> EDUCATION</div>
          <div className="section-main education-content">
            {portfolio.education.map((item) => (
              <div className="education-item" key={item.qualification}>
                <p className="eyebrow">2011</p>
                <div><h3>{item.qualification}</h3><p>{item.institution}</p><span>{item.detail}</span></div>
              </div>
            ))}
            <div className="education-item certification">
              <p className="eyebrow">CERTIFICATION</p>
              <div><h3>{portfolio.certification.split(' · ')[0]}</h3><p>{portfolio.certification.split(' · ').slice(1).join(' · ')}</p></div>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let’s build something<br /><span>that matters.</span></h2>
          <a className="button button-primary" href={`mailto:${portfolio.email}`}><Mail size={16} aria-hidden="true" /> Get in touch <ArrowUpRight size={16} aria-hidden="true" /></a>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">MH<span>.</span></a>
        <p>© {new Date().getFullYear()} {portfolio.name}</p>
        <div><a href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a><a href={`mailto:${portfolio.email}`}>Email <ArrowUpRight size={13} aria-hidden="true" /></a></div>
      </footer>
    </>
  );
}

export default App;
