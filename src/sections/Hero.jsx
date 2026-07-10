import { ArrowRight, GitFork, Link2, Mail, ExternalLink, MapPin } from 'lucide-react';
import profileImg from '../assets/profile.svg';
import './Hero.css';

const techStack = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'];

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Noise + glow layer */}
      <div className="hero-glow" />
      <div className="hero-grid" />

      <div className="container hero-wrap">
        {/* ── Left ── */}
        <div className="hero-left">
          {/* Status pill */}
          <div className="status-pill">
            <span className="pulse-dot" />
            <span className="label">Open to work</span>
          </div>

          <h1 className="hero-name heading-xl">
            Arbab Ahmad Khan<br />
            <span className="blue-text">Khan</span>
          </h1>

          <p className="hero-role">
            <span className="role-bracket">&lt;</span>
            Full Stack Web Developer
            <span className="role-bracket"> /&gt;</span>
          </p>

          <p className="hero-desc body-text">
            I build fast, responsive web applications using the MERN stack.
            Currently at Sterling Digital Solutions — also building a SaaS CRM product.
          </p>

          <div className="hero-location">
            <MapPin size={13} strokeWidth={1.5} />
            <span>Delhi, India</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={14} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://linkedin.com/in/arbab-ahmad-khan" target="_blank" rel="noreferrer" title="LinkedIn">
              <Link2 size={16} strokeWidth={1.5} />
            </a>
            <a href="https://github.com/Im-Arbab" target="_blank" rel="noreferrer" title="GitHub">
              <GitFork size={16} strokeWidth={1.5} />
            </a>
            <a href="mailto:arbahahmadkhan9@gmail.com" title="Email">
              <Mail size={16} strokeWidth={1.5} />
            </a>
          </div>

          {/* Stack pills */}
          <div className="hero-stack">
            {techStack.map(t => (
              <span key={t} className="stack-pill">{t}</span>
            ))}
          </div>
        </div>

        {/* ── Right ── */}
        <div className="hero-right">
          <div className="profile-frame">
            <div className="profile-img-wrap">
              <img src={profileImg} alt="Arbab Ahmad Khan" className="profile-img" />
            </div>

            {/* Corner decorations */}
            <div className="corner tl" />
            <div className="corner tr" />
            <div className="corner bl" />
            <div className="corner br" />
          </div>

          {/* Floating cards */}
          <div className="float-card card-exp">
            <span className="fc-num">1+</span>
            <span className="fc-label">Years Exp.</span>
          </div>
          <div className="float-card card-proj">
            <span className="fc-num">10+</span>
            <span className="fc-label">Projects</span>
          </div>
          <div className="float-card card-live">
            <ExternalLink size={11} style={{color: 'var(--blue-400)'}} />
            <a href="https://lappyshop.com" target="_blank" rel="noreferrer">lappyshop.com ↗</a>
          </div>
          <div className="float-card card-live2">
            <ExternalLink size={11} style={{color: 'var(--blue-400)'}} />
            <a href="https://squareassets.in" target="_blank" rel="noreferrer">squareassets.in ↗</a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-line">
        <span className="label" style={{fontSize:'10px'}}>scroll</span>
        <div className="scroll-bar"><div className="scroll-fill" /></div>
      </div>
    </section>
  );
}
