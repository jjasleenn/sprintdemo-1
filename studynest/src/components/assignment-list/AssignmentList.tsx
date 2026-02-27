import "./AssignmentList.css";

export type Assignment = {
  id: number;
  title: string;
  course: string;
  dueDate: string;
};

type Props = {
  assignments: Assignment[];
  onDelete: (id: number) => void;
};

const AssignmentList = ({ assignments, onDelete }: Props) => {
  return (
    <section className="assignment-list">
      <h2>My Assignments</h2>

      {assignments.length === 0 ? (
        <p className="assignment-list-empty">No assignments yet</p>
      ) : (
        <ul className="assignment-list-items">
          {assignments.map((a) => (
            <li key={a.id} className="assignment-list-item">
              <h3>{a.title}</h3>
              <p><strong>Course:</strong> {a.course}</p>
              <p><strong>Due:</strong> {a.dueDate}</p>

              <button onClick={() => onDelete(a.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default AssignmentList;
