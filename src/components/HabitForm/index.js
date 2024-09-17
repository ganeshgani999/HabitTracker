import React, { useState } from "react";
import "./index.css";

function HabitForm({ addHabit }) {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && frequency) {
      const newHabit = {
        id: Date.now(),
        name,
        frequency,
        completion: {},
      };
      addHabit(newHabit);
      setName("");
      setFrequency("");
    } else {
      alert("Please fill in mentioned two fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="habit-form">
      <input
        type="text"
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Frequency of Habit When You Do Ex. Daily, Weekends..."
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default HabitForm;
