import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 20, marginBottom: 20, background: "#fafbfc" }}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div style={{ marginTop: 12 }}>
        <Link to={`/donate/${project.id}`}>
          <button style={{ padding: "8px 18px", background: "#1976d2", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}>
            Quyên góp
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
