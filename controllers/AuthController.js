const User = require('../database/model/User')
const register = async (req, res) => {
  User.findOne({ email: req.body.email }).than((user) => {
    if (user) {
      return res.status(400).json({
        statusCode: 400,
        error: 'User Has Registerd',
        message: "a user has already registerd with this email.",
      })
    } else {
      const newUser = new User({
        userName: req.body.username,
        firstName: req.body.first_name,
        lastName: req.body.last_name,        
        email: req.body.email,
        password: req.body.password,
      })
      newUser.save()
      return res.status(200).json({
        statusCode: 200,
        user: newUser,
        message: "User created successfuly!",
      })
    }
  })
}

module.exports = { register }
