//server ko create karna
const express = require('express');
const noteModel = require('./models/node.model');

const app = express();
app.use(express.json());
//middleware to parse JSON bodies
//middleware is a function that has access to the request and response objects and can modify them or perform some operations before passing control to the next middleware or route handler.


/* Post /notes => Create a new note
   Get /notes => Get all notes
   Put /notes/:id => Update a note by ID
   Delete /notes/:id => Delete a note by ID
*/
app.post('/notes', async (req, res) => {
   const data = req.body;  /*title,description*/
   await noteModel.create({
      //create is a method provided by mongoose to create a new document in the database
      title: data.title,
      description: data.description
   })
   res.status(201).json({ message: 'Note created successfully' });
});

app.get('/notes', async (req, res) => {
   const notes = await noteModel.find();
   //find() gives us all the notes from the database
   //find() can also take a condition as an argument to filter the notes based on that condition. For example, noteModel.find({ title: 'Note 1' }) will give us all the notes with the title 'Note 1'.
   //findone() gives us a single note based on the condition we provide.
   //findone() gives object as a result, while find() gives us an array of objects as a result. If no note is found, findone() will return null, while find() will return an empty array.
   //findone() gives null if no note is found, while find() gives an empty array if no notes are found.
   res.status(200).json({
      message: 'Notes retrieved successfully',
      notes: notes
   })
});

app.delete('/notes/:id', async (req, res) => {
   const id = req.params.id; //params is used to get the id from the url
   await noteModel.findOneAndDelete({
      _id: id
   });
   //findByIdAndDelete() is a method provided by mongoose to delete a document from the database based on the id. It takes an object as an argument where we specify the condition to find the document to be deleted. In this case, we are using the _id field to find the document to be deleted.
   //findoneAndDelete() is a method provided by mongoose to delete a document from the database based on a condition. It takes an object as an argument where we specify the condition to find the document to be deleted. In this case, we are using the _id field to find the document to be deleted.
   res.status(200).json({ message: 'Note deleted successfully' });
});

app.patch('/notes/:id', async (req, res) => {
   const id = req.params.id;
   const description = req.body.description;

   await noteModel.findOneAndUpdate({_id: id}, {description: description});
   //findByIdAndUpdate() is a method provided by mongoose to update a document in the database based on the id. It takes two arguments, the first argument is an object where we specify the condition to find the document to be updated, and the second argument is an object where we specify the fields to be updated and their new values. In this case, we are using the _id field to find the document to be updated and updating the description field with the new value.
   //findoneAndUpdate() is a method provided by mongoose to update a document in the database based on a condition. It takes two arguments, the first argument is an object where we specify the condition to find the document to be updated, and the second argument is an object where we specify the fields to be updated and their new values. In this case, we are using the _id field to find the document to be updated and updating the description field with the new value.
   res.status(200).json({ message: 'Note updated successfully' });
});

module.exports = app;