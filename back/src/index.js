const express = require('express') // framework
const path = require('express') // join path
const morgan = require('morgan')
const bodyParser = require('body-parser')
//const {database} = require('./keys')

const cors = require('cors')


const app = express();

// app settings
app.set('port', process.env.PORT|| 5000 );

// const {mongoose} = require('./database')

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
app.use('/api/', require('./routers/proforma')) //  router index
app.use('/api/', require('./routers/others')) //  router index
app.use('/api/', require('./routers/componets')) //  router index


//app.use((err, req, res, next)=>{
//    return res.json({
//        message: 'Error pex' //  err.message
//    })
//})
// uso // req, res, next
// next(error) (del catch )
//
// crear errores personalizados
// thorow new Error ('No puede realizar eso ')

// starting server
app.listen(app.get('port'),()=>{
    console.log('Server un port', app.get('port'));
});
