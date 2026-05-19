import githubLogo from "./assets/brand-github.svg"

function Header() {
    return (
        <nav className="buttons-container">
            <button className="buttons">Home</button>
            <button className="buttons">About Me</button>
            <button className="buttons">Experience</button>
            <button className="buttons">Services</button>
            <button className="buttons">Projects</button>
            <button className="buttons">Contact</button>
            <a href="https://github.com/cccabalde-lab" target="blank" rel="noreferrer">
                <img src={githubLogo} alt="Github" className="github-logo" />
            </a>
        </nav>
    )
}

export default Header