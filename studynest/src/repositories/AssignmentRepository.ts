import type  { Assignment } from "../types/Assignment";
 
export class AssignmentRepository {
  async getAll(): Promise<Assignment[]> {
    const res = await fetch("http://localhost:3000/assignments");
    return res.json();
  }
 
  async getById(id: number): Promise<Assignment> {
    const res = await fetch(`http://localhost:3000/assignments/${id}`);
    return res.json();
  }
 
  async create(assignment: Assignment): Promise<void> {
    await fetch("http://localhost:3000/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(assignment),
    });
  }
 
  async update(assignment: Assignment): Promise<void> {
    await fetch(`http://localhost:3000/assignments/${assignment.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(assignment),
    });
  }
 
  async delete(id: number): Promise<void> {
    await fetch(`http://localhost:3000/assignments/${id}`, {
      method: "DELETE",
    });
  }
}