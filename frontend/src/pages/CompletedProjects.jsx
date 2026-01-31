import React from "react";
import projects from "../data/projects";

// Tạo ngày hoàn thành giả lập cho các dự án hoàn thành
function getCompletedProjects() {
  // Danh sách ngày hoàn thành mẫu
  const endDates = [
    "2024-06-20",
    "2024-09-10",
    "2024-08-05",
    "2025-01-15",
    "2025-03-10"
  ];
  let idx = 0;
  return projects
    .filter(p => p.status === "completed")
    .map(p => ({
      ...p,
      startDate: "2024-01-01",
      endDate: endDates[idx++] || "2025-06-01"
    }));
}

function CompletedProjects() {
  const completedProjects = getCompletedProjects();
  return (
    <div style={{ minHeight: "100vh", background: "#46608a", color: "#ffd600", padding: 32 }}>
      <div style={{ maxWidth: 700, margin: "40px auto", background: "#c9c5bb", borderRadius: 14, boxShadow: "0 2px 12px 0 rgba(25, 118, 210, 0.06)", padding: 28 }}>
        <h2 style={{ color: "#fff", textAlign: "center", marginBottom: 24 }}>Dự án đã hoàn thành</h2>
        {completedProjects.map(project => (
          <div key={project.id} style={{ display: "flex", alignItems: "flex-start", border: "1px solid #ddd", borderRadius: 12, padding: 20, marginBottom: 24, background: "rgba(255,255,255,0.08)", boxShadow: "0 2px 8px 0 rgba(25, 118, 210, 0.04)", color: "#fff" }}>
            <img
              src={project.image}
              alt={project.name}
              style={{ width: 120, height: 90, objectFit: "cover", borderRadius: 8, marginRight: 20, boxShadow: "0 1px 4px 0 rgba(25, 118, 210, 0.10)" }}
            />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0, color: "#fff", fontWeight: 700 }}>{project.name}</h3>
              <p style={{ margin: "8px 0 8px 0", color: "#fff" }}>{project.description}</p>
              <p style={{ margin: 0, color: "#fff" }}>
                <b>Ngày đăng:</b> {project.startDate} &nbsp; | &nbsp;
                <b>Hoàn thành:</b> {project.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompletedProjects;
