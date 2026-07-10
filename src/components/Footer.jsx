import { GitFork, Link2, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">
          <span style={{color:'var(--blue-400)'}}>/</span> arbab.dev
        </span>
        <p className="footer-copy">
          © {new Date().getFullYear()} Arbab Ahmad Khan
        </p>
        <div className="footer-socials">
          <a href="https://linkedin.com/in/arbab-ahmad-khan" target="_blank" rel="noreferrer"><Link2 size={15} /></a>
          <a href="https://github.com/arbab-ahmad-khan" target="_blank" rel="noreferrer"><GitFork size={15} /></a>
          <a href="mailto:arbahahmadkhan9@gmail.com"><Mail size={15} /></a>
        </div>
      </div>
    </footer>
  );
}
