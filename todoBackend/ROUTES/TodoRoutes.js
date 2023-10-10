const express = require('express')
const router = express.Router()

const Todo = require('../MODELS/Todo')

router.get('/test', (req, res) => {
    res.json({message: 'Welcome to the Todo Routes API'})
})

router.post('/createtodos', async (req, res) => {
    try {
        const {title, description} = req.body
        const newTodo = new Todo({
            title,
            description
        })
        await newTodo.save()

        res.status(201).json({
            message: 'Todo created successfully', 
            newTodo
        })

    } catch (error) {
        res.status(500).json({message: error.message})
    }

})

router.get('/gettodos', async (req, res) => {
    try{
        const todos = await Todo.find()
        res.status(200).json({todos})
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/gettodo/:id', async (req, res) => {
    try{
        const todo = await Todo.findById(req.params.id)

        if(!todo){
            res.status(404).json({message: 'Todo not found'})
        }
        res.status(200).json({todos: todo})
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

router.put('/updatetodo/:id', async (req, res) => {
    try{
        const {title, description, completed} = req.body
        const todo = await Todo.findByIdAndUpdate(req.params.id, {
            title,
            description,
            completed
        },
        {new: true})

        if(!todo){
            res.status(404).json({message: 'Todo not found'})
        }
        res.status(200).json({
            message: 'Todo updated successfully',
            todos: todo
        })
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

router.delete('/deletetodo/:id', async (req, res) => {
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id)

        if(!todo){
            res.status(404).json({message: 'Todo not found'})
        }
        res.status(200).json({
            message: 'Todo deleted successfully'
        })
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router