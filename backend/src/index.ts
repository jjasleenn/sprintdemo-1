import express from "express";
import cors from "cors";
import courseRoutes from "./routes/courseRoutes"
import assignmentRoutes from "./routes/assignmentRoutes";
 
const app = express();
 
// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
 
// Routes
app.use("/courses", courseRoutes);
app.use("/assignments", assignmentRoutes);
 
// Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});