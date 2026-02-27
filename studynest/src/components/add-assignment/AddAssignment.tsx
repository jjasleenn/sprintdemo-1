import { useState } from "react";
import "./AddAssignment.css";

const AddAssignment = () => {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(`Assignment Added:
Title: ${title}
Course: ${course}
Due Date: ${dueDate}`);

    setTitle("");
    setCourse("");
    setDueDate("");
  };

  return (
    <section className="add-assignment">
      <h2>Add New Assignment</h2>

      <form onSubmit={handleSubmit}>
        <label>Assignment Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Course</label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />

        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />

        <button type="submit">Add Assignment</button>
      </form>
    </section>
  );
};

export default AddAssignment;
