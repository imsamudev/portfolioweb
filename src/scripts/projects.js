document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "JavaScript Quiz",
      description:
        "Durante mi capacitación en Codo a Codo, tuve la iniciativa de desarrollar un Quiz destinado a programadores principiantes, con el objetivo de compartirlo con mis compañeros de clase. Este proyecto ofrece una plataforma interactiva para evaluar y reforzar los conocimientos en JavaScript de manera lúdica y educativa. A través de una serie de preguntas específicas sobre el lenguaje, los usuarios pueden seleccionar las respuestas que consideren correctas. Al finalizar el quiz, se proporciona retroalimentación detallada sobre las respuestas y se muestra la puntuación final, permitiendo a los participantes identificar sus fortalezas y áreas de mejora.",
      coverImage: "./src/assets/img/projects/javascriptquiz.png",
      role: [
        "Desarrollo invididual completo.",
        "Desarrollo Frontend y diseño.",
        "Lógica y Funcionalidad.",
        "Interactividad, mejor experiencia UX.",
      ],
      contributions: [
        "Diseño UI/UX: Diseñé la interfaz de usuario asegurando una experiencia amigable y atractiva.",
        "Implementación de lógica: Desarrollé la lógica del quiz en JavaScript, incluyendo la carga y manejo de preguntas, y el sistema de puntuación.",
        "Optimización de código: Mejoré el rendimiento y la legibilidad del código, asegurando su mantenibilidad.",
        "Testing y Debugging: Realicé pruebas exhaustivas y depuración para asegurar el correcto funcionamiento de todas las funcionalidades mediante Chrome.",
      ],
      technologies: [
        { name: "HTML5", img: "./src/assets/img/stack/HTML.svg" },
        { name: "CSS3", img: "./src/assets/img/stack/CSS3.svg" },
        { name: "JavaScript", img: "./src/assets/img/stack/JAVASCRIPT.svg" },
        { name: "JSON", img: "./src/assets/img/stack/JSON.svg" },
        { name: "Git", img: "./src/assets/img/stack/GIT.svg" },
        { name: "Github", img: "./src/assets/img/stack/GITHUB.svg" },
      ],
      observations: [
        "Aprendizaje: El desarrollo de este primer proyecto me permitió profundizar en JavaScript y mejorar mis habilidades en frontend.",
        "Desafíos: Enfrenté y resolví desafíos relacionados con la gestión de estado y la dinámica del contenido.",
        "Mejoras futuras: Considero agregar más preguntas, mejorar la aleatoriedad de las mismas, quizás integrar una base de datos para manejar mejor el contenido. Mejor optimización del código e indispensable LocalStorage para mejorar experiencia UX.",
      ],
      repoLink: "https://github.com/imsamudev/basic-quiz-javascript",
      deployLink: "https://imsamudev.github.io/basic-quiz-javascript/",
    },
    {
      title: "NeonGames",
      description:
        "He tenido la oportunidad de participar en un proyecto colaborativo junto a profesionales durante mi capacitación en Codo a Codo. Este proyecto tiene como objetivo crear una tienda online utilizando tecnologías como HTML, CSS, Vanilla JavaScript, SQL, NodeJS y ExpressJS para presentar en el Curso. El proyecto se despliega tanto en frontend como en backend, ofreciendo una experiencia completa de aprendizaje y desarrollo colaborativo. Cuenta con un atractivo Home con carruseles promocionando productos destacados, un Login y, ¿Hay carrito funcional? ¡Claro que sí! También contamos con secciones de productos, acerca de nosotros, contacto e inclusive... ¡Un Dashboard! Adelante, ¡Échale un vistazo!",
      coverImage: "./src/assets/img/projects/neongames.png",
      role: [
        "Desarrollo en equipo.",
        "Desarrollo frontend.",
        "Desarrollo backend.",
      ],
      contributions: [
        "Frontend: <br> - HOME: Desarrollé una página principal con un fondo degradado, un billboard con novedades, y carruseles promocionales de juegos. Implementé tarjetas de juegos y aseguré que todo fuera completamente responsive con swipe en carruseles cuando el usuario se encuentre en un dispositivo móvil. <br> - Componentes globales: Desarrollé una barra de navegación, un botón de retroceso a la misma, un footer y le di una pizca de estética al scrollbar al menos en Chrome. <br> - Login: Añadí un modal de login en la página principal que también permite redirigir a un modal de registro para nuevos usuarios. <br> - Productos: Desarrollé la primera versión de sección de productos con un formato estático de tarjetas. <br> - Imágenes: Gestioné las ilustraciones de productos en formato webp, primero localmente y luego utilizando Cloudinary para el alojamiento.",
        "Backend: <br> - Base de Datos: Creé una base de datos con cinco tablas relacionadas para manejar categorías, productos, usuarios, pedidos y detalles de pedidos. Usé mysql2 para la interacción y dotenv para la configuración de variables de entorno. <br> - Servidor: Configuré el servidor inicial con Express, definiendo el puerto y asegurando la conexión a la base de datos, con mensajes de inicio en consola. <br> - CRUD de Usuarios: Desarrollé funciones para actualizar y eliminar usuarios, así mismo actualicé las rutas correspondientes en el Router de Usuarios. <br> - Autenticación: Implementé servicios de autenticación y validación, manejando loginUser y registerUser para gestionar inicio de sesión y registro de usuarios, incluyendo almacenamiento de tokens y manejo de errores.",
      ],
      technologies: [
        { name: "HTML5", img: "./src/assets/img/stack/HTML.svg" },
        { name: "CSS3", img: "./src/assets/img/stack/CSS3.svg" },
        { name: "JavaScript", img: "./src/assets/img/stack/JAVASCRIPT.svg" },
        { name: "Vite", img: "./src/assets/img/stack/VITE.svg" },
        { name: "NodeJS", img: "./src/assets/img/stack/NODEJS.svg" },
        { name: "NPM", img: "./src/assets/img/stack/NPM.svg" },
        { name: "ExpressJS", img: "./src/assets/img/stack/EXPRESS.svg" },
        { name: "MYSQL", img: "./src/assets/img/stack/MYSQL.svg" },
        { name: "Laragon", img: "./src/assets/img/stack/LARAGON.svg" },
        { name: "JSON", img: "./src/assets/img/stack/JSON.svg" },
        { name: "Git", img: "./src/assets/img/stack/GIT.svg" },
        { name: "Github", img: "./src/assets/img/stack/GITHUB.svg" },
        { name: "Vercel", img: "./src/assets/img/stack/VERCEL.svg" },
      ],
      observations: [
        "General: Aún en desarrollo, se cumplió con creces los requerimientos del curso.",
        "Aprendizaje: El desarrollo de este proyecto me permitió aprender backend y mejorar mis habilidades también en frontend. Una gran oportunidad donde consolidé mis habilidades blandas al trabajar en equipo, optimizando también el uso de control de versiones y marco de trabajo SCRUM.",
        "Desafíos: Enfrenté y resolví desafíos nunca antes vistos, la creación y manejo de base de datos, servidores, conexiones, controladores, rutas, herramientas de backend, ¡La creación de una API! ¡Era todo absolutamente nuevo para mí! Pero gracias a profesionales compañeros y asesoría del profesor de CaC, ¡Logro completado! Proyecto muy nutritivo en aprendizaje para mí.",
        "Mejoras futuras: Consideramos pulir Dashboard para el acceso estricto sólo a administradores, también manejar el contenido del Home desde aquí mismo. Mejorar y optimizar funciones de login, register y base de datos. Nuestra intención es desarrollarlo por completo como una tienda ecommerce falsa 100% funcional y optimizada. Oh, ¿Dije falsa? Ya lo veremos.",
        "Créditos: Un profundo agradecimiento a mis compañeros de equipo por éste enriquecimiento de recursos y aprendizaje no sólo en habilidades técnicas, sino también en las habilidades blandas. Agradecer también al mismo curso Codo a Codo donde profesionales como JePaFe y su equipo, me brindaron la oportunidad de aprender y crecer.",
      ],
      repoLink: "https://github.com/grupo-30-codo-a-codo/neon-games",
      deployLink: "https://neongames-deploy.vercel.app/",
    },
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

    const technologiesHtml = project.technologies
      .map(
        (tech) => `
          <div class="tech-item">
            <img src="${tech.img}" alt="${tech.name} icon" class="tech-image">
          </div>
      `
      )
      .join("");

    const contentsHtml = `
          <div class="tab-content ${
            0 === 0 ? "show" : ""
          }" data-project="${projectIndex}" data-content="0">
              <ul>${project.role
                .map((item) => `<li>${item}</li>`)
                .join("")}</ul>
          </div>
          <div class="tab-content" data-project="${projectIndex}" data-content="1">
              <ul>${project.contributions
                .map((item) => `<li>${item}</li>`)
                .join("")}</ul>
          </div>
          <div class="tab-content" data-project="${projectIndex}" data-content="2">
              ${technologiesHtml}
          </div>
          <div class="tab-content" data-project="${projectIndex}" data-content="3">
              <ul>${project.observations
                .map((item) => `<li>${item}</li>`)
                .join("")}</ul>
          </div>
      `;

    projectElement.innerHTML = `
        <h2 class="project-title">${project.title}</h2>
        <p class="project-description">${project.description}
         <img src="${project.coverImage}" alt="Cover project image" class="cover-image">
        <a href="${project.deployLink}" target="_blank">Pruébalo</a>
        <a href="${project.repoLink}" target="_blank">Repositorio en GitHub</a>
        </p>
        <div class="tabs">${tabsHtml}</div>
        ${contentsHtml}
    `;

    projectsContainer.appendChild(projectElement);
  });

  projectsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab")) {
      const projectIndex = e.target.dataset.project;
      const tabIndex = e.target.dataset.tab;

      const tabs = document.querySelectorAll(
        `.tab[data-project="${projectIndex}"]`
      );
      const contents = document.querySelectorAll(
        `.tab-content[data-project="${projectIndex}"]`
      );
      tabs.forEach((tab) => tab.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("show"));

      e.target.classList.add("active");
      document
        .querySelector(
          `.tab-content[data-project="${projectIndex}"][data-content="${tabIndex}"]`
        )
        .classList.add("show");
    }
  });
});
