import './App.css';
import { SearchBar } from './components/searchbar/searchbar.components';
import React, {useEffect, useState} from 'react';
import axios from "axios";
//import Courses from '../../../backend/models/courses.models';


function App() {
  
  const [classes, setClasses] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/courses')
    .then(classes => setClasses(classes.data))
    .catch(err => console.log(err))
  },[])
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [SearchInput,  setSearchInput] = useState("");
  
  
  return (
    <div className="App">
      <SearchBar>
        placeholder = 'Search Class'; 
      </SearchBar>
      
  </div>
  );
}

export default App;
