import  AssignmentList from "./components/assignment-list/AssignmentList";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import AddAssignment from "./components/add-assignment/AddAssignment";
function App() {
  return (
    <>
      <header>
        <h1>StudyNest</h1>
        <nav style={{ padding: "1rem", background: "#f4f4f4" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>Dashboard</Link>
          <Link to="/assignments" style={{ marginRight: "1rem" }}>Assignments</Link>
          <Link to="/add">Add Assignment</Link>
        </nav>
      </header>

      <main>
        <AssignmentList />
        {/* Other teammates' components will be added here */}
         <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assignments" element={<AssignmentList />} />
          <Route path="/add" element={<AddAssignment />} />
        </Routes>
      </main>

      <footer>
        <p>StudyNest Team — Devansh, Mankirt, Jasleen</p>
      </footer>
    </>
  );
}

export default App;
