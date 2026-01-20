import "./AssignmentList.css";

const AssignmentList = () => {
  const assignments = [
    {
      id: 1,
      title: "Math Homework 2",
      course: "Math 101",
      dueDate: "2026-01-22",
      status: "In Progress",
    },
    {
      id: 2,
      title: "History Essay Outline",
      course: "History 120",
      dueDate: "2026-01-25",
      status: "Not Started",
    },
    {
      id: 3,
      title: "Biology Quiz Review",
      course: "Bio 110",
      dueDate: "2026-01-21",
      status: "Completed",
    },
  ];

  return (
    <section className="assignment-list">
      <h2>My Assignments</h2>

      <ul>
        {assignments.map((a) => (
          <li key={a.id}>
            <h3>{a.title}</h3>
            <p><strong>Course:</strong> {a.course}</p>
            <p><strong>Due:</strong> {a.dueDate}</p>
            <p><strong>Status:</strong> {a.status}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AssignmentList;
