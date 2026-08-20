const botao = document.querySelector(".menu-icon");
const menu = document.querySelector("#menu-principal");

botao.addEventListener("click", () => {
  const aberto = menu.classList.toggle("ativo");
  botao.setAttribute("aria-expanded", aberto);
});
