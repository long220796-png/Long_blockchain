import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: 32 }}>Danh sách dự án từ thiện</h2>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Home;
