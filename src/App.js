import axios from "axios";
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ProjectListPage from './pages/ProjectListPage';
import { useEffect, useState } from "react";
import AddProjectPage from "./pages/AddProjectPage";
import EditProjectPage from "./pages/EditProjectPage";
import DeleteProjectPage from "./pages/DeleteProjectPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage"

function App() {
  
  const [projects, setProjects] = useState(null);

  const getProject = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/projects`)
    .then( response => {
      setProjects(response.data);
    })
    .catch( e => console.log("error getting projects from API...", e))
  }

  useEffect(() => {
   getProject();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<h1>Welcome</h1>} />
        <Route path='/projects' element={<ProjectListPage projects={projects} />} />
        <Route path='/projects/create' element={<AddProjectPage getprojects={getProject} />} />
        <Route path='/projects/:projectId/edit' element={<EditProjectPage projects={projects} getprojects={getProject} />} />
        <Route path='/projects/:projectId/delete' element={<DeleteProjectPage projects={projects} getprojects={getProject} />} />
        
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
