
// let titulo = document.getElementById("input-titulo").value;
// let preco = document.getElementById("input-preco").value;
// let descricao = document.getElementById("input-descricao").value;
// let plataforma = document.getElementById("input-plataforma").value;
// let imgLink = document.getElementById("input-imgLink").value;

function verificarInputs() {
    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imgLink").value;
    console.log(titulo);
    console.log(preco);
    console.log(descricao);
    console.log(plataforma);
    console.log(imgLink);

    if (titulo == "" || preco == "" || descricao == "" || plataforma == "" || imgLink == "") {
        console.log("Os inputs estão vazios")
        envieMsg('Preencha todos os campos', 'erro');
        return true;

    }else if(!isURLValida(imgLink)){
        envieMsg("Link inválido", "erro");
    } else {
        console.log("Os inputs estão preenchidos");
        envieMsg('Cadastro concluido', 'sucesso');
        return false;
    }
}

function envieMsg(msg, tipoMsg) {
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    let msgParaTela = `
    <p class="${tipoMsg}"> ${msg} <p>
    `
    msgDiv.innerHTML = msgParaTela;


    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000)
}
function mensagemParaErroURL(msg) {


    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}



class Jogo {
    constructor(titulo, preco, descricao, plataforma, imgLink) {
        this.titulo = titulo;
        this.preco = preco;
        this.descricao = descricao;
        this.plataforma = plataforma;
        this.imgLink = imgLink;
    }
}


const jogoTeste = new Jogo("teste", "123", "descTeste", "steam", "url")

// console.log(jogoTeste);

function comporJogo() {

    let titulo = document.getElementById("input-titulo").value;

    let preco = document.getElementById("input-preco").value;

    let descricao = document.getElementById("input-descricao").value;

    let plataforma = document.getElementById("input-plataforma").value;

    let imgLink = document.getElementById("input-imgLink").value;



    const jogo = new Jogo(titulo, preco, descricao, plataforma, imgLink)
    console.log(jogo);


    bibliotecaJogos.adicionar(jogo)
    console.log(bibliotecaJogos);

    renderizarConteudo();

}


class ListaJogos {
    constructor() {
        this.listaJogosArray = [];
    }

    adicionar(parametro) {
      if (!verificarInputs()) {
            this.listaJogosArray.push(parametro)
            Limparinputs()
        }
       


    }
}


function Limparinputs() {
    document.getElementById("input-titulo").value = "";
    document.getElementById("input-preco").value = "";
    document.getElementById("input-descricao").value = "";
    document.getElementById("input-plataforma").value = "";
    document.getElementById("input-imgLink").value = "";
}
const bibliotecaJogos = new ListaJogos();
// console.log(bibliotecaJogos);



function renderizarConteudo() {
    const listaHTML = document.getElementById("conteiner-lista")
    listaHTML.innerHTML = "";



    let array = bibliotecaJogos.listaJogosArray;

    array.forEach(jogo => {
        const jogoDiv = `
        <div class= "jogoDetalhe">
        <img src="${jogo.imgLink}" alt="${jogo.titulo}/">
        <p>Titulo:${jogo.titulo}</p>
        <p>Preço:${jogo.preco}</p>
        <p>Descrição:${jogo.descricao}</p>
        <p>Plataforma:${jogo.plataforma}</p>
        </div>
        `

        listaHTML.innerHTML += jogoDiv;
    });

}

function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}
