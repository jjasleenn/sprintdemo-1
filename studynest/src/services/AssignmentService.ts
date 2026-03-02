import { Assignment } from "../types/Assignment";
import { assignmentRepository } from "../repositories/AssignmentRepository";

class AssignmentService {

  getAssignments(): Assignment[] {
    return assignmentRepository.getAll();
  }

  toggleComplete(id: number): void {
    const assignment = assignmentRepository.getById(id);
    if (assignment) {
      assignment.completed = !assignment.completed;
      assignmentRepository.update(assignment);
    }
  }

  addAssignment(assignment: Assignment): void {
    assignmentRepository.create(assignment);
  }

  deleteAssignment(id: number): void {
    assignmentRepository.delete(id);
  }
}

export const assignmentService = new AssignmentService();