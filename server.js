const express = require("express");
///application///
const app = express();

///port///
const PORT = 3000;

const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database (creates 'database.db' if it doesn't exist)
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});




///middlewares ///
app.use(express.static("public"));



///routes///
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello world!" });
});

///listen///
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});




