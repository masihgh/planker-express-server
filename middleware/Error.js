const logErrors = async (err, req, res, next) => {
  console.error(err.stack)
  next(err)
}

const errorHandler = async (err, req, res, next) => {
  res.status(500)
  res.send({statusCode:500, error: err })
}

module.exports = {errorHandler,logErrors}