import express from "express"
import cors from 'cors'
import Users from "../models/usersModel.js"
const appUser = express.Router()

appUser.use(cors())
appUser.use(express.urlencoded({ extended: true }))
appUser.use(express.json())

appUser.post("/", async (req, res) => {
  console.log(req.body)
  console.log('hej från user')
  const user = await Users.findOne({
    $and: [
      { email: req.body.email },
      { password: req.body.password }
    ]

  })

  try {
    res.send(user._id);
  } catch (error) {
    res.status(500).send(error)
  }
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