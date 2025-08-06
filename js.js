//alert("Olá");
//confirm("Ok?");
//prompt("Digite seu comentário:");

const projetos = [
  { nome: " MPP", link:"https://gitcacatyu.github.io/meuMppEvep/index.html" },
  { nome: " DoceNet", link:"" },
  { nome: " EVEP", link:"https://gitcacatyu.github.io/EVEP-MPP/"},
  { nome: " Chef Kákia", link:"" },
  { nome: " DevLinks", link:""},
  { nome: " AtalhoMPPÚnico AMÚ", link:"" }
   
];

function buscar() {
    const busca = document.getElementById("campoBusca").value.toLowerCase();
    const lista = document.getElementById("listarProjeto");

    lista.innerHTML = "";

    const resultados = projetos.filter(proj => proj.nome.toLowerCase().includes(busca));

    //  Verifica se tem resultados ANTES do forEach
    if (resultados.length === 0) {
        lista.innerHTML = "<li>Nenhum resultado de pesquisa!</li>";
        return;
    }

    //  Agora sim, processa os resultados
    resultados.forEach(projeto => {
        const li = document.createElement("li");

        if (projeto.link) {
            li.innerHTML = `<a href="${projeto.link}" target="_blank">${projeto.nome}</a>`;
        } else {
            li.textContent = `${projeto.nome}: Página em construção 🚧`;
        }

        lista.appendChild(li);
    });
}

