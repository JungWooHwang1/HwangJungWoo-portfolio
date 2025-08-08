import "../CSS/Header.css"

export default function Header() {
    console.log("Header component rendered");
    return (

        <div className="Header">
            <div className="Header_Content">
                <button className="Header__Button">HJW_Portfolio</button>
                <nav className="Header_Nav">
                    <button className="Header_Nav_Button">About me</button>
                    <button className="Header_Nav_Button">Skills</button>
                    <button className="Header_Nav_Button">Projects</button>
                    <button className="Header_Nav_Button">Content</button>
                </nav>
            </div>
        </div>

    )
}
