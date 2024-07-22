document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "JavaScript Quiz",
      description:
        "En mi primer proyecto, cursando Codo a Codo, se me ocurrió la brillante idea de desarrollar un Quiz para programadores principiantes y poder compartirlo con mis compañeros. Es un proyecto que te permite poner a prueba tus conocimientos de JavaScript de una manera divertida y educativa. Ofreciendo una serie de preguntas sobre el lenguaje propiamente dicho, donde podrás seleccionar las respuestas que consideres correctas. Una vez que completes el quiz, recibirás retroalimentación sobre tus respuestas y podrás ver tu puntuación final.",
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
      repoLink: "https://github.com/imsamudev01/basic-quiz-javascript",
      deployLink: "https://imsamudev01.github.io/basic-quiz-javascript/",
    },
    {
      title: "NeonGames",
      description:
        "He tenido la oportunidad de participar en un proyecto colaborativo junto a profesionales durante mi capacitación en Codo a Codo. Este proyecto tiene como objetivo crear una tienda online utilizando tecnologías como HTML, CSS, JavaScript VANILLA, SQL, NodeJS y ExpressJS para presentar en el Curso. El proyecto se despliega tanto en frontend como en backend, ofreciendo una experiencia completa de aprendizaje y desarrollo colaborativo. Cuenta con un atractivo Home con carruseles promocionando productos destacados, un Login y, ¿Hay carrito funcional? ¡Claro que sí!. También contamos con secciones de productos, acerca de nosotros, contacto e inclusive... ¡Un Dashboard! Adelante, ¡Échale un vistazo!",
      coverImage: "./src/assets/img/projects/neongames.png",
      role: [
        "Desarrollo en equipo.",
        "Desarrollo frontend.",
        "Desarrollo backend.",
      ],
      contributions: [
        "En Frontend: <br> - Desarrollo de HOME: Sobre un fondo negro degradé circular desde el centro, se posa un atractivo billboard con novedades, con detalles de bordes y ligero aumento de escala cuando se posa el mouse, debajo sus respectivos carruseles promocionando algunos juegos, completamente responsive con swipe disponible en pantallas inferiores a 768px. También he desarrollado las tarjetas donde alojan los juegos correspondientes. <br> - Componentes globales: Desarrollé barra de navegación, botón de retroceso a la misma, su footer y añadí un ligero estilo al scrollbar. <br> - Login: Agregué un modal de login a Home, que se despliega al presionar su ícono. En la misma se puede redirigir a otro modal de Registrar si el usuario no está registrado. <br> - Productos: Desarrollé la primera versión estática de la sección productos donde cambia su formato de tarjeta. <br> - Administración de imágenes: Me he encargado de las ilustraciones de los productos, en formato webp y su aspecto 4:3 o 3:4. En su primera versión se usó de forma local, en producto final se usó Cloudinary para alojar las imágenes.",
        "En Backend: <br> - Creación de Base de Datos: Realicé una database con 5 tablas, con sus correspondientes relaciones. Donde manejamos categorías, productos, usuarios, pedidos y detalle de pedidos. También realicé la conexión de la misma, utilizando mysql2 para la interacción con la database y dotenv para gestionar las configuraciones y cargar las variables de entorno. <br> - Establecí la configuración inicial del servidor con Express: Donde defino el puerto en el que el servidor escuchará las solicitudes (utilizando process.env.PORT o el puerto 3000 si no se especifica). El servidor se inicia y comienza a escuchar en el puerto especificado. Imprime un mensaje en la consola indicando que el servidor está escuchando. Con la conexión correspondiente a la base de datos. <br> - Participación en el desarrollo CRUD de Usuarios: Funciones de Actualizar y Eliminar usuarios. Así mismo, en Router de Usuarios actualicé sus correspondientes rutas con las mencionadas funciones. <br> - Servicio de autenticación de usuarios y validaciones: Establecí los servicios, donde la función loginUser permite a un usuario iniciar sesión en la aplicación. Trabajando con peticiones <br> - loginUser: <br> POST: Envía una solicitud POST a la API con el correo electrónico y la contraseña del usuario. Si la respuesta es exitosa, se guarda el token de autenticación y el ID del usuario en el localStorage. Si ocurre un error, se maneja adecuadamente mostrando mensajes de error específicos y arrojando excepciones para que puedan ser capturadas. <br> - registerUser: <br> POST: Envía una solicitud POST a la API con el nombre, correo electrónico y contraseña del usuario. Si la respuesta es exitosa, se muestra un mensaje de bienvenida al usuario. Si ocurre un error, se maneja adecuadamente mostrando mensajes de error específicos y arrojando excepciones para que puedan ser capturadas. <br> En validaciones: Se encarga de gestionar los eventos de envío de los formularios de inicio de sesión y registro de usuarios. Utiliza las funciones loginUser y registerUser del archivo authScript.js para realizar las solicitudes a la API.",
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
        "Aprendizaje: El desarrollo de este proyecto me permitió aprender backend y mejorar mis habilidades también en frontend. Una gran oportunidad donde consolidé mis habilidades blandas al trabajar en equipo, optimizando también el uso de control de versiones y metodología agile SCRUM.",
        "Desafíos: Enfrenté y resolví desafíos nunca antes vistos, la creación y manejo de base de datos, servidores, conexiones, controladores, rutas, herramientas de backend, ¡La creación de una API! ¡Era todo absolutamente nuevo para mí! Pero gracias a mis profesionales compañeros y asesoría del profesor de CaC, ¡Logro completado! Proyecto muy rico en aprendizaje para mí.",
        "Mejoras futuras: Consideramos pulir Dashboard para el acceso estricto sólo a administradores, también manejar el contenido del Home desde aquí mismo. Mejorar y optimizar funciones de login, register y base de datos. Nuestra intención es desarrollarlo por completo como una tienda ecommerce falsa 100% funcional y optimizada. Oh, ¿Dije falsa? Ya lo veremos.",
        "Agradecimientos: Un profundo agradecimiento a mis compañeros de equipo por enseñarme tanto, también al mismo curso Codo a Codo donde profesionales como Jepafe y su equipo, que me brindaron la oportunidad de aprender y crecer.",
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
        <a href="${project.deployLink}" target="_blank">¿Vamos a ver?</a>
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
