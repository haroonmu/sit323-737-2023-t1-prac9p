const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://haroonmu:jF5jcSRwtOz6AaNp@cluster0.eeoib.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let dbConnection;
module.exports = {
    connectToDatabase : function(calback){
        client.connect(function(err,db){
            if (err || !db){
            return calback(err);
            }
            dbConnection = db.db("project-pitch");
            console.log("Connect to mongo atlas");
            return calback();
        });
    },
    getDb: function(){
        return dbConnection;
    }
}