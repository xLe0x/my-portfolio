const burgerIcon = document.querySelector(".navbar .burger-icon");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const closeIcon = document.querySelector(".links .close-icon");
const scrollToTop = document.querySelector(".scroll-to-top");

export function navbarSettings() {
  closeIcon.addEventListener("click", () => {
    linksContainer.classList.remove("show-links");
  });

  for (let link of links) {
    link.addEventListener("click", function () {
      linksContainer.classList.toggle("hide-links");
    });
  }
}
export function scrollToTopSettings() {
  window.onscroll = function () {
    if (window.scrollY >= 1000) {
      scrollToTop.style.visibility = "visible";
    } else {
      scrollToTop.style.visibility = "hidden";
    }
  };

  scrollToTop.addEventListener("click", function () {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  });
}
export function projectsSettings() {
  const allProjectCards = document.querySelectorAll(".project-card");
  burgerIcon.addEventListener("click", () => {
    linksContainer.classList.add("show-links");
    linksContainer.classList.remove("hide-links");
  });

  for (let projectCard of allProjectCards) {
    if (projectCard.classList.contains("coming-soon")) {
      let comingSoon = document.createElement("p");
      comingSoon.textContent = "Coming Soon";
      comingSoon.classList.add("coming-soon-word");
      projectCard.appendChild(comingSoon);
    }
  }
}
