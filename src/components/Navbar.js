import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {AuthContext} from '../context/auth.context'

function Navbar(){

  
    const {isLoggedIn, isLoading, user, logOutUser} = useContext(AuthContext) //returns an object which can be stored in a variable or can use object destruction
    
    return (
        <nav>
            <NavLink to="/">Home</NavLink> | 
            <NavLink to="/projects">Projects</NavLink> | 
            <NavLink to="/projects/create">New Project</NavLink> | | |
            {/* {isLoggedIn
                ? <span> Welcome</span>
                : <NavLink to="/login">Login</NavLink> <<<<< another option
            } */} 
            
            {isLoggedIn &&
            <>
                <span> Welcome {user.email} </span>
                <button onClick={() => {logOutUser()}}>Logout</button>
              </>  }
            {!isLoggedIn &&
            <>
                <NavLink to="/login">Login</NavLink> |
                <NavLink to="/signup">Sign Up</NavLink> 
                </>
                }
            {isLoading && 
                <span> Loading.... </span>
                }
        </nav>
    );
}


export default Navbar;