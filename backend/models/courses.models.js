import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
    {
        "course_id": {type: Number, required: true, unique: true},
        "CourseName":{type: String, required: true},
        "department":{type: String, required:true},
        "TimeOfDay":{type:String, required: true},
        "capacity":{type:Number, required: true},
        "studentsEnroll":[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Students"
        }]
    },
    {strictQuery:true}

);

const Courses = new mongoose.model("Courses",CourseSchema);

export default Courses;