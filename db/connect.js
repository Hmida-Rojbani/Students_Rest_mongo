const mongoose = require('mongoose');

/*mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true  })
        .then(()=> console.log('MongoDb is UP'))
        .catch((err=> console.log('Mongo is Down : ',err.message)));*/

async function connect(path) {
    try{
        await mongoose.connect(path, 
        { useNewUrlParser: true, useUnifiedTopology: true  });
        console.log('MongoDb is UP')
    }catch(err){
        console.log('Mongo is Down : ',err.message);
    }
}

module.exports = connect;