import React , {useEffect , useState} from 'react';
import {Route , Routes} from  "react-router-dom";
import './App.css';
import {Box } from "@mui/material";
import Homepage from './components/HomePage/Homepage';
import About from './components/Profile/Components/About/About';
import Project from './components/Profile/Components/Project/Project';
import Certificate from './components/Profile/Components/Certificate/Certificate';
import Experience from './components/Profile/Components/Experience/Experience';
import Skills from './components/Profile/Components/Skills/Skills';


const App = () => {




 //  const [sectionChange, setSectionChange] = useState("see");



  return (
    <Box  width = "400px"  sx = {{width : {xl : "1488px"}}}
    m = "auto">

        <Routes>
            <Route path = "/" element  = {<Homepage />}   />
            <Route path = "/profile" element  = {<About/>}      />
            <Route path = "/project" element  = {<Project     />}   />
            <Route path = "/certificate" element  = {<Certificate     />}   />
            <Route path = "/skills" element  = {<Skills     />}   />
            <Route path = "/experience" element  = {<Experience      />}   />



     </Routes>










    </Box>
  )
}

export default App