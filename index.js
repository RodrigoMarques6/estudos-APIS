const express = require('express')
// Chamando o módulo express e guardando o express em uma constante
const app = express()
// Chamando o express para funcionar
// Agora posso usar qualquer coisa com o express, basta digitar "app" e o método que se quer
app.listen('3000')
// Listen fica "ouvindo" o navegador, e quando chegar na porta 3000, ele vai funcionar

app.route('/').get( (req, res) => res.send("Olá") )
app.route('/sobre').get( (req, res) => res.send("Olá mundo!") )
app.route('/sobre/rodrigomarques6').get( (req, res) => res.send("RodrigoMarques6"))

// Route é uma função do express, que significa "rotas", ou seja, um caminho. Exemplo de rotas: "http://localhost:3000/sobre", no caso, o "/sobre" é uma rota!
// Vamos a mais um exemplo: http://localhost:3000/rodrigomarques6/sobre
// No caso acima, o "/rodrigomarques6/sobre" é uma rota
// "GET" é o método utilizado, e dentro dele, devemos falar o que vai acontecer.
// Deve-se passar, dentro do método GET, uma "req" (requisition) e uma "res" (response), seguida de uma arrow function