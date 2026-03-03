import "./Dashboard.css";
import { useDashboardStats } from "../../hooks/useDashboardStats";

const Dashboard = () => {

  const { total, completed, pending } = useDashboardStats();
  
  return (
    <section className="dashboard">
      <h1>StudyNest Dashboard</h1>
      <p>Welcome! Use the navigation above to manage your assignments.</p>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Assignments</h3>
          <p>{total}</p>
        </div>

        <div className="card">
          <h3>In Progress</h3>
          <p>{pending}</p>
        </div>

        <div className="card">
          <h3>Completed</h3>
          <p>{completed}</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
