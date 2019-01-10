const helper = require("protractor-helper");

const HomePo = require("../page-objects/home");

describe("Dado que estou na página do Google", () => {
    const homePO = new HomePo();

    beforeEach(() => browser.get(homePO.urlRelativa));

    describe("Quando pesquiso pela Softdesign", () => {
        const pesquisa = {
            campoPesquisa: "softdesign",
        }; 

        beforeEach(() => homePO.homePage.preencherCampoPesquisaEnviar(pesquisa));

        it("Então a página da SoftDesign é exibida", () => {
            helper.waitForTextToBePresentInElement(homePO.homePage.validacao, 
                "SoftDesign: Desenvolvimento de Software, Apps, Sistemas e ...");
        });
    });
});
