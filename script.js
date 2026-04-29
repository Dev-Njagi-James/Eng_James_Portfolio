const projects = [
  {
    id: 1,
    image: "/public/project1.jpg",
    title: "Trainers Logistics",
    description: "Website designed to lighten the load of arranging goods to customers with inbuilt custom quote",
    tools: ["React"],
    liveUrl: "#",
    githubUrl: "#",
    category: "React"
  },
  {
    id: 2,
    image: "/public/project2.jpg",
    title: "Project Two",
    description: "Website designed to lighten the load of arranging goods to customers with inbuilt custom quote",
    tools: ["Vue", "Node"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Vue"
  },
  {
    id: 3,
    image: "/public/project3.jpg",
    title: "Project Three",
    description: "Website designed to lighten the load of arranging goods to customers with inbuilt custom quote",
    tools: ["JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    category: "JavaScript"
  },
  {
    id: 4,
    image: "/public/project4.jpg",
    title: "Project Four",
    description: "Another project description goes here for the fourth entry.",
    tools: ["React", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    category: "React"
  },
  {
    id: 5,
    image: "/public/project5.jpg",
    title: "Project Five",
    description: "Another project description goes here for the fifth entry.",
    tools: ["Next.js"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Next.js"
  }
];

const CARDS_PER_PAGE = 3;
let currentPage = 0;
let filtered = [...projects];

function renderCards() {
  const grid = document.querySelector(".projects-grid");
  const start = currentPage * CARDS_PER_PAGE;
  const slice = filtered.slice(start, start + CARDS_PER_PAGE);

  grid.innerHTML = slice.map(p => `
    <div class="project-card">
      <div class="project-image">
        <img src="${p.image}" alt="${p.title}" />
      </div>
      <div class="project-info">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tools">
          <span class="tools-label">Tools</span>
          <div class="tool-tags">
            ${p.tools.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
        <div class="project-actions">
          <a href="${p.liveUrl}" class="view-btn">View Project</a>
          <a href="${p.githubUrl}" class="github-link"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  `).join("");

  renderDots();
  updatePaginationButtons();
}

function totalPages() {
  return Math.ceil(filtered.length / CARDS_PER_PAGE);
}

function renderDots() {
  const dotsContainer = document.querySelector(".page-dots");
  dotsContainer.innerHTML = Array.from({ length: totalPages() }, (_, i) => `
    <span class="dot ${i === currentPage ? "active" : ""}" data-page="${i}"></span>
  `).join("");

  dotsContainer.querySelectorAll(".dot").forEach(dot => {
    dot.addEventListener("click", () => {
      currentPage = parseInt(dot.dataset.page);
      renderCards();
    });
  });
}

function updatePaginationButtons() {
  document.querySelector(".btn-prev").disabled = currentPage === 0;
  document.querySelector(".btn-next").disabled = currentPage >= totalPages() - 1;
}

document.querySelector(".btn-prev").addEventListener("click", () => {
  if (currentPage > 0) { currentPage--; renderCards(); }
});

document.querySelector(".btn-next").addEventListener("click", () => {
  if (currentPage < totalPages() - 1) { currentPage++; renderCards(); }
});

document.querySelector(".projects-filter input").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  filtered = projects.filter(p => p.category.toLowerCase().includes(query));
  currentPage = 0;
  renderCards();
});

renderCards();