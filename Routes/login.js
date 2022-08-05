import express from "express"
import cors from 'cors'

import Users from "../models/usersModel.js"
const appLogin = express.Router()

appLogin.use(cors())
appLogin.use(express.urlencoded({ extended: true }))
appLogin.use(express.json())
appLogin.post("/", async (req, res) => {
  console.log(req.body)
  try {
    const user = await Users.findOne({
      email: req.body.data.email
    })

    if (user) {
      const validPassword = await bcrypt.compare(body.password, user.password)

      if (validPassword) {
        res.send(user._id)
        res.status(200).json({ message: "Valid password" });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
  }
  catch (error) {
    res.status(500).send(error)
  }
});

export default appLogin