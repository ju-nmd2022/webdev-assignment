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

app.get("/api/stores", (req, res) => {
  const filePath = path.join(__dirname, "data", "stores.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading stores data:", err);
      return res.status(500).send("Error reading file");
    }

    try {
      const stores = JSON.parse(data); 
      res.json(stores); 
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).send("Error parsing data");
    }

    /*const stores = JSON.parse(data); 
      res.json(stores); 
    */

  });
});

//-----
// PORT
//-----

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
