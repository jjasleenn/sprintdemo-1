import type  { Assignment } from "../types/Assignment";
import { assignmentTestData } from "../data/assignmentTestData";

class AssignmentRepository {
  private assignments: Assignment[] = [...assignmentTestData];

  getAll(): Assignment[] {
    return this.assignments;
  }

  getById(id: number): Assignment | undefined {
    return this.assignments.find(a => a.id === id);
  }

  create(assignment: Assignment): void {
    this.assignments.push(assignment);
  }

  update(updated: Assignment): void {
    this.assignments = this.assignments.map(a =>
      a.id === updated.id ? updated : a
    );
  }

  delete(id: number): void {
    this.assignments = this.assignments.filter(a => a.id !== id);
  }
}

export const assignmentRepository = new AssignmentRepository();