const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const mockPlaces = [
  { name: "Cafe WorkHub", rating: 4.6, type: "work" },
  { name: "Romantic Rooftop", rating: 4.8, type: "date" },
  { name: "Quick Bites Express", rating: 4.1, type: "quick" },
  { name: "Budget Eats", rating: 4.0, type: "budget" },
  { name: "Premium Workspace Cafe", rating: 4.9, type: "work" }
];

app.get("/api/places", (req, res) => {
  const { mood } = req.query;

  const filtered = mockPlaces.filter(
    (place) => place.type === mood
  );

  res.json(filtered);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
