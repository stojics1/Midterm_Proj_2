import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        "student_id": {type: Number, required: true, unique:true},
        "Name":{type: String, required:true},
        "enrolled":[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Courses"
        }]
    },
    {strictQuery:true}
);

const Student = mongoose.model("Student", StudentSchema);

export default Student;