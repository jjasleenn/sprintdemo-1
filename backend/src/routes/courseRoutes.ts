import { Router } from "express";
import { PrismaClient } from "@prisma/client";
 
const router = Router();
const prisma = new PrismaClient();
 
router.get("/", async (req, res) => {
  res.json(await prisma.course.findMany());
});
 
router.post("/", async (req, res) => {
  res.json(await prisma.course.create({ data: req.body }));
});
 
router.delete("/:id", async (req, res) => {
  await prisma.course.delete({
    where: { id: Number(req.params.id) },
  });
  res.json({ message: "Deleted" });
});
 
export default router;