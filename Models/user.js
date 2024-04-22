const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        require: true,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
        unique: true,
      },
      jobTitle: {
        type: String,
      },
      Gender: {
        type: String
      },
    })

    const User = mongoose.model("user", userSchema)

    module.exports = 'user.js'
    