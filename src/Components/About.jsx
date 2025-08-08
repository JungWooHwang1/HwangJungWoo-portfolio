import "../CSS/About.css"
import { GoLink } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";


export default function About() {
    console.log("About component rendered");
    return (
        <section className="About_Me">
            <div className="About_Me_Content">
                <div className="Section_Title">
                    <h3 className="Section_Title_Text">ABOUT ME</h3>
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
                <div className="About_Me_Infos">
                    <div className="About_Me_Info-wrapper">
                        <div className="About_Me_Info">
                            <div className="About_Me_Icon">
                                <IoPersonSharp style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "black" }} />
                            </div>
                            <div className="About_Me_Field">
                                <label className="About_Me_Field_Name">Name</label>
                                <h2 className="About_Me_Field_Name_Value">황정우</h2>
                            </div>
                        </div>
                    </div>
                    <div className="About_Me_Info-wrapper">
                        <div className="About_Me_Info">
                            <div className="About_Me_Icon">
                                <IoPersonSharp style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "black" }} />
                            </div>
                            <div className="About_Me_Field">
                                <label className="About_Me_Field_Name">Name</label>
                                <h2 className="About_Me_Field_Name_Value">황정우</h2>
                            </div>
                        </div>
                    </div>
                    <div className="About_Me_Info-wrapper">
                        <div className="About_Me_Info">
                            <div className="About_Me_Icon">
                                <IoPersonSharp style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "black" }} />
                            </div>
                            <div className="About_Me_Field">
                                <label className="About_Me_Field_Name">Name</label>
                                <h2 className="About_Me_Field_Name_Value">황정우</h2>
                            </div>
                        </div>
                    </div>
                    <div className="About_Me_Info-wrapper">
                        <div className="About_Me_Info">
                            <div className="About_Me_Icon">
                                <IoPersonSharp style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "black" }} />
                            </div>
                            <div className="About_Me_Field">
                                <label className="About_Me_Field_Name">Name</label>
                                <h2 className="About_Me_Field_Name_Value">황정우</h2>
                            </div>
                        </div>
                    </div>
                    <div className="About_Me_Info-wrapper">
                        <div className="About_Me_Info">
                            <div className="About_Me_Icon">
                                <IoPersonSharp style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "black" }} />
                            </div>
                            <div className="About_Me_Field">
                                <label className="About_Me_Field_Name">Name</label>
                                <h2 className="About_Me_Field_Name_Value">황정우</h2>
                            </div>
                        </div>
                    </div>
                    <div className="About_Me_Info-wrapper">
                        <div className="About_Me_Info">
                            <div className="About_Me_Icon">
                                <IoPersonSharp style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "black" }} />
                            </div>
                            <div className="About_Me_Field">
                                <label className="About_Me_Field_Name">Name</label>
                                <h2 className="About_Me_Field_Name_Value">황정우</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    );
}
