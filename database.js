const { MongoClient } = require('mongodb');

const url = "mongodb+srv://namaste:taaCUqibXTBafTTW@namastenode.n1zysa6.mongodb.net/";

const client = new MongoClient(url);

const dbName = "Demo";

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
  
    // the following code examples can be pasted here...

    const data = {
        firstname: "Virat",
        lastname: "Kohli",
        city: "Mumbai",
        phoneNumber: "7847478998",
    };

    const insertResult = await collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
  
    return 'done.';
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


// NOTES :- 

// HW:- 

// Go to mangodb website 
// Create a free M0 cluster
// Create a user
// Get the connection string 
// Install Mango DB Compass   :- is software to help us to create database 
// Create a database
// Install mangodb packages
// Create a connection from code
// Document CRUD - Create, Read, Update, Delete