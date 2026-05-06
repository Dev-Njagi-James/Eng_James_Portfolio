"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    image: "/project1.jpg",
    title: "Golden Rentals",
    description:
      "Rental marketplace connecting tenants and property listers. Listers can post properties; tenants can browse listings and contact listers directly. Built with Next.js and React, backed by PostgreSQL.",
    tools: ["Next.js", "React", "PostgreSQL", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Eng-James-Njagi/Golden-Rentals",
    category: "Next.js",
  },
  {
    id: 2,
    image: "/project2.jpg",
    title: "Stravon Tech Labs — Company Website",
    description:
      "Designed and developed the official website for Stravon Tech Labs. Originally built with Node.js, EJS, and CSS, then migrated to Next.js with React for improved performance and maintainability.",
    tools: ["Next.js", "React", "Node.js", "EJS", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Eng-James-Njagi/Stravon_Tech_Labs",
    category: "Next.js",
  },
  {
    id: 3,
    image: "/project3.jpg",
    title: "Stravon CMS — Internal Content Management System",
    description:
      "Internal CMS built for the Stravon Tech Labs team to generate and distribute social media content. Team members can create, manage, and share content across platforms. Built with Next.js, React, and MongoDB.",
    tools: ["Next.js", "React", "MongoDB", "JavaScript", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Eng-James-Njagi/Stravon_CMS",
    category: "Next.js",
  },
  {
    id: 4,
    image: "/project4.jpg",
    title: "ROMIS — Repository and Order Management System",
    description:
      "Order and inventory management system designed for a school environment. Students can practice real-world workflows, access resource recipes for classes, and generate passive revenue for the institution. Built with Node.js, EJS, and SQL.",
    tools: ["Node.js", "EJS", "HTML", "CSS", "JavaScript", "SQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "JavaScript",
  },
  {
    id: 5,
    image: "/project5.jpg",
    title: "Murang'a TTI — Website Redesign",
    description:
      "Full redesign of the Murang'a Technical Training Institute website. Delivered a modern, maintainable platform with an integrated flat-file CMS architecture, session-based authentication, and structured MVC backend.",
    tools: ["Node.js", "EJS", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://murangatti-website.vercel.app",
    githubUrl: "https://github.com/Eng-James-Njagi/MurangaTTI-schoolwebsite",
    category: "JavaScript",
  },
  {
    id: 6,
    image: "/project6.jpg",
    title: "GSSSMS — Stock Management System",
    description:
      "Stock management system that tracks inventory records and automatically calculates profit, loss, and stock shortages. Built with Next.js and React.",
    tools: ["Next.js", "React", "JavaScript", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Eng-James-Njagi/GSSSMS",
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