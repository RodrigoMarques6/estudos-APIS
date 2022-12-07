const { application } = require('express')
const express = require('express')
const app = express()
app.listen('4000')

// Parte do middleware
// Nessa parte, vamos passar uma instrução para ser utilizado, no caso, para JSON:
app.use(express.json())

app.route('/').post( (req, res) => res.send('Rodrigo Marques') )


// Post vai permitir que eu receba informações, ou seja, informações de fora para dentro da API.
// Lembrar que tudo o que é enviado do "post" deverá ser recebido do "req" e não do "res", como no método "get".
// Relembrando: "req" significa "required", e "res" significa "response"
// "res" vem com o conteúdo da requisição
// O console.log serviu apenas para auxiliar a ver o que foi enviado aqui no terminal.

// Middleware - significa uma ponte entre as requisições, ou seja, quando se passa algo do insomnia para cá, ele primeiro passa por este middleware.