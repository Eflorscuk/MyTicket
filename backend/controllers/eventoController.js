'use strict'

const firebase = require('../db')
const Evento = require('../models/evento')
const firestore = firebase.firestore()

const addEvento = async(req, res, next) => {
    try {
        const data = req.body
        await firestore.collection('eventos').doc().set(data)
        res.send('Record saved sucessfuly')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getAllEventos = async(req, res, next) => {
    try {
        const eventos = await firestore.collection('eventos')
        const data = await eventos.get()
        const eventosArray = []
        if(data.empty) {
            res.status(404).send('No event record found')
        } else {
            data.forEach(doc => {
                const student = new Evento(
                    doc.id,
                    doc.data().nome,
                    doc.data().precoPorIngresso,
                    doc.data().cidade,
                    doc.data().estado,
                    doc.data().pais,
                    doc.data().diaEvento,
                    doc.data().mesEvento,
                    doc.data().anoEvento,
                    doc.data().totalIngressos,
                    doc.data().ingressosRestantes
                )
                eventosArray.push(evento)
            })
            res.send(eventosArray)
        }
    } catch(error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addEvento,
    getAllEventos
}