const links = document.querySelectorAll("nav a");
const secoes = document.querySelectorAll(".produtos");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href").replace("#", "");

    // esconde todas as seções
    secoes.forEach(secao => secao.classList.remove("ativo"));

    // mostra só a clicada
    document.getElementById(id).classList.add("ativo");

    // rola a tela até os produtos
    window.scrollTo({ top: 300, behavior: "smooth" });
  });
});
