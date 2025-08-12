import "../CSS/Skills.css"
import { GoLink } from "react-icons/go";
import { MdLanguage } from "react-icons/md";
import { IoLogoHtml5 } from "react-icons/io";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { MdLogoDev } from "react-icons/md";
import SkillSet from "../common/SkillSet";


export default function Skills() {

    return (
        <section id="skills" className="Skills">
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
                    <SkillSet
                        icon={<MdLanguage />}
                        language={"Language"}
                        skills={["HTML", "CSS", "JavaScript", "TypeScript", "Java"]}
                        colors = {["#E34F26","#1572B6","#F7DF1E","#3178C6","#C60001"]}
                    />
                    <SkillSet
                        icon={<IoLogoHtml5 />}
                        language={"Front-end"}
                        skills={["React"]}
                        colors = {["#61DAFB",]}
                    />

                    <SkillSet
                        icon={<BsDatabaseFillAdd />}
                        language={"Back-end"}
                        skills={["Spring Boot", "Firebase"]}
                        colors = {["#6CB52D","#FFC400"]}
                    
                    />
                    <SkillSet
                        icon={<MdLogoDev />}
                        language={"DevOps"}
                        skills={["AWS(EC2)"]}
                        colors = {["#2A3645"]}
                    />

                </div>
            </div>

        </section >



    );
}
