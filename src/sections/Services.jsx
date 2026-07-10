import { Code2, Smartphone, Layout, Database, GitMerge, Zap } from 'lucide-react';
import './Services.css';

const services = [
  { icon: <Code2 size={20} />, title: 'Web Development', desc: 'Building robust, responsive apps with React.js, modern JavaScript, and performance-first architecture.' },
  { icon: <Smartphone size={20} />, title: 'Responsive Design', desc: 'Pixel-perfect layouts that work across every device and screen size using Tailwind CSS and Bootstrap.' },
  { icon: <Layout size={20} />, title: 'UI Development', desc: 'Converting Figma designs into clean, production-ready interfaces with reusable component structure.' },
  { icon: <Database size={20} />, title: 'MERN Stack Apps', desc: 'End-to-end application development — from MongoDB schema design to React frontend deployment.' },
  { icon: <GitMerge size={20} />, title: 'API Integration', desc: 'Connecting frontends to backends with RESTful APIs, authentication flows, and clean data handling.' },
  { icon: <Zap size={20} />, title: 'Maintenance & Support', desc: 'Ongoing content updates, bug fixes, UI improvements, and performance optimization for existing sites.' },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <p className="label" style={{marginBottom: 10}}>// services</p>
        <h2 className="heading-lg" style={{marginBottom: 52}}>What I can do for you</h2>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.title} className="service-card">
              <div className="service-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
