const mongoose = require('mongoose');
const mongoDebug = require('debug')('app:mongo');

/*mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true  })
        .then(()=> console.log('MongoDb is UP'))
        .catch((err=> console.log('Mongo is Down : ',err.message)));*/

async function connect(path) {
    try{
        await mongoose.connect(path, 
        { useNewUrlParser: true, useUnifiedTopology: true  });
        mongoDebug('MongoDb is UP')
    }catch(err){
        mongoDebug('Mongo is Down : ',err.message);
    }
}

module.exports = connect;