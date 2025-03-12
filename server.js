//---------
// PACKAGES
//---------

const express = require("express");
const path = require("path");
const fs = require("fs");

//------------
// APPLICATION
//------------

const app = express();

//------------
// MIDDLEWARES
//------------

app.use(express.static("public"));

//------------
// ROUTE HANDLERS
//------------

app.get("/api/stores", (req, res) => {
  const filePath = path.join(__dirname, "data", "stores.json");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error("Error reading stores data:", err);
      return res.status(500).send("Error reading file");
    }

    const stores = JSON.parse(data.toString()); 
    res.json(stores); 
  });
});

//-----
// PORT
//-----

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
