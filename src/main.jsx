import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, CalendarDays, ChevronRight, Clock3, Cross, Instagram, Linkedin,
  Mail, MapPin, Menu, MessageCircle, Phone, Quote, ShieldCheck, Stethoscope,
  X, Youtube
} from 'lucide-react';
import './styles.css';

const specialties = ['Oncology', 'Neurosciences', 'Orthopaedics', 'Mother & Child', 'Emergency Care', 'Cardiac Sciences'];

const hospitals = [
  { city: 'Hyderabad', name: 'Aurelion Global Hospital', type: 'Multi-Specialty Hospital' },
  { city: 'Bengaluru', name: 'Aurelion Global Hospital', type: 'Advanced Care Centre' },
  { city: 'Chennai', name: 'Aurelion Global Hospital', type: 'Specialty & Emergency Care' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const openAppointment = () => { setSubmitted(false); setModal(true); closeMenu(); };

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site">
      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark"><Cross size={17} strokeWidth={1.8} /></span>
            <span className="brand-copy">
              <strong>Aurelion Global</strong>
              <small>HOSPITALS</small>
            </span>
          </a>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className={menuOpen ? 'nav open' : 'nav'}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#hospitals" onClick={closeMenu}>Hospitals</a>
            <a href="#care" onClick={closeMenu}>Care</a>
            <a href="#careers" onClick={closeMenu}>Careers</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <button className="reach-btn" onClick={openAppointment}>REACH US</button>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">HEALTHCARE, BUILT TO A HIGHER STANDARD</p>
              <h1>The art of <em>healing,</em><br /> perfected.</h1>
              <p className="hero-lead">Aurelion Global is a healthcare company nurturing a family of world-class hospitals — beginning with Aurelion Hospitals — where clinical excellence meets profound humanity.</p>
              <div className="hero-actions">
                <a className="dark-btn" href="#hospitals">EXPLORE OUR HOSPITALS <ArrowRight size={15} /></a>
                <a className="light-btn" href="#about">JOIN OUR MISSION <ArrowRight size={15} /></a>
              </div>
            </div>

            <div className="hero-visual">
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=90" alt="Modern Aurelion Global hospital building" />
              <div className="care-badge"><strong>1,800+</strong><span>PEOPLE IN OUR CARE</span></div>
            </div>
          </div>
        </section>

        <div className="specialty-strip" aria-label="Our clinical specialties">
          <div className="ticker">
            {[...specialties, ...specialties].map((item, index) => (
              <span key={`${item}-${index}`}><i />{item}</span>
            ))}
          </div>
        </div>

        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="about-intro">
              <p className="section-label">WHO WE ARE</p>
              <h2>A company built to <em>care.</em></h2>
              <p>Aurelion Global Private Limited exists to build and steward exceptional healthcare institutions. We bring capital, clinical governance and an obsession for patient experience together to raise the standard of healthcare.</p>
            </div>
            <div className="principles">
              <article><span>01</span><div><h3>Patients Above All</h3><p>Every decision begins and ends with the dignity, safety and outcomes of those who entrust us with their care.</p></div></article>
              <article><span>02</span><div><h3>Clinical Excellence</h3><p>We build institutions where evidence-based medicine, multidisciplinary thinking and precision thrive.</p></div></article>
              <article><span>03</span><div><h3>Compassion at Scale</h3><p>As we grow across cities and specialties, warmth and humanity remain woven into every interaction.</p></div></article>
              <article><span>04</span><div><h3>Enduring Trust</h3><p>We steward healthcare for generations, holding ourselves to the highest standards of safety and transparency.</p></div></article>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container stats-grid">
            <div><strong>12+</strong><span>CENTRES OF EXCELLENCE</span></div>
            <div><strong>1,800</strong><span>BEDS UNDER CARE</span></div>
            <div><strong>600+</strong><span>CLINICIANS & SPECIALISTS</span></div>
            <div><strong>24/7</strong><span>EMERGENCY SERVICES</span></div>
          </div>
        </section>

        <section id="care" className="section founder">
          <div className="container founder-grid">
            <div className="founder-photo">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=90" alt="Aurelion Global clinical leader" />
              <div><strong>Dr. A. Varma</strong><span>Founder & Chairman, Aurelion Global</span></div>
            </div>
            <div className="founder-copy">
              <p className="section-label">FOUNDER'S NOTE</p>
              <Quote className="quote-mark" size={30} strokeWidth={1} />
              <blockquote>We did not set out to build hospitals. We set out to build trust — places where the science of medicine meets the soul of care.</blockquote>
              <div className="founder-body">
                <p>Aurelion Global was born from a simple conviction: that healthcare, of all things, must be an act of profound humanity. Too long have individuals and families navigated medicine as a fragmented journey.</p>
                <p>Our hospitals are designed to bring clinical excellence, thoughtful spaces and compassionate people together — so patients can focus on what matters most: getting better.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="hospitals" className="section hospitals">
          <div className="container">
            <div className="hospital-heading">
              <div><p className="section-label">OUR HOSPITALS</p><h2>Care, closer to <em>home.</em></h2></div>
              <p>A growing family of institutions across the Aurelion network, each designed around the same uncompromising standard.</p>
            </div>

            <div className="hospital-feature">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=90" alt="Aurelion Global hospital interior" />
              <div className="hospital-card">
                <p className="section-label">FLAGSHIP MULTI-SPECIALTY</p>
                <h3>Aurelion Hospitals</h3>
                <span>Hyderabad · Bengaluru · Chennai</span>
                <p>Our flagship network — a family of multi-specialty hospitals bringing world-class tertiary care with an unmistakably human touch.</p>
                <div className="hospital-tags"><span>Cardiac Sciences</span><span>Oncology</span><span>Neurosciences</span><span>Mother & Child</span></div>
              </div>
            </div>

            <div className="hospital-list">
              {hospitals.map((hospital, index) => (
                <article key={hospital.city}>
                  <span>0{index + 1}</span>
                  <div><small>{hospital.city}</small><h3>{hospital.name}</h3><p>{hospital.type}</p></div>
                  <ChevronRight size={17} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="family-note">
          <p>More institutions joining the family soon.</p>
          <span>THE AURELION NETWORK IS EXPANDING</span>
        </section>

        <section id="contact" className="cta-section">
          <div className="container cta-inner">
            <p className="section-label">REACH US</p>
            <h2>Let's build the future of<br /><em>care, together.</em></h2>
            <div className="cta-actions">
              <button className="gold-btn" onClick={openAppointment}>CONTACT US <ArrowRight size={15} /></button>
              <a className="outline-btn" href="#careers">VIEW CAREERS <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer id="careers" className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand-mark"><Cross size={17} strokeWidth={1.8} /></span>
              <span className="brand-copy"><strong>Aurelion Global</strong><small>HOSPITALS</small></span>
            </a>
            <p>A healthcare company nurturing a family of hospitals — beginning with Aurelion Hospitals.</p>
          </div>
          <div><h4>EXPLORE</h4><a href="#about">About</a><a href="#hospitals">Our Hospitals</a><a href="#care">Care</a><a href="#careers">Careers</a></div>
          <div><h4>GET IN TOUCH</h4><a href="mailto:hello@aurelionglobal.com"><Mail size={13}/> hello@aurelionglobal.com</a><a href="tel:+914040001800"><Phone size={13}/> +91 40 4000 1800</a><a href="#contact"><MapPin size={13}/> Hyderabad, India</a></div>
          <div><h4>FOLLOW US</h4><div className="socials"><a href="#" aria-label="Instagram"><Instagram size={15}/></a><a href="#" aria-label="LinkedIn"><Linkedin size={15}/></a><a href="#" aria-label="YouTube"><Youtube size={15}/></a></div></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Aurelion Global. All rights reserved.</span><span>Privacy · Terms</span></div>
      </footer>

      <div className="mobile-actions">
        <a href="tel:+914040001800"><Phone size={19}/><span>Call</span></a>
        <button onClick={openAppointment}><CalendarDays size={19}/><span>Book</span></button>
        <a href="https://wa.me/914040001800" target="_blank" rel="noreferrer"><MessageCircle size={19}/><span>WhatsApp</span></a>
        <a href="https://maps.google.com/?q=Aurelion+Global+Hospitals+Hyderabad" target="_blank" rel="noreferrer"><MapPin size={19}/><span>Directions</span></a>
      </div>

      {modal && (
        <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setModal(false)}>
          <div className="modal">
            <button className="modal-close" onClick={() => setModal(false)} aria-label="Close"><X size={18}/></button>
            {submitted ? (
              <div className="success">
                <ShieldCheck size={44}/>
                <h2>Thank you.</h2>
                <p>Your appointment request has been received. Our care team will contact you shortly.</p>
                <button className="dark-btn" onClick={() => setModal(false)}>CLOSE <ArrowRight size={14}/></button>
              </div>
            ) : (
              <>
                <p className="section-label">REACH US</p>
                <h2>Begin your care journey.</h2>
                <p>Share your details and our team will help you find the right department or specialist.</p>
                <form onSubmit={submit}>
                  <label>FULL NAME<input required placeholder="Your name" /></label>
                  <label>PHONE<input required type="tel" placeholder="+91" /></label>
                  <label>EMAIL<input type="email" placeholder="you@example.com" /></label>
                  <label>DEPARTMENT<select defaultValue=""><option value="" disabled>Select department</option><option>Cardiac Sciences</option><option>Oncology</option><option>Neurosciences</option><option>Orthopaedics</option><option>Mother & Child</option><option>Emergency Care</option></select></label>
                  <label className="full">MESSAGE<textarea rows="3" placeholder="Tell us how we can help" /></label>
                  <button className="dark-btn full" type="submit">SEND REQUEST <ArrowRight size={14}/></button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
