const mongoose = require('mongoose')
const URI = 'mongodb://umr1dg6twgcsdoqwsn5i:C2vFfh0GRV8YoQyUmC2V@bvm8idirpxbcdz9-mongodb.services.clever-cloud.com:27017/bvm8idirpxbcdz9'


mongoose.connect(URI)
    .then(db=> console.log('Db is connected'))
    .catch(err=> console.error(err))


module.exports = mongoose;