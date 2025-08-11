import "../CSS/Header.css"

export default function Header() {
    const handleScroll = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }


    
    return (

        <div className="Header">
            <div className="Header_Content">
                <button className="Header__Button" onClick={() => handleScroll("main")}>HJW_Portfolio</button>
                <nav className="Header_Nav">
                    <button className="Header_Nav_Button" onClick={() => handleScroll("about")}>About me</button>
                    <button className="Header_Nav_Button" onClick={() => handleScroll("skills")}>Skills</button>
                    <button className="Header_Nav_Button" onClick={() => handleScroll("projects")}>Projects</button>
                </nav>
            </div>
        </div>

    )


}
