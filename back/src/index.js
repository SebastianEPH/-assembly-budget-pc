const express = require('express') // framework
const path = require('express') // join path
const morgan = require('morgan')

const app = express();

// app settings
app.set('port', process.env.PORT|| 5000 );

const {mongoose} = require('./database')


// middlewares
app.use(morgan('dev'))
app.use(express.json()) // acepta json

// static files
console.log(__dirname+ "\\public" )
app.use(express.static(__dirname+ "\\public"))


// routers
app.use('/api/', require('./routers/index')) //  router index

// starting server
app.listen(app.get('port'),()=>{
    console.log('Server un port', app.get('port'));
});
