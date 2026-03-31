import type { Assignment } from "./../types/Assignment";
 
export type DashboardStats = {
  total: number;
  completed: number;
  pending: number;
};
 
export class DashboardService {
  async getStats(assignments: Assignment[]): Promise<DashboardStats> {
    const total = assignments.length;
    const completed = assignments.filter((a) => a.completed === true).length;
    const pending = total - completed;
 
    return {
      total,
      completed,
      pending,
    };
  }
}