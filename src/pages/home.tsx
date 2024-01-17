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
                        <a>Contact</a>
                    </div>
                    <button style={{marginRight:"2rem", marginLeft:"2rem"}} className="blue btn">📄 Resume</button>
                </div>
                <div className="mobile-nav">
                    <a href="#about">About</a>
                    <a href="#work">Work</a>
                    <a>Contact</a>
                </div>
                <div id="about" className="page">
                    <div style={{display:"flex",flexFlow:"column",alignItems:"center", justifyContent:"center", border:"", gap:"0.5rem"}}>
                        <p style={{textAlign:"center", fontSize:"1.2rem", fontWeight:600, color:"var(--clr-slate600)"}}>Hi, I'm Gokul👋</p>
                        <h1 className="heading">FRONT-END<br/> DEVELOPER</h1>
                        <div></div>
                        <p style={{textAlign:"center", width:"75%"}}>A <strong>Front-end</strong>web developer and a <strong>UI/UX</strong>enthusiast</p>
                        
                    </div>
                    
                </div>

                <div id="work" className="page" style={{border:"",width:"100%", height:"fit-content"}}>
                    <div style={{height:"4rem"}}></div>
                    <div className="page-container" style={{border:"", width:"100%", height:"100%"}}>

                    <div style={{border:"", marginTop:"3.5rem", marginBottom:"2.5rem"}}>
                            <h2 style={{textAlign:"center"}}>💼 Work</h2>
                        </div>
                    </div>
                        

                        <div className="project-container" style={{marginTop:"2rem"}}>
                            <Project img="/coffee.png" title="Coffee" link="https://coffee-light.netlify.app" desc="Coffee is a textual social media app written in React and TypeScript"/>

                            <Project img="/university-page.png" title="Landing Page" desc="A recreation of HW university landing page written in React and TypeScript"/>

                            <Project img="/dashboard.png" title="Dashboard" desc="A highly responsive dashboard design written in React and TypeScript"/>
                            
                        </div>
                        
                    
                    
                </div>
                <div className="page"></div>
            </div>
        </div>
        
        </>
    )
}