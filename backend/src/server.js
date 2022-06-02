const express = require('express')
const server = express()
const porta = 3001

server.use(express.json())

const eventos = ['Festa universitária', 'Festa sertaneja', 'Show de Adoniram']

// Retornar um evento
server.get('/eventos/:index', (req, res) => {
    const { index } = req.params

    return res.json(eventos[index])
})

// Retornar todos os eventos
server.get('/eventos', (req, res) => {
    return res.json(eventos)
})

// Criar novo evento
server.post('/eventos', (req, res) => {
    const { name } = req.body
    eventos.push(name)

    return res.json(eventos)
})

// atualizar evento
server.put( '/eventos/:index', (req, res) => {
    const { index } = req.params
    const { name } = req.body

    eventos[index] = name

    return res.json(eventos)
})

// Deletar eventos
server.delete('/eventos/:index', (req, res) => {
    const { index } = req.params

    eventos.splice(index, 1)
    return res.json({ message: "O evento foi deletado"})
})

server.listen(porta, () => console.log(`escutando na porta ${porta}`))
