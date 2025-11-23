var musicas = [
    {
        artista: "Charlie Brown Jr.",
        titulo: "Me Encontra",
        frase: [
            "Hoje eu vou sair para", "_____", "o amor",
            "Que espero há tanto tempo e ainda", "_____", "rolou",
            "O vento diz que é hoje em meio à", "_____", "",
            "Que eu vou encontrar a dona do meu", "_____", "",
            "Aí sempre sorrir e chorar",
            "E ter alguém pra", "_____", ""
        ],
        respostas: ["encontrar", "não", "multidão", "coração", "compartilhar"],
        imagem: "assets/img/discos/capa-charlieBrown.png"
    },

    {
        artista: "Capital Inicial",
        titulo: "Todas as Noites",
        frase: [
            "Hoje à noite tudo pode", "_____", "",
            "Quem olhar nos olhos", "_____", "bares e sedução",
            "Num canto", "_____", "",
            "Pequenos goles de", "_____", "",
            "A noite esclarece o que o dia", "_____", ""
        ],
        respostas: ["acontecer", "vê", "escuro", "solidão", "escondeu"],
        imagem: "assets/img/discos/capa-capInicial.png"
    },

    {
        artista: "Legião Urbana",
        titulo: "Tempo Perdido",
        frase: [
            "Todos os dias antes de", "_____", "",
            "Lembro e esqueço como foi o", "_____", "",
            "Sempre em", "_____", "",
            "Não temos tempo a perder",
            "Nosso suor", "_____", "",
            "É bem mais belo que esse sangue", "_____", ""
        ],
        respostas: ["dormir", "dia", "frente", "sagrado", "amargo"],
        imagem: "assets/img/discos/capa-legiaoUrbana.png"
    },

    {
        artista: "Engenheiros do Hawaii",
        titulo: "Era um garoto e como eu amava...",
        frase: [
            "Era um garoto que como eu", "_____", "os Beatles e os Rolling Stones",
            "Girava o mundo sempre a", "_____", "",
            "As coisas lindas da", "_____", "",
            "Não era belo, mas mesmo", "_____", "",
            "Havia mil garotas a", "_____", ""
        ],
        respostas: ["amava", "cantar", "américa", "assim", "fim"],
        imagem: "assets/img/discos/capa-engHawaii.png"
    },

    {
        artista: "Pitty",
        titulo: "Equalize",
        frase: [
            "Às vezes, se eu me", "_____", "",
            "Se eu não me vigio um", "_____", "",
            "Me transporto pra perto de", "_____", "",
            "Já vi que não posso ficar tão", "_____", "",
            "Me vem logo aquele", "_____", ""
        ],
        respostas: ["distraio", "instante", "você", "solta", "cheiro"],
        imagem: "assets/img/discos/capa-pitty.png"
    },

    {
        artista: "Rita Lee",
        titulo: "Lança Perfume",
        frase: [
            "Lança, menina, lança todo esse", "_____", "",
            "Desbaratina, não dá pra ficar", "_____", "",
            "Ao teu amor que tem cheiro de coisa", "_____", "",
            "Vem cá, meu bem, me descola um", "_____", "",
            "Eu sou neném, só sossego com", "_____", ""
        ],
        respostas: ["perfume", "imune", "maluca", "carinho", "beijinho"],
        imagem: "assets/img/discos/capa-ritalee.png"
    }
];


var musicaAtual = '';
var tempo = 90;
var timer = '';

function aleatorizar() {

    
    
    document.getElementById("texto-regras").style.display = "none";
    document.getElementById("container-jogo").style.display = "block";
    document.getElementById("box-imagem").style.display = "block";
    clearInterval(timer);
    tempo = 35; // **************************************************************************************
    temporizador.innerHTML = `Timer: ${tempo}s`;

    var indice = Math.floor(Math.random() * musicas.length);
    musicaAtual = musicas[indice];

    
    var campo = document.getElementById("campo-letra");
    campo.innerHTML = ""; 

    var idInput = 0;

    musicaAtual.frase.forEach(function (parte) {

        if (parte.includes("_____")) {
            campo.innerHTML += `<input type="text" id="resp${idInput}" 
            style="border: none; border-bottom: 2px solid #9c9c9cff; background:transparent; text-align: center; font-family: 'RookiePunk', sans-serif; letter-spacing: 3px; font-weigth: 300; font-size: 16px;"> `;
            idInput++;
        } else {
            campo.innerHTML += parte + " ";
        }
    });

    // troca a img
    document.getElementById("imagem-musica").src = musicaAtual.imagem;

    iniciarTimer();
}

function iniciarTimer() {

    timer = setInterval(function () {

        tempo--;
        document.getElementById("temporizador").innerText = `Timer: ${tempo}s`;

        if (tempo <= 0) {
            clearInterval(timer);
            verificar();
        }

    }, 1000);
}

function verificar() {

    clearInterval(timer); // para o cronômetro
    //preciso que os campos fiquem disabled dps de acabar o timer aaa

    var acertos = 0;

    // p conferir oq foi escrito
    for (var i = 0; i < musicaAtual.respostas.length; i++) {

        var input = document.getElementById("resp" + i);
        var txt = input.value.toLowerCase().trim();

        if (txt === musicaAtual.respostas[i]) {
            input.style.color = "#00a100ff"; 
            acertos++;
        } else {
            input.style.color = "#921515ff"; 
        }
    }

    var porcentagem = Math.round((acertos / musicaAtual.respostas.length) * 100);
    alert("Você acertou " + porcentagem + "% da música!"); //fazer isso ser uma caixinha dps
}
