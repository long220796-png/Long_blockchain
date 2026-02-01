import React, { useState } from "react";
import "./pages/Home.css";
import projects from "./projects";
import { Link } from "react-router-dom";

const featuredProjects = projects.slice(0, 3);

export default function Home() {
  const [current, setCurrent] = useState(0);

  const nextProject = () => setCurrent((prev) => (prev + 1) % featuredProjects.length);
  const prevProject = () => setCurrent((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);

  return (
    <div className="charity-root">
      <nav className="charity-navbar">
        <div className="charity-navbar-logo">Long Hoa Charity</div>
        <div className="charity-navbar-links">
          <Link to="/" className="active">Trang chủ</Link>
          <Link to="/projects">Tất cả dự án</Link>
        </div>
      </nav>
      <section className="charity-hero">
        <h1>Chung tay xây dựng tương lai tốt đẹp hơn</h1>
        <p>
          Long Hoa Charity là nền tảng minh bạch, hiện đại giúp kết nối các nhà hảo tâm với những dự án thiện nguyện uy tín, sử dụng công nghệ blockchain để đảm bảo sự tin cậy và công khai.
        </p>
        <a href="#featured" className="charity-cta">Khám phá dự án nổi bật</a>
      </section>
      <section className="charity-section" id="featured">
        <h2>Dự án nổi bật</h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 24 }}>
          <button onClick={prevProject} aria-label="Dự án trước" style={{ background: "none", border: "none", fontSize: 32, color: "#ffd600", cursor: "pointer" }}>&lt;</button>
          <div className="charity-project-card">
            <img src={featuredProjects[current].image} alt={featuredProjects[current].name} />
            <div className="charity-project-content">
              <h3>{featuredProjects[current].name}</h3>
              <p>{featuredProjects[current].description}</p>
              <div className="charity-project-target">Mục tiêu: {featuredProjects[current].target} VNĐ</div>
              <Link to={`/donate/${featuredProjects[current].id}`} className="charity-donate-btn">Quyên góp</Link>
            </div>
          </div>
          <button onClick={nextProject} aria-label="Dự án tiếp theo" style={{ background: "none", border: "none", fontSize: 32, color: "#ffd600", cursor: "pointer" }}>&gt;</button>
        </div>
      </section>
      <section className="charity-section">
        <div className="about-section">
          <h2>Về chúng tôi</h2>
          <p>
            Long Hoa Charity là tổ chức phi lợi nhuận với sứ mệnh kết nối cộng đồng, lan tỏa yêu thương và hỗ trợ những hoàn cảnh khó khăn trên khắp Việt Nam. Chúng tôi ứng dụng công nghệ blockchain để đảm bảo mọi khoản quyên góp đều minh bạch, công khai và đến đúng người cần giúp đỡ.
          </p>
          <p>
            Tất cả dự án đều được kiểm duyệt kỹ lưỡng, cập nhật tiến độ thường xuyên và công khai số tiền quyên góp. Chúng tôi tin rằng sự minh bạch là nền tảng của niềm tin và sức mạnh cộng đồng.
          </p>
        </div>
      </section>
      <footer className="charity-section" style={{ marginBottom: 0 }}>
        <div style={{ textAlign: "center", color: "#ffd600", fontWeight: 600, fontSize: "1.1rem" }}>Liên hệ: longhoacharity@gmail.com | Địa chỉ: 123 Đường Thiện Nguyện, Quận 1, TP.HCM</div>
      </footer>
    </div>
  );
}
