const navToggle = document.querySelector(".nav-toggle");
const primaryNavigation = document.querySelector(".primary-nav");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (navToggle && primaryNavigation) {
  navToggle.addEventListener("click", () => {
    const isOpen = primaryNavigation.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  primaryNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNavigation.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
