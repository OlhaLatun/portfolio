const latestProjectsContainer = document.querySelector(".project-container");

projects.slice(0, 2).forEach((project) => {
  latestProjectsContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="project-card">
        <img src="${project.img}" alt="${project.title}" width="300px" />
        <h3>${project.title}</h3>
          <div class="tech-container">
          ${project.tech.map((item) => `<span>${item}</span>`).join("")}</div>
          <div class="description">${project.description}</div>
          <div class="project-links">
            <a href="${
              project.code
            }"><img src="./assets/code.png" alt="code-icon">Code</a>
            <a href="${
              project.demo
            }"><img src="./assets/demo.png" alt="demo-icon">Demo</a>
          </div>
      </div>`
  );
});
