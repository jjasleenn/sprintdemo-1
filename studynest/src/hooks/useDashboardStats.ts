import { useMemo } from "react";
import { useAssignments } from "./useAssignments";
import { DashboardService } from "../services/DashboardService";

export const useDashboardStats = () => {
  const { assignments } = useAssignments();
  const service = new DashboardService();

  const stats = useMemo(() => {
    return service.getStats(assignments);
  }, [assignments]);

  return stats;
};