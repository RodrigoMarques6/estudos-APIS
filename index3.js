const express = require('express')
const app = express()
app.listen('5000')

app.route('/').get( (req, res) => {
    res.send('Olá mundo!')
} )

// Agora vamos trocar a informação "olá mundo", pelas informações públicas da API do github