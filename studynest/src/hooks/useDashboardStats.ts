import { useEffect, useState } from "react";
import { useAssignments } from "./useAssignments";
import { DashboardService } from "../services/DashboardService";
import type { DashboardStats } from "../services/DashboardService";

export const useDashboardStats = () => {
  const { assignments } = useAssignments();
  const [stats, setStats] = useState<DashboardStats>({
    total: 0,
    completed: 0,
    pending: 0,
  });
  const service = new DashboardService();
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      setLoading(true);
      const data = await service.getStats(assignments);
      setStats(data);
      setLoading(false);
    };

    loadStats();
  }, [assignments]);

  useEffect(() => {
    const fetchStats = async () => {
      const result = await service.getStats(assignments);
      setStats(result);
    };

    fetchStats();
  }, [assignments]);
 
  return { ...stats, loading };
};