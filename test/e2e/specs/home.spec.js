const helper = require("protractor-helper");

const HomePo = require("../page-objects/home");

describe("Dado que estou na página do Google", () => {
    beforeEach(() => browser.get(HomePo.urlRelativa));

    describe("Quando pesquiso pela Softdesign", () => {
        const pesquisa = {
            campoPesquisa: "softdesign",
        }; 

        beforeEach(() => HomePo.homePage.preencherCampoPesquisaEnviar(pesquisa));

        it("Então a página da SoftDesign é exibida", () => {
            helper.waitForTextToBePresentInElement(HomePo.homePage.validacao, 
                "SoftDesign: Desenvolvimento de Software, Apps, Sistemas e ...");
        });
    });
});
