

export default function Nav(){
    return(
        
        <div className="nav">
            <div className="desktop-nav">
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
            </div>
            <button style={{marginRight:"2rem", marginLeft:"2rem"}} className="blue btn">📄 Resume</button>
        </div>
        
    )
}