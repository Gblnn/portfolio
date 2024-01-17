import Project from "@/components/project";


export default function Home(){
    return(
        <>
        <div className="container" style={{border:""}}>
            <div className="scroll-watcher"></div>
            <div style={{width:"100%", height:"100%", border:""}}>
                <div className="nav">
                    <div className="desktop-nav">
                        <a href="#about">About</a>
                        <a href="#work">Work</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <button style={{marginRight:"2rem", marginLeft:"2rem"}} className="blue btn">📄 Resume</button>
                </div>
                <div className="mobile-nav">
                    <a className="nav-item" href="#about">About</a>
                    <a className="nav-item" href="#work">Work</a>
                    <a className="nav-item" href="#contact">Contact</a>
                </div>
                <div id="about" className="page">
                    <div style={{display:"flex",flexFlow:"column",alignItems:"center", justifyContent:"center", border:"", gap:"1rem"}}>
                        <p style={{textAlign:"center", fontSize:"1.2rem", fontWeight:600, color:"var(--clr-slate600)"}}>Hi, I'm Gokul👋</p>
                        <h1 className="heading">FRONT-END<br/> DEVELOPER</h1>

                        <div style={{width:"35ch", height:"35ch", background:"var(--nav-color)", position:"absolute",zIndex:"-1", backdropFilter:"blur(35px)"}}></div>

                        <div style={{width:"20ch", height:"20ch", background:"rgba(79 70 229/75%)", position:"absolute",zIndex:"-2",borderRadius:"50%"}}></div>
                        
                        <p style={{textAlign:"center", width:"90%", border:""}}>A <strong>Front-end</strong>web developer and a <strong>UI/UX</strong>enthusiast</p>
                        
                    </div>
                    
                </div>

                <div id="work" className="page" style={{border:"",width:"100%", height:"fit-content"}}>
                    <div style={{height:"4rem"}}></div>
                    <div className="page-container" style={{border:"", width:"100%", height:"100%"}}>

                    <div style={{border:"", marginTop:"3.5rem", marginBottom:"2.5rem"}}>
                            <h2 style={{textAlign:"center"}}>💼 Work</h2>
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
                    <div style={{display:"flex", flexFlow:"column", justifyContent:"center", alignItems:"center", gap:"4rem"}}>
                    <h1 id="contact">Get in touch</h1>
                    <p style={{width:"75%", textAlign:"center"}}>Whether you are starting a project, have business inquiries or just want to say hi, my inbox is always open. So feel free to reach out and I will get back to you as soon as possible</p>
                    <button className="red btn">Reach out</button>
                    </div>
                    
                </div>
            </div>
        </div>
        
        </>
    )
}