Bhai, ye raha bilkul saaf TEXT format mein code. Is mein koi extra brackets ya Markdown ki galti nahi hai. Is mein aapki image, navigation header, contact form, aur projects section sab kuch shamil hai.

Bas is poore text ko copy karein aur apni src/App.jsx mein paste kar den:

import React, { useState } from 'react';

const App = () => { const [activeNav, setActiveNav] = useState('home');

return ( <div style={containerStyle}> {/* Navigation Header */} <nav style={navStyle}> <div style={navInner}> <div style={logo}>SK.</div> <div style={navLinks}> <button onClick={() => setActiveNav('home')} style={{...navBtn, color: activeNav === 'home' ? '#fff' : '#71717a'}}>Home</button> <button onClick={() => setActiveNav('projects')} style={{...navBtn, color: activeNav === 'projects' ? '#fff' : '#71717a'}}>Projects</button> <button onClick={() => setActiveNav('contact')} style={{...navBtn, color: activeNav === 'contact' ? '#fff' : '#71717a'}}>Contact</button> <a href="#" style={downloadBtn}>Resume</a> </div> </div> </nav>

  <main style={contentWrapper}>
    {activeNav === 'home' && (
      <>
        {/* Hero Section */}
        <header style={headerStyle}>
          <div style={heroFlex}>
            <div style={heroText}>
              <div style={statusBadge}>
                <span style={dot}></span> Based in Cottbus, Germany
              </div>
              <h1 style={mainTitle}>Sufyan Khalid</h1>
              <p style={subTitle}>
                Senior Software QA Engineer & M.Sc. AI Student. 
                I build robust automation frameworks and explore the future of <span style={whiteText}>AI-driven testing</span>.
              </p>
              <div style={socialLinks}>
                <a href="[https://linkedin.com/in/sufyan-khalid-b12322188](https://linkedin.com/in/sufyan-khalid-b12322188)" target="_blank" rel="noreferrer" style={linkStyle}>LinkedIn</a>
                <span style={separator}>/</span>
                <a href="[https://github.com/EngrSufyankhalid](https://github.com/EngrSufyankhalid)" target="_blank" rel="noreferrer" style={linkStyle}>GitHub</a>
              </div>
            </div>
            <div style={imageContainer}>
              <img 
                src="[https://raw.githubusercontent.com/EngrSufyankhalid/sufyan-khalid/main/index/src/CXC-2025-1542-%20SUFYAN%20KHALID.png](https://raw.githubusercontent.com/EngrSufyankhalid/sufyan-khalid/main/index/src/CXC-2025-1542-%20SUFYAN%20KHALID.png)" 
                alt="Sufyan Khalid" 
                style={profileImg}
              />
            </div>
          </div>
        </header>

        {/* Experience Section */}
        <section style={sectionMargin}>
          <h2 style={sectionLabel}>01 // EXPERIENCE</h2>
          <div style={expItem}>
            <div style={expMeta}>
              <span style={dateText}>2021 — 2025</span>
              <h3 style={expRole}>Senior Software QA Engineer</h3>
              <p style={expCompany}>Bykea Technologies</p>
            </div>
            <p style={expDesc}>Lead QA for Fintech and Logistics. Reduced shipping cycles by 50% and scaled automation coverage to 80%.</p>
          </div>
          <div style={expItem}>
            <div style={expMeta}>
              <span style={dateText}>2020 — 2021</span>
              <h3 style={expRole}>Software QA Engineer</h3>
              <p style={expCompany}>Ismail Industries</p>
            </div>
            <p style={expDesc}>Managed 3 major product releases. Implemented risk assessment protocols reducing production bugs by 25%.</p>
          </div>
        </section>
      </>
    )}

    {activeNav === 'projects' && (
      <section style={sectionMargin}>
        <h2 style={sectionLabel}>02 // SELECTED PROJECTS</h2>
        <div style={projectGrid}>
          <div style={pCard}>
            <div style={pTech}>Python, OpenAI API</div>
            <h3 style={pTitle}>AI-Driven Test Suite</h3>
            <p style={pDesc}>A prototype framework that generates Selenium scripts from natural language requirements.</p>
            <div style={pLink}>View Project ↗</div>
          </div>
          <div style={pCard}>
            <div style={pTech}>Java, JMeter</div>
            <h3 style={pTitle}>Fintech Bidding Engine</h3>
            <p style={pDesc}>Stress testing architecture for a high-concurrency bidding platform handling 10k+ req/sec.</p>
            <div style={pLink}>View Project ↗</div>
          </div>
        </div>
      </section>
    )}

    {activeNav === 'contact' && (
      <section style={sectionMargin}>
        <h2 style={sectionLabel}>03 // GET IN TOUCH</h2>
        <div style={formStyle}>
          <div style={formGroup}>
            <label style={label}>Name</label>
            <input type="text" placeholder="Your Name" style={input} />
          </div>
          <div style={formGroup}>
            <label style={label}>Email</label>
            <input type="email" placeholder="email@example.com" style={input} />
          </div>
          <div style={formGroup}>
            <label style={label}>Message</label>
            <textarea placeholder="Tell me about your project..." style={{...input, minHeight: '150px'}} />
          </div>
          <button style={submitBtn} onClick={() => console.log('Message sent')}>Send Message</button>
        </div>
      </section>
    )}

    <footer style={footerStyle}>
      <p>© 2026 Sufyan Khalid</p>
      <div style={{display: 'flex', gap: '20px'}}>
        <span>Karachi</span>
        <span>Cottbus</span>
      </div>
    </footer>
  </main>
</div>
); };

const containerStyle = { backgroundColor: '#000', color: '#a1a1aa', minHeight: '100vh', fontFamily: '"Inter", sans-serif', paddingTop: '100px' }; const navStyle = { position: 'fixed', top: 0, width: '100%', zIndex: 100, backdropFilter: 'blur(10px)', borderBottom: '1px solid #18181b' }; const navInner = { maxWidth: '900px', margin: '0 auto', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }; const logo = { color: '#fff', fontWeight: '800', fontSize: '20px' }; const navLinks = { display: 'flex', gap: '24px', alignItems: 'center' }; const navBtn = { background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }; const downloadBtn = { backgroundColor: '#fff', color: '#000', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }; const contentWrapper = { maxWidth: '900px', margin: '0 auto', padding: '0 20px' }; const headerStyle = { padding: '60px 0 100px 0' }; const heroFlex = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px' }; const heroText = { flex: 1 }; const imageContainer = { width: '280px', height: '350px', borderRadius: '24px', overflow: 'hidden', border: '1px solid #27272a', backgroundColor: '#09090b' }; const profileImg = { width: '100%', height: '100%', objectFit: 'cover' }; const statusBadge = { display: 'inline-flex', alignItems: 'center', fontSize: '12px', color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)', padding: '6px 14px', borderRadius: '100px', marginBottom: '24px' }; const dot = { width: '6px', height: '6px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px' }; const mainTitle = { fontSize: '56px', color: '#fff', fontWeight: '800', letterSpacing: '-2px', margin: '0 0 20px 0', lineHeight: '1' }; const subTitle = { fontSize: '20px', color: '#d4d4d8', marginBottom: '32px' }; const whiteText = { color: '#fff' }; const socialLinks = { display: 'flex', gap: '15px', fontSize: '14px' }; const linkStyle = { color: '#fff', textDecoration: 'none' }; const separator = { opacity: 0.2 }; const sectionLabel = { fontSize: '12px', letterSpacing: '3px', color: '#52525b', marginBottom: '40px' }; const sectionMargin = { marginBottom: '120px' }; const expItem = { display: 'grid', gridTemplateColumns: '250px 1fr', gap: '40px', paddingBottom: '40px', marginBottom: '40px', borderBottom: '1px solid #18181b' }; const expMeta = { display: 'flex', flexDirection: 'column', gap: '4px' }; const dateText = { fontSize: '13px', color: '#52525b' }; const expRole = { color: '#fff', fontSize: '18px', fontWeight: '600', margin: 0 }; const expCompany = { color: '#3b82f6', fontSize: '14px', margin: 0 }; const expDesc = { fontSize: '15px', color: '#a1a1aa' }; const projectGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }; const pCard = { backgroundColor: '#09090b', border: '1px solid #18181b', padding: '32px', borderRadius: '16px' }; const pTech = { fontSize: '12px', color: '#3b82f6', marginBottom: '12px', fontWeight: '600' }; const pTitle = { color: '#fff', fontSize: '20px', fontWeight: '700', marginBottom: '12px' }; const pDesc = { fontSize: '14px', marginBottom: '24px' }; const pLink = { fontSize: '13px', color: '#fff', fontWeight: '600' }; const formStyle = { display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }; const formGroup = { display: 'flex', flexDirection: 'column', gap: '8px' }; const label = { fontSize: '13px', fontWeight: '600', color: '#fff' }; const input = { backgroundColor: '#09090b', border: '1px solid #27272a', padding: '14px', borderRadius: '8px', color: '#fff' }; const submitBtn = { backgroundColor: '#fff', color: '#000', padding: '16px', borderRadius: '8px', border: 'none', fontWeight: '700', cursor: 'pointer' }; const footerStyle = { padding: '60px 0', borderTop: '1px solid #18181b', display: 'flex', justifyContent: 'space-between', fontSize: '12px' };

export default App;
