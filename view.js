class View{
    constructor(opcao){
        this.opcao = opcao
    }
    template(){
        return `
            <img src="${this.opcao.imagem}" alt="" id="${this.opcao.nome}" class="opcao ${this.opcao.nome}">
        `
    }
}