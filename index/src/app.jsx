import React from "react";

export default function Home() {
  return (
    <div
      style={{
        padding: "50px 20px",
        textAlign: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* Name and Title */}
      <h1
        style={{
          fontSize: "48px",
          color: "#2563eb",
          fontWeight: "bold",
          margin: "0",
        }}
      >
        SUFYAN KHALID
      </h1>
      <p
        style={{
          fontSize: "20px",
          color: "#64748b",
          marginTop: "10px",
        }}
      >
        Senior Software QA Engineer | M.Sc. AI Student
      </p>

      {/* Profile Image */}
      <div style={{ marginTop: "30px" }}>
        <img
          src="https://raw.githubusercontent.com/EngrSufyankhalid/sufyan-khalid/main/index/src/CXC-2025-1542-%20SUFYAN%20KHALID.png"
          alt="Sufyan Khalid"
          style={{
            width: "250px",
            height: "310px",
            objectFit: "cover",
            borderRadius: "50px",
            border: "10px solid #fff",
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
          }}
        />
      </div>

      {/* Social Buttons */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://www.linkedin.com/in/sufyan-khalid-b12322188"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#0077b5",
            color: "white",
            padding: "15px 30px",
            borderRadius: "15px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/EngrSufyankhalid"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#333",
            color: "white",
            padding: "15px 30px",
            borderRadius: "15px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          GitHub
        </a>
      </div>

      {/* Experience Section */}
      <div
        style={{
          marginTop: "50px",
          background: "white",
          padding: "40px",
          borderRadius: "30px",
          maxWidth: "800px",
          margin: "50px auto",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          textAlign: "left",
        }}
      >
        <h2
          style={{
            color: "#1e293b",
            borderBottom: "2px solid #f1f5f9",
            paddingBottom: "15px",
            marginBottom: "20px",
          }}
        >
          Professional Experience
        </h2>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ margin: "0", color: "#2563eb" }}>
            Senior Software QA Engineer
          </h3>
          <p style={{ margin: "5px 0", fontWeight: "bold" }}>
            Bykea Technologies • 2021 – 2025
          </p>
          <p style={{ color: "#64748b", fontSize: "14px" }}>
            Lead QA for 20+ major product launches. Specialized in automation.
          </p>
        </div>

        <div>
          <h3 style={{ margin: "0", color: "#2563eb" }}>
            Software QA Engineer
          </h3>
          <p style={{ margin: "5px 0", fontWeight: "bold" }}>
            Ismail Industries • 2020 – 2021
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div
        style={{
          background: "#1e293b",
          color: "white",
          padding: "40px",
          borderRadius: "30px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            borderBottom: "1px solid #334155",
            paddingBottom: "10px",
          }}
        >
          Education
        </h2>
        <p>
          <strong>M.Sc. Artificial Intelligence</strong> – BTU Cottbus, Germany
        </p>
        <p>
          <strong>B.S. Software Engineering</strong> – Indus University
          (Gold Medalist)
        </p>
      </div>

      <footer
        style={{
          marginTop: "50px",
          color: "#94a3b8",
          fontSize: "12px",
        }}
      >
        © 2026 Sufyan Khalid • Built with Next.js & React
      </footer>
    </div>
  );
}
