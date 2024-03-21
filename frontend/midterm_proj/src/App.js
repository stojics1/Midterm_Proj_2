import './App.css';
import { SearchBar } from './components/searchbar/searchbar.components';
import  * as React  from 'react';
import CourseTable from "./components/coursestable/coursestable.components";
import {studentTable} from "./components/enrolledtable/enrolledtable.components";
import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import {useTable} from 'react-table';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
//import Button from "react-bootstrap/Button";
//import calssesTable from './components/coursestable/coursestable.components';
//import calse from './components/enrolledtable/enrolledtable.components';
//import Courses from '../../../backend/models/courses.models';
//import studentTable from "./components/enrolledtable/enrolledtable.components";
const courseslist = "http://localhost:8000/courses";
const studentList = "http://localhost:8000/student";



function App() {

    // const [courses, setCourses] = useState([]);
    // const [filteredCourses, setFilteredCourses] = useState([]);
    // const [searchInput, setSearchInput] = useState("")
    //
    // useEffect(() => {
    //
    //     const fetchCourses = async () => {
    //         const response = await axios(
    //             courseslist,
    //         );
    //         setCourses(response.data);
    //     };
    //     fetchCourses();
    // }, []);
    //
    // useEffect(() => {
    //     let filtered = [];
    //
    //     if (searchInput === "") {
    //         filtered = courses
    //     } else {
    //         filtered = courses.filter(course =>
    //             course.name.toLowerCase().includes(searchInput.toLowerCase())
    //         );
    //     }
    //     setFilteredMonsters(filtered);
    // }, [monsters, searchInput]);

    // const [studentData,setStudentData] = useState([])
  //   useEffect(()=>{
  //       axios.get(studentList)
  //           .then(studentData=>setStudentData(studentData.data))
  //           .catch(err => console.log(err))
  //   })
  //
  // const [data,setData] = useState([])
  //
  //   useEffect(() => {
  //       axios.get(courseslist)
  //           .then(data => setData(data.data))
  //           .catch(err => console.log(err))
  //
  //   }, [])
  //
  //
  //
  //
  //     let variant = "primary", title = "Enroll";
  //     //const data = React.useMemo(()=> data,[]);
  //
  //     const Coursecolumns= React.useMemo(() => [
  //           {
  //               Header: "Course ID",
  //               accessor: "course_id"
  //           },
  //           {
  //               Header:"Course Name",
  //               accessor: "CourseName"
  //           },
  //           {
  //               Header:"Deparment",
  //               accessor: "Department"
  //           },
  //           {
  //               Header:"Time of Day",
  //               accessor: "TimeOfDay"
  //           },
  //           // {
  //           //     Header:"Enroll",
  //           //     accessor:"Enroll",
  //           //     formatter: <Button id={id} variant={variant} onClick={handlerClick}>{title}</Button>
  //           // },
  //       ], []
  //     );
  //

    //const {getTableProps, getTableBodyProps,  headerGroups, rows, prepareRow} =
        //useTable({Coursecolumns, data});

  return (
    <div className="App">

      {/*<div>*/}
      {/*    studentTable*/}
      {/*</div>*/}
        <div>
        {CourseTable()}
      </div>
        <div>
            {studentTable()}
        </div>
  </div>
  );

}

export default App;
