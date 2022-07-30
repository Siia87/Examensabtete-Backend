import express from 'express'
const app = express()
const port = 3000
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import Users from './Routes/users.js'
import Tasks from './Routes/tasks.js'
import Login from './Routes/login.js'

const corsConfig = {
  origin: '*',
  credentials: true,
};

app.use(cors(corsConfig))
app.use('/users', Users)
app.use('/tasks', Tasks)
app.use('/login', Login)

const dbconn = process.env.MONGODB_CONNECT || '<defult>'

mongoose.connect(dbconn, { useNewUrlParser: true, }, () => console.log('connected to db mongoose'))

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('Connected successfully')
})




app.get('/', (req, res) => {
  res.send('hej')
})

app.listen(port, () => {
  console.log(`tjenare hejsan http://localhost:${port}`)
})