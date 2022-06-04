const express = require('express')
const { addEvento } = require('../controllers/eventoController')

const router = express.Router()

router.post('/evento', addEvento)

module.exports = {
    routes: router
}