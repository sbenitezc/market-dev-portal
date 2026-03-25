const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "test_key";

app.get("/", (req, res) => {
  res.send("Market Dev Portal API running");
});

app.get("/payments", (req, res) => {
  const key = req.headers["x-api-key"];

  if (key !== API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  res.json({
    status: "success",
    data: [{ id: 1, amount: 100 }]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
