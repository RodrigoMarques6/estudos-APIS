// const express = require('express')
// const axios = require('axios')
// const app = express()
// app.listen('5000')

// // app.route('/').get( (req, res) => {
// //     res.send('Olá mundo!')
// // } )

// // Agora vamos trocar a informação "olá mundo", pelas informações públicas da API do github.
// // Instalamos também o axios, através do comando "npm i axios" e adicionamos ele para este projeto, lá em cima.

// app.route('/').get( (req, res) => {
//     // Adicionar aqui a biblioteca axios e também a url que eu quero buscar as informações, com o método get.
//     // Perceba que o axios trabalha com promises, ou seja, ele vai retornar um then() e um catch()".
//     axios.get('https://api.github.com/users/rodrigomarques6')
//     // Daremos um "send" para "enviar", ou seja, aparecer no insomnia o resultado
//     .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
//     // Acima adicionamos o "avatar_url" para aparecer o link da foto.
//     // Nós ainda conseguimos fazer um template string para fazer aparecer a nossa foto de perfil do github no insomnia.
//     // Se aparecer algum erro, a promessa será realizada com erro.
//     .catch(error => console.error(error))
// } )


const express = require('express')
const axios = require('axios')
const app = express()
app.listen('5000')

app.route('/').get( (req, res) => {
    axios.get('https://api.github.com/users/rodrigomarques6')
    .then(result => res.send(result.data))
    .catch(error => console.error(error))
} )


