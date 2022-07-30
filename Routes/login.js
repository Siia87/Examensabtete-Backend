import express from "express"
import cors from 'cors'
import Users from "../models/usersModel.js"
const appLogin = express.Router()

appLogin.use(cors())
appLogin.use(express.urlencoded({ extended: true }))
appLogin.use(express.json())
appLogin.post("/", async (req, res) => {
  console.log(req.body)

  const user = await Users.findOne({
    $and: [
      { email: req.body.data.email },
      { password: req.body.data.password }
    ]

  })
  console.log(user)
  try {
    res.send(user);
  } catch (error) {
    res.status(500).send(error)
  }
})
export default appLogin