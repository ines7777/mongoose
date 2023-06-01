const express=require('express')
const connectDB = require('./config/connectDB')
require('dotenv').config()
const queries=require("./queries/queries")

connectDB()
//queries.createAndSavePerson()
//queries.createManyPeople()
//queries.serachByName("ayoub")
//queries.serachByFood("pizza")
//queries.searchById("6477b632ee54e9f42ec30184")
//queries.updatePerson("6477b632ee54e9f42ec30184")
//queries.newUpdatePerson("ines")
//queries.deletePerson("6477b632ee54e9f42ec30184")
//queries.removeMany("ayoub")
queries.chainSearch()

const app= express()

const port=process.env.PORT  

app.listen(port, (error)=>{
    error ? console.log(error) : console.log(`server is running on ${port}`)

})