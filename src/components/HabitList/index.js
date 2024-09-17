import React from "react";
import HabitItem from "../HabitItem";
import "./index.css";

function HabitList({ habits, updateHabit, deleteHabit }) {
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          updateHabit={updateHabit}
          deleteHabit={deleteHabit}
        />
      ))}
    </div>
  );
}

export default HabitList;
