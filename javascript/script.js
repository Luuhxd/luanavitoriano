// ===============================
// MENU MOBILE
// ===============================

const menuBtn = document.querySelector(".menu-mobile");
const navLinks = document.querySelector(".nav-links");

function setMenu(open) {
  navLinks.classList.toggle("active", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}

menuBtn.addEventListener("click", () => {
  setMenu(!navLinks.classList.contains("active"));
});

// fechar menu ao clicar em um link (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => setMenu(false));
});

// fechar menu com a tecla Esc
document.addEventListener("keydown", event => {
  if (event.key === "Escape") setMenu(false);
});
