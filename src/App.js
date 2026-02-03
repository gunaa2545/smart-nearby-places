import { useState } from "react";

function App() {
  const [mood, setMood] = useState("");
  const [message, setMessage] = useState("");

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
      setMessage(`Your location: ${lat}, ${lng}`);
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
    </div>
  );
}

export default App;
