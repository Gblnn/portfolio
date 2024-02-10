

export default function Nav(){
    return(
        
        <div className="nav">
            <div className="desktop-nav">
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
            </div>
            <button style={{marginRight:"2rem", marginLeft:"2rem"}} className="blue btn"><a style={{color:"white"}} href="https://drive.google.com/file/d/1o1aarM-jtVN4NcwL10kSU8LRoMDWNK-z/view?usp=sharing" target="_blank">📄 Resume</a></button>
        </div>
        
    )
}