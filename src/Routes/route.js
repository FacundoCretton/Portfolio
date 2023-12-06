import AboutPage from "../pages/aboutPage";
import ProjectsPage from "../pages/projectsPage";
import ToolsPage from "../pages/toolsPage";
import ContactPage from "../pages/contactPage";
import Sidebar from "../sidebar/sidebar";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";

function AppRoutes (){

    return(

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path ='/about' element={<AboutPage/>}/>
            <Route path= '/projects' element={<ProjectsPage/>}/>
            <Route path= '/tools' element={<ToolsPage/>}/>
            <Route path = '/contact' element = {<ContactPage/>}/>

        </Routes>


    );

}

function Home(){
    return(
        <>
        <Sidebar/>
        <HomePage/>
    
        </>
    )
}

export default AppRoutes;