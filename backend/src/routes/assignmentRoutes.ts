import { Router } from "express";
import { PrismaClient } from "@prisma/client";
 
const router = Router();
const prisma = new PrismaClient();
 
router.get("/", async (req, res) => {
  const assignments = await prisma.assignment.findMany();
  res.json(assignments);
});
 
router.post("/", async (req, res) => {
  const assignment = await prisma.assignment.create({
    data: req.body,
  });
  res.json(assignment);
});
 
router.delete("/:id", async (req, res) => {
  await prisma.assignment.delete({
    where: { id: Number(req.params.id) },
  });
  res.json({ message: "Deleted" });
});
 
export default router;