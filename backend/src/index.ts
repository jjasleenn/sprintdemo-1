import express from "express";
import cors from "cors";
import courseRoutes from "./routes/courseRoutes"
import assignmentRoutes from "./routes/assignmentRoutes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();  
const app = express();
 
// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/my-courses", async (req: any, res) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const courses = await prisma.course.findMany({
    where: { userId },
  });

  res.json(courses);
});

app.post("/courses", async (req: any, res) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { name } = req.body;

  const course = await prisma.course.create({
    data: {
      name,
      userId,
    },
  });

  res.json(course);
});

 
// Routes
app.use("/courses", courseRoutes);
app.use("/assignments", assignmentRoutes);
 
// Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});