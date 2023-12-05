import React from "react";
import { LinkNav } from "../Sidebar/SidebarStyles";
import {  NavLink } from "react-router-dom";


const ContactLink = () =>{

    return(
        <LinkNav>
        <NavLink to="/contact" activeClassName ="activeLink">Contacto</NavLink>
        
        </LinkNav>

    )


}

export default ContactLink;