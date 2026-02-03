import { useState } from "react";
const mockPlaces = [
  { name: "Cafe WorkHub", rating: 4.6, type: "work" },
  { name: "Romantic Rooftop", rating: 4.8, type: "date" },
  { name: "Quick Bites Express", rating: 4.1, type: "quick" },
  { name: "Budget Eats", rating: 4.0, type: "budget" },
  { name: "Premium Workspace Cafe", rating: 4.9, type: "work" }
];


function App() {
  const [mood, setMood] = useState("");
  const [message, setMessage] = useState("");
  const [places, setPlaces] = useState([]);

 const findPlaces = () => {
  if (!mood) {
    setMessage("Please select a mood first 🙂");
    return;
  }

  if (!navigator.geolocation) {
    setMessage("Geolocation is not supported by your browser");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const filteredPlaces = mockPlaces.filter(
  (place) => place.type === mood
);

setPlaces(filteredPlaces);
setMessage(`Showing places for "${mood}" mood`);

    },
    () => {
      setMessage("Location permission denied");
    }
  );
};


  return (
    <div>
      <h1>Smart Nearby Places</h1>

      <select onChange={(e) => setMood(e.target.value)}>
        <option value="">Select your mood</option>
        <option value="work">Work</option>
        <option value="date">Date</option>
        <option value="quick">Quick Bite</option>
        <option value="budget">Budget</option>
      </select>

      <br /><br />

      <button onClick={findPlaces}>Find Places</button>

      <p>{message}</p>
      <ul>
  {places.map((place, index) => (
    <li key={index}>
      {place.name} ⭐ {place.rating}
    </li>
  ))}
</ul>

    </div>
  );
}

export default App;
