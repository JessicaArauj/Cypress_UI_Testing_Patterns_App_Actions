/// <reference types = 'cypress' />
import data from "../fixtures/data.json";


describe('Acess Admin Panel', () => {
    beforeEach(() => {
        cy.login(data.usuario, data.senha)
    });

    it('Shoul Login With Valid Credentials', () => {
        cy.getSiteName().should("be.visible", { timeout: 10000 })
    });

});