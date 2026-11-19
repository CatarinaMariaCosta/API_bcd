# 📚 API de Biblioteca Pessoal

API RESTful desenvolvida em **Node.js**, **Express** e **MongoDB** para gerenciamento de acervo de livros pessoais (CRUD completo).

## 🚀 Tecnologias Utilizadas
* **Node.js** & **Express** (Servidor e rotas)
* **MongoDB Atlas** & **Mongoose** (Banco de dados NoSQL e ODM)
* **Dotenv** & **CORS** (Segurança e variáveis de ambiente)

## 🔗 Link da API em Produção (Render)
Acesse a API online: `https://onrender.com` *(substitua pelo link gerado no Render)*

## 📌 Endpoints da API

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/` | Verifica o status da API |
| `POST` | `/api/livros` | Cadastra um novo livro |
| `GET` | `/api/livros` | Lista todos os livros cadastrados |
| `GET` | `/api/livros/:id` | Busca um livro específico pelo ID |
| `PUT` | `/api/livros/:id` | Atualiza os dados de um livro |
| `DELETE` | `/api/livros/:id` | Remove um livro do banco |

### Exemplo de Corpo da Requisição (`POST` / `PUT`)
```json
{
  "titulo": "O Hobbit",
  "autor": "J.R.R. Tolkien",
  "anoPublicacao": 1937,
  "lido": true
}
```
