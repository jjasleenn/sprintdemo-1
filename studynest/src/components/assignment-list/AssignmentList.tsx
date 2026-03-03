import "./AssignmentList.css";
import { useAssignments } from "../../hooks/useAssignments";

const AssignmentList = () => {
  const { assignments, deleteAssignment, toggleComplete } = useAssignments();

  return (
    <section className="assignment-list">
      <h2>My Assignments</h2>

      {assignments.length === 0 ? (
        <p className="assignment-list-empty">No assignments yet</p>
      ) : (
        <ul className="assignment-list-items">
          {assignments.map((a) => (
            <li key={a.id} className="assignment-list-item">
              <h3>
                {a.title} {a.completed ? "✅" : ""}
              </h3>

              <p><strong>Course:</strong> {a.course}</p>
              <p><strong>Due:</strong> {a.dueDate}</p>

              <div style={{ marginTop: "8px" }}>
                <button onClick={() => toggleComplete(a.id)}>
                  Toggle Complete
                </button>

                <button
                  onClick={() => deleteAssignment(a.id)}
                  style={{ marginLeft: "8px" }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default AssignmentList;
