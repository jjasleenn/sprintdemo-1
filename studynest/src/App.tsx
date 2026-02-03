import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Dashboard from "./components/Dashboard/Dashboard";
import AssignmentList from "./components/assignment-list/AssignmentList";
import AddAssignment from "./components/add-assignment/AddAssignment";

type Assignment = {
  id: number;
  title: string;
  course: string;
  dueDate: string;
};

function App() {
  const [assignments, setAssignments] = useState<Assignment[]>([
    { id: 1, title: "Math Homework", course: "Math", dueDate: "2026-02-10" },
    { id: 2, title: "Science Project", course: "Science", dueDate: "2026-02-12" },
  ]);

  const handleDelete = (id: number) => {
    setAssignments(assignments.filter((a) => a.id !== id));
  };

  return (
    <Router>
      <header>
        <h1>StudyNest</h1>

        <nav style={{ padding: "1rem", background: "#f4f4f4" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>Dashboard</Link>
          <Link to="/assignments" style={{ marginRight: "1rem" }}>Assignments</Link>
          <Link to="/add">Add Assignment</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/assignments"
            element={
              <AssignmentList
                assignments={assignments}
                onDelete={handleDelete}
              />
            }
          />

          <Route path="/add" element={<AddAssignment />} />
        </Routes>
      </main>

      <footer>
        <p>StudyNest Team — Devansh, Mankirt, Jasleen</p>
      </footer>
    </Router>
  );
}

export default App;
