class Controller {
    constructor() {
        this.opcoes = new Array(
            new Opcao('pedra', 'images/icon-rock.svg', 'papel'),
            new Opcao('papel', 'images/icon-paper.svg', 'tesoura'),
            new Opcao('tesoura', 'images/icon-paper.svg', 'pedra'),
        ),
            this.init(),
            this.contador = 0;
    }
    init() {
        this.jogo = document.querySelector(".jogo");

        this.opcoes.forEach((opcao) => this.jogo.innerHTML += new View(opcao).template())
        this.jogar()
    }
    jogar() {
        document.querySelectorAll(".opcao").forEach((botao) => {
            botao.addEventListener("click", (e) => {
                let random = Math.floor(Math.random() * this.opcoes.length);
                let escolha = this.opcoes.findIndex(i => i.nome === botao.getAttribute("id"))

                if (this.opcoes[escolha].fraqueza == this.opcoes[random].nome)
                    console.log(
                        `voce jogou ${this.opcoes[escolha].nome} e o algoritmo ${this.opcoes[random].nome}
                        \n o algortimo venceu
                    `);
                
                else if (this.opcoes[escolha].nome == this.opcoes[random].fraqueza) {
                    console.log(
                        `voce jogou ${this.opcoes[escolha].nome} e o algoritmo ${this.opcoes[random].nome}
                        \n você venceu
                    `);

                } else
                    console.log(
                        `voce jogou ${this.opcoes[escolha].nome} e o algoritmo ${this.opcoes[random].nome}
                        \n deu empate
                    `)
                    e.preventDefault()
            })
        })
    }
}