# API de Gerenciamento de Usuários

Bem-vindo à API de gerenciamento de usuários! Esta API permite que você gerencie usuários com funcionalidades como registro, login, alteração de senha e exclusão.

## 🌟 Recursos

- **Registro de usuário**: Cadastre novos usuários com nome, e-mail e senha.
- **Login de usuário**: Autentique usuários usando e-mail e senha.
- **Alteração de senha**: Atualize a senha para usuários autenticados.
- **Exclusão de usuário**: Exclua contas de usuários.

## 🚀 Primeiros Passos

Para começar a usar esta API, siga os passos abaixo:

### Pré-requisitos

- Node.js
- npm (ou yarn)
- MongoDB

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/vytuuu/user-management-api.git
   cd user-management-api
   ```

2. Crie um arquivo `.env` no diretório raiz e adicione suas variáveis de ambiente:

   ```env
   ATLAS_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ALLOWED_URLS=[""]
   PORT=3333
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Iniciar o servidor no ambiente de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Buildar aplicação:

   ```bash
   npm run build
   ```

6. Iniciar o servidor no ambiente de produção:

   ```bash
   npm run start
   ```

6. Acesse a documentação da API:
   Abra seu navegador e vá para [http://localhost:3333/api-docs](http://localhost:3333/api-docs) para visualizar a documentação do Swagger.

## 📚 Documentação da API

A documentação da API está disponível no Swagger. Você pode encontrar informações detalhadas sobre cada endpoint, incluindo formatos de solicitação e resposta.

## 🤝 Contribuindo

Feedbacks, sugestões e dúvidas são bem-vindos. Entre em contato comigo pelo Discord!

## 📧 Contato

Para dúvidas, sugestões ou feedback, sinta-se à vontade para entrar em contato:

- Nome: Vitor Ferreira
- Discord: vytu
