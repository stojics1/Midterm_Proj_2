import coursesTable from "../enrolledtable/enrolledtable.components";
import "./coursestable.styles.css";

export const classesTable = ({courses, enrollment, handleInput}) =>{
    //const {course_id, CourseName, TimeOfDay } = WOWSTUFF;


    return (
    <div className={'LISTOFSTUFF'}>
      <table>
        <thead>
            <th>Course Id</th>
            <th>Cousre Name</th>
            <th>Time Of Day</th>
            <th>Enroll Button</th>
        </thead>
        <tbody>
            {courses.map(course => (<coursesTable course={course} enrollment={enrollment} handleInput={handleInput}></coursesTable>))}
        </tbody>
      </table>
        
    </div>
)
        };

export default classesTable;