const User = require('../database/model/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({
      statusCode: 400,
      error: 'User Has Registerd',
      message: "a user has already registerd with this email.",
    })
  } else {
    const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUNDS));
    const newUser = new User({
      userName: req.body.username,
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt),
    })
    
    newUser.save()
    return res.status(200).json({
      statusCode: 200,
      user: newUser,
      message: "User created successfuly!",
    })
  }

}

const login = async (req, res) => {
  let user = await User.findOne({ email: req.body.email }).exclude("password");
  if (user) {
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      return res.status(200).json({
        statusCode: 200,
        user: user,
        token: jwt.sign({ email: req.body.email }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRE }),
        message: "User Logged In successfuly!",
      })
    } else {
      return res.status(401).json({
        statusCode: 401,
        error: 'Authentication Faild',
        message: "Username Or Password is wrong.",
      })
    }
  } else {
    return res.status(401).json({
      statusCode: 401,
      error: 'Authentication Faild',
      message: "Username Or Password is wrong.",
    })
  }

}

module.exports = { register, login }
