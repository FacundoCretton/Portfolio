import React from "react";
import { ProfileImage, SidebarNav, SidebarSubTitle, SidebarTitle, SidebarWrapper } from "./sidebarStyles";
import AboutLink from "../components/navLinks/aboutLink";
import ProjectsLink from "../components/navLinks/projectsLink";
import ToolsLink from "../components/navLinks/toolsLink";
import ContactLink from "../components/navLinks/contactLink";
import HomeLink from "../components/navLinks/homeLink";

const Sidebar = () =>{

    return(
        <SidebarWrapper>
            <ProfileImage src="/images/The choose one.jpg" alt="Foto de perfil" />
            <SidebarTitle>Facundo Cretton</SidebarTitle>
            <SidebarSubTitle>Full Stack Developer</SidebarSubTitle>
            <SidebarNav>
                <HomeLink/>
                <AboutLink/>
                <ProjectsLink/>
                <ToolsLink/>
                <ContactLink/>                
                
            </SidebarNav>



        </SidebarWrapper>
    );
}

export default Sidebar;