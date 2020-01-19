require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()
const server = http.Server(app)

const routes = require('./routes.js')
const { setupWebsocket } = require('./websocket.js')

setupWebsocket(server)

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)