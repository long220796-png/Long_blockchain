import React from "react";

function Footer() {
  return (
    <footer style={{ background: "#111", color: "#fff", padding: "32px 0px 20px", textAlign: "center", marginTop: 0 }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2 style={{ color: "#ffd600", marginBottom: 12 }}>Thông Tin Liên Hệ</h2>
        <p style={{ color: "#fff", fontSize: 17 }}>
          Email: long220796@student.nctu.edu.vn<br />
          Hotline: 0967974173<br />
          Địa chỉ: Trường đại học Nam Cần Thơ<br />
          Facebook: <a href="https://facebook.com/charitydapp" style={{ color: "#ffd600" }} target="_blank" rel="noopener noreferrer">facebook.com/charitydapp</a>
        </p>
      </div>
      <div style={{ marginTop: 24, color: "#ffd600", fontWeight: 600, fontSize: 15 }}>
        © 2026 Charity DApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
