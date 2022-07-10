const latestProjectsContainer = document.querySelector(".project-container");
const projectPlaceholder = document.querySelector(".project-placeholder");
const experienceContainer = document.querySelector(".experience");

function renderProjects() {
  if (location.pathname === "/portfolio.html") renderPortfolio();
  if (location.pathname === "/index.html") renderHomepage();
  if (location.pathname === "/about.html") renderExperience();
}

function renderHomepage() {
  projects.slice(0, 2).forEach((project) => {
    latestProjectsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="project-card m-lg-3">
        <img class="img-fluid rounded" src="${project.img}" alt="${
        project.title
      }" width="300px" />
        <h3>${project.title}</h3>
          <div class="tech-container">
          ${project.tech.map((item) => `<span>${item}</span>`).join("")}</div>
          <div class="description">${project.description}</div>
          <div class="project-links">
            <a href="${
              project.code
            }" target="blank"><img src="./assets/code.png" alt="code-icon">Code</a>
            <a href="${
              project.demo
            }" target="blank"><img src="./assets/demo.png" alt="demo-icon">Demo</a>
          </div>
      </div>`
    );
  });
}

function renderPortfolio() {
  projects.forEach((project) => {
    projectPlaceholder.insertAdjacentHTML(
      "beforeend",
      `<div class="row mb-5 portfolio-project-card">
    <div class="text-end col-md-4">
        <img class='bg-custom p-lg-2 img-fluid rounded' src="${
          project.img
        }" alt="${project.title}" width="300px" />
    </div>   
      <div class="col-md-8">
        <h3>${project.title}</h3>
          <div class="tech-container">
          ${project.tech.map((item) => `<span>${item}</span>`).join("")}</div>
          <div class="description">${project.description}</div>
          <div class="project-links">
            <a href="${
              project.code
            }" target="blank"><img src="./assets/code.png" alt="code-icon">Code</a>
            <a href="${
              project.demo
            }" target="blank"><img src="./assets/demo.png" alt="demo-icon">Demo</a>
          </div>
      </div>
      </div>`
    );
  });
}

function renderExperience() {
  experience.forEach((item) => {
    experienceContainer.insertAdjacentHTML("beforeend", `<span>${item}</span>`);
  });
}

renderProjects();
