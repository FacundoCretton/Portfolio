import AboutPage from "../Pages/AboutPage";
import ProjectsPage from "../Pages/ProjectsPage";
import ToolsPage from "../Pages/ToolsPage";
import ContactPage from "../Pages/ContactPage";
import Sidebar from "../Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";

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
    
        </>
    )
}

export default AppRoutes;