const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express');
require('dotenv').config()

const db = require('./configs/db')

const transfers = require('./routes/transfers')

const app = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(express.json())

app.use('/api/transfers',transfers)
const port = process.env.PORT || 3000

process.on("uncaughtException", reason => {
    console.log("Unhandled Exception :", "reason:", reason);
    process.exit(1);
});

process.on("unhandledRejection", (reason, p) => {
    console.log("Unhandled Rejection at:", p, "reason:", reason);
    process.exit(1);
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})
