import { getStudentsInRepositories, updateStudentInRepository, deleteStudentInRepository } from "../repositories/student.repositories.js";

export const getStudents = async (req, res) => {
    try {
        const viewStudents = await getStudentsInRepositories();
        res.status(200).send(viewStudents);
    } catch (error) {
        res.status(500).send(`failed to get students`);
    }
}

export const getStudent = async (req, res) => {

    const {student_id} = req.params;
    try {
        const student = await getStudentsInRepositories({student_id: student_id});
        res.status(200).send(student);
    } 
    catch (error) {
        res.status(500).send(`failed to get student`);
    }
}

export const deleteStudent = async (req, res) => {
    const {student_id} = req.params;
    try {
        const StudentDeletion = await deleteStudentInRepository({student_id: student_id});
        if(StudentDeletion){
            res.status(200).send(StudentDeletion);
        }
    } catch (error) {
        res.status.send(`failed to delete student`);
    }
}

export const updateStudent = async(req,res) =>{
    const {student_id} = req.params;
    const {body} = req;
    try {
        const studentUpdate = await updateStudentInRepository({student_id: student_id}, body);
        res.status(200).send(studentUpdate);
    } catch (error) {
        res.status(500).send(`failed to update student ${error}`);
    }
}