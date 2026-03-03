import { Course } from "../types/Course";
import { CourseRepository } from "../repositories/CourseRepository";

export class CourseService {
  private repo = new CourseRepository();

  getCourses(): Course[] {
    return this.repo.getAll();
  }

  addCourse(name: string, instructor: string, credits: number): Course {
    const newCourse: Course = {
      id: Date.now(),
      name,
      instructor,
      credits
    };

    return this.repo.create(newCourse);
  }

  deleteCourse(id: number): void {
    this.repo.delete(id);
  }
}