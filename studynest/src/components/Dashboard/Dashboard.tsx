import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <h1>StudyNest Dashboard</h1>
      <p>Welcome! Use the navigation above to manage your assignments.</p>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Assignments</h3>
          <p>3</p>
        </div>

        <div className="card">
          <h3>In Progress</h3>
          <p>1</p>
        </div>

        <div className="card">
          <h3>Completed</h3>
          <p>1</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
