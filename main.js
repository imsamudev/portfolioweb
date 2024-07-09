const navbarToggle = document.getElementById("navbarToggle");
const navbarLinks = document.getElementById("navbarLinks");

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// returnBtn to nav function
var btn = document.querySelector(".returnBtn");

window.onload = function () {
  btn.style.display = "none";
};

window.onscroll = function () {
  var navbar = document.querySelector(".navbar").offsetHeight;
  if (window.pageYOffset > navbar) {
    btn.style.display = "block";
    btn.style.transition = "opacity 0.5s";
    btn.style.opacity = "1";
  } else {
    btn.style.opacity = "0";
    setTimeout(function () {
      if (window.pageYOffset <= navbar) {
        btn.style.display = "none";
      }
    }, 500);
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// changetheme function
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector("#themeIcon");

  const currentTheme = localStorage.getItem("theme") || "light";
  setTheme(currentTheme);

  themeToggle.addEventListener("click", () => {
    const newTheme =
      localStorage.getItem("theme") === "light" ? "dark" : "light";
    setTheme(newTheme);
  });
});

function setTheme(theme) {
  const themeIcon = document.querySelector("#themeIcon");
  if (theme === "dark") {
    loadDarkTheme();
    themeIcon.classList.remove("bx-toggle-left");
    themeIcon.classList.add("bx-toggle-right");
  } else {
    removeDarkTheme();
    themeIcon.classList.remove("bx-toggle-right");
    themeIcon.classList.add("bx-toggle-left");
  }
  localStorage.setItem("theme", theme);
}

function loadDarkTheme() {
  if (!document.getElementById("dark-theme")) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "src/styles/dark-theme.css";
    link.id = "dark-theme";
    document.head.appendChild(link);
  }
}

function removeDarkTheme() {
  const link = document.getElementById("dark-theme");
  if (link) {
    document.head.removeChild(link);
  }
}

// accordion functionality
document.querySelectorAll(".accordion-button").forEach((element) => {
  element.addEventListener("click", function () {
    var content = this.nextElementSibling;
    if (window.innerWidth < 769) {
      this.classList.toggle("active");
      content.style.maxHeight = content.style.maxHeight
        ? null
        : content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "none";
    }
  });
});

// code js PROJECTS
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
