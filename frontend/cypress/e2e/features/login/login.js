import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('eu sou um usuário Matheus Pinheiro já cadastrado na página {/}', (page) =>{
    cy.visit(page);
});

Then('eu sigo para a página {/login}', (page) => {
    cy.visit(page);
});

When('eu preencho os dados Email : {matheus@email.com}, Senha : {superdificil}  e confirmo', (email, senha) => {
    cy.get("#email").type(email);
    cy.get("#password").type(senha);
    cy.get("#login-button").click();
});

Then('eu sigo para a pagina {/}', (page) => {
    cy.url().should("include", page);
})