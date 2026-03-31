import type { Assignment } from "../types/Assignment";
import { AssignmentRepository } from "../repositories/AssignmentRepository";

class AssignmentService {
  private repo = new AssignmentRepository();

  async getAssignments(): Promise<Assignment[]> {
    return await this.repo.getAll();
  }

  async toggleComplete(id: number): Promise<void> {
    const assignment = await this.repo.getById(id);
    if (assignment) {
      assignment.completed = !assignment.completed;
      await this.repo.update(assignment);
    }
  }

  async addAssignment(assignment: Assignment): Promise<void> {
    await this.repo.create(assignment);
  }

  async deleteAssignment(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}

export const assignmentService = new AssignmentService();