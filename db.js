const mongoose = require('mongoose'); // Import Mongoose for MongoDB interactions
const dotenv = require('dotenv'); // Import dotenv to manage environment variables

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => { // Define an async function to connect to the database
    try {
        await mongoose.connect(process.env.MONGO_URI, { // Connect to MongoDB using the URI from .env
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected'); // Log success message
    } catch (error) {
        console.error('MongoDB connection error:', error.message); // Log connection error
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = connectDB; // Export the connectDB function for use in other files
