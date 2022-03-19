const express = require("express") 
var employees = require('./routes/Routes')
const bodyParser = require("body-parser")
const fs = require('fs');

const app = express()



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/Routes')
app.use('/', employees)



app.listen(3000) 







