

import React from "react";
import projects from "./data/projects";
import { useNavigate } from "react-router-dom";

function Donate() {
  const navigate = useNavigate();
  // Hover state for images and buttons
  const [hoveredImg, setHoveredImg] = React.useState(null);
  const [hoveredBtn, setHoveredBtn] = React.useState(null);
  return (
    <div style={{ maxWidth: 600, margin: "40px auto", color: "#fff" }}>
      <h2 style={{ textAlign: "center", marginBottom: 32, color: "#ffd600" }}>Danh sách dự án từ thiện</h2>
      {projects.map(project => (
        <div key={project.id} style={{ display: "flex", alignItems: "flex-start", border: "1px solid #ddd", borderRadius: 12, padding: 20, marginBottom: 24, background: "rgba(255,255,255,0.08)", boxShadow: "0 2px 8px 0 rgba(25, 118, 210, 0.04)", color: "#fff" }}>
          <img
            src={project.image}
            alt={project.name}
            style={{
              width: 120,
              height: 90,
              objectFit: "cover",
              borderRadius: 8,
              marginRight: 20,
              boxShadow: hoveredImg === project.id ? "0 4px 16px 0 rgba(25, 118, 210, 0.18)" : "0 1px 4px 0 rgba(25, 118, 210, 0.10)",
              transform: hoveredImg === project.id ? "scale(1.06)" : "scale(1)",
              transition: "box-shadow 0.2s, transform 0.18s"
            }}
            onMouseEnter={() => setHoveredImg(project.id)}
            onMouseLeave={() => setHoveredImg(null)}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0, color: "#ffd600", fontWeight: 700 }}>{project.name}</h3>
            <p style={{ margin: "8px 0 8px 0", color: "#ffd600" }}>{project.description}</p>
            <p style={{ margin: 0, color: "#ffd600" }}><b>Mục tiêu:</b> {project.targetAmount} MTK</p>
            <button
              style={{
                marginTop: 12,
                padding: "8px 18px",
                background: hoveredBtn === project.id ? "#b71c1c" : "#d32f2f",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                fontWeight: 600,
                boxShadow: hoveredBtn === project.id ? "0 4px 16px 0 rgba(211,47,47,0.18)" : "0 1px 4px 0 rgba(211,47,47,0.10)",
                transform: hoveredBtn === project.id ? "scale(1.07)" : "scale(1)",
                transition: "background 0.2s, box-shadow 0.2s, transform 0.18s"
              }}
              onMouseEnter={() => setHoveredBtn(project.id)}
              onMouseLeave={() => setHoveredBtn(null)}
              onClick={() => navigate(`/donate/${project.id}`)}
            >
              Quyên góp
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Donate;