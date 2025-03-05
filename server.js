const express = require("express");
///application///
const app = express();

///port///
const PORT = 3000;





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




