GET => server sa data fetch karvana ho tab use karta hai
POST => server pa data send karna ho toh
PATCH => server pa data alredy hai aur uss data ko update karna ho
DELETE => server pa data hai aur uuse delete karna ho toh


const notes = [ ];

app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message : 'Note created successfully',
    });
});

//get all the notes
app.get('/notes', (req, res) => {
    res.status(200).json({
        message : 'Notes retrieved successfully',
        notes : notes
    });
});

/* delete/notes/:index */
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index;
    delete notes[index];
    res.status(200).json({
        message : 'Note deleted successfully',
    });
});

/* patch/notes/:index */
app.patch('/notes/:index', (req, res) => {
    const index = req.params.index;
    const content = req.body.content;
    notes[index].content = content;
    res.status(200).json({
        message : 'Note updated successfully',
    });

});






/*

note = {
    title: "my first note",
    content: "this is the first note"
}

const notes = [
    {
        title: 'Note 1',
        content: 'This is the content of note 1'
    },
    {
        title: 'Note 2',
        content: 'This is the content of note 2'
    }
];

*/



POSTMAN => Postman is a popular API platform used to build, test, document, and share APIs, offering a GUI for sending HTTP requests (GET, POST, etc.) and analyzing responses without writing code. It streamlines the entire API lifecycle for developers and QA engineers, allowing for automated testing and collaboration.




OPERATION IN DATABASE
#CRUD
C => Create
R => Read
U => Update
D => Delete


Mongoose is an Object Data Modeling (ODM) library for Node.js and MongoDB. It acts as a bridge that allows you to interact with your MongoDB database using JavaScript objects rather than raw database commands. 




Authentication consist of four things:
Validation
-means the data we get is in the right format or note


Verification
-the data we get from user is correct or not regarding that person(process)

Authentication
-identify the request from which user is coming

Authorization
-it refers to what a user can access
