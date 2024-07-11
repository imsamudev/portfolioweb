document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "JavaScript Quiz",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloremque nobis porro dolorum enim similique facilis nisi esse? Enim rem praesentium consequatur, perferendis magnam blanditiis, excepturi deserunt illo hic neque reiciendis quidem fugiat aperiam nam numquam quasi? Vitae repellat quaerat voluptatum a sunt eum quam mollitia, labore nesciunt, enim laborum quia, sed atque. Suscipit ad corrupti, minus in reiciendis impedit doloribus ratione similique veritatis eligendi repellendus ",
      coverImage: "./src/assets/img/projects/javascriptquiz.png", // Asegúrate de la ruta correcta
      role: "Desarrollador Frontend",
      contributions: "Desarrollé la interfaz de usuario",
      technologies: "HTML, CSS, JavaScript",
      observations: "",
    },
    {
      title: "NeonGames",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloremque nobis porro dolorum enim similique facilis nisi esse? Enim rem praesentium consequatur, perferendis magnam blanditiis, excepturi deserunt illo hic neque reiciendis quidem fugiat aperiam nam numquam quasi? Vitae repellat quaerat voluptatum a sunt eum quam mollitia, labore nesciunt, enim laborum quia, sed atque. Suscipit ad corrupti, minus in reiciendis impedit doloribus ratione similique veritatis eligendi repellendus velit eius unde, dignissimos harum repudiandae quisquam eos sunt fugit quos vitae. Ipsam distinctio nulla earum reiciendis ",
      coverImage: "./src/assets/img/projects/neongames.png", // Asegúrate de la ruta correcta
      role: "Desarrollador Backend",
      contributions: "Implementé la API",
      technologies: "Node.js, Express, MongoDB",
      observations: "Se realizaron mejoras en la seguridad",
    },
    // Agrega más proyectos aquí
  ];

  const projectsContainer = document.getElementById("projects-container");

  projects.forEach((project, projectIndex) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    const tabs = ["Rol", "Contribuciones", "Tecnologías", "Observaciones"];
    const tabsHtml = tabs
      .map(
        (tab, index) => `
            <div class="tab ${
              index === 0 ? "active" : ""
            }" data-project="${projectIndex}" data-tab="${index}">
                ${tab}
            </div>
        `
      )
      .join("");

    const contentsHtml = `
            <div class="tab-content ${
              0 === 0 ? "show" : ""
            }" data-project="${projectIndex}" data-content="0">
                ${project.role}
            </div>
            <div class="tab-content ${
              1 === 0 ? "show" : ""
            }" data-project="${projectIndex}" data-content="1">
                ${project.contributions}
            </div>
            <div class="tab-content ${
              2 === 0 ? "show" : ""
            }" data-project="${projectIndex}" data-content="2">
                ${project.technologies}
            </div>
            <div class="tab-content ${
              3 === 0 ? "show" : ""
            }" data-project="${projectIndex}" data-content="3">
                ${project.observations}
            </div>
        `;

    projectElement.innerHTML = `
            <h2 class="project-title" >${project.title}</h2>
            <p class="project-description">${project.description}</p>
            <img src="${project.coverImage}" alt="Cover project image" class="cover-image">
            <div class="tabs">${tabsHtml}</div>
            ${contentsHtml}
        `;

    projectsContainer.appendChild(projectElement);
  });

  projectsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab")) {
      const projectIndex = e.target.dataset.project;
      const tabIndex = e.target.dataset.tab;

      // Desactivar todas las pestañas y contenidos
      const tabs = document.querySelectorAll(
        `.tab[data-project="${projectIndex}"]`
      );
      tabs.forEach((tab, index) => {
        tab.classList.remove("active");
        document
          .querySelector(
            `.tab-content[data-project="${projectIndex}"][data-content="${index}"]`
          )
          .classList.remove("show");
      });

      // Activar la pestaña y contenido correspondientes
      e.target.classList.add("active");
      document
        .querySelector(
          `.tab-content[data-project="${projectIndex}"][data-content="${tabIndex}"]`
        )
        .classList.add("show");
    }
  });
});
