const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contacts", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "3 Developers backend is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});