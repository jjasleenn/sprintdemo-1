import { Course } from "../types/Course";
import { courseTestData } from "../data/courseTestData";

export class CourseRepository {
  getAll(): Course[] {
    return courseTestData;
  }

  create(course: Course): Course {
    courseTestData.push(course);
    return course;
  }

  delete(id: number): void {
    const index = courseTestData.findIndex(c => c.id === id);
    if (index !== -1) {
      courseTestData.splice(index, 1);
    }
  }
}