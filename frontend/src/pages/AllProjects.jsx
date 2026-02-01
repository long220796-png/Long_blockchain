import React from "react";
import projects from "../data/projects";
import { useNavigate } from "react-router-dom";

function AllProjects() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 700, margin: "40px auto", color: "#fff" }}>
      <h2 style={{ textAlign: "center", marginBottom: 32, color: "#ffd600" }}>Tất cả dự án cần quyên góp</h2>
      {projects.filter(p => p.status === "active").map(project => (
        <div key={project.id} style={{ display: "flex", alignItems: "flex-start", border: "1px solid #ddd", borderRadius: 12, padding: 20, marginBottom: 24, background: "rgba(255,255,255,0.08)", boxShadow: "0 2px 8px 0 rgba(25, 118, 210, 0.04)", color: "#fff" }}>
          <img
            src={project.image}
            alt={project.name}
            style={{ width: 120, height: 90, objectFit: "cover", borderRadius: 8, marginRight: 20, boxShadow: "0 1px 4px 0 rgba(25, 118, 210, 0.10)" }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0, color: "#ffd600", fontWeight: 700 }}>{project.name}</h3>
            <p style={{ margin: "8px 0 8px 0", color: "#ffd600" }}>{project.description}</p>
            <p style={{ margin: 0, color: "#ffd600" }}><b>Mục tiêu:</b> {project.targetAmount} MTK</p>
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

export default AllProjects;
