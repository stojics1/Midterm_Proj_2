import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {useTable} from "react-table";
import {SearchBar} from "../searchbar/searchbar.components";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
//import {useTableSelectionCheckbox} from 'react-aria';
const courseslist = "http://localhost:8000/courses";


//import {Checkbox} from "../checkbox/checkbox.components";
export function CourseTable() {
    const [data,setData] = useState([])
    const [records,setRecords] = useState(data)
    //const [filteredData, setFilteredData] = useState(data)
    const [searchInput, setSearchInput] = useState("")


    useEffect(() => {
        const fetchData = async () => {
        const response = await axios(courseslist);
        setData(response.data);
    };
        fetchData();},[]);

    // useEffect(() => {
    //     let filteredData = [];
    //     if (searchInput === ""){
    //         filteredData = data
    //     } else{
    //         filteredData = data.filter(filteredData => filteredData.data.CourseName.toLowerCase().includes(searchInput.toLowerCase())
    //         );
    //     }
    //     setFilteredData(filteredData);
    // }, [filteredData, searchInput]);

    function handleFilter(event){
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
                return row.CourseName.toLowerCase().includes(event.target.value.toLowerCase())
            })
            setData(newData)

        }
    }
    const variant = "success", placeHolder = "Enroll";
    // function ClickHandler(event){
    //     const variant = "danger", placeHolder = "Uneroll";
    // }
    const columns= React.useMemo(() => [

            {
                Header: "Course ID",
                accessor: "course_id",

            },
            {
                Header:"Course Name",
                accessor: "CourseName",

            },
            {
                Header:"Deparment",
                accessor: "Department",

            },
            {
                Header:"Time of Day",
                accessor: "TimeOfDay",

            },
            {
                Header:"Enroll",
                accessor:"Enroll"
            },
            // {
            //     Header:"Enroll",
            //     accessor:"Enroll",
            //     formatter: <Button id={id} variant={variant} onClick={handlerClick}>{title}</Button>
            // },
        ], []
    );


    const {getTableProps, getTableBodyProps,  headerGroups, rows, prepareRow} =
        useTable({columns, data})

    return (

        <div className="tableContainer">
            <SearchBar
                placeholder = 'Search Course'
                handleInput={handleFilter}>
            </SearchBar>

            <table {...getTableProps()} >
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
                            )) }
                            <Button variant={variant} >{placeHolder}</Button>{' '}

                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>);
}
export default CourseTable;