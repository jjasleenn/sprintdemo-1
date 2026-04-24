import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useCourses } from "../../hooks/useCourses";

const CourseList = () => {
  const { getToken } = useAuth();
  const { courses, deleteCourse, loading, setCourses } = useCourses();

  useEffect(() => {
    const fetchCourses = async () => {
      const token = await getToken();

      const res = await fetch("http://localhost:3000/my-courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setCourses(data); // 👈 update state from API
    };

    fetchCourses();
  }, []);

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
          {courses.map((course: any) => (
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