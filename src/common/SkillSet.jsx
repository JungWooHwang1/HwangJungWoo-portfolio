export default function SkillSet({
    icon,
    language,
    skills,
    colors = [] // 각 배경색 배열
}) {
    const palette = 0
    const bgAt = (i) => colors[i] ?? palette[i % palette.length];

    return (
        <div className="Skills_Skill-set">
            <div className="Skills_Name">
                {icon}
                {language}
            </div>
            <ul className="Skills_List">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="Skills_List_Item"
                        style={{ backgroundColor: bgAt(index), color: "#ffffff" }}
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}
