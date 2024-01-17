import { Link } from "lucide-react"


interface Props {
    title:string
    desc?:string
    img:string
    link?:string
    github?:string
}

export default function Project(props:Props) {
    return(
        <div className="project" style={{border:"1px solid rgba(150 150 150/ 70%)"}}>

            <div style={{width:"100%", display:"flex", justifyContent:"center",alignItems:"center", flexFlow:"column", border:""}}>

                <div style={{display:"flex",justifyContent:"center",alignItems:"center",border:"", padding:"0.75rem"}}>

                    <div>
                        <img style={{width:"100%", borderRadius:"0.5rem", boxShadow:"1px 1px 20px var(--clr-indigo)"}} src={props.img} />
                    </div>    
                </div>
                

                <div style={{width:"100%", height:"", border:"", padding:"",}}>

                    <div style={{padding:"0rem", margin:"1.25rem", marginTop:"0rem", width:""}}>

                        <div style={{display:"flex",  justifyContent:"space-between", border:""}}>

                        <div style={{display:"flex",alignItems:"center", gap:"0.4rem",}}>

                            <a style={{textDecoration:"none", color:"var(--color)"}} href={props.link} target="_blank">
                            <h3>{props.title}</h3>
                            </a>
                            <Link width="1.25rem"/>
                            
                        </div>

                        {/* <button style={{padding:"0.25rem", paddingLeft:"0.75rem", paddingRight:"0.75rem"}} className="dark btn"><a href={props.github}></a>Github</button> */}
                        
                        
                        </div>
                        <p style={{marginTop:"0.5rem", fontSize:"0.85rem"}}>{props.desc}</p>
                    
                    </div>
                    
                </div>
                {/* <div style={{display:"flex",justifyContent:"flex-end",border:"", width:"100%", marginTop:"0.5rem", marginBottom:"0.5rem", gap:"1rem",paddingLeft:""}}>

                    <div style={{paddingRight:"1.5rem", display:"flex", gap:"1rem"}}>
                    <button className=" blue btn" style={{padding:"0.25rem", paddingLeft:"0.75rem", paddingRight:"0.75rem"}}>View Site</button>

                    <button className="dark btn">
                        Github
                    </button>
                    </div>
                
                    
                    
                </div> */}

            </div>
            
        </div>
    )
}