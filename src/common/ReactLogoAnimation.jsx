// ReactLogoAnimation.jsx
import "../CSS/ReactLogoAnimation.css";

export default function ReactLogoAnimation() {
    return (
        <div className="react-logo-bg">
            <svg
                className="react-logo-svg"
                viewBox="0 0 400 400"
                width="400"
                height="400"
            >
                {/* 원자핵 */}
                <circle
                    className="react-nucleus"
                    cx="200"
                    cy="200"
                    r="35"
                    fill="#61dafb"
                />
                {/* 전자 궤도 3개 */}
                <ellipse
                    className="react-orbit orbit1"
                    cx="200"
                    cy="200"
                    rx="150"
                    ry="70"
                    stroke="#61dafb"
                    strokeWidth="12"
                    fill="none"
                />
                <ellipse
                    className="react-orbit orbit2"
                    cx="200"
                    cy="200"
                    rx="150"
                    ry="70"
                    stroke="#61dafb"
                    strokeWidth="12"
                    fill="none"
                    transform="rotate(60 200 200)"
                />
                <ellipse
                    className="react-orbit orbit3"
                    cx="200"
                    cy="200"
                    rx="150"
                    ry="70"
                    stroke="#61dafb"
                    strokeWidth="12"
                    fill="none"
                    transform="rotate(120 200 200)"
                />
            </svg>
        </div>
    );
}