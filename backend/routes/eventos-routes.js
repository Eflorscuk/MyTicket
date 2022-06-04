const express = require('express')
const { addEvento, getAllEventos, getEvento, updateEvento } = require('../controllers/eventoController')

const router = express.Router()

router.post('/evento', addEvento)
router.get('/eventos', getAllEventos)
router.get('/evento/:id', getEvento)
router.put('/evento/:id', updateEvento)

module.exports = {
    routes: router
}