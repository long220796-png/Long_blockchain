import React from "react";
import theme from "../theme";

function Contact() {
  return (
    <div style={{ ...theme.card, color: theme.colors.text, background: "rgba(255,255,255,0.08)" }}>
      <h2 style={{ color: "#ffd600" }}>Thông Tin Liên Hệ</h2>
      <p><b>Email:</b> long220796@student.nctu.edu.vn</p>
      <p><b>Hotline:</b> 0967974173</p>
      <p><b>Địa chỉ:</b> Trường đại học Nam Cần Thơ </p>
      <p><b>Facebook:</b> <a href="https://www.facebook.com/Long6368" target="_blank" rel="noopener noreferrer">facebook.com/charitydapp</a></p>
    </div>
  );
}

export default Contact;
