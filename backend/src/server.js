const express = require('express')
const server = express()
const porta = 3000

server.listen(porta, () => console.log(`escutando na porta ${porta}`))
