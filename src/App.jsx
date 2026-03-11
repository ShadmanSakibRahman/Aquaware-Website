import { useEffect, useRef } from 'react'

function App() {
  const heroRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      const hero = heroRef.current
      if (!hero) return
      const { left, top, width, height } = hero.getBoundingClientRect()
      const x = ((e.clientX - left) / width - 0.5) * 14
      const y = ((e.clientY - top) / height - 0.5) * 8
      hero.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`
    }
    const onLeave = () => {
      if (heroRef.current) heroRef.current.style.transform = ''
    }
    const hero = heroRef.current
    if (hero) {
      hero.addEventListener('mousemove', onMove)
      hero.addEventListener('mouseleave', onLeave)
    }
    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', onMove)
        hero.removeEventListener('mouseleave', onLeave)
      }
    }
  }, [])

  return (
    <div className="app-shell">
      {/* Animated background blobs */}
      <div className="bg-blob blob-a" aria-hidden="true" />
      <div className="bg-blob blob-b" aria-hidden="true" />
      <div className="bg-blob blob-c" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      {/* ── Navigation ── */}
      <header className="site-nav">
        <a href="#home" className="brand">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <ellipse cx="11" cy="14" rx="7" ry="6" fill="currentColor" opacity="0.18" />
            <path d="M11 2 C8 6 4 9 4 13 a7 7 0 0 0 14 0 C18 9 14 6 11 2z" fill="currentColor" />
          </svg>
          AquaWare
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#features">Knowledge</a>
          <a href="#contact">Contact</a>
          <span className="lang">EN</span>
        </nav>
        <a href="#contact" className="nav-cta">Schedule a demo</a>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="hero" id="home" ref={heroRef}>
          <div className="hero-inner glass-panel">
            <p className="eyebrow">Data-driven water management</p>
            <h1>The data-driven platform for industrial discharges</h1>
            <p className="hero-sub">
              Gain immediate insight into potential sources of SVHCs and WFD priority substances
              and act proactively towards WFD objectives.
            </p>
            <div className="audience-pills">
              {['Provinces', 'Water boards', 'Environmental Services', 'Municipalities'].map(a => (
                <span key={a} className="pill">{a}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Schedule a demo</a>
              <a href="#about" className="btn-ghost">Learn more</a>
            </div>
          </div>
          <div className="hero-orb" aria-hidden="true">
            <span /><span /><span />
          </div>
        </section>

        {/* ── Problem ── */}
        <section className="section-problem" id="about">
          <div className="section-label">Challenge</div>
          <h2>Water quality under pressure</h2>
          <p className="section-lead">
            Indirect discharges are difficult to monitor due to fragmented data and outdated
            files. AquaWare helps governments with a single overview and clear priorities, so
            that supervision and permitting are more effective with the same capacity.
          </p>
          <ul className="challenge-list">
            {[
              'PFAS, heavy metals, and other SVHCs enter water through indirect discharges',
              'Many indirect discharges are blind spots',
              'Discharge permits are outdated or incomplete',
              'Poor supervision efficiency due to capacity and collaboration issues',
              'Fragmented data hampers prioritization',
            ].map(item => (
              <li key={item} className="challenge-item glass-panel">
                <span className="check-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.12" />
                    <path d="M4.5 8.5 L7 11 L11.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Features ── */}
        <section className="section-features" id="features">
          <div className="section-label">Platform</div>
          <h2>One central platform with valuable functionalities</h2>
          <p className="tagline-large">Complete insight. Less worries. Free up capacity.</p>
          <div className="feature-grid">
            <div className="feature-card glass-panel">
              <div className="feat-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="3" y="3" width="22" height="22" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 10h12M8 14h8M8 18h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Centralized Database</h3>
              <ul className="feat-list">
                {['KvK profile', 'Location & WWTP', 'Discharge route', 'ZZS and WFD substances', 'Risk score', 'Permit data', 'Competent authority'].map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
            <div className="feature-card glass-panel">
              <div className="feat-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M4 20 L10 13 L15 17 L21 9 L25 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="13" r="2" fill="currentColor" opacity="0.3" />
                  <circle cx="15" cy="17" r="2" fill="currentColor" opacity="0.3" />
                  <circle cx="21" cy="9" r="2" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
              <h3>Interactive Dashboards</h3>
              <ul className="feat-list">
                {['Priority list of companies', 'Business Reports', 'Heatmaps'].map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Solutions ── */}
        <section className="section-solutions">
          <div className="section-label">Solutions</div>
          <h2>Supporting government activities</h2>
          <p className="section-lead">
            Gain insight into water quality and translate data into practical tools.
          </p>
          <div className="solutions-grid">
            {[
              {
                title: 'Regulation and Compliance',
                body: 'Determine where deployment is needed with data-driven insights.',
              },
              {
                title: 'Policy Development',
                body: 'By combining trends, risk zones, and sector analyses, substantiated and future-proof water quality policy is created.',
              },
              {
                title: 'Risk Assessment',
                body: 'Identify business risks and analyze which companies are likely to discharge substances.',
              },
              {
                title: 'Source Detection',
                body: 'Trace discharge routes back from RWZI hotspots and match them with sectors.',
              },
            ].map((s, i) => (
              <div key={s.title} className="solution-card glass-panel">
                <span className="sol-num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonial ── */}
        <blockquote className="testimonial glass-panel">
          <div className="quote-mark" aria-hidden="true">"</div>
          <p>
            AquaWare centralizes data on indirect industrial discharges into a single data
            layer. This gives governments direct insight and priorities for permits, supervision,
            enforcement, and maintenance. Less searching, faster action, better collaboration
            in the chain.
          </p>
        </blockquote>

        {/* ── Process ── */}
        <section className="section-process">
          <div className="section-label">How it works</div>
          <h2>From overview to action plan</h2>
          <p className="section-lead">
            Using our funnel-based approach, we first identify all companies in your area.
            Then, we filter to those that are truly relevant to water quality—based on their
            business profile, discharge risks, and other critical characteristics.
          </p>
          <div className="funnel">
            {[
              { step: '01', label: 'All companies in view' },
              { step: '02', label: 'All companies with linked data' },
              { step: '03', label: 'Water-relevant companies', sub: 'Selection based on company profile' },
              { step: '04', label: 'Prioritization', sub: 'List based on risk profile' },
            ].map((f, i, arr) => (
              <div key={f.step} className="funnel-step glass-panel" style={{ '--idx': i, '--total': arr.length }}>
                <span className="funnel-num">{f.step}</span>
                <div>
                  <strong>{f.label}</strong>
                  {f.sub && <p>{f.sub}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="process-cta">
            <a href="#contact" className="btn-primary">Request Demo</a>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="section-benefits">
          <div className="benefits-header glass-panel">
            <h2>Get a Grip on Industrial Discharges</h2>
            <p>
              The task is large and complex. With AquaWare, you bundle data on companies,
              routes, and permits into one view, so teams can work more targeted towards KRW goals.
            </p>
          </div>
          <div className="benefits-grid">
            {[
              { icon: '◎', title: 'Stay in the loop', body: 'Subscribe to our newsletter for the latest updates in water quality management.' },
              { icon: '⬡', title: 'No extra FTEs needed', body: 'Empower your teams without additional hiring — work smarter with the same capacity.' },
              { icon: '⬡', title: 'Collaborate in the chain', body: 'Multi-stakeholder dashboards for seamless coordination across authorities.' },
              { icon: '◎', title: 'From reactive to proactive', body: 'Proactive source tracking and permitting before issues arise.' },
            ].map(b => (
              <div key={b.title} className="benefit-card glass-panel">
                <span className="benefit-icon" aria-hidden="true">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="section-contact glass-panel" id="contact">
          <div className="contact-text">
            <div className="section-label">Contact</div>
            <h2>Get in Touch</h2>
            <p>Have questions about our solutions? We're here to help.</p>
            <div className="contact-details">
              <a href="mailto:info@aquaware.nl">info@aquaware.nl</a>
              <a href="tel:+31624178896">+31-6-24178896</a>
              <span>Rotterdam, Netherlands &amp; Antwerp, Belgium</span>
            </div>
          </div>
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <label>
              <span>Full Name</span>
              <input type="text" placeholder="Jane Doe" />
            </label>
            <label>
              <span>Email Address</span>
              <input type="email" placeholder="jane@organisation.nl" />
            </label>
            <label>
              <span>Your Message</span>
              <textarea rows={4} placeholder="Tell us about your challenge…" />
            </label>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand footer-brand-name">
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <ellipse cx="11" cy="14" rx="7" ry="6" fill="currentColor" opacity="0.18" />
                <path d="M11 2 C8 6 4 9 4 13 a7 7 0 0 0 14 0 C18 9 14 6 11 2z" fill="currentColor" />
              </svg>
              AquaWare
            </span>
            <p>With AquaWare we want to build a future together in which clean water is the standard.</p>
          </div>
          <div className="footer-col">
            <h4>Functionalities</h4>
            <ul>
              {['Central database', 'Interactive, user-friendly dashboards', 'Company priority list', 'Company reports', 'Heatmaps'].map(i => <li key={i}><a href="#features">{i}</a></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              {[['About', '#about'], ['Knowledge', '#features'], ['Contact', '#contact']].map(([l, h]) => <li key={l}><a href={h}>{l}</a></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="your@email.nl" />
              <button type="submit">Subscribe</button>
            </form>
            <p className="newsletter-note">We'll only use your email to send updates.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 AquaWare. All rights reserved.</span>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
