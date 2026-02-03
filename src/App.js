import { useState } from "react";

function App() {
  const [mood, setMood] = useState("");
  const [message, setMessage] = useState("");

  const findPlaces = () => {
    if (!mood) {
      setMessage("Please select a mood first 🙂");
    } else {
      setMessage(`Finding places for "${mood}" mood...`);
    }
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
