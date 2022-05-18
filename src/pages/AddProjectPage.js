import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProjectPage.css";

function AddProjectPage({ getprojects }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      title,
      description,
    };

    const storedToken = localStorage.getItem("authToken"); // get the token from the localStorage - another option would be to get it from the Context

    axios
      .post(process.env.REACT_APP_API_URL + "/projects", newProject, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response.data);

        navigate("/projects"); // redirect to project list
        // navigate(`/projects/${response.data._id}`); // redirect to project page
        getprojects();
        // clear form...
        setTitle("");
        setDescription("");
      })
      .catch((e) => console.log("error creating project...", e));
  };

  return (
    <section className="AddProjectPage">
      <h1>Create a new project</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={title}
            required={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Description
          <input
            type="text"
            name="description"
            value={description}
            required={true}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button type="submit">Create project</button>
      </form>
    </section>
  );
}

export default AddProjectPage;
