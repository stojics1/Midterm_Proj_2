import './App.css';
import { SearchBar } from './components/searchbar/searchbar.components';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import calssesTable from './components/coursestable/coursestable.components';
//import calse from './components/enrolledtable/enrolledtable.components';
//import Courses from '../../../backend/models/courses.models';
const studentslist = "http://localhost:8000/students";
const courseslist = "http://localhost:8000/courses";



function App() {

  const [data,setCourseData] = useState([]);
  const [studentData, setStudentsData] =  useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [SearchInput,  setSearchInput] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  
  const getCourseData = async ()=>{
      const response = await axios.get(courseslist);
      setCourseData(response.data);
  };

  useEffect(()=>{
      getCourseData();
  }, []);

  const getStudentsData = async () =>{
      const response = await axios.get(studentslist);
      setStudentsData();
  };

  useEffect(() => {
      getStudentsData();
      }, []);



  return (
    <div className="App">
      <SearchBar>
        placeholder = 'Search Class'; 
      </SearchBar>
      <div className='CoursesTable'>
        <calssesTable courses={setCourseData}></calssesTable>
      </div>
  </div>
  );
}

export default App;
