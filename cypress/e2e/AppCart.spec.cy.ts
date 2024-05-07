describe('Deve acessar a Index de Listagem de Produtos', () => {
  it('deve acessar a index', () => {
    cy.visit("http://localhost:3000");
  })
})

describe("Deve Adicionar Produto ao carrinho clicando no botão", () => {
  it("deve adicionar produto ao carrinho clicando 'Adicionar ao Carrinho' do card do produto", () => {
    cy.visit("http://localhost:3000");

      cy.get('button').contains('Adicionar ao Carrinho').first().click();

      cy.get('button').contains('Carrinho (1)').should('exist');
  });
});

describe("aumentar e diminuir a quantidade de item de cada produto", () => {
  it("deve acrescentar quantidade de item quando clicar no botão (+) e diminuir quando clicar no botão (-)", () => {
      cy.visit("http://localhost:3000");

      cy.get('button').contains('Adicionar ao Carrinho').first().click();
      
      cy.get(".cart").click();

      cy.get(".button_add_qtd_item").click();

      cy.get("p[class='MuiTypography-root MuiTypography-body2 MuiListItemText-secondary css-83ijpv-MuiTypography-root']").contains("Quantity: 2");

      cy.get(".button_remove_qtd_item").click();

      cy.get("p[class='MuiTypography-root MuiTypography-body2 MuiListItemText-secondary css-83ijpv-MuiTypography-root']").contains("Quantity: 1");
  })
});


describe("Limpar o carrinho", () => {
  it("deve limpar todo o carrinho quando clicar no botão 'Limpar Carrinho'", () => {
      cy.visit("http://localhost:3000");

      // Adiciona um produto ao carrinho
      cy.get('button').contains('Adicionar ao Carrinho').first().click();

      cy.get(".cart").click();

      // Clica no botão "Excluir Todos" para limpar o carrinho
      cy.get('button').contains('Limpar Carrinho').click();

      // Verifica se o carrinho está vazio
      cy.get('button').contains('Carrinho (0)').should('exist');
  });
});


describe("Buscar Produto e Filtrar Especificamente", () => {
  it("Deve buscar e filtrar um produto respectivamente pelo seu nome", () => {
      cy.visit("http://localhost:3000");

      // Adiciona um produto ao carrinho
      cy.get("input[id='inputProduct']").type("Umair's Product");

      cy.get('button').contains('Adicionar ao Carrinho').first().click();

      cy.get(".cart").click();

      cy.get("span[class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-10hburv-MuiTypography-root']").contains("Umair's Product");

  });
});