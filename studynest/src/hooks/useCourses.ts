import { useState, useEffect } from "react";
import { Course } from "../types/Course";
import { CourseService } from "../services/CourseService";

export const useCourses = () => {
  const service = new CourseService();
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    setCourses(service.getCourses());
  }, []);

  const refresh = () => {
    setCourses(service.getCourses());
  };

  return {
    courses,
    addCourse: (name: string, instructor: string, credits: number) => {
      service.addCourse(name, instructor, credits);
      refresh();
    },
    deleteCourse: (id: number) => {
      service.deleteCourse(id);
      refresh();
    }
  };
};