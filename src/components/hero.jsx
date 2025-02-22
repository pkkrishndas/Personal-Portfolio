import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    
    return (
        <section id="home">
            <br />
            <h1 className="heroH1">Hare Krishna! Welcome to my portfolio</h1>
            <br />
            <br />
            <p className="intro">
                Hare Krishna! My name is Piyush Kumar. I am pursuing a BCA degree, which will be completed in July 2025. 
                I have completed my 12th grade with Science and Mathematics. <br /><br />
                Currently, I am a Full Stack Web Developer with expertise in Data Structures and Algorithms (DSA) using Java and Python. 
                I am a hardworking individual who is always eager to learn new things. I believe in honesty, discipline, and dedication. 
                <br /><br />
                I am actively looking for opportunities. If you need a website developed, feel free to contact me!
            </p>
            <img className="Profile" src="/Pi.jpg" alt="Profile" width="200" />
            <div className="mt-6 space-x-4">
                <button className="hire-me" onClick={() => navigate("/contact")}>Hire me</button>
                <a href="/Piyush_Kumar_Resume.pdf" download>
                <button className="Resume">Download Resume</button>
                </a>
            </div>
        </section>
    )
}

export default Hero;



