# Projeto de TCC Get-me

Para ajudar a encontrar pessoas desaparecidas.

## Descrição do Projeto

Get-me é uma aplicação desenvolvida como parte do TCC para facilitar a busca por pessoas desaparecidas. O sistema conta com uma interface simples, intuitiva e com telas autenticadas e livres para oferecer informações confiáveis e atualizadas.

## Ferramentas Utilizadas:

- Next.js: Framework que oferece Server-Side Rendering (SSR) e roteamento dinâmico.
- TypeScript: Linguagem com tipagem estática para reduzir erros e facilitar a manutenção.
- Tailwind CSS: Biblioteca de estilização que facilita a criação de designs responsivos e personalizados.

## Como Subir o Projeto

### Desenvolvimento Local

Para iniciar o projeto no modo de desenvolvimento:

1. Certifique-se de que você tem o `Node.js` e o `yarn` instalados.

2. Instale as dependências:
   yarn install

3. Inicie o servidor de desenvolvimento:
   yarn dev

O servidor estará disponível em `http://localhost:3000`.

### Validação para Deploy

Antes de mandar para deploy, valide a integridade da aplicação executando:

yarn run build

Este comando irá compilar o projeto e avisar sobre qualquer erro ou aviso que precise ser resolvido.

### Backend

Para que o aplicativo funcione completamente no ambiente de desenvolvimento, é importante que a aplicação backend também esteja em execução. Por favor, confira as instruções no link abaixo:

[Link para o repositório do backend] https://github.com/afranioag/get-me.git

## Autenticação

A aplicação possui telas autenticadas e telas livres. Para acessar as áreas autenticadas, basta criar uma conta diretamente na aplicação.

## Organização do Git

Este projeto segue algumas diretrizes básicas para manter o código organizado:

- **Branches:**

  - `main`: Branch principal com a versão de produção.

- **Pull Requests:**
  - Garanta que todas as funcionalidades sejam revisadas antes do merge na `main`.

Esperamos que essas diretrizes o ajudem a contribuir de maneira eficaz para o projeto!
