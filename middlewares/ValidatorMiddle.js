const { body,validationResult } = require('express-validator');

const ValidatorMiddle = async (req, res,next) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    next()
  }else{
    return res.status(400).json({ errors: result.array() });
  }
}

module.exports = { ValidatorMiddle }
