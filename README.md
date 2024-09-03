# GitHub Blog 📋

Aplicação feita com React que usa as issues de um repositório do GitHub como post. A aplicação permite pesquisar por um repositório e exibir suas issues de forma organizada.

## Funcionalidades ✨

- Pesquisar por repositórios no GitHub
- Listar issues de um repositório como posts
- Exibir detalhes de uma issue

## Tecnologias Utilizadas ⚛️

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/en/main)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Tanstack Query](https://tanstack.com/)
- [Cypress](https://www.cypress.io/)
- [GitHub API](https://docs.github.com/pt/rest?apiVersion=2022-11-28)

## Instalação 🛠️

1. Clone o repositório:

```bash
git clone https://github.com/matheusc1/github-blog
cd github-blog
```
2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação:

```
npm run dev
```

## Uso 🚀

1. Acesse a aplicação no seu navegador em `http://localhost:5173/`
2. Digite o nome de um repositório do GitHub no campo de busca seguindo o padrão `username/repository`
3. As issues do repositório serão listadas em cards.
4. Clique em uma issue para ver os detalhes em formato de post.

## Executando os testes 💻

Após instalar as dependências e iniciar o servidor, basta executar o cypress para rodar os testes:

```bash
npx cypress open
```

Com o Cypress aberto, selecione a opção "E2E Testing". O próximo passo é selecionar com qual navegador você vai executar os testes e clicar em "Start E2E Testing in (Opção escolhida)".

Depois de feito isso, irá aparecer uma tela com o nome dos arquivos de teste `home.cy.ts` e `post.cy.ts.` Após isso basta clicar em um deles.

## Licença 📄

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.