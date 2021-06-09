import "./topbar.css"
import {Person, Mail, LinkedIn, ListAlt, GitHub} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                <h1>Patrick Ly</h1>
                    <div className="itemContainer">
                    <a href="tel:408-398-8404">
                    <Person className="icon links"/>
                    <span>+1 408 398 8404</span></a>
                    <a href = "mailto: patrickly72@gmail.com">
                    <Mail className="icon links"/>
                    <span>patrickly72@gmail.com</span></a>
                    <a href="https://www.linkedin.com/in/patrick-ly-aa280717a/" rel="noreferrer" target="_blank">
                    <LinkedIn className="icon links"/><span>LinkedIn</span></a>
                    <a href = "https://patrickvly.github.io/resume.pdf" rel="noreferrer" target="_blank">
                    <ListAlt className="icon links"/>
                    <span>Resume</span></a>
                    <a href = "https://www.github.com/patrickvly" rel="noreferrer" target="_blank">
                    <GitHub className="icon links"/>
                    <span>GitHub</span></a>
                    </div>
                
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}


