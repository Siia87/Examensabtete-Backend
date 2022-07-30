import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  userId: {
    type: String,
    requreed: true
  },
  title: {
    type: String,
    requireed: true
  },
  description: {
    type: String,
    requireed: false
  },
  priority: {
    type: Number,
    requireed: false,
    default: 0
  },
  done: {
    type: Boolean,
    default: false,
    requireed: false
  }
},
  { versionKey: false }
)

const Tasks = mongoose.model('Tasks', taskSchema)

export default Tasks