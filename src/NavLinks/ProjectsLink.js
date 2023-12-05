import React from "react";
import { LinkNav } from "../Sidebar/SidebarStyles";
import { NavLink } from "react-router-dom";


const ProjectsLink = () =>{

    return(
        <LinkNav>
            <NavLink to="/projects" activeClassName ="activeLink">Proyectos</NavLink>
        
        </LinkNav>


    )
}


export default ProjectsLink;