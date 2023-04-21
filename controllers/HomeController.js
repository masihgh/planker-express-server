const index = async (req, res) => {
   res.send({
	   status: 'ok',
	   port: process.env.PORT,
   })
}

module.exports = {index}