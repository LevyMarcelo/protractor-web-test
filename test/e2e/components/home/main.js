const helper = require("protractor-helper");

class HomePage {
    constructor() {
        this.campoPesquisa = element(by.name("q"));
        this.botaoPesquisa = element(by.name("btnK"));
        this.validacao = element(by.className('LC20lb'));
    }

    preencherCampoPesquisaEnviar(data) {
        helper.fillFieldWithTextWhenVisible(this.campoPesquisa, data.campoPesquisa);
        helper.clickWhenClickable(this.botaoPesquisa);
    }
}

module.exports = HomePage;
