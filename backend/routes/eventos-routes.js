const express = require('express')
const { addEvento, getAllEventos, getEvento } = require('../controllers/eventoController')

const router = express.Router()

router.post('/evento', addEvento)
router.get('/eventos', getAllEventos)
router.get('/evento/:id', getEvento)
module.exports = {
    routes: router
}