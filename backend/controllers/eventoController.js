'use strict'

const firebase = require('../db')
const Evento = require('../models/evento')
const firestore = firebase.firestore()

const addEvento = async (req, res, next) => {
    try {
        const data = req.body
        await firestore.collection('eventos').doc().set(data)
        res.send('Record saved sucessfuly')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addEvento
}