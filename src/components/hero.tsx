

export default function Hero(){
    return(
        <div style={{display:"flex",flexFlow:"column",alignItems:"center", justifyContent:"center",gap:"1rem"}}>
                        <p style={{textAlign:"center", fontSize:"1.2rem", fontWeight:600, color:"var(--clr-slate600)"}}>Hi, I'm Gokul👋</p>
                        <h1 className="heading">FRONT-END<br/> DEVELOPER</h1>

                        <div style={{width:"35ch", height:"35ch", background:"var(--nav-color)", position:"absolute",zIndex:"-1", backdropFilter:"blur(35px)"}}></div>

                        <div style={{width:"20ch", height:"20ch", background:"rgba(79 70 229/75%)", position:"absolute",zIndex:"-2",borderRadius:"50%"}}></div>
                        
                        <p style={{textAlign:"center", width:"90%", border:""}}>A <strong>Front-end</strong>web developer and a <strong>UI/UX</strong>enthusiast</p>
                        
                    </div>
    )
}