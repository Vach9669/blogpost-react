import React from 'react';
import Storage from "../../services/Storage"
//import {Navbar} from 'react-bootstrap';

const Nav = ({onClickFunction, tab3, isLogged}) => {
    const Logout = () =>{
        Storage.remove("token");
        Storage.remove("userId");
        onClickFunction("Login");
    }
    return (

        
        <div className="homelog">
            
           
                    <ul className="d-flex" style={{listStyle: 'none'}}>
                        <li className="nav-item">
                            {(tab3 !== "Home") ? <button className='btn-info' onClick={onClickFunction.bind(null, "Home")}  href="#">Home</button> : null}
                        </li>
                        <li className="nav-item">
                            {(tab3 !== "Login" && !isLogged) ? <button className='btn-warning' onClick={onClickFunction.bind(null, "Login")}  href="#">Login</button> : null}
                        </li>
                        <li className="nav-item">
                            {(tab3 !== "Registration" && !isLogged) ? <button className='btn-danger' onClick={onClickFunction.bind(null, "Registration")}  href="#">Registration</button> : null} 
                        </li>
                        <li className="nav-item">
                            {(tab3 !== "Workspace" && isLogged) ? <button className='btn-success' onClick={onClickFunction.bind(null, "Workspace")}  href="#">Workspace</button> : null} 
                        </li>
                        {isLogged && 
                            <button className="btn-dark justyfy-flex-end"
                                onClick={Logout} 
                                href="#">
                                    LogOut
                            </button> 
                        }
                    
                    </ul>
               
   
           
        </div>

    )
    
}

export default Nav;