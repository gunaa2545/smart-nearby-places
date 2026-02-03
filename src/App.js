import { useState } from "react";

function App() {
  const [mood, setMood] = useState("");

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

      <p>Selected mood: {mood}</p>
    </div>
  );
}

export default App;
