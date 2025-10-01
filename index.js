const express = require("express");
const mongoose = require("mongoose");
const songRoute = require("./songRoute");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// All your routes will be prefixed with /Song
app.use("/Song", songRoute);

// --- New and Improved Way to Start the Server ---
const startServer = async () => {
  try {
    // 1. Replace <db_password> with your REAL password
    await mongoose.connect("mongodb+srv://kapasihatim718_db_user:kapasihatim718_db_user@cluster0.xjljeux.mongodb.net/mysong");
    
    console.log("✅ Successfully connected to MongoDB!");

    // 2. Only start listening for requests AFTER the database is connected
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}/`);
    });

  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with an error code
  }
};

startServer();