import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {AuthContext} from '../context/auth.context'

function Navbar(){

  
    const {isLoggedIn, isLoading, user} = useContext(AuthContext) //returns an object which can be stored in a variable or can use object destruction
    
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
                <span> Welcome</span>
                }
            {!isLoggedIn &&
            <>
                <NavLink to="/login">Login</NavLink> |
                <NavLink to="/singup">Sign Up</NavLink> 
                </>
                }
        </nav>
    );
}


export default Navbar;