const express = require('express')
const index = express()
const porta = 3001

index.use(express.json())

const eventos = ['Festa universitária', 'Festa sertaneja', 'Show de Adoniram']

// Retornar um evento
index.get('/eventos/:index', (req, res) => {
    const { index } = req.params

    return res.json(eventos[index])
})

// Retornar todos os eventos
index.get('/eventos', (req, res) => {
    return res.json(eventos)
})

// Criar novo evento
index.post('/eventos', (req, res) => {
    const { name } = req.body
    eventos.push(name)

    return res.json(eventos)
})

// atualizar evento
index.put( '/eventos/:index', (req, res) => {
    const { index } = req.params
    const { name } = req.body

    eventos[index] = name

    return res.json(eventos)
})

// Deletar eventos
index.delete('/eventos/:index', (req, res) => {
    const { index } = req.params

    eventos.splice(index, 1)
    return res.json({ message: "O evento foi deletado"})
})

index.listen(porta, () => console.log(`escutando na porta ${porta}`))
