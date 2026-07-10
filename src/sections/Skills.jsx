import './Skills.css';

const groups = [
  {
    label: 'Frontend',
    icon: '⬡',
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    label: 'Backend',
    icon: '⬡',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'JWT Auth', 'API Integration'],
  },
  {
    label: 'Tools & Workflow',
    icon: '⬡',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Chrome DevTools', 'Vercel', 'Netlify'],
  },
];

const certs = [
  { name: 'JavaScript Fundamentals', issuer: 'Great Stack', year: '2023', icon: '◈' },
  { name: 'Full Stack Development', issuer: 'Ducat India', year: '2023', icon: '◈' },
  { name: 'E-Commerce Development', issuer: 'Great Stack', year: '2023', icon: '◈' },
];

const highlights = [
  { value: '1+', label: 'Years of Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '3', label: 'Certifications' },
  { value: 'MERN', label: 'Core Stack' },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">

        <div className="skills-top">
          <div>
            <p className="label" style={{ marginBottom: 10 }}>// skills & tools</p>
            <h2 className="heading-lg">What I work with</h2>
          </div>
          <div className="highlights-row">
            {highlights.map(h => (
              <div key={h.label} className="highlight-box">
                <span className="hl-value">{h.value}</span>
                <span className="hl-label">{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill groups */}
        <div className="skill-groups">
          {groups.map(g => (
            <div key={g.label} className="skill-group">
              <div className="sg-header">
                <span className="sg-dot" />
                <span className="sg-label">{g.label}</span>
              </div>
              <div className="sg-tags">
                {g.skills.map(s => (
                  <span key={s} className="sg-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certs */}
        <div className="certs-section">
          <p className="label" style={{ marginBottom: 20 }}>// certifications</p>
          <div className="certs-grid">
            {certs.map(c => (
              <div key={c.name} className="cert-card">
                <div className="cert-badge">{c.icon}</div>
                <div className="cert-body">
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-meta">
                    <span>{c.issuer}</span>
                    <span className="cert-dot">·</span>
                    <span>{c.year}</span>
                  </div>
                </div>
                <div className="cert-arrow">↗</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
