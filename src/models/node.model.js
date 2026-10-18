const mongoose = require('mongoose');


const nodeSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const noteModel = mongoose.model('note', nodeSchema);
module.exports = noteModel;

//CRUD operations
//crud explains how to create, read, update and delete data from a database. It is a common pattern used in web development to manage data in a database. The four operations are:
//Create: This operation is used to create a new record in the database. It is typically done using the HTTP POST method.
//Read: This operation is used to read or retrieve data from the database. It is typically done using the HTTP GET method.
//Update: This operation is used to update an existing record in the database. It is typically done using the HTTP PUT or PATCH method.
//Delete: This operation is used to delete a record from the database. It is typically done using the HTTP DELETE method.
