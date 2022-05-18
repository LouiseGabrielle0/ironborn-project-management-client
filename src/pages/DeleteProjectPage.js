import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import "./EditProjectPage.css"

function DeleteProjectPage(props) {

    const navigate = useNavigate();  
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();


    let {projectId} = useParams();   
    let projectDetails

    useEffect(() => {
        findDetails();
       }, []);

    function findDetails() {
    projectDetails = props.projects.find( project => project._id === projectId); // get the details of the project that we're trying to edit
        setTitle(projectDetails.title)
        setDescription(projectDetails.description)
}
  


    const handleDelete = (e) => {
        console.log(">>>>>>>>>>>>>>>>>>>>")
        e.preventDefault()
        axios.delete(`${process.env.REACT_APP_API_URL}/projects/${projectId}`)
        .then(() => {
            props.getprojects() 
            navigate("/projects");        
        })
        .catch(e => console.log("error updating project...", e));
    } 




    return (
        <section className="EditProjectPage">
            <h1>Delete</h1>

            <form>
                <label>
                    Title
                    <p>{title}</p>
                  
                </label>

                <label>
                    Description
                    <p>{description}</p>            
                </label>
                
                <button onClick={handleDelete}>Delete</button>
         </form>

            

        </section>
    )
}

export default DeleteProjectPage;