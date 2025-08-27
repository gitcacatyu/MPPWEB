const projetos = [
  { nome: "Quem criou MPP?", mensagem:"Carlos Alberto Lacerda Dias, mais conhecido como (Kaká)." },  
  { nome: "MPP", link:"https://gitcacatyu.github.io/meuMppEvep/index.html" },
  { nome: "DoceNet", link:"https://gitcacatyu.github.io/Chef-K-kia/" },
  { nome: "EVEP", link:"https://gitcacatyu.github.io/EVEP/index.html" },
  { nome: "Chef Kákia", link:"https://gitcacatyu.github.io/Chef-K-kia/index.html" },
  { nome: "CeéKem", link:"https://gitcacatyu.github.io/Ce-Kem/index.html" },
   { nome: "Jacare", link:"https://gitcacatyu.github.io/jacare-/index.html" },
  { nome: "DevLinks", link:""},
  { nome: "AtalhoMPPÚnico AMÚ", link:"" },
  { nome: "Quantos anos tem MPP?", mensagem: "MPP tem 1 ano e 8 meses!" },
  { nome: "Qual é o verdadeiro nome do MPP?", mensagem: "Meu Primeiro Programa!"},
  { nome: "Google" , mensagem: "Ok!", link:"https://google.com"},
  { nome: "Quem fez a MPP?", mensagem: "Carlos Alberto!"}, 
  { nome: "Quantos anos Carlos Alberto tem?", mensagem: "Ele tem atualmente 12 anos."},
  { nome: "Quem é Carlos Alberto?", mensagem: "Redirecionando para a página especial..." }
];

function buscar() {
    const busca = document.getElementById("campoBusca").value.trim().toLowerCase();
    const lista = document.getElementById("listarProjeto");

    lista.innerHTML = "";

    // ✅ Se for a pergunta exata, redireciona
    if (busca === "quem é carlos alberto" || busca === "quem é carlos alberto?") {
        window.location.href = "kaka.html"; // Página com a resposta
        return;
    }

    const resultados = projetos.filter(proj => proj.nome.toLowerCase().includes(busca));

    if (resultados.length === 0) {
        lista.innerHTML = `<li>
             404 <br>
        Uhmm... Não conseguir achar! <br>
          Tente de outra forma, verifique sua pergunta!
        </li>`;
        return;
    }

    resultados.forEach(projeto => {
        const li = document.createElement("li");

        if (projeto.link) {
            li.innerHTML = `<a href="${projeto.link}" target="_blank">${projeto.nome}</a>`;
        } else if (projeto.mensagem) {
            li.textContent = `${projeto.nome}: ${projeto.mensagem}`;
        } else {
            li.textContent = `${projeto.nome}: Página em construção 🚧`;
        }

        lista.appendChild(li);
    });
}

// ✅ Ativar busca com Enter
document.getElementById("campoBusca").addEventListener("keypress", (e) => {
    if (e.key === "Enter") buscar();
});

function mostrarSugestoes() {
    const valor = document.getElementById("campoBusca").value.toLowerCase();
    const sugestoesBox = document.getElementById("sugestoes");
    sugestoesBox.innerHTML = "";

    if (valor === "") {
        sugestoesBox.style.display = "none";
        return;
    }

    const filtradas = projetos.filter(p => p.nome.toLowerCase().includes(valor));

    if (filtradas.length === 0) {
        sugestoesBox.style.display = "none";
        return;
    }

    filtradas.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.nome;
        li.onclick = () => {
            document.getElementById("campoBusca").value = item.nome;
            sugestoesBox.style.display = "none";
            buscar();
        };
        sugestoesBox.appendChild(li);
    });

    sugestoesBox.style.display = "block";
}

