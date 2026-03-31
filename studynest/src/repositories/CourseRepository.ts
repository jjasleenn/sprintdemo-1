import type { Course } from "../types/Course";
import { courseTestData } from "../data/courseTestData";

export class CourseRepository {
  async getAll(): Promise<Course[]> {
    return [...courseTestData];
  }

  async create(course: Course): Promise<Course> {
    courseTestData.push(course);
    return course;
  }

  async delete(id: number): Promise<void> {
    const index = courseTestData.findIndex((c) => c.id === id);
    if (index !== -1) {
      courseTestData.splice(index, 1);
    }
  }
}