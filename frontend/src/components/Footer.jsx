import React from "react";

function Footer() {
  return (
    <footer style={{
      background: "#111",
      color: "#fff",
      padding: "32px 0 20px 0",
      marginTop: 0,
      textAlign: "center"
    }}>
      <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>
        Kết Nối Yêu Thương – Lan Tỏa Hy Vọng
      </div>
      <div style={{ marginBottom: 8 }}>
        <b>Liên hệ:</b> charity.dapp@example.com | 0123 456 789
      </div>
      <a
        href="https://www.facebook.com/Long6368"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          background: "#1976d2",
          color: "#fff",
          padding: "8px 22px",
          borderRadius: 8,
          fontWeight: 600,
          textDecoration: "none",
          fontSize: 16,
          marginTop: 8,
          boxShadow: "0 1px 4px 0 rgba(25, 118, 210, 0.10)",
          transition: "background 0.2s, transform 0.15s"
        }}
        onMouseOver={e => e.currentTarget.style.background = "#0d47a1"}
        onMouseOut={e => e.currentTarget.style.background = "#1976d2"}
      >
        Facebook
      </a>
      <div style={{ marginTop: 18, fontSize: 13, color: "#bbb" }}>
        &copy; {new Date().getFullYear()} Charity DApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;