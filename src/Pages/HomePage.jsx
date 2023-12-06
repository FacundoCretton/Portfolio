
import React from "react";
import { ButtonsWrapper, PageWrapper } from "./PagesStyles";
import Button from "../utils/Button";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import TypingAnimation from "../utils/Animations/TypingAnimation"



const HomePage = () =>{

    return(
        <PageWrapper>
            <h1>FACUNDO CRETTON </h1> <TypingAnimation />
            <p>Front End Developer </p>
            <p>HTML | CSS | JavaScript | React | Redux | NodeJS | Express | MongoDB</p>

            <ButtonsWrapper>
            <Button
                href="https://github.com/FacundoCretton/"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaGithub />}

            >
                GitHub
            </Button>

            <Button
                href="https://www.linkedin.com/in/facundocretton/"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaLinkedin />}

            >
                LinkedIn
            </Button>

     
            <Button
                href="/descargas/Facundo Cretton CV.pdf"
                download
                icon={<FaFileDownload />}

            >
                Descargar CV
            </Button>
            </ButtonsWrapper>
        </PageWrapper>
    );



}


export default HomePage;