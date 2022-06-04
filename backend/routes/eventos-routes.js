const express = require('express')
const { addEvento,
        getAllEventos,
        getEvento,
        updateEvento,
        deleteEvento } = require('../controllers/eventoController')

const router = express.Router()

router.post('/evento', addEvento)
router.get('/eventos', getAllEventos)
router.get('/evento/:id', getEvento)
router.put('/evento/:id', updateEvento)
router.delete('/evento/:id', deleteEvento)

module.exports = {
    routes: router
}