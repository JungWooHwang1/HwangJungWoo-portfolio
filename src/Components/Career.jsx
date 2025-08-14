import { GoLink } from "react-icons/go";
import "../CSS/Career.css";

export default function Career() {
    return (
        <section id="career" className="Career">
            <div className="Career_Content">
                <div className="Section_Title">
                    <h3 className="Section_Title_Text">CAREER</h3>
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
                <div className="Career_companies">
                    <div className="Career_company">
                        <div className="Career_company_logo">
                            <div className="Career_company_logo-wrapper">
                                <img></img>
                            </div>
                        </div>
                        <div className="Career_company_background">
                            <div className="Career_company_background-wrapper">
                               
                            </div>
                        </div>
                        <div className="Career_company_details">
                            <h4 className="Career_company_name">Company Name</h4>
                            <p className="Career_company_period">2025.08</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
