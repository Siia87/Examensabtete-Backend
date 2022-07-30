import express from 'express'
import cors from 'cors'
import Tasks from '../models/tasksModel.js'
const appTasks = express.Router()

appTasks.use(cors())
appTasks.use(express.urlencoded({ extended: true }))
appTasks.use(express.json())

appTasks
  .get("/", async (req, res) => {

    const tasks = await Tasks.find({})

    try {
      res.send(tasks)
    } catch (error) {
      res.status(500).send(error)
    }
  })


  .post("/", async (req, res) => {
    console.log(req.body)
    const task = new Tasks(req.body)

    try {
      await task.save()
      res.send(task)
    } catch (error) {
      res.status(500).send(error)
    }
  })
  .delete("/", async (req, res) => {
    console.log(req.body)
    const id = req.body
    try {
      const deleteTask = await Tasks.deleteOne({ _id: id })
      res.send(deleteTask)
      res.status(200).send({ deleted: true })
    } catch (err) {
      console.error("Error DELETE /task", err)
      res.status(501).send(SERVER_ERROR)
    }
  })

export default appTasks