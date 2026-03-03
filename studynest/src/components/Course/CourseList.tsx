import { useCourses } from "../../hooks/useCourses";

/**
 * CourseList Component
 * 
 * Uses the useCourses hook to retrieve and manage courses.
 * Business logic is handled in the service layer.
 */
const CourseList = () => {
  const { courses, deleteCourse } = useCourses();

  return (
    <section>
      <h2>Courses</h2>

      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <strong>{course.name}</strong> — {course.instructor} ({course.credits} credits)
              <button onClick={() => deleteCourse(course.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CourseList;