## Primeira ação

Primeiro execute no Terminal um dos comandos abaixo para Instalação dos Pacotes necessários de uso da aplicação:

```bash
npm install
# or
yarn install
```

## Pacotes de dependências da aplicação

```bash
@mui/material": "5",
axios: ^1.6.8,
next: 12,
react: 18.3.1,
react-dom: 18.3.1,
react-query: ^3.39.3,
typescript: ^5.4.5,
zustand: ^4.5.2
cypress: ^13.8.1",
```

## Startando o projeto da aplicação

Execute no Terminal o comando:

```bash
npm run dev
# or
yarn dev
```

Acesse no seu Navegador [http://localhost:3000](http://localhost:3000) e veja o resultado.

## Ver e Analisar teste 2E2 da aplicação com CYPRESS

> Com a aplicação já ativa e rodando, abra outro terminal, em modo Split.
> No terminal novo aberto, execute o comando:
    ```bash
    npx cypress open
```

Vai abrir a janela do Cypress dando boas-vindas, com 2 cards buttons options:

1 - E2E Testing
2 - Component Testing

Escolha a opção 1 - E2E Testing

Será mostrado as opções de Browser (Navegadores) para visualizar o teste dinamicamente 
Escolha o de sua preferência e clique no botão:

> `Start 2E2 Testing in (browser escolhido)`

Será direcionado para a janela de ações:

No menu lateral à esquerda, verifique se está selecionado/marcado a opção `Specs`
Verfique também se a Janela em questão tem o mesmo nome no título.
verifique se tem os botões:

1 - E2E specs
2 - Component specs

Clique e defina a escolha ao botão: `E2E specs`

Visualize a pasta: `cypress/e2e`

Dentro dela está o arquivo de testes da aplicação, localizando, clique sobre o:

`AppCart.spec.cy.ts`
