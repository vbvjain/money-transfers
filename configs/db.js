require('dotenv').config()
const mongoose = require('mongoose')


const CLUSTER_URI = process.env.CLUSTER_URI
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME
mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${CLUSTER_URI}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites:false
    })
    .then(() => console.log("Successfully connect to MongoDB."))
    .catch(err => console.error("Connection error", err));