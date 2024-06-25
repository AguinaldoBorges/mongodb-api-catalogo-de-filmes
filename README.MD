# Catálogo de Filmes

Este é um projeto de API para gerenciar um catálogo de filmes, utilizando Node.js, Express e MongoDB Atlas. O projeto inclui operações CRUD (Create, Read, Update, Delete) e testes unitários com Jest e Supertest.

## Funcionalidades

- Adicionar um novo filme
- Obter a lista de todos os filmes
- Obter detalhes de um filme por ID
- Atualizar as informações de um filme
- Remover um filme do catálogo

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Jest
- Supertest

## Pré-requisitos

- Node.js instalado
- Conta no MongoDB Atlas

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/root/movie-catalog.git
   cd movie-catalog
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure a conexão com o MongoDB Atlas no arquivo `src/app.js`:
   ```javascript
   mongoose.connect('mongodb+srv://root:1234@guinanews.lftlup9.mongodb.net/?retryWrites=true&w=majority&appName=GuinaNews', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   }).then(() => {
       console.log('Conectado ao MongoDB');
   }).catch((err) => {
       console.error('Erro ao conectar ao MongoDB:', err);
   });
   ```

## Executando o Projeto

1. Inicie o servidor:
   ```bash
   node server.js
   ```

2. A API estará disponível em `http://localhost:3000`.

## Rotas da API

- `POST /movies`: Adiciona um novo filme.
- `GET /movies`: Retorna todos os filmes.
- `GET /movies/:id`: Retorna um filme pelo ID.
- `PATCH /movies/:id`: Atualiza um filme pelo ID.
- `DELETE /movies/:id`: Remove um filme pelo ID.

## Testes Unitários

Os testes unitários são executados com Jest e Supertest. Para rodar os testes, utilize o comando:

```bash
npm test
```

Os testes garantem que as funcionalidades da API estejam funcionando corretamente, incluindo a criação, leitura, atualização e exclusão de filmes.

## Estrutura do Projeto

```
project-root/
│
├── src/
│   ├── controllers/
│   │   └── movieController.js
│   ├── models/
│   │   └── Movie.js
│   ├── routes/
│   │   └── movieRoutes.js
│   ├── tests/
│   │   └── movie.test.js
│   └── app.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```
