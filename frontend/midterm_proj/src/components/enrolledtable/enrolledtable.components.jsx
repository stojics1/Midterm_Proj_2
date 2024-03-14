import Button from "react-bootstrap/Button";


export const coursesTable = ({course, enrolled, handlerClick}) => {
    const {id, CourseName, TimeOfDay } = course ;
    let variant = "primary", title = "Enroll";
    if (enrolled){
        variant = "danger"; title="UnEnroll";
    }
    return(
        <div className="CoursesTable">
            <table>
                <thead>
                   <tr>Course Id</tr> 
                   <tr>Course Name</tr> 
                   <tr>Time Of Day</tr>
                   <tr>Enroll </tr>
                   <tr><Button id={id} variant={variant} onClick={handlerClick}>{title}</Button> </tr>
                </thead>
            </table>
        </div>
    )
};

export default coursesTable;