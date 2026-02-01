import React, { useState } from "react";
import projects from "../data/projects";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const featured = projects.filter(p => p.status === "active");
  const [current, setCurrent] = useState(0);
  const total = featured.length;

  const handlePrev = () => setCurrent(current === 0 ? total - 1 : current - 1);
  const handleNext = () => setCurrent(current === total - 1 ? 0 : current + 1);

  return (
    <div style={{ width: "100vw", margin: "40px 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ textAlign: "center", marginBottom: 32, color: "#ffd600" }}>Dự án nổi bật</h2>
      <div style={{ width: "100%", maxWidth: 700, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <div style={{ width: "100%", border: "1px solid #ddd", borderRadius: 12, padding: 20, margin: "0 0 24px 0", background: "rgba(255,255,255,0.08)", boxShadow: "0 2px 8px 0 rgba(25, 118, 210, 0.04)", color: "#fff", display: "flex", alignItems: "flex-start" }}>
          <img
            src={featured[current].image}
            alt={featured[current].name}
            style={{ width: 120, height: 90, objectFit: "cover", borderRadius: 8, marginRight: 20, boxShadow: "0 1px 4px 0 rgba(25, 118, 210, 0.10)" }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0, color: "#ffd600", fontWeight: 700 }}>{featured[current].name}</h3>
            <p style={{ margin: "8px 0 8px 0", color: "#ffd600" }}>{featured[current].description}</p>
            <p style={{ margin: 0, color: "#ffd600" }}><b>Mục tiêu:</b> {featured[current].targetAmount} MTK</p>
            <button
              style={{
                marginTop: 12,
                padding: "8px 18px",
                background: "#d32f2f",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                fontWeight: 600,
                boxShadow: "0 1px 4px 0 rgba(211,47,47,0.10)",
                transition: "background 0.2s, box-shadow 0.2s, transform 0.18s"
              }}
              onClick={() => navigate(`/donate/${featured[current].id}`)}
            >
              Quyên góp
            </button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 24, marginBottom: 16 }}>
          <button onClick={handlePrev} style={{ padding: "8px 18px", background: "#ffd600", color: "#222", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 18, cursor: "pointer" }}>&lt;</button>
          <span style={{ color: "#ffd600", fontWeight: 700, fontSize: 18 }}>{current + 1} / {total}</span>
          <button onClick={handleNext} style={{ padding: "8px 18px", background: "#ffd600", color: "#222", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 18, cursor: "pointer" }}>&gt;</button>
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "32px 0" }}>
        <button
          style={{ padding: "10px 32px", background: "#ffd600", color: "#222", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 18, cursor: "pointer", boxShadow: "0 2px 8px 0 rgba(25, 118, 210, 0.08)" }}
          onClick={() => navigate("/all-projects")}
        >
          Xem tất cả dự án cần quyên góp
        </button>
      </div>
      <div style={{ width: "100vw", margin: "0 0 32px 0", padding: "0 0", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: 900 }}>
          <h2 style={{ color: "#ffd600", marginBottom: 12, textAlign: "justify" }}>Về Chúng Tôi</h2>
          <h3 style={{ color: "#ffd600", marginBottom: 8, textAlign: "justify" }}>Kết Nối Yêu Thương – Lan Tỏa Hy Vọng</h3>
          <p style={{ color: "#fff", fontSize: 17, marginBottom: 12, textAlign: "justify" }}>
            Trong thời đại công nghệ số, việc trao đi sự tử tế không nhất thiết phải bắt đầu từ những điều lớn lao, mà có thể khởi nguồn ngay từ những chạm tay trên màn hình điện thoại. Với tâm huyết mang đến một cầu nối minh bạch và hiệu quả giữa những tấm lòng hảo tâm và những hoàn cảnh khó khăn, chúng tôi – đội ngũ sáng lập gồm <b>Dương Quang Long</b>, <b>Nguyễn Khánh Duy</b> và <b>Ô Vĩnh Phúc</b> – đã cùng nhau tạo nên ứng dụng thiện nguyện này.
          </p>
          <h4 style={{ color: "#ffd600", marginBottom: 8, textAlign: "justify" }}>Sứ mệnh của chúng tôi</h4>
          <ul style={{ color: "#fff", fontSize: 16, marginBottom: 12, textAlign: "justify" }}>
            <li>Minh bạch là cốt lõi: Mọi sự đóng góp đều được công khai và cập nhật theo thời gian thực.</li>
            <li>Kết nối trực tiếp: Rút ngắn khoảng cách giữa người trao và người nhận.</li>
            <li>Cộng đồng bền vững: Nơi những trái tim ấm nóng gặp gỡ và cùng nhau tạo nên thay đổi tích cực.</li>
          </ul>
          <h4 style={{ color: "#ffd600", marginBottom: 8, textAlign: "justify" }}>Đội ngũ phát triển</h4>
          <p style={{ color: "#fff", fontSize: 17, marginBottom: 12, textAlign: "justify" }}>
            Sự kết hợp giữa tư duy chiến lược của <b>Dương Quang Long</b>, khả năng thực thi kỹ thuật của <b>Nguyễn Khánh Duy</b> và góc nhìn nhân sinh sâu sắc từ <b>Ô Vĩnh Phúc</b> đã giúp dự án không chỉ là một sản phẩm công nghệ, mà là một hành trình kết nối đầy cảm xúc.
          </p>
          <blockquote style={{ color: "#ffd600", fontStyle: "italic", marginBottom: 12, textAlign: "justify" }}>
            "Chúng tôi không chỉ xây dựng một ứng dụng, chúng tôi xây dựng một niềm tin."
          </blockquote>
          <p style={{ color: "#fff", fontSize: 17, marginBottom: 12, textAlign: "justify" }}>
            Dự án Charity DApp giúp kết nối các nhà hảo tâm với các dự án thiện nguyện một cách minh bạch, nhanh chóng và an toàn trên nền tảng blockchain Hedera.<br />
            Chúng tôi cam kết xây dựng một hệ sinh thái quyên góp phi tập trung, nơi mọi giao dịch đều được ghi nhận công khai và không thể chỉnh sửa.<br />
            Mọi đóng góp của bạn đều được trân trọng và chuyển trực tiếp đến các dự án ý nghĩa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
