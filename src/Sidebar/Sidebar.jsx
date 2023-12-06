import React from "react";
import { ProfileImage, SidebarNav, SidebarSubTitle, SidebarTitle, SidebarWrapper } from "./SidebarStyles";
import AboutLink from "../NavLinks/AboutLink";
import ProjectsLink from "../NavLinks/ProjectsLink";
import ToolsLink from "../NavLinks/ToolsLink";
import ContactLink from "../NavLinks/ContactLink";
import HomeLink from "../NavLinks/HomeLink";

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