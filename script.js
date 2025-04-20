document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "#222";
    } else {
      header.style.backgroundColor = "#333";
    }
  });

  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.addEventListener("mouseover", function () {
      project.style.transform = "scale(1.05)";
      project.style.transition = "0.3s";
    });
    project.addEventListener("mouseleave", function () {
      project.style.transform = "scale(1)";
    });
  });
});
