import { useState, useEffect } from "react";
import type { Course } from "../types/Course";
import { CourseService } from "../services/CourseService";

export const useCourses = () => {
  const service = new CourseService();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCourses = async () => {
    setLoading(true);
    const data = await service.getCourses();
    setCourses(data);
    setLoading(false);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const addCourse = async (name: string, instructor: string, credits: number) => {
    await service.addCourse(name, instructor, credits);
    await loadCourses();
  };

  const deleteCourse = async (id: number) => {
    await service.deleteCourse(id);
    await loadCourses();
  };

  return {
    courses,
    loading,
    setCourses,
    addCourse,
    deleteCourse,
  };
};