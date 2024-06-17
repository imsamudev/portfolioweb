// accordion functionality
document.querySelectorAll(".accordion-title").forEach((element) => {
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
