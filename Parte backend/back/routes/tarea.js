const express = require('express')
const router = express.Router()

const Tarea = require('../models/tarea.js')
//POST
router.post ('/nueva-tarea', async(req,res) =>{
    const body = req.body
    try {
        const TareaBD = await Tarea.create(body)
        res.status(200).json(TareaBD)
    } catch (error) {
        return res.status(500).json({
            mensaje:'Estas mal muy mal busca el camino', error
        })
    }
})
//GET
router.get('/tarea', async (req, res) => {
    try {
        tareaBD = await Tarea.find()
        res.json(tareaBD)
    } catch (error) {
        return res.status(400).json({
            mensaje:'No se pueden ver las tareas, sigue participando', error
        })
    }
})
//GET PARAMS ID
router.get('/tarea/:id',async(req,res)=>{
    const _id = req.params.id
    try {
        const tareaBD = await Tarea.findOne({_id})
        res.json(tareaBD)
    } catch (error) {
        return res.status(400).json({
            mensaje: 'No se puede encontrar la tarea con ese ID, por favor sigue participando', error
        })
    }
})
//DELETE FOR ID
router.delete('/tarea/:id', async(req, res)=>{
    const _id = req.params.id
    try {
        const tareaBD = await Tarea.findByIdAndDelete({_id})
        res.json(tareaBD)
    } catch (error) {
        return res.status(400).json({
            mensaje:'Por favor no cometer el error de nuevo',error
        })
    }
})
//PUT UPDATE WITH BODY
router.put('/tarea/:id', async(req,res)=>{
    const body = req.body
    const _id = req.params.id
    try {
        const tareaBD = await Tarea.findByIdAndUpdate({_id},body,{new:true})
        res.json(tareaBD)
    } catch (error) {
        return res.status(400).json({
            mensaje:'Es mas que eficiente, muy toxica',error
        })
    }
})



module.exports = router