document.addEventListener("DOMContentLoaded", () => {
  // navbar functionality
  const navbarToggle = document.getElementById("navbarToggle");
  const navbarLinks = document.getElementById("navbarLinks");

  if (navbarToggle && navbarLinks) {
    navbarToggle.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });
  }

  // returnBtn functionality
  const returnBtn = document.querySelector(".returnBtn");

  if (returnBtn) {
    returnBtn.style.display = "none";

    window.addEventListener("scroll", () => {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      if (window.pageYOffset > navbarHeight) {
        returnBtn.style.display = "block";
        returnBtn.style.transition = "opacity 0.5s";
        returnBtn.style.opacity = "1";
      } else {
        returnBtn.style.opacity = "0";
        setTimeout(() => {
          if (window.pageYOffset <= navbarHeight) {
            returnBtn.style.display = "none";
          }
        }, 500);
      }
    });

    returnBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
  // accordion functionality
  document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const isActive = button.classList.toggle("active");

      if (window.innerWidth < 769) {
        document.querySelectorAll(".accordion-content").forEach((item) => {
          if (item !== content) {
            item.style.maxHeight = null;
            item.previousElementSibling.classList.remove("active");
          }
        });

        content.style.maxHeight = isActive ? `${content.scrollHeight}px` : null;
      } else {
        document.querySelectorAll(".accordion-content").forEach((item) => {
          item.style.maxHeight = "none";
        });
      }
    });
  });

  // change theme functionality
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector("#themeIcon");

  if (themeToggle && themeIcon) {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);

    themeToggle.addEventListener("click", () => {
      const newTheme =
        localStorage.getItem("theme") === "light" ? "dark" : "light";
      setTheme(newTheme);
    });
  }
  handleInitialLoad();
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
// initial load functionality
function handleInitialLoad() {
  if (!sessionStorage.getItem("hasVisited")) {
    window.location.hash = "#inicio";
    sessionStorage.setItem("hasVisited", "true");
  } else {
    const lastSection = sessionStorage.getItem("lastSection");
    if (lastSection) {
      window.location.hash = lastSection;
    }
  }
}
function saveLastSection(section) {
  sessionStorage.setItem("lastSection", section);
}
document.querySelectorAll(".navbar-links a").forEach((link) => {
  link.addEventListener("click", (event) => {
    const section = event.target.getAttribute("href");
    saveLastSection(section);
  });
});
