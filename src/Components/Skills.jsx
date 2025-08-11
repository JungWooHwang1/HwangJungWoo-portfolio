import "../CSS/Skills.css"
import { GoLink } from "react-icons/go";
import { MdLanguage } from "react-icons/md";


export default function Skills() {

    return (
        <section id = "skills" className="Skills">
            <div className="Skills_Content">
                <div className="Section_Title">
                    <h3 className="Section_Title_Text">SKILL</h3>
                    <button className="Section_Title_Link_Button">
                        <GoLink style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "black"
                        }} />
                    </button>
                </div>
                <div className="Skills_Skill-sets">
                    <div className="Skills_Skill-set">
                        <div className="Skills_Name">
                            <MdLanguage
                                style={{

                                }}
                            />
                            Language</div>
                        <ul className="Skills_List">

                            <li className="Skills_List_Item" style={{ backgroundColor: "#3d75a4", color: "#ffffff" }}>Skill 1</li>
                            <li className="Skills_List_Item" style={{ backgroundColor: "#3d75a4", color: "#ffffff" }}>Skill 2</li>
                            <li className="Skills_List_Item" style={{ backgroundColor: "#3d75a4", color: "#ffffff" }}>Skill 3</li>
                        </ul>
                    </div>
                    <div className="Skills_Skill-set">
                        <div className="Skills_Name">
                            <MdLanguage
                                style={{

                                }}
                            />
                            Language</div>
                        <ul className="Skills_List">
                            <li className="Skills_List_Item" style={{ backgroundColor: "#3d75a4", color: "#ffffff" }}>Skill 1</li>
                            <li className="Skills_List_Item" style={{ backgroundColor: "#3d75a4", color: "#ffffff" }}>Skill 2</li>
                            <li className="Skills_List_Item" style={{ backgroundColor: "#3d75a4", color: "#ffffff" }}>Skill 3</li>
                        </ul>
                    </div>
                    <div className="Skills_Skill-set">
                        <div className="Skills_Name">
                            <MdLanguage
                                style={{

                                }}
                            />
                            Language</div>
                        <ul className="Skills_List">

                            <li className="Skills_List_Item" style={{ backgroundColor: "#3d75a4", color: "#ffffff" }}>Skill 1</li>
                            <li className="Skills_List_Item" style={{ backgroundColor: "#3d75a4", color: "#ffffff" }}>Skill 2</li>
                            <li className="Skills_List_Item" style={{ backgroundColor: "#3d75a4", color: "#ffffff" }}>Skill 3</li>
                        </ul>
                    </div>
                    <div className="Skills_Skill-set">
                        <div className="Skills_Name">
                            <MdLanguage
                                style={{

                                }}
                            />
                            Language</div>
                        <ul className="Skills_List">

                            <li className="Skills_List_Item" style={{ backgroundColor: "#3d75a4", color: "#ffffff" }}>Skill 1</li>
                            <li className="Skills_List_Item" style={{ backgroundColor: "#3d75a4", color: "#ffffff" }}>Skill 2</li>
                            <li className="Skills_List_Item" style={{ backgroundColor: "#3d75a4", color: "#ffffff" }}>Skill 3</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section >



    );
}
