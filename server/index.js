import express from "express";

const port = 8908;

const app = express();

app.use("/api/test", (req, res) => {
  res.send("Testing");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
