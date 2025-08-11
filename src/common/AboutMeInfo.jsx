import { IoPersonSharp } from "react-icons/io5";
import { LuLocateFixed } from "react-icons/lu";
import { IoMail } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";

const iconMap = {
    person: IoPersonSharp,
    location: LuLocateFixed,
    email: IoMail,
    birthday: FaBirthdayCake,
    phone: MdLocalPhone,
    school: IoSchoolSharp,
};

export default function AboutMeInfo({ icon = "person", label, value }) {
    const IconComponent = iconMap[icon] || IoPersonSharp;
    return (
        <div className="About_Me_Info-wrapper">
            <div className="About_Me_Info">
                <div className="About_Me_Icon">
                    <IconComponent style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "black" }} />
                </div>
                <div className="About_Me_Field">
                    <label className="About_Me_Field_Name">{label}</label>
                    <h2 className="About_Me_Field_Name_Value">{value}</h2>
                </div>
            </div>
        </div>
    );
}   