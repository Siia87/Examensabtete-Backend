import express from "express"
import bcrypt from "bcryptjs"

import Users from "../models/usersModel.js"
const appUser = express.Router()


appUser.use(express.urlencoded({ extended: true }))
appUser.use(express.json())



appUser.post("/", async (req, res) => {
  console.log(req.body)
  try {

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    console.log(hashPassword)
    const user = new Users({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashPassword
    });

    await user.save()
    res.status(200)
    res.send(user)
  } catch (error) {
    res.status(500).send(error)
  }
})



export default appUser