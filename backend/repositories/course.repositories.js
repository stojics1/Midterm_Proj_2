import { query } from "express";
import Courses from "../models/courses.models.js";

//Will be used to display the available courses and the enrolled courses
export const getCourseFromRepository = async (query) => {
    try {
         return await Courses.find(query);
        
    } catch (error) {
        throw error;
    }
}

//To update enrollment status of the course
export const updateCoursesInRepository = async (query, update) => {
    try {
        return await Courses.findOneAndUpdate(
            {...query},
            {...update},
            {new: true}
        ).lean();
        
    } catch (error) {
        throw error;
    }
}

export const deleteCourseInRepository = async (query) => {
    try{
        return await Courses.findOneAndDelete({...query});
    } catch (error){
        throw error;
    }
}

