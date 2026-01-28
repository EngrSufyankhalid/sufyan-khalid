import React from 'react';

export default function App() { return ( <div style={containerStyle}> <div style={contentWrapper}>

    {/* Top Header */}
    <header style={headerStyle}>
      <div style={statusBadge}>
        <span style={dot}></span> Available for new opportunities
      </div>
      <h1 style={mainTitle}>Sufyan Khalid</h1>
      <p style={subTitle}>
        Senior Software QA Engineer & M.Sc. AI Student at <span style={whiteText}>BTU Cottbus, Germany</span>
      </p>
      
      <div style={socialLinks}>
        <a href="[https://linkedin.com/in/sufyan-khalid-b12322188](https://linkedin.com/in/sufyan-khalid-b12322188)" target="_blank" rel="noreferrer" style={linkStyle}>LinkedIn</a>
        <span style={separator}>/</span>
        <a href="[https://github.com/EngrSufyankhalid](https://github.com/EngrSufyankhalid)" target="_blank" rel="noreferrer" style={linkStyle}>GitHub</a>
      </div>
    </header>

    {/* About Section */}
    <section style={sectionMargin}>
      <h2 style={sectionLabel}>01 // ABOUT</h2>
      <p style={aboutText}>
        Result-driven Senior QA Engineer with 5+ years of experience in test automation. 
        Currently specializing in <span style={whiteText}>Artificial Intelligence</span> to bridge the gap 
        between traditional QA and AI-driven automation.
      </p>
    </section>

    {/* Experience Section */}
    <section style={sectionMargin}>
      <h2 style={sectionLabel}>02 // EXPERIENCE</h2>
      
      <ExperienceItem 
        role="Senior Software QA Engineer"
        company="Bykea Technologies"
        date="2021 — 2025"
        desc="Spearheaded testing for 20+ major launches. Reduced feature shipping time by 50% via CI/CD pipelines."
      />

      <ExperienceItem 
        role="Software QA Engineer"
        company="Ismail Industries"
        date="2020 — 2021"
        desc="Reduced critical production issues by 25% through risk assessments and failure forecasting."
      />

      <ExperienceItem 
        role="Junior Software QA Engineer"
        company="Crescentic Digital"
        date="2019 — 2020"
        desc="Introduced Pre-understanding Sessions, reducing dev-test cycles by 30%."
      />
    </section>

    {/* Stack & Education Grid */}
    <div style={gridStyle}>
      <section>
        <h2 style={sectionLabel}>03 // STACK</h2>
        <div style={skillsWrapper}>
          {['Selenium', 'Appium', 'Python', 'Java', 'Jenkins', 'JMeter', 'AI Testing', 'CI/CD'].map(skill => (
            <span key={skill} style={skillTag}>{skill}</span>
          ))}
        </div>
      </section>

      <section>
        <h2 style={sectionLabel}>04 // EDUCATION</h2>
        <div style={cardStyle}>
          <h4 style={cardTitle}>M.Sc. Artificial Intelligence</h4>
          <p style={cardSub}>BTU Cottbus, Germany</p>
          <p style={dateText}>2025 — Present</p>
        </div>
      </section>
    </div>

    {/* Footer */}
    <footer style={footerStyle}>
      <p>© 2026 Sufyan Khalid</p>
      <p style={{opacity: 0.5}}>Cottbus, Brandenburg, Germany</p>
    </footer>

  </div>
</div>
); }

function ExperienceItem({ role, company, date, desc }) { return ( <div style={{ marginBottom: '40px' }}> <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}> <h3 style={{ color: '#ffffff', fontSize: '18px', margin: '0', fontWeight: '600' }}>{role}</h3> <span style={{ fontSize: '14px', opacity: 0.4 }}>{date}</span> </div> <p style={{ color: '#3b82f6', fontSize: '14px', margin: '4px 0 12px 0' }}>{company}</p> <p style={{ fontSize: '15px', color: '#a1a1aa', margin: 0 }}>{desc}</p> </div> ); }

const containerStyle = { backgroundColor: '#000000', color: '#a1a1aa', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', padding: '80px 20px', lineHeight: '1.6', };

const contentWrapper = { maxWidth: '700px', margin: '0 auto', };

const headerStyle = { marginBottom: '80px', };

const statusBadge = { display: 'inline-flex', alignItems: 'center', fontSize: '12px', color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)', padding: '4px 12px', borderRadius: '20px', marginBottom: '24px', };

const dot = { width: '6px', height: '6px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px', display: 'inline-block', };

const mainTitle = { fontSize: '48px', color: '#ffffff', fontWeight: '700', letterSpacing: '-1.5px', margin: '0 0 16px 0', };

const subTitle = { fontSize: '18px', marginBottom: '24px', };

const whiteText = { color: '#ffffff', fontWeight: '500', };

const socialLinks = { display: 'flex', gap: '12px', fontSize: '14px', };

const linkStyle = { color: '#ffffff', textDecoration: 'none', borderBottom: '1px solid #3f3f46', };

const separator = { opacity: 0.3, };

const sectionLabel = { fontSize: '11px', letterSpacing: '2px', color: '#52525b', marginBottom: '24px', };

const sectionMargin = { marginBottom: '80px', };

const aboutText = { fontSize: '20px', color: '#d4d4d8', };

const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '80px', };

const cardStyle = { border: '1px solid #18181b', padding: '20px', borderRadius: '12px', backgroundColor: '#09090b', };

const cardTitle = { color: '#ffffff', margin: '0 0 4px 0', fontSize: '16px', };

const cardSub = { fontSize: '14px', margin: '0', };

const dateText = { fontSize: '12px', marginTop: '10px', opacity: 0.4, };

const skillsWrapper = { display: 'flex', flexWrap: 'wrap', gap: '8px', };

const skillTag = { backgroundColor: '#18181b', color: '#ffffff', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', border: '1px solid #27272a', };

const footerStyle = { paddingTop: '40px', borderTop: '1px solid #18181b', display: 'flex', justifyContent: 'space-between', fontSize: '13px', };
