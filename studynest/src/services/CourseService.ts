import type { Course } from "../types/Course";
import { CourseRepository } from "../repositories/CourseRepository";

export class CourseService {
  private repo = new CourseRepository();

  async getCourses(): Promise<Course[]> {
    return await this.repo.getAll();
  }

  async addCourse(
    name: string,
    instructor: string,
    credits: number
  ): Promise<Course> {
    const newCourse: Course = {
      id: Date.now(),
      name,
      instructor,
      credits,
    };

    return await this.repo.create(newCourse);
  }

  async deleteCourse(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}