const express = require("express");
const path = require("path");
const fs = require("fs");

// Create express app
const app = express();

// Serve static files like HTML, CSS, JS from the public directory
app.use(express.static("public"));

// API route to fetch stores data from JSON file
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
