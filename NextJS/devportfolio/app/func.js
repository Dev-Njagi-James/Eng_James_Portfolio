"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    image: "/project1.jpg",
    title: "Murang'a Technical Website Redesign",
    description: "Website designed to lighten the load of arranging goods to customers with inbuilt custom quote",
    tools: ["React"],
    liveUrl: "#",
    githubUrl: "#",
    category: "React",
  },
  {
    id: 2,
    image: "/project2.jpg",
    title: "Project Two",
    description: "Website designed to lighten the load of arranging goods to customers with inbuilt custom quote",
    tools: ["Vue", "Node"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Vue",
  },
  {
    id: 3,
    image: "/project3.jpg",
    title: "Project Three",
    description: "Website designed to lighten the load of arranging goods to customers with inbuilt custom quote",
    tools: ["JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    category: "JavaScript",
  },
  {
    id: 4,
    image: "/project4.jpg",
    title: "Project Four",
    description: "Another project description goes here for the fourth entry.",
    tools: ["React", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    category: "React",
  },
  {
    id: 5,
    image: "/project5.jpg",
    title: "Project Five",
    description: "Another project description goes here for the fifth entry.",
    tools: ["Next.js"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Next.js",
  },
];

const CARDS_PER_PAGE = 3;

export default function Projects() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const filtered = query
    ? projects.filter((p) => p.category.toLowerCase().includes(query.toLowerCase()))
    : projects;

  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE);
  const slice = filtered.slice(currentPage * CARDS_PER_PAGE, currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE);

  function handleFilter(e) {
    setQuery(e.target.value);
    setCurrentPage(0);
  }

  function goToPage(index) {
    setCurrentPage(index);
  }

  return (
    <article id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-filter">
        <i className="fa-solid fa-sliders"></i>
        <input type="text" placeholder="Filter by Category" value={query} onChange={handleFilter} />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="projects-grid">
        {slice.map((p) => (
          <div key={p.id} className="project-card">
            <div className="project-image">
              <Image src={p.image} alt={p.title} width={400} height={250} />
            </div>
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tools">
                <span className="tools-label">Tools</span>
                <div className="tool-tags">
                  {p.tools.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <a href={p.liveUrl} className="view-btn">View Project</a>
                <a href={p.githubUrl} className="github-link">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-pagination">
        <button
          className="page-btn btn-prev"
          disabled={currentPage === 0}
          onClick={() => goToPage(currentPage - 1)}
        >
          ← Prev
        </button>

        <div className="page-dots">
          {Array.from({ length: totalPages }, (_, i) => (
            <span
              key={i}
              className={`dot ${i === currentPage ? "active" : ""}`}
              onClick={() => goToPage(i)}
            />
          ))}
        </div>

        <button
          className="page-btn btn-next"
          disabled={currentPage >= totalPages - 1}
          onClick={() => goToPage(currentPage + 1)}
        >
          Next →
        </button>
      </div>
    </article>
  );
}