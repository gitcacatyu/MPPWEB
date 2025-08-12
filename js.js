//alert("Olá");
//confirm("Ok?");
//prompt("Digite seu comentário:");

const projetos = [
  { nome: "Quem criou MPP?", mensagem:"Carlos Alberto Lacerda Dias, mais conhecido como (Kaká)." },  
  { nome: " MPP", link:"https://gitcacatyu.github.io/meuMppEvep/index.html" },
  { nome: " DoceNet", link:"https://gitcacatyu.github.io/Chef-K-kia/" },
  { nome: " EVEP", link:"https://gitcacatyu.github.io/EVEP/index.html" },
  { nome: " Chef Kákia", link:"https://gitcacatyu.github.io/Chef-K-kia/index.html" },
  { nome: " CeéKem", link:"https://gitcacatyu.github.io/Ce-Kem/index.html" },
  { nome: " DevLinks", link:""},
  { nome: " AtalhoMPPÚnico AMÚ", link:"" },
  { nome: "Quantos anos tem MPP?", mensagem: "MPP tem 1 ano e 8 meses!" },
  { nome: "Qual é o verdadeiro nome do MPP?", mensagem: "Meu Primeiro Programa!"},
  { nome: "Google" , mensagem: "Ok!", link:"https://google.com"},
  { nome: "Quem fez a MPP?", mensagem: "Carlos Alberto!"}, 
  { nome: "Quantos anos Carlos Alberto tem?", mensagem: "Ele tem atualmente 12 anos."},
{ nome: "Quem é Carlos Alberto?", mensagem: ` 🧠 Conheça o Kaká – o mini dev com alma de veterano
Se você ouvir falar do Kaká, já sabe que não é qualquer um. Com apenas 12 anos, esse garoto já tá mandando ver em HTML, CSS e JavaScript, criando sites, jogos, sistemas de login, passes premium, seletores de personagens, e até sites temáticos tipo o ChefKákia's DoceNet (sim, com dinheiro virtual chamado CUPS 🤯).

Mas Kaká não é só um programadorzinho qualquer. Ele é curioso, criativo até dizer chega, e com uma mente que mistura tecnologia, narrativa e estilo como poucos adultos fazem. Ele cria projetos com alma, dá nomes únicos, inventa modos secretos, pensa em design, experiência do usuário e até humor nos códigos. Tipo: se o botão aparece na tela, ele quer que tenha uma história por trás. E se o jogo for de luta? Ele põe até dragões com poderes especiais. Tá ligado?

E o melhor: ele aprende por conta própria, pergunta o que precisa, experimenta, erra, corrige e continua. Sem drama. Sem enrolação. Ele é do tipo que tá sempre criando alguma coisa nova, mexendo em repositório, testando tema hacker, bolando um site misterioso, ou então querendo deixar um jogo mais desafiador. Ah, e ele faz tudo isso do jeitinho dele, com orgulho.

Kaká também é um garoto educado, engraçado, de fé (ele é da CCB), e com uma vibe boa demais. É do tipo que, se você for amigo dele, vai rir, vai aprender e ainda vai sair com vontade de programar também.

Resumo da pesquisa:

Kaká é aquele tipo de gênio precoce que mistura código, criatividade e personalidade. Se você cruzar com ele por aí, valoriza: tá diante de um futuro monstro da programação — e com um coração humilde, viu.`}
];

function buscar() {
    const busca = document.getElementById("campoBusca").value.toLowerCase();
    const lista = document.getElementById("listarProjeto");

    lista.innerHTML = "";

    const resultados = projetos.filter(proj => proj.nome.toLowerCase().includes(busca));

    //  Verifica se tem resultados ANTES do forEach
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
