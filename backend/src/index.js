const express = require('express')
const server = express()
const porta = 3000

server.listen(3000, () => console.log(`escutando na porta ${porta}`))
