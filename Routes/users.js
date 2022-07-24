import express from "express"
import cors from 'cors'
import Users from "../models/usersModel.js"
const appUser = express.Router()

appUser.use(cors())
appUser.use(express.urlencoded({ extended: true }))
appUser.use(express.json())

appUser.get("/", async (req, res) => {
  res.send('hej user')
  /*  const users = await Users.find({})
 
    try {
      res.send(users)
    } catch (error) {
      res.status(500).send(error)
    } */
})


appUser.post("/", async (req, res) => {
  console.log(req.body)
  const user = new Users(req.body)
  console.log(user)
  try {
    await user.save()
    res.send(user)
  } catch (error) {
    res.status(500).send(error)
  }
})



export default appUser