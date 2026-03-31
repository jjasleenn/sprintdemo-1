import { useCourses } from "../../hooks/useCourses";

const CourseList = () => {
  const { courses, deleteCourse, loading } = useCourses();

  if (loading) {
    return <p>Loading courses...</p>;
  }

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