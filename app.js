const connectDB = require('./database/connect')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()

//Routes
const HomeRoute = require('./routes/HomeRoute')
const AuthRoute = require('./routes/AuthRoute')

//Configs
dotenv.config()
const PORT = process.env.PORT || 5000

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Routes
app.use('/', HomeRoute)
app.use('/auth', AuthRoute)
app.use('*', function(req,res){
    res.status(404)
    res.send(
		{
			statusCode:404,
			error: 'Not Found',
			message: ["either the URL you have configured doesn't exist at all, or the resource you are trying to access doesn't exist."],
			route:req.originalUrl
		}
	)
})




const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT , () => console.log(`server is running on port ${PORT}`))
    } catch (error) {
        console.log(error);
		process.exit(1);
    }
}

start()
