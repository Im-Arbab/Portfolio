import { Download, Terminal } from 'lucide-react';
import './About.css';

const timeline = [
  {
    type: 'work',
    title: 'Web Developer',
    org: 'Sterling Digital Solutions',
    period: 'Aug 2025 – Present',
    desc: 'Building and maintaining websites with React.js, handling frontend tasks, API integrations, and converting Figma designs into responsive pages.',
    icon: '💼',
    active: true,
  },
  {
    type: 'edu',
    title: 'MCA – Master of Computer Applications',
    org: 'IGNOU',
    period: '2021 – 2023',
    desc: 'Postgraduate degree covering advanced CS concepts, software engineering, and application development.',
    icon: '🎓',
  },
  {
    type: 'edu',
    title: 'B.Sc. Computer Science',
    org: 'Dr. B.R. Ambedkar University, Agra',
    period: '2018 – 2021',
    desc: 'Undergraduate foundation in CS, mathematics, and programming fundamentals.',
    icon: '🎓',
  },
];

const facts = [
  { label: 'Role', value: 'Full Stack Developer' },
  { label: 'Location', value: 'Delhi, India' },
  { label: 'Experience', value: '1+ Year' },
  { label: 'Stack', value: 'MERN' },
  { label: 'Education', value: 'MCA, B.Sc. CS' },
  { label: 'Status', value: 'Open to work' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-header">
          <p className="label">// about me</p>
          <h2 className="heading-lg" style={{marginTop: 10}}>
            The developer<br />behind the code
          </h2>
        </div>

        <div className="about-grid">
          {/* Left – bio + facts */}
          <div className="about-bio">
            <p className="body-text" style={{marginBottom: 16}}>
              I'm <strong style={{color:'var(--white)'}}>Arbab Ahmad Khan</strong> — a full stack web developer
              based in Delhi. I work across the MERN stack, building everything from e-commerce platforms
              to SaaS products.
            </p>
            <p className="body-text" style={{marginBottom: 28}}>
              I hold an MCA from IGNOU and a B.Sc. in Computer Science. Currently working at
              Sterling Digital Solutions while independently developing a CRM SaaS product launching soon.
            </p>

            <div className="facts-grid">
              {facts.map(f => (
                <div key={f.label} className="fact-item">
                  <span className="fact-label">{f.label}</span>
                  <span className="fact-value">{f.value}</span>
                </div>
              ))}
            </div>

            <a href="/Arbab-Ahmad-Khan-Resume.pdf" download className="btn btn-ghost" style={{marginTop: 24}}>
              <Download size={14} /> Download CV
            </a>
          </div>

          {/* Right – timeline */}
          <div className="timeline">
            <div className="timeline-head">
              <Terminal size={14} style={{color: 'var(--blue-400)'}} />
              <span className="label">experience & education</span>
            </div>
            {timeline.map((t, i) => (
              <div key={i} className={`tl-item${t.active ? ' active' : ''}`}>
                <div className="tl-dot">
                  <span>{t.icon}</span>
                </div>
                <div className="tl-body">
                  <div className="tl-period">{t.period}{t.active && <span className="tl-badge">current</span>}</div>
                  <div className="tl-title">{t.title}</div>
                  <div className="tl-org">{t.org}</div>
                  <p className="tl-desc">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
