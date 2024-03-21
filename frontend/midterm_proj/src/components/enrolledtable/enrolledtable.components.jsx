import * as React from "react";
import {useEffect, useState, hooks} from "react";
import axios from "axios";
import {useTable, useRowSelect} from "react-table";
import Button from "react-bootstrap";
import CourseTable from "../coursestable/coursestable.components";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {DropdownItem} from "react-bootstrap";
import lolCheck, {CheckBox} from "../checkbox/checkbox.components";
import {Form} from "react-bootstrap";
import {StrictMode} from "react";
import eventHandler from "bootstrap/js/src/dom/event-handler";
import {coursesTable} from "../rowsforcourses/RFC.components";
const studentlist = "http://localhost:8000/students";

export function studentTable() {
    const [courseData, setCourseData]= useState()
    const [data,setData] = useState([])
    const [filteredCourses, setFilteredCourses] = useState()
    const [records, setRecords] = useState(data)
    useEffect(() => {
        axios.get(studentlist)
            .then(data => setData(data.data))
            .catch(err => console.log(err))

    }, [])


    function showStudents(event){
        let newData = [];
        if (event.target.value === ''){

            const fetchData = async () => {
                const response = await axios(courseslist);
                setData(response.data);
            };
            fetchData();
        }
        else{
            newData = data.filter(row => {
                return DropdownItem.data.Name.toLowerCase().includes(event.target.value.toLowerCase())
            })
            setData(newData)
        }}
    function HandleThatShit(event){
           let newData = [];
           if (checked === true){
               useEffect(() => {
                   axios.get(studentlist)
                       .then(data => setData(data.data))
                       .catch(err => console.log(err))

               }, [])

               data.map((enrolled, row.student_id) => {
                  return enrolled.cells,map((){
                     headerName,
                     ...rest
                   })
               })
           }
    }

    const columns= React.useMemo(() => [


        {
            Header: "Student Id",
            accessor: "student_id",

        },
        {
            Header: "Name",
            accessor: "Name"
        },



        ], []
    );


    const {getTableProps, getTableBodyProps,  headerGroups, rows, prepareRow, selectedFlatRows} =
        useTable({columns, data})


    return(
        <div className="tableContainer">

            <table {...getTableProps()} aria-selected="true">

                <thead>
                {headerGroups.map((headerGroup) => (

                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th{...column.getHeaderProps()}>
                                {column.render("Header")}
                            </th>))}
                    </tr> ))}

                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (

                        <tr {...row.getRowProps()}>

                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                            ))}
                            <Form.Check
                                name="group1"
                                type={'radio'}
                                checked={false}
                                onClick={HanldeThatShit}
                            />


                        </tr>

                    )
                })}
                </tbody>
            </table>

        </div>
    );
}
export default studentTable;