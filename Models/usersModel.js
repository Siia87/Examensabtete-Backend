import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

  firstname: {
    type: String,
    requireed: true
  },
  lastname: {
    type: String,
    requireed: true
  },
  email: {
    type: String,
    requireed: true
  },
  password: {
    type: String,
    requireed: true
  },
},
  { versionKey: false }
)
const Users = mongoose.model('Users', userSchema)

export default Users