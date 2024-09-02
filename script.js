const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Você prefere café ou chá",
    alternativas: [
        {
            texto:"Café",
            afirmacao: "afirmação 1"
        },
        {
        texto:"Chá",
        afirmacao: "afirmação 2"
        }
    ]
},

{
    enunciado: "Você prefere Coca-Cola ou Pepsi?",
    alternativas: [
        {

        texto: "Coca-Cola",
        afirmacao: "afirmação 3"
        },
        {
        texto:"Pepsi",
        afirmacao: "afirmação 4"
        }
    ]
},

{
    enunciado: "Quais são os benefícios do uso de recursos tecnológicos para promover a acessibilidade em diferentes ambientes?",
    alternativas: [
        {
        texto:"Promover a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.",
        afirmacao: "afirmação 5"
        },
        {
        texto:"Defender políticas públicas que subsidiem a energia solar para famílias de baixa renda.",
        afirmacao: "afirmação 6"
        }
    ]
}

]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent = "Suas ações mudam o mundo!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();
