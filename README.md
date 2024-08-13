# GitHub Blog 📋

Aplicação feita com React que usa as issues de um repositório do GitHub como post. A aplicação permite pesquisar por um repositório e exibir suas issues de forma organizada.

## Funcionalidades ✨

- Pesquisar por repositórios no GitHub
- Listar issues de um repositório como posts
- Exibir detalhes de uma issue

## Tecnologias Utilizadas ⚛️

- **React**
- **Vite**
- **GitHub API**
- **Axios**
- **React Router**
- **Tailwind CSS**
- **Cypress**

## Instalação 🛠️

1. Clone o repositório:

```sh
git clone https://github.com/matheusc1/github-blog
cd github-blog
```
2. Instale as dependências:

```sh
npm install
```

3. Inicie a aplicação:

```
npm run dev
```

## Uso 🚀

1. Acesse a aplicação no seu navegador em http://localhost:5173/
2. Digite o nome de um repositório do GitHub no campo de busca seguindo o padrão `username/repository`
3. As issues do repositório serão listadas em cards.
4. Clique em uma issue para ver os detalhes em formato de post.

## Executando os testes 💻

Após instalar as dependências e iniciar o servidor, basta executar o cypress para rodar os testes:

```sh
npx cypress open
```

Com o Cypress aberto, selecione a opção "E2E Testing". O próximo passo é selecionar com qual navegador você vai executar os testes e clicar em "Start E2E Testing in (Opção escolhida)".

Depois de feito isso, irá aparecer uma tela com o nome dos arquivos de teste `home.cy.ts` e `post.cy.ts.` Após isso basta clicar em um deles.

## Contribuição 🤝

1. Faça um fork do projeto
2. Crie uma nova branch: `git checkout -b minha-nova-feature`
3. Faça suas alterações e commit: `git commit -m 'Adiciona nova feature'`
4. Envie para o branch original: `git push origin minha-nova-feature`
5. Crie um pull request


## Licença 📄

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.