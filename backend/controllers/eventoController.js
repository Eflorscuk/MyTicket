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
                const evento = new Evento(
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

const getEvento = async (req, res, next) => {
    try {
        const id = req.params.id
        const evento = await firestore.collection('eventos').doc(id)
        const data = await evento.get()
        if(!data.exists) {
            res.status(404).send('Evento with the given ID not found')
        } else {
            res.send(data.data())
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const updateEvento = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body
        const evento = await firestore.collection('eventos').doc(id)
        await evento.update(data)
        res.send('Evento record update successfuly')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const deleteEvento = async (req, res, next) => {
    try {
        const id = req.params.id
        await firestore.collection('eventos').doc(id).delete
        res.send('Evento deleted sucessfuly')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addEvento,
    getAllEventos,
    getEvento,
    updateEvento,
    deleteEvento
}