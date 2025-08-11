import "../CSS/About.css"
import { GoLink } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import AboutMeInfo from "../common/AboutMeInfo";

export default function About() {
    console.log("About component rendered");
    return (
        <section id="about" className="About_Me">
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
                    <AboutMeInfo icon="person" label="이름" value="황정우" />
                    <AboutMeInfo icon="phone" label="전화번호" value="010-8652-9267" />
                    <AboutMeInfo icon="email" label="이메일" value="xhdpc123@naver.com" />
                    <AboutMeInfo icon="school" label="최종학력" value="대림대학교" />
                    <AboutMeInfo icon="location" label="위치" value="안산시 단원구" />
                    <AboutMeInfo icon="birthday" label="생일" value="2001-12-01" />
                </div>

            </div>
        </section>


    );
}
