import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {useTable} from "react-table";
import Button from "react-bootstrap";
import CourseTable from "../coursestable/coursestable.components";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {DropdownItem} from "react-bootstrap";
const studentlist = "http://localhost:8000/students";

export function studentTable() {
    const [data,setData] = useState([])
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
    const columns= React.useMemo(() => [

        {
            Header: "Student Id",
            accessor: "student_id"
        },
        {
            Header: "Name",
            accessor: "Name"
        },
        // {
        //     Header: "Course ID",
        //     accessor: "course_id"
        // },
        // {
        //     Header:"Course Name",
        //     accessor: "CourseName"
        // },
        // {
        //     Header:"Deparment",
        //     accessor: "Department"
        // },
        // {
        //     Header:"Time of Day",
        //     accessor: "TimeOfDay"
        // },
        //     {
        //         Header:"Enrolled",
        //         accessor: "enrolled"
        //     },


        ], []
    );


    const {getTableProps, getTableBodyProps,  headerGroups, rows, prepareRow} = useTable({columns, data})


    return(
        <div className="tableContainer">

            <table {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup) => (
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
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                            ))}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>);
}
export default studentTable;