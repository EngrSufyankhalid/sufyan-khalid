import React from "react";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0f172a, #020617)",
      color: "#e5e7eb",
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: "60px 20px",
    }}>
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 style={{ fontSize: "48px", margin: 0 }}>Sufyan Khalid</h1>
          <p style={{ color: "#93c5fd", marginTop: "10px", fontSize: "18px" }}>
            Senior Software QA Engineer • M.Sc. AI Student
          </p>
        </header>

        {/* Professional Profile */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={sectionTitle}>Professional Profile</h2>
          <p style={paragraph}>
            Result-driven Senior QA Engineer with 5+ years of experience in test
            automation and collaborative bug resolution. Proven track record in
            reducing manual testing time and expanding test coverage, and
            currently specializing in Artificial Intelligence to bridge the gap
            between traditional QA and AI-driven automation.
          </p>
        </section>

        {/* Experience */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={sectionTitle}>Professional Experience</h2>

          <Experience
            role="Senior Software Quality Assurance Engineer"
            company="Bykea Technologies, Karachi, PK"
            duration="10/2021 – 12/2025"
            points={[
              "Spearheaded testing for Car Pool feature and 20+ major launches (Fintech, Logistics, Bidding).",
              "Reduced feature shipping time by 50% via CI/CD pipelines.",
              "Increased test coverage by 40% and product stability by 80%.",
              "Led QA standards across cross-functional teams.",
            ]}
          />

          <Experience
            role="Software Quality Assurance Engineer"
            company="Ismail Industries Pvt Ltd, Karachi, PK"
            duration="10/2020 – 09/2021"
            points={[
              "Coordinated 3 major product releases under tight deadlines.",
              "Reduced critical production issues by 25% through risk assessments.",
              "Performed deep-dive debugging and failure forecasting.",
            ]}
          />

          <Experience
            role="Junior Software QA Engineer"
            company="Crescentic Digital Pvt Ltd, Karachi, PK"
            duration="11/2019 – 09/2020"
            points={[
              "Introduced Pre-understanding Sessions, reducing dev-test cycles by 30%.",
              "Implemented JMeter testing improving response time by 30%.",
            ]}
          />
        </section>

        {/* Education */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={sectionTitle}>Education</h2>
          <p style={paragraph}>
            <strong>M.Sc. Artificial Intelligence</strong> (2025 – Present)<br />
            Brandenburg University of Technology (BTU), Germany
          </p>
          <p style={paragraph}>
            <strong>B.S. Software Engineering</strong> (2015 – 2019)<br />
            Indus University, Karachi — <em>Gold Medalist</em>
          </p>
        </section>

        {/* Skills */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={sectionTitle}>Technical Skills</h2>
          <ul style={list}>
            <li>Automation & Testing: Selenium, Cucumber, Appium, Robot Framework, JMeter</li>
            <li>CI/CD & Tools: Jenkins, Postman, Git, Jira, Tricentis Tosca</li>
            <li>Programming: Java, JavaScript, Python, C/C++, SQL, PHP</li>
            <li>Databases: MongoDB, PostgreSQL</li>
            <li>Automotive/Embedded: CANoe, CANalyzer, Ethernet/CAN/LIN</li>
            <li>OS: Linux, Windows, Shell Scripting</li>
          </ul>
        </section>

        {/* Certifications */}
        <section>
          <h2 style={sectionTitle}>Certifications & Languages</h2>
          <p style={paragraph}>
            <strong>Certifications:</strong> JMeter & API Automation, Selenium UI Framework (Level 1)
          </p>
          <p style={paragraph}>
            <strong>Languages:</strong> English (Fluent), German (A2)
          </p>
        </section>
      </section>
    </main>
  );
}

function Experience({ role, company, duration, points }) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h3 style={{ marginBottom: "5px" }}>{role}</h3>
      <p style={{ color: "#93c5fd", fontSize: "14px" }}>
        {company} | {duration}
      </p>
      <ul style={list}>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

const sectionTitle = {
  fontSize: "24px",
  borderBottom: "1px solid #1e293b",
  paddingBottom: "10px",
  marginBottom: "20px",
};

const paragraph = {
  color: "#d1d5db",
  lineHeight: 1.7,
};

const list = {
  paddingLeft: "20px",
  color: "#d1d5db",
};
