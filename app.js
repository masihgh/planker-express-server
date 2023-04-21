const connectDB = require('./database/connect')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
//Routes
const HomeRoute = require('./routes/HomeRoute')

//Configs
dotenv.config()
const PORT = process.env.PORT || 5000

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/', HomeRoute)

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