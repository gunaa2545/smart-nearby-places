import { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");
  const [message, setMessage] = useState("");
  const [places, setPlaces] = useState([]);

  const findPlaces = async () => {
    if (!mood) {
      setMessage("Please select a mood first 🙂");
      return;
    }

    try {
      setMessage("Finding places...");

      const response = await fetch(
        `https://smart-nearby-places-backend.onrender.com/api/places?mood=${mood}`
      );

      const data = await response.json();

      setPlaces(data);
      setMessage(`Showing places for "${mood}" mood`);
    } catch (error) {
      setMessage("Failed to fetch places from server");
    }
  };

  return (
    <div className="app">
      <h1>📍 Smart Nearby Places</h1>
      <p style={{ color: "#555" }}>
        Find the best nearby places based on your mood
      </p>

      <select onChange={(e) => setMood(e.target.value)}>
        <option value="">Select your mood</option>
        <option value="work">Work</option>
        <option value="date">Date</option>
        <option value="quick">Quick Bite</option>
        <option value="budget">Budget</option>
      </select>

      <button onClick={findPlaces}>Find Places</button>

      <p>{message}</p>

      {places.map((place, index) => (
        <div className="place-card" key={index}>
          <strong>{place.name}</strong>
          <div>⭐ Rating: {place.rating}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
