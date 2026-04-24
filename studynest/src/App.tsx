import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import "./App.css";

import Dashboard from "./components/Dashboard/Dashboard";
import AssignmentList from "./components/assignment-list/AssignmentList";
import AddAssignment from "./components/add-assignment/AddAssignment";

function App() {
  return (
    <Router>
      <header>
        <h1>StudyNest</h1>

        {/* Auth UI */}
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>

        {/*Navigation */}
        <nav style={{ padding: "1rem", background: "#f4f4f4" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>Dashboard</Link>
          <Link to="/assignments" style={{ marginRight: "1rem" }}>Assignments</Link>
          <Link to="/add">Add Assignment</Link>
        </nav>
      </header>

      <main>
        {/* Protect routes */}
        <SignedIn>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/assignments" element={<AssignmentList />} />
            <Route path="/add" element={<AddAssignment />} />
          </Routes>
        </SignedIn>

        <SignedOut>
          <p>Please login to access the app </p>
        </SignedOut>
      </main>

      <footer>
        <p>StudyNest Team — Devansh, Mankirt, Jasleen</p>
      </footer>
    </Router>
  );
}

export default App;
