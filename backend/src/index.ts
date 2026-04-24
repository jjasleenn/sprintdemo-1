import express from "express";
import cors from "cors";
import courseRoutes from "./routes/courseRoutes"
import assignmentRoutes from "./routes/assignmentRoutes";
import { clerkMiddleware,getAuth } from "@clerk/express";
 
const app = express();
 
// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(clerkMiddleware());
// Routes
app.use("/courses", courseRoutes);
app.use("/assignments", assignmentRoutes);

// Protected route
app.get("/protected", (req, res) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  res.json({
    message: "You are logged in",
    userId,
  });
});
 
// Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
