import { query } from "express";
import Student from "../models/students.modles.js";

export const getStudentsInRepositories = async (query) => {
    try{
            return await Student.find(query);
    }
    catch (error){
        throw error;
    }
}

export const deleteStudentInRepository = async(query) => {
    try {
        return await Student.findOneAndDelete({...query})
    } catch (error) {
        throw error;
    }
}

export const updateStudentInRepository = async (query, update) => {
    
    try {
        return await Student.findOneAndUpdate(
            {...query},
            {...update},
            {new: true}
        ).lean();
        
    } catch (error) {
        throw error;
    }
}