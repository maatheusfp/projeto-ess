Feature: Login

Scenario: Login bem sucedido
    Given eu sou um usuário Matheus Pinheiro já cadastrado na página "/"
    Then eu sigo para a página “/sign-up”
    When eu preencho os dados Email : "matheus@email.com", Senha : "superdificil"  e confirmo  
    Then eu estou logado 
    Then eu sigo para a página "/"
