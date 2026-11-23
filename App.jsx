import { useEffect, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Menu, X, Check, ChevronLeft, ChevronRight,
  Phone, Mail, MapPin, HardHat, Ruler, ClipboardList, Building2,
  ShieldCheck, PencilRuler, Calculator, MessageCircle, Clock3, Home,
  Instagram, Facebook
} from 'lucide-react';

const houseSlides = [
  {
    eyebrow: 'DESIGNED AROUND YOUR LIFE',
    title: "We Don't Just Build Houses.\nWe Build Your Dreams.",
    description: 'Easy Home Solution — your vision, our expertise, your dream home. Thoughtful design, practical planning and a complete construction journey built around your needs.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90',
    label: 'Contemporary family home'
  },
  {
    eyebrow: 'DUPLEX LIVING, REIMAGINED',
    title: 'More room for\nevery possibility.',
    description: 'Explore beautifully planned duplex homes that bring comfort, function and character together.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90',
    label: 'Modern duplex inspiration'
  },
  {
    eyebrow: 'A VISION BUILT TO LAST',
    title: 'Make space for\nyour next chapter.',
    description: 'From the first conversation to the final handover, we help turn your vision into a place to call home.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=90',
    label: 'Modern residential architecture'
  }
];

const services = [
  { number: '01', icon: HardHat, title: 'Complete House Construction', text: 'End-to-end house construction, from initial site preparation and ground-level work to finishing and final handover.', tag: 'GROUND TO HANDOVER' },
  { number: '02', icon: PencilRuler, title: 'Architectural Design & Planning', text: 'Personalized floor plans, elevations and 2D/3D concepts shaped around your plot, lifestyle and preferences.', tag: 'DESIGN WITH PURPOSE' },
  { number: '03', icon: Calculator, title: 'BOQ & Cost Estimation', text: 'Clear quantity take-offs, detailed Bills of Quantities and practical construction cost estimates for informed decisions.', tag: 'PLAN YOUR BUDGET' },
  { number: '04', icon: Ruler, title: 'Engineering Consultancy', text: 'Professional technical guidance and construction advice to help you plan and manage your house project confidently.', tag: 'EXPERT GUIDANCE' }
];

const process = [
  ['01', 'Tell us your vision', 'Share your plot details, ideas, needs and budget.'],
  ['02', 'Consultation & planning', 'We discuss your priorities and define a suitable project scope.'],
  ['03', 'Design, BOQ & proposal', 'Review the design direction, quantities and estimated costs.'],
  ['04', 'Agreement & preparation', 'Finalize the scope, terms, schedule and project arrangements.'],
  ['05', 'Construction & supervision', 'Coordinate the work with attention to quality, progress and safety.'],
  ['06', 'Finishing & handover', 'Complete the agreed work and hand over your home.']
];

const faqs = [
  ['What information should I submit to get started?', 'Share your name and contact details, project location, plot size, preferred number of floors, room requirements and an approximate budget. You can add any other preferences too.'],
  ['Can I request only a design or BOQ?', 'Yes. You can tell us which service you need in the requirement form. Our team can discuss the suitable scope with you.'],
  ['Does Easy Home provide complete house construction?', 'Complete house construction from ground-level work through finishing and final handover is one of the services planned for Easy Home. The exact scope will be confirmed through consultation and a written agreement.'],
  ['How is the construction cost estimated?', 'The estimate depends on the project location, design, floor area, specifications, materials and agreed scope. A project-specific BOQ and estimate can help clarify the expected cost.'],
  ['How can I book a consultation?', 'Submit your details through the requirement form or contact Easy Home directly using the contact information published on this website.']
];

function SectionHeading({ eyebrow, title, text, center = false }) {
  return <div className={`section-heading ${center ? 'center' : ''}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function App() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', location: '', plot: '', floors: '', service: 'Complete House Construction', budget: '', details: '' });

  useEffect(() => {
    const timer = setInterval(() => setSlide(current => (current + 1) % houseSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const changeForm = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submitForm = (e) => {
    e.preventDefault();
    setFormSent(true);
  };
  const navItems = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['House Designs', '#designs'], ['Our Process', '#process'], ['Contact', '#contact']];
  const current = houseSlides[slide];

  return <div className="site-shell">
    <div className="top-strip"><div className="container top-strip-inner"><span>BUILDING YOUR VISION, ONE HOME AT A TIME</span><span className="top-contact"><Phone size={13}/> Let’s talk about your home</span></div></div>
    <header className="header">
      <div className="container nav-wrap">
        <a className="brand" href="#home" aria-label="Easy Home Solution home"><img src="/easy-home-logo.jpeg" alt="Easy Home logo" /><span className="brand-caption">SOLUTION</span></a>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#requirements" onClick={() => setMenuOpen(false)}>Submit Requirements <ArrowUpRight size={16}/></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        {houseSlides.map((item, index) => <div key={item.title} className={`hero-bg ${index === slide ? 'active' : ''}`} style={{ backgroundImage: `url("${item.image}")` }} />)}
        <div className="hero-shade"/>
        <div className="container hero-content">
          <div className="hero-copy" key={slide}>
            <span className="hero-eyebrow"><span/> {current.eyebrow}</span>
            <h1>{current.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br/>}</span>)}</h1>
            <p>{current.description}</p>
            <div className="hero-actions"><a className="button button-gold" href="#services">Explore Our Services <ArrowRight size={17}/></a><a className="button button-outline" href="#requirements">Start Your Project</a></div>
          </div>
          <div className="hero-bottom">
            <span className="slide-label">{current.label}</span>
            <div className="slider-controls"><span className="slide-count">0{slide + 1} <i>/ 0{houseSlides.length}</i></span><button onClick={() => setSlide((slide + houseSlides.length - 1) % houseSlides.length)} aria-label="Previous slide"><ChevronLeft/></button><button onClick={() => setSlide((slide + 1) % houseSlides.length)} aria-label="Next slide"><ChevronRight/></button></div>
          </div>
        </div>
        <div className="hero-index">EASY HOME SOLUTION <span>—</span> YOUR HOME, OUR COMMITMENT</div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="container intro-grid">
          <div className="intro-visual"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85" alt="Warm contemporary residential interior"/><div className="visual-note"><span>01 /</span> Thoughtful design. Meaningful living.</div></div>
          <div className="intro-copy"><span className="eyebrow">WELCOME TO EASY HOME SOLUTION</span><h2>We make the journey to your <em>dream home</em> simpler.</h2><p>Every home begins with an idea. Easy Home Solution aims to bring that idea to life through considered design, practical planning and dependable construction support.</p><p>Whether you are planning a duplex, a triplex or a home designed around your family, we want every step to feel clear, collaborative and thoughtfully managed.</p><a className="text-link" href="#requirements">Let’s discuss your project <ArrowUpRight size={17}/></a></div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="container"><SectionHeading eyebrow="WHAT WE DO" title="Solutions for every step of your home journey." text="From the first sketch to the final handover, explore the services that help bring your home project together."/>
          <div className="service-grid">{services.map(({ number, icon: Icon, title, text, tag }) => <article className="service-card" key={number}><div className="service-card-top"><span>{number}</span><Icon size={27} strokeWidth={1.45}/></div><h3>{title}</h3><p>{text}</p><span className="service-tag">{tag}</span><a href="#requirements" aria-label={`Ask about ${title}`}><ArrowUpRight size={19}/></a></article>)}</div>
        </div>
      </section>

      <section className="design-section section-pad" id="designs">
        <div className="container"><div className="design-heading"><SectionHeading eyebrow="HOMES WITH CHARACTER" title="Find the shape of your future home." text="A little inspiration for the home you have in mind. Explore architectural directions for duplex, triplex and modern family living."/><a className="text-link" href="#requirements">Discuss a custom design <ArrowUpRight size={17}/></a></div>
          <div className="design-grid">
            <article className="design-card design-large"><img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1300&q=85" alt="Contemporary duplex house exterior"/><div className="design-overlay"><span>01 / DUPLEX</span><h3>Modern family living</h3></div></article>
            <article className="design-card"><img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85" alt="Modern triplex inspired home"/><div className="design-overlay"><span>02 / TRIPLEX</span><h3>Space to grow</h3></div></article>
            <article className="design-card"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85" alt="Minimal contemporary home"/><div className="design-overlay"><span>03 / CUSTOM HOME</span><h3>Made around you</h3></div></article>
          </div>
          <p className="image-disclaimer">Illustrative architectural inspiration. Final designs are developed according to each client’s plot, requirements and project scope.</p>
        </div>
      </section>

      <section className="requirements-section section-pad" id="requirements">
        <div className="container requirements-grid">
          <div className="requirements-copy"><span className="eyebrow">YOUR IDEA, OUR STARTING POINT</span><h2>Submit your requirements.</h2><p>Tell us a little about the home you want to build. Share your needs and preferences, and start a conversation with Easy Home Solution.</p>
            <div className="requirement-points"><div><Check size={17}/> Tell us about your plot and location</div><div><Check size={17}/> Share your preferred home type and floors</div><div><Check size={17}/> Let us know your budget and priorities</div></div>
            <div className="contact-mini"><MessageCircle size={20}/><span>Not sure where to begin?<br/><b>Start with what you know.</b></span></div>
          </div>
          <form className="requirement-form" onSubmit={submitForm}>
            {formSent ? <div className="form-success"><div className="success-icon"><Check size={28}/></div><h3>Thank you for sharing your requirements.</h3><p>Your details have been entered in this demo form. To receive real enquiries, connect this form to an email or backend service before publishing.</p><button type="button" className="button button-dark" onClick={() => { setFormSent(false); setForm({ name:'', phone:'', location:'', plot:'', floors:'', service:'Complete House Construction', budget:'', details:'' }); }}>Submit another response</button></div> : <>
              <div className="form-heading"><span>PROJECT ENQUIRY</span><h3>Tell us what you have in mind.</h3><p>Fields marked * are required.</p></div>
              <div className="form-row"><label>Full name *<input name="name" value={form.name} onChange={changeForm} placeholder="Your name" required/></label><label>Phone number *<input name="phone" value={form.phone} onChange={changeForm} placeholder="+880 1XXXXXXXXX" required/></label></div>
              <label>Project location *<input name="location" value={form.location} onChange={changeForm} placeholder="Area, city or district" required/></label>
              <div className="form-row"><label>Plot size<input name="plot" value={form.plot} onChange={changeForm} placeholder="e.g. 3 katha / 2,160 sq ft"/></label><label>Number of floors<select name="floors" value={form.floors} onChange={changeForm}><option value="">Select floors</option><option>Single storey</option><option>2 floors</option><option>3 floors</option><option>4+ floors</option> <option>Not decided</option></select></label></div>
              <label>Service required *<select name="service" value={form.service} onChange={changeForm}><option>Complete House Construction</option><option>Architectural Design & Planning</option><option>BOQ & Cost Estimation</option><option>Engineering Consultancy</option><option>Not sure — need guidance</option></select></label>
              <label>Estimated budget<input name="budget" value={form.budget} onChange={changeForm} placeholder="Optional — e.g. BDT 50 lakh"/></label>
              <label>Additional requirements<textarea name="details" value={form.details} onChange={changeForm} rows="4" placeholder="Bedrooms, preferred design, family needs or anything else you would like us to know..."/></label>
              <button className="button button-gold form-submit" type="submit">Submit Requirements <ArrowRight size={17}/></button>
              <small className="privacy-note">Your information should only be used to discuss your project. Connect a secure form service before collecting live customer information.</small>
            </>}
          </form>
        </div>
      </section>

      <section className="design-boq-section section-pad" id="design-boq">
        <div className="container design-boq-grid"><div className="design-boq-image"><img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85" alt="Architectural drawings and building plans"/><div className="image-stamp"><Ruler size={22}/><span>PLAN WITH<br/>CLARITY</span></div></div><div className="design-boq-copy"><span className="eyebrow">DESIGN, QUANTITIES & COST CLARITY</span><h2>Good construction starts with a good plan.</h2><p>Before construction begins, a clear design and realistic cost understanding can make decision-making easier. We aim to help clients understand what their project needs and how the work can be planned.</p><div className="boq-list"><div><span>01</span><div><b>Design & Planning</b><small>Architectural concepts, floor plans and elevations.</small></div></div><div><span>02</span><div><b>Engineering Design</b><small>Technical planning and structural design scope as required.</small></div></div><div><span>03</span><div><b>BOQ & Cost Estimation</b><small>Quantities, work items and estimated project costs.</small></div></div></div><a className="button button-dark" href="#requirements">Request a project discussion <ArrowRight size={17}/></a></div></div>
      </section>

      <section className="pricing-section section-pad" id="pricing"><div className="container pricing-inner"><div><span className="eyebrow">CLEAR SCOPE. BETTER PLANNING.</span><h2>Consultancy & project pricing.</h2><p>Every plot and every home is different. Share your project details so we can understand the scope and discuss the appropriate service and fee.</p></div><div className="pricing-action"><span className="pricing-note"><ClipboardList size={20}/> Project-specific quotation</span><a className="button button-gold" href="#requirements">Request a Quote <ArrowUpRight size={17}/></a><small>Fees and pricing are confirmed after reviewing project requirements.</small></div></div></section>

      <section className="process-section section-pad" id="process"><div className="container"><SectionHeading eyebrow="HOW WE WORK" title="A clearer path from idea to handover." text="A considered process helps everyone understand the next step, the scope and the decisions ahead." center/><div className="process-grid">{process.map(([num, title, text]) => <div className="process-item" key={num}><span className="process-num">{num}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section className="why-section"><div className="container why-grid"><div><span className="eyebrow">THE EASY HOME APPROACH</span><h2>Built on clarity.<br/><em>Focused on home.</em></h2><p>We believe building a home should feel like a thoughtful partnership. Our approach is centered on understanding your needs, communicating clearly and planning each stage with care.</p><a className="text-link light-link" href="#requirements">Start a conversation <ArrowUpRight size={17}/></a></div><div className="why-points"><div><ShieldCheck/><span><b>Quality-minded approach</b><small>Attention to workmanship, materials and agreed specifications.</small></span></div><div><ClipboardList/><span><b>Transparent planning</b><small>Clear scope, quantities and cost discussions.</small></span></div><div><Building2/><span><b>Personalized homes</b><small>Design direction guided by your plot and lifestyle.</small></span></div><div><Clock3/><span><b>Project coordination</b><small>Organized communication through the project journey.</small></span></div></div></div></section>

      <section className="faq-section section-pad"><div className="container faq-grid"><div><SectionHeading eyebrow="GOOD TO KNOW" title="Questions, answered." text="A few helpful details before you take the next step."/></div><div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${openFaq === i ? 'expanded' : ''}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{q}</span><span className="faq-plus">{openFaq === i ? '−' : '+'}</span></button>{openFaq === i && <p>{a}</p>}</div>)}</div></div></section>

      <section className="final-cta"><div className="container final-cta-inner"><div><span className="eyebrow">LET’S BUILD SOMETHING MEANINGFUL</span><h2>Your home story can start here.</h2></div><a className="button button-gold" href="#requirements">Share Your Requirements <ArrowRight size={17}/></a></div></section>
    </main>

    <footer className="footer" id="contact"><div className="container footer-main"><div className="footer-brand"><img src="/easy-home-logo.jpeg" alt="Easy Home logo"/><p>Thoughtful design. Practical planning. A simpler journey to your home.</p></div><div className="footer-col"><h4>Explore</h4><a href="#about">About Us</a><a href="#services">Our Services</a><a href="#designs">House Designs</a><a href="#process">Our Process</a></div><div className="footer-col"><h4>Our Services</h4><a href="#services">Complete Construction</a><a href="#services">Architectural Design</a><a href="#design-boq">BOQ & Estimation</a><a href="#services">Engineering Consultancy</a></div><div className="footer-col"><h4>Get in touch</h4><span><Phone size={15}/> Add your phone number</span><span><Mail size={15}/> Add your business email</span><span><MapPin size={15}/> Add your office address</span><div className="socials"><a href="#contact" aria-label="Facebook"><Facebook size={17}/></a><a href="#contact" aria-label="Instagram"><Instagram size={17}/></a></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Easy Home Solution. All rights reserved.</span><span>Designed with care for better living.</span></div></footer>
  </div>;
}

export default App;