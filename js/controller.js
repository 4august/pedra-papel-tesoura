class Controller {
    constructor() {
        this.jogo = document.querySelector(".jogo");
        this.resultado = document.querySelector(".resultado");
        this.pontuacao = document.querySelector(".score h4");
        this.opcoes = new Array(
            new Opcao('pedra', 'images/icon-rock.svg', 'papel'),
            new Opcao('papel', 'images/icon-paper.svg', 'tesoura'),
            new Opcao('tesoura', 'images/icon-scissors.svg', 'pedra'),
        ),
            this.init()
            this.contador = 0;
        }
        init() {
        this.opcoes.forEach((opcao) => this.jogo.innerHTML += new ViewJogo(opcao).template())
        this.jogar()
    }
    jogar() {
        document.querySelectorAll(".opcao").forEach((botao) => {
            botao.addEventListener("click", (e) => {
                let random = Math.floor(Math.random() * this.opcoes.length);
                let escolha = this.opcoes.findIndex(i => i.nome === botao.getAttribute("id"));
                let resultado = ""

                if (this.opcoes[escolha].fraqueza == this.opcoes[random].nome){
                    resultado = "you lose"
                     console.log(
                         `voce jogou ${this.opcoes[escolha].nome} e o algoritmo ${this.opcoes[random].nome}
                         \n o algortimo venceu
                     `);
                     }
                else if (this.opcoes[escolha].nome == this.opcoes[random].fraqueza) {
                    resultado = "you win"
                    this.contador++
                    this.pontuacao.innerHTML = new ViewPontuacao(this.contador).template()
                     console.log(
                         `voce jogou ${this.opcoes[escolha].nome} e o algoritmo ${this.opcoes[random].nome}
                         \n você venceu
                     `);

                } else{
                    resultado = "draw"
                     console.log(
                         `voce jogou ${this.opcoes[escolha].nome} e o algoritmo ${this.opcoes[random].nome}
                         \n deu empate
                     `)
                }
                this.resultado.innerHTML = new ViewResultado(escolha, random, resultado).template()
                this.jogo.style.display = "none";
                this.resultado.style.display = "flex";

                this.jogarNovamente()
            })
        })
    }
    jogarNovamente(){
        document.querySelector(".novo-jogo").addEventListener("click" , () =>{
            this.init();
            this.resultado.style.display = "none";
            this.jogo.style.display = "block";
        })
    }
}