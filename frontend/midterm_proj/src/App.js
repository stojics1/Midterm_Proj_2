import './App.css';
import { SearchBar } from './components/searchbar/searchbar.components';
import  * as React  from 'react';
import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import {useTable} from 'react-table';
//import Button from "react-bootstrap/Button";
//import calssesTable from './components/coursestable/coursestable.components';
//import calse from './components/enrolledtable/enrolledtable.components';
//import Courses from '../../../backend/models/courses.models';
const studentslist = "http://localhost:8000/students";
const courseslist = "http://localhost:8000/courses";




function App() {

  const [data,setData] = useState([])

    useEffect(() => {
        axios.get(courseslist)
            .then(data => setData(data.data))
            .catch(err => console.log(err))

    }, [])
  // const [studentData, setStudentsData] =  useState([]);
  // const [filteredCourses, setFilteredCourses] = useState([]);
  // const [SearchInput,  setSearchInput] = useState("");
  // const [filteredStudents, setFilteredStudents] = useState([]);
  //
  // const getData = async ()=>{
  //     const response = await axios.get(courseslist);
  //     setData(response.data);
  // };
  //
  // useEffect(()=>{
  //     getCourseData();
  // }, []);
  //
  // const getStudentsData = async () =>{
  //     const response = await axios.get(studentslist);
  //     setStudentsData();
  // };
  //
  // useEffect(() => {
  //     getStudentsData();
  //     }, []);

      let variant = "primary", title = "Enroll";
      //const data = React.useMemo(()=> data,[]);

      const columns= React.useMemo(() => [
            {
                Header: "Course ID",
                accessor: "course_id"
            },
            {
                Header:"Course Name",
                accessor: "CourseName"
            },
            {
                Header:"Deparment",
                accessor: "Department"
            },
            {
                Header:"Time of Day",
                accessor: "TimeOfDay"
            },
            // {
            //     Header:"Enroll",
            //     accessor:"Enroll",
            //     formatter: <Button id={id} variant={variant} onClick={handlerClick}>{title}</Button>
            // },
        ], []
      );


    const {getTableProps, getTableBodyProps,  headerGroups, rows, prepareRow} =
        useTable({columns, data});

  return (
    <div className="App">
      <SearchBar>
        placeholder = 'Search Class'; 
      </SearchBar>
      <div className="tableContainer">
          <table {...getTableProps()}>
              <thead>
                    {headerGroups.map((headerGroup) =>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                            <th{...column.getHeaderProps()}>
                                {column.render("Header")}
                            </th>))}
                        </tr>))}
              </thead>
              <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                        prepareRow(row);
                  return(
                      <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => (
                              <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                          ))}
                      </tr>
                  )
              })}
              </tbody>
          </table>
      </div>
  </div>
  );

}

export default App;
