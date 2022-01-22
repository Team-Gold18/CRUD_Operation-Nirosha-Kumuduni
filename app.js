//console.log("Hello World")

/*setTimeout(function(){
    console.log('Atfter 3 seconds this has been printed')

},3000)*/

/*var time =0;
//assign variable as timer / execute ass a loop
var timer= setInterval(function(){
    time +=2
    console.log("Kumuduni");
    if (time>5){
        clearInterval(timer)
    }
},2000)*/

//console.log(__dirname);
//console.log(__filename);

// const express = require('express')
// //const { MongoServerClosedError } = require('mongodb')
// const mongoose = require('mongoose')
// const url = 'mongodb ://localhost/Hotel_managementDB'

// const app = express()

// Mongoose.connect(url, {UseNewUrlParser:true})
// const con = mongoose.connection

// con.on('open', () => {
//     console.log('connected....')
// })

// const employeeRouter = require('./routes/employee')
// app.use('/employee', employeeRouter)

// app.listen(9000, () => {
//     console.log('server started..')
// })

//const express = require('express')
const express = require('express')
const mongoose = require('mongoose');
const url = 'mongodb://localhost/Hotel_managementDB'

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const empRouter = require('./routes/employee')
app.use('/employee', empRouter)

app.listen(9000, () => {
    console.log('server started')
})