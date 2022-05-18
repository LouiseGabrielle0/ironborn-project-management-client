import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ProjectListPage from "./pages/ProjectListPage";
import { useEffect, useState } from "react";
import AddProjectPage from "./pages/AddProjectPage";
import EditProjectPage from "./pages/EditProjectPage";
import DeleteProjectPage from "./pages/DeleteProjectPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  const [projects, setProjects] = useState(null);

  const getProject = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/projects`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((e) => console.log("error getting projects from API...", e));
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route
          path="/projects"
          element={<ProjectListPage projects={projects} />}
        />
        <Route
          path="/projects/create"
          element={
            <IsPrivate>
              {" "}
              <AddProjectPage getprojects={getProject} />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/projects/:projectId/edit"
          element={
            <IsPrivate>
              {" "}
              <EditProjectPage
                projects={projects}
                getprojects={getProject}
              />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/projects/:projectId/delete"
          element={
            <IsPrivate>
              {" "}
              <DeleteProjectPage
                projects={projects}
                getprojects={getProject}
              />{" "}
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignUpPage />
            </IsAnon>
          }
        />
        <Route
          path="login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
