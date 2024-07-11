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

      content.style.maxHeight = isActive ? content.scrollHeight + "px" : null;
    } else {
      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.style.maxHeight = "none";
      });
    }
  });
});
