// Importando as bibliotecas
const express = require('express');
const {MongoClient,ObjectId} = require('mongodb');

// Criando a aplicação e configurando JSON:
const app = express();
app.use(express.json());

// Criando a conexão com o banco:
const client = new MongoClient(process.env.MONGO_URI);
const livros = client.db('biblioteca').collection('livros');


// Criando os métodos HTTP:
app.post('/livros', async (req, res) => {
    const novoLivro = await livros.insertOne(req.body);
    res.status(201).json(novoLivro);
});

app.get('/livros', async (req, res) => {
    const listaLivros = await livros.find().toArray();
    res.json(listaLivros);
});

app.get('/livros/:id', async (req, res) => {
    const livroEspecifico = await livros.findOne({ _id: new ObjectId(req.params.id) });
    res.json(livroEspecifico);
});

app.put('/livros/:id',async(req,res)=>{
    const livroAtualizado = await livros.updateOne({_id:new ObjectId(req.params.id)},{$set: req.body});
    res.json(livroAtualizado);
});

app.delete('/livros/:id', async (req, res) => {
    const livroDeletado = await livros.deleteOne({ _id: new ObjectId(req.params.id) });
    res.json(livroDeletado);
});

client.connect()
    .then(()=>{
        console.log('CONECTADO AO MONGODB'),
        app.listen(3000,()=>console.log('API RODANDO NA PORTA 3000'))
    })
    .catch((erro)=>console.log('ERRO AO CONECTAR',erro.message));



// Criando os métodos HTTP:
app.post('/livros',async(req,res)=>{
    const novolivro = await livros.insertOne(req.body);
    res.status(201).json(novolivro);
});
    
app.get('/livros',async(req,res)=>{
    const listalivros = await livros.find().toArray();
    res.json(listalivros);
});
    
app.get('/livros/:id',async(req,res)=>{
    const livroEspecifico = await livros.findOne({_id:new ObjectId(req.params.id)});
    res.json(livroEspecifico);
});
    
app.put('/livros/:id',async(req,res)=>{
    const livroAtualizado = await livros.updateOne({_id:new ObjectId(req.params.id)},{$set: req.body});
    res.json(livroAtualizado);
});
    
app.delete('/livros/:id',async(req,res)=>{
    const livroDeletado = await livros.deleteOne({_id: new ObjectId(req.params.id)});
    res.json(livroDeletado);
});
    
client.connect()
    .then(()=>{
        console.log('CONECTADO AO MONGODB'),
        app.listen(3000,()=>console.log('API RODANDO NA PORTA 3000'))
    })
    .catch((erro)=>console.log('ERRO AO CONECTAR',erro.message))

