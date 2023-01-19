import * as settings from "./settings.js";
const themeContainer = document.querySelector(".theme");

themeContainer.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

settings.navbarSettings();
settings.scrollToTopSettings();
settings.projectsSettings();
