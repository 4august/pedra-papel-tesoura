class ViewResultado{
    constructor(jogador, algoritmo, resultado){
        this.jogador = jogador;
        this.algoritmo = algoritmo;
        this.resultado = resultado
        this.opcoes = new Controller().opcoes
        this.template();
    }
    template(){
        return`
            <div class="jogador">
                <h5>You Picked</h5>
                <img src="${this.opcoes[this.jogador].imagem}" class="opcao ${this.opcoes[this.jogador].nome}" alt="">
            </div>
            <div class="jogar-novamente">
                <h2>${this.resultado}</h2>
                <button class="novo-jogo">
                play again
                </button>
            </div>
            <div class="algoritmo">
                <h5>the house picked</h5>
                <img src="${this.opcoes[this.algoritmo].imagem}" class="opcao ${this.opcoes[this.algoritmo].nome}" alt="">
            </div>
        `
    }
}