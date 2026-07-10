import { useState } from 'react';
import { Mail, Phone, MapPin, Send, GitFork, Link2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = form;
    window.open(`mailto:arbahahmadkhan9@gmail.com?subject=Portfolio Contact — ${name}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="label" style={{marginBottom: 10}}>// contact</p>
        <h2 className="heading-lg" style={{marginBottom: 8}}>Let's work together</h2>
        <p className="body-text" style={{marginBottom: 56, maxWidth: 480}}>
          Have a project in mind or want to collaborate? Drop me a message and I'll get back to you.
        </p>

        <div className="contact-grid">
          {/* Left */}
          <div className="contact-info">
            <div className="contact-links">
              <a href="mailto:arbahahmadkhan9@gmail.com" className="contact-link">
                <div className="cl-icon"><Mail size={16} /></div>
                <div>
                  <div className="cl-label">Email</div>
                  <div className="cl-value">arbahahmadkhan9@gmail.com</div>
                </div>
              </a>
              <a href="tel:+917983217916" className="contact-link">
                <div className="cl-icon"><Phone size={16} /></div>
                <div>
                  <div className="cl-label">Phone</div>
                  <div className="cl-value">+91 79832 17916</div>
                </div>
              </a>
              <div className="contact-link">
                <div className="cl-icon"><MapPin size={16} /></div>
                <div>
                  <div className="cl-label">Location</div>
                  <div className="cl-value">Delhi, India</div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://linkedin.com/in/arbab-ahmad-khan" target="_blank" rel="noreferrer" className="social-btn">
                <Link2 size={15} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Im-Arbab" target="_blank" rel="noreferrer" className="social-btn">
                <GitFork size={15} />
                <span>GitHub</span>
              </a>
            </div>

            <div className="avail-card">
              <span className="pulse-dot" style={{width:6,height:6,borderRadius:'50%',background:'#22c55e',animation:'pulse 2.5s infinite',flexShrink:0}} />
              <div>
                <div style={{fontSize:13,fontWeight:600,color:'var(--white)'}}>Available for freelance</div>
                <div style={{fontSize:11,color:'var(--subtle)',fontFamily:'var(--font-mono)',marginTop:2}}>Response within 24 hours</div>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-field">
              <label className="field-label">Your name</label>
              <input type="text" name="name" placeholder="ENTER YOUR NAME" value={form.name} onChange={onChange} required />
            </div>
            <div className="form-field">
              <label className="field-label">Email address</label>
              <input type="email" name="email" placeholder="john@example.com" value={form.email} onChange={onChange} required />
            </div>
            <div className="form-field">
              <label className="field-label">Message</label>
              <textarea name="message" rows={5} placeholder="Tell me about your project..." value={form.message} onChange={onChange} required />
            </div>
            <button type="submit" className="btn btn-primary send-btn">
              {sent ? '✓ Opening mail client…' : <><Send size={14} /> Send message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
