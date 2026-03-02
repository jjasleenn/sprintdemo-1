import { useState, useEffect } from "react";
import { Assignment } from "../types/Assignment";
import { assignmentService } from "../services/AssignmentService";

export const useAssignments = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    setAssignments(assignmentService.getAssignments());
  }, []);

  const toggleComplete = (id: number) => {
    assignmentService.toggleComplete(id);
    setAssignments([...assignmentService.getAssignments()]);
  };

  const addAssignment = (assignment: Assignment) => {
    assignmentService.addAssignment(assignment);
    setAssignments([...assignmentService.getAssignments()]);
  };

  const deleteAssignment = (id: number) => {
    assignmentService.deleteAssignment(id);
    setAssignments([...assignmentService.getAssignments()]);
  };

  return {
    assignments,
    toggleComplete,
    addAssignment,
    deleteAssignment,
  };
};