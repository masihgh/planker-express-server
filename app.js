const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()


//Configs
dotenv.config()
const port = process.env.PORT || 5000

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
