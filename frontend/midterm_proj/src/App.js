import './App.css';
import { SearchBar } from './components/searchbar/searchbar.components';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import calssesTable from './components/coursestable/coursestable.components';
//import calse from './components/enrolledtable/enrolledtable.components';
//import Courses from '../../../backend/models/courses.models';
const studentslist = "https://backend-6cat.onrender.com/Students";
const courseslist = "https://backend-6cat.onrender.com/Courses";

function App() {
  
  const [CourseData, setCourseData] = useState([])
  useEffect(()=>{
    try {
          const data = async() =>{
            
            const waiting = await axios(courseslist);
            
            setCourseData(waiting.data);
          }

    } catch (error) {
        console.log(error);
    }
  },[])



  const [filteredCourses, setFilteredCourses] = useState([]);
  const [SearchInput,  setSearchInput] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  


  return (
    <div className="App">
      <SearchBar>
        placeholder = 'Search Class'; 
      </SearchBar>
      <div className='CoursesTable'>
        <calssesTable CourseData={setCourseData}></calssesTable>
      </div>
  </div>
  );
}

export default App;
