const express = require('express') // framework
const path = require('express') // join path
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express();

// app settings
app.set('port', process.env.PORT|| 5000 );

const {mongoose} = require('./database')

// enable cors

app.use(cors())




// middlewares
app.use(morgan('dev'))
app.use(express.json()) // acepta json
app.use(bodyParser.json())
app.use(express.urlencoded({
    extended:true// estaba en false , lo pondre en true
}))

// static files
//console.log(__dirname+ "\\public" )
//app.use(express.static(__dirname+ "\\public"))


// routers
app.use('/api/', require('./routers/index')) //  router index

// starting server
app.listen(app.get('port'),()=>{
    console.log('Server un port', app.get('port'));
});
