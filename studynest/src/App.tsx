import  AssignmentList from "./components/assignment-list/AssignmentList";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>StudyNest</h1>
      </header>

      <main>
        <AssignmentList />
        {/* Other teammates' components will be added here */}
    
      </main>

      <footer>
        <p>StudyNest Team — Devansh, Mankirt, Jasleen</p>
      </footer>
    </>
  );
}

export default App;
