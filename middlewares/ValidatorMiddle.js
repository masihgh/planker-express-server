const { validationResult } = require('express-validator');

const ValidatorMiddle = async (req, res,next) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    next()
  }else{
    let messages = []
    result.array().map((error) => {
      messages.push(`${error.type} ${error.path} ${error.msg}`)
    })
    return res.status(400).json({
      statusCode: 400,
      error: 'Validation Error',
      message: messages,
    });
  }
}

module.exports = { ValidatorMiddle }
