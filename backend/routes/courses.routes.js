import express from "express";
import { getCourses, getCourse, updateCourse, deleteCourse } from "../controllers/courses.controller.js";
const C_router = express.Router();


C_router.get("/:course_id", getCourse);
C_router.get("/", getCourses);
C_router.patch("/:course_id", updateCourse);
C_router.delete("/:course_id", deleteCourse);

export default C_router;