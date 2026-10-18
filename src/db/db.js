// Import the Mongoose library, which is an ODM (Object Data Modeling) library for MongoDB and Node.js.
// It provides a straightforward way to model application data and interact with MongoDB.
const mongoose = require('mongoose');

// Define an asynchronous function named connectDB to establish a connection to the MongoDB database.
// This function uses async/await for handling promises, making the code easier to read and manage.
async function connectDB() {
    // Attempt to connect to the MongoDB database using the provided connection string (URI).
    // The URI includes the username, password, cluster details, and database name.
    // The 'await' keyword pauses execution until the connection is established or fails.
    await mongoose.connect("mongodb+srv://yt:cr8is7xbPRNXoPbk@yt-backend.ek2zrct.mongodb.net/halley");
    
    // Log a success message to the console once the connection is established.
    // This helps with debugging and confirms that the database connection was successful.
    console.log("Connected to MongoDB");
}

// Export the connectDB function so it can be imported and used in other parts of the application.
// This allows other modules to call this function to connect to the database.
module.exports = connectDB;