/// <reference types="cypress" />

describe('Testes na Agenda de Contatos', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });

      // INCLUSÃO DE CONTATOS
  
    it('Deve adicionar um contato', () => {
      // Aguarde até que a página esteja totalmente carregada
      cy.wait(2000); // Pode ser necessário ajustar o tempo de espera
  
      // Clique no botão para abrir o formulário de adição
      cy.get('button[type="submit"]').click();
  
      // Preencha o formulário
      cy.get('input[type="text"]').type('Novo Contato');
      cy.get('input[type="email').type('teste@email.com');
      cy.get('input[type="tel"]').type('123456789');
  
      // Clique no botão para adicionar o contato
      cy.get('button[type="submit"]').click();
  
      // Verifique se o novo contato aparece na lista
      cy.contains('Novo Contato');
      cy.contains('teste@email.com')
      cy.contains('123456789');
    });


      // EDIÇÃO DE CONTATO

    it('Deve editar um contato', () => {

      cy.wait(10000);
        // Encontrar e clicar no botão de editar do primeiro contato na lista
        cy.get('.edit').first().click();

        // Modificar os detalhes do contato
        cy.get('input[type="text"]').clear().type('Contato Editado');
        cy.get('input[type="email"]').clear().type('editado@email.com');
        cy.get('input[type="tel"]').clear().type('987654321');

        // Clique no botão para salvar as alterações
        cy.get('button[type="submit"]').click();

        // Verifique se as alterações foram salvas corretamente
        cy.contains('Contato Editado');
        cy.contains('editado@email.com');
        cy.contains('987654321');
    });
    

      // REMOÇÃO DE CONTATO

    it('Deve deletar um contato', () => {
        // Encontrar e clicar no botão de deletar do primeiro contato na lista
        cy.get('.delete').first().click();

        // Verificar se o contato foi removido da lista
        cy.contains('Contato Editado').should('not.exist');
        cy.contains('editado@email.com').should('not.exist');
        cy.contains('987654321').should('not.exist');
    });
  });
  