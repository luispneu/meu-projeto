const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

const produtos = [
  {
    id: 1,
    nome: "chuteira x",
    preco: 1000,
    descricao: "aaaaaaaa",
    imagem: "chutes.jpg",
  },
  {
    id: 2,
    nome: "chuteria y",
    preco: 20000,
    descricao: "aaaaaaaaaaa",
    imagem: "chutes.jpg",
  },
  {
    id: 3,
    nome: "chuteira z",
    preco: 40000,
    descricao: "qdqawda",
    imagem: "chutes.jpg",
  },
  {
    id: 4,
    nome: "chuteria o",
    preco: 23999,
    descricao: "AAAAAAA",
    imagem: "chutes.jpg",
  },
  {
    id: 5,
    nome: "chuteira b",
    preco: 20000,
    descricao: "dadfsad",
    imagem: "chutes.jpg",
  },
  {
    id: 6,
    nome: "chuteria q",
    preco: 20000,
    descricao: "adkasljfdsapejfd",
    imagem: "chutes.jgp",
  },
  {
    id: 7,
    nome: "chuteria e",
    preco: 2000,
    descricao: "sdakdcias",
    imagem: "chutes.jpg",
  },
  {
    id: 8,
    nome: "chuteria K",
    preco: 20000,
    descricao: "skjqiohoiewq",
    imagem: "chutes.jpg",
  },
  {
    id: 9,
    nome: "Chuteira S",
    preco: 20000,
    descricao: "qdskajdsapklw",
    imagem: "chutes.jpg",
  },
  {
    id: 10,
    nome: "Chuteria J",
    preco: 10000,
    descricao: "wklsdãelkfdq",
    imagem: "chutes.jpg",
  },
];

function buscarprodutoPorId(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

app.get("/", (req, res) => {
  res.render("index",{produtos});
});

app.get("/produtos/:id", (req, res) => {
  const produto = buscarprodutoPorId(req.params.id)
  res.render("produto", { produto } ) 
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
