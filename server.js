const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

// Create express app
const app = express();

// Connect to SQLite database (it will create the database file if it doesn't exist)
const db = new sqlite3.Database(
  "./database.db", // Make sure the path is correct
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error("Error opening database:", err.message);
    } else {
      console.log("Connected to SQLite database.");
    }
  }
);

// Serve static files like HTML, CSS, JS from the public directory
app.use(express.static("public"));

// API route to fetch stores data
app.get("/api/stores", (req, res) => {
  // Path to your JSON file (ensure it exists)
  const filePath = path.join(__dirname, "data", "stores.json");

  // Read the stores data from the JSON file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading stores data:", err);
      return res.status(500).send("Error reading file");
    }

    try {
      const stores = JSON.parse(data); // Parse JSON data
      res.json(stores); // Send the data as a JSON response
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).send("Error parsing data");
    }
  });
});

// Set the port to listen for incoming requests
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
