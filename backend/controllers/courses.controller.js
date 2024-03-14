import { getCourseFromRepository, updateCoursesInRepository, deleteCourseInRepository} from "../repositories/course.repositories.js";

export const getCourses = async (req, res) => {
    try {
        const viewcourses = await getCourseFromRepository();
        res.status(200).send(viewcourses);
    } catch (error) {
        res.status(500).send(error.message, 'failed to fetch a list of courses');
    }
}

export const getCourse = async (req, res) => {
    const { course_id } = req.params;
    try {
        const course = await getCourseFromRepository({course_id: course_id});
        res.status(200).send(course);
    } catch (e) {
        res.status(500).send(e.message, `failed to fetch `);
    }
}

export const updateCourse = async (req, res) => {
    const { course_id } = req.params;
    const {body} = req;
    
    try {
         const enrollment = await updateCoursesInRepository({course_id: course_id}, body);
         res.status(200).send(enrollment);
    } catch (e) {
        res.status(500).send(e.message, `failed to enroll `);
    }
}

export const deleteCourse = async (req, res) => {
    const {course_id} = req.params;
    try {
        const CourseDeletion = await deleteCourseInRepository({course_id: course_id});
        if(CourseDeletion){
            res.status(200).send();
        }
    } catch (error) {
        res.status(500).send(`failed to delete course`);
    }
}

