import express from "express";
import { getStudent, getStudents, updateStudent, deleteStudent } from "../controllers/students.controller.js";

const S_router = express.Router();

S_router.get("/", getStudents);
S_router.get("/:student_id", getStudent);
S_router.patch("/:student_id",   updateStudent);
S_router.delete("/:student_id", deleteStudent);

export default S_router;