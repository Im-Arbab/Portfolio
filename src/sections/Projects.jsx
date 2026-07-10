import { ExternalLink, GitFork } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    num: '01',
    title: 'Lappy-Shop',
    subtitle: 'Refurbished Laptop E-Commerce Platform',
    desc: 'Full-stack MERN e-commerce application with user authentication, shopping cart, checkout flow, product management, and REST API integration.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST API'],
    live: 'https://lappyshop.com',
    github: null,
    featured: true,
  },
  {
    num: '02',
    title: 'Square-Assets',
    subtitle: 'Luxury Property Listing Website',
    desc: 'Responsive property listing frontend built with React.js and Tailwind CSS. Features property categorization, reusable components, and mobile-first design.',
    tags: ['React.js', 'Tailwind CSS', 'Responsive Design'],
    live: 'https://squareassets.in',
    github: null,
    featured: false,
  },
  {
    num: '03',
    title: 'Sterling Digital Solutions',
    subtitle: 'Company Website',
    desc: 'Company website built with React.js and Bootstrap. Handled content updates, UI enhancements, reusable components, and cross-browser compatibility.',
    tags: ['React.js', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
    live: null,
    github: null,
    featured: false,
  },
  {
    num: '04',
    title: 'CRM SaaS Product',
    subtitle: 'In Development — Launching Soon',
    desc: 'A full-featured CRM SaaS platform targeting sales businesses. Built with React + Tailwind CSS, custom API service layer. Includes pipeline management, meetings, and team tools.',
    tags: ['React.js', 'Tailwind CSS', 'SaaS', 'CRM', 'Node.js'],
    live: null,
    github: null,
    featured: false,
    upcoming: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="label" style={{marginBottom: 10}}>// projects</p>
        <h2 className="heading-lg" style={{marginBottom: 52}}>Things I've built</h2>

        <div className="projects-list">
          {projects.map(p => (
            <div key={p.num} className={`project-row${p.upcoming ? ' upcoming' : ''}`}>
              <div className="project-num">{p.num}</div>

              <div className="project-body">
                <div className="project-top-row">
                  <div>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-subtitle">{p.subtitle}</p>
                  </div>
                  <div className="project-links">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="proj-icon-btn" title="Live site">
                        <ExternalLink size={15} />
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="proj-icon-btn" title="GitHub">
                        <GitFork size={15} />
                      </a>
                    )}
                    {p.upcoming && <span className="upcoming-tag">launching soon</span>}
                  </div>
                </div>

                <p className="project-desc">{p.desc}</p>

                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="ptag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
