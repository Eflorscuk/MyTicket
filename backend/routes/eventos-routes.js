const express = require('express')
const { addEvento, getAllEventos } = require('../controllers/eventoController')

const router = express.Router()

router.post('/evento', addEvento)
router.get('/eventos', getAllEventos)

module.exports = {
    routes: router
}