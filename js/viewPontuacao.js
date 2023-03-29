class ViewPontuacao{
    constructor(pontuacao){
        this.pontuacao = pontuacao;
    }

    template(){
        return`
            <h4>${this.pontuacao}</h4>
        `
    }
}