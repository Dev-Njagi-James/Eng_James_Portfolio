"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    image: "/pedu.png",
    title: "Pedu Rentals",
    description:
      "Rental marketplace connecting tenants and property listers. Listers can post properties; tenants can browse listings and contact listers directly. Built with Next.js and React, backed by PostgreSQL.",
    tools: [ "Next.js", "React", "PostgreSQL", "CSS" ],
    liveUrl: "https://www.pedurentals.com/",
    githubUrl: "https://github.com/Eng-James-Njagi/Golden-Rentals",
    categories: ["Marketplace"],
  },
  {
    id: 2,
    image: "/stravon.png",
    title: "Stravon Tech Labs — Company Website",
    description:
      "Designed and developed the official website for Stravon Tech Labs. Originally built with Node.js, EJS, and CSS, then migrated to Next.js with React for improved performance and maintainability.",
    tools: [ "Next.js", "React", "Node.js", "EJS", "CSS" ],
    liveUrl: "https://www.stravontechlabs.com/",
    githubUrl: "https://github.com/Eng-James-Njagi/Stravon_Tech_Labs",
    categories: ["Institutional Sites"],
  },
  {
    id: 3,
    image: "/muranga.png",
    title: "Murang'a TTI — Website Redesign",
    description:
      "Full redesign of the Murang'a Technical Training Institute website. Delivered a modern, maintainable platform with an integrated flat-file CMS architecture, session-based authentication, and structured MVC backend.",
    tools: [ "Node.js", "EJS", "HTML", "CSS", "JavaScript" ],
    liveUrl: "https://murangatti-website.vercel.app",
    githubUrl: "https://github.com/Eng-James-Njagi/MurangaTTI-schoolwebsite",
    categories: ["Institutional Sites"],
  },
  {
    id: 4,
    image: "/GSSM.jpg",
    title: "GSSSMS — Stock Management System",
    description:
      "Stock management system that tracks inventory records and automatically calculates profit, loss, and stock shortages. Built with Next.js and React.",
    tools: [ "Next.js", "React", "JavaScript", "CSS", "Postgres", "Supabase Auth" ],
    liveUrl: "#",
    githubUrl: "https://github.com/Eng-James-Njagi/GSSSMS",
    categories: ["Business Systems"],
  },
  {
    id: 5,
    image: "/romis.png",
    title: "ROMIS — Repository and Order Management System",
    description:
      "Order and inventory management system designed for a school environment. Students can practice real-world workflows, access resource recipes for classes, and generate passive revenue for the institution. Built with Node.js, EJS, and SQL.",
    tools: [ "Node.js", "EJS", "HTML", "CSS", "JavaScript", "SQL" ],
    liveUrl: "#",
    githubUrl: "#",
    categories: ["Business Systems"],
  },
 {
    id: 6,
    image: "/owlnest.png",
    title: "OWL NEST — Multi-Tenant SaaS Commerce Platform",
    description:
      "Flagship SaaS platform for Stravon Tech Labs unifying e-commerce, blogging, and ticket billing under one authenticated dashboard. Sub-apps activate independently with isolated data and UI. Built with Next.js, React, Supabase, and Clerk.",
    tools: ["Next.js", "React", "Supabase", "Clerk", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    categories: ["SaaS Platform"],
  },
];

const CARDS_PER_PAGE = 3;
const CATEGORIES = ["Marketplace", "Business Systems", "Institutional Sites", "SaaS Platform"];

export default function Projects() {
  const [ query, setQuery ] = useState("");
  const [ selectedCategories, setSelectedCategories ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);

  function toggleCategory(cat) {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [ ...prev, cat ]
    );
    setCurrentPage(0);
  }

  function handleFilter(e) {
    setQuery(e.target.value);
    setCurrentPage(0);
  }

  function goToPage(index) {
    setCurrentPage(index);
  }

  const filtered = projects.filter((p) => {
    const matchesText = !query
      ? true
      : [p.title, p.description, ...p.tools].some((field) =>
          field.toLowerCase().includes(query.toLowerCase())
        );

    const matchesCategories =
      selectedCategories.length === 0 ||
      p.categories.some((c) => selectedCategories.includes(c));

    return matchesText && matchesCategories;
  });

  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE);
  const slice = filtered.slice(currentPage * CARDS_PER_PAGE, currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE);

  return (
    <article id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-filter">
        <i className="fa-solid fa-sliders"></i>
        <input type="text" placeholder="Filter by Category" value={query} onChange={handleFilter} />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="category-chips">
        {CATEGORIES.map((cat) => {
          const active = selectedCategories.includes(cat);
          return (
            <button
              key={cat}
              className={`chip ${active ? "chip-active" : ""}`}
              onClick={() => toggleCategory(cat)}
            >
              {cat}
              {active && <span className="chip-remove">&times;</span>}
            </button>
          );
        })}
      </div>

      <div className="projects-grid">
        {slice.map((p, idx) => (
          <div key={p.id} className="project-card">
            <div className="project-image">
              <Image
                src={p.image}
                alt={p.title}
                width={400}
                height={250}
                priority={currentPage === 0 && idx === 0}
                loading={currentPage === 0 && idx === 0 ? "eager" : "lazy"}
              />
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
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="view-btn">View Project</a>
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
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