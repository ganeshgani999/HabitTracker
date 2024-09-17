import React, { useState } from "react";
import "./index.css";
function HabitItem({ habit, updateHabit, deleteHabit }) {
  const [completion, setCompletion] = useState(habit.completion);

  const handleCheckboxChange = (date) => {
    const newCompletion = { ...completion, [date]: !completion[date] };
    setCompletion(newCompletion);
    updateHabit({ ...habit, completion: newCompletion });
  };

  const handleDelete = () => {
    deleteHabit(habit.id);
  };

  return (
    <div className="habit-item">
      <h2>{habit.name}</h2>
      <button onClick={handleDelete}>Delete</button>
      <div className="completion">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <label key={day}>
            <input
              type="checkbox"
              checked={completion[day] || false}
              onChange={() => handleCheckboxChange(day)}
            />
            {day}
          </label>
        ))}
      </div>
      <div className="progress"></div>
    </div>
  );
}

export default HabitItem;
