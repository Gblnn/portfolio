import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Project from "@/components/project";
import { Github, Linkedin } from "lucide-react";


export default function Home(){
    return(
        <>
        <div className="container">
            <div className="scroll-watcher"></div>
            <div style={{width:"100%", height:"100%", border:""}}>
                <Nav/>
                <div className="mobile-nav">
                    <a className="nav-item" href="#about">About</a>
                    <a className="nav-item" href="#work">Work</a>
                    <a className="nav-item" href="#contact">Contact</a>
                </div>
                <div id="about" className="page">
                    <Hero/>
                </div>

                <div id="work" className="page" style={{border:"",width:"100%", height:"fit-content"}}>

                    <div style={{height:"4rem"}}></div>

                    <div className="page-container" style={{width:"100%", height:"100%"}}>

                        <div style={{marginTop:"3.5rem", marginBottom:"2.5rem"}}>
                            <h2 style={{textAlign:"center"}}></h2>
                        </div>

                    </div>
                        

                    <div className="project-container" style={{marginTop:"1rem"}}>

                        <Project img="/coffee.png" title="Coffee" link="https://coffee-dark.netlify.app" desc="Coffee is a textual social media app written in React and TypeScript"/>

                        <Project img="/university-page.png" title="Landing Page" link="https://hw-page.netlify.app" desc="A recreation of HW university landing page written in React and TypeScript"/>

                        <Project img="/dashboard.png" title="Dashboard" link="https://dashboard-nine.netlify.app" desc="A highly responsive dashboard design written in React and TypeScript"/>

                        <Project img="/blaze-page.png" title="Blaze" desc="An online store design written in React and TypeScript with search filter"/>
                            
                    </div>
                        
                </div>

                <div className="page">

                    <div style={{display:"flex", flexFlow:"column", justifyContent:"center", alignItems:"center", gap:"2rem"}}>

                        <h1 id="contact">Get in touch</h1>

                        <p className="desc" style={{ textAlign:"center"}}>Whether you are starting a project, have business inquiries or just want to say hi, my inbox is always open. So feel free to reach out and I will get back to you as soon as possible</p>

                        <div style={{display:"flex", gap:"1.5rem"}}>
                            <a href="https://github.com/Gblnn" target="_blank"><Github/></a>
                            <a href="https://linkedin.com/in/gokulnathiel" target="_blank"><Linkedin/></a>
                        </div>
                    
                        <button className="red btn"><a style={{color:"white"}} href="mailto:Gokul.nathiel2305@gmail.com" target="_blank" rel="noopener noreferer">Reach out</a></button>

                    </div>
                    
                </div>
            </div>
        </div>
        
        </>
    )
}