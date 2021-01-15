import React from 'react'

// component purely decorative, uses svg elements created in a design app

const Background = (props) => {
    return (
        <section className="background">
            {props.children}
            {/* Eclipse No 1 */}
            <div className="background__eclipse--wrapper">
                <svg width="711" height="692" viewBox="0 0 711 692" fill="none" xmlns="http://www.w3.org/2000/svg" className="background__eclipse">
                    <ellipse cx="355.068" cy="345.767" rx="286.458" ry="211" transform="rotate(-140 355.068 345.767)" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="632.763" y1="369.068" x2="75.4996" y2="337.349" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2A74F2" />
                            <stop offset="1" stopColor="#ED88FF" />
                        </linearGradient>
                    </defs>
                </svg>
                {/* Rounded snake */}
                <svg width="224" height="92" viewBox="0 0 224 92" fill="none" xmlns="http://www.w3.org/2000/svg" className="background__snake">
                    <path d="M216 46.5433C213.609 -6.57553 143.877 -3.09046 143.877 46.5433C143.877 96.177 75.7395 94.677 75.7395 46.5433C75.7395 -1.59045 8 -0.0904579 8 46.5433" stroke="url(#line)" strokeWidth="16" strokeLinecap="round" />
                    <defs>
                        <linearGradient id="line" x1="7.60153" y1="44.1652" x2="215.602" y2="44.1652" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ED88FF" />
                            <stop offset="1" stopColor="#2A74F2" />
                        </linearGradient>
                    </defs>
                </svg>
                {/* white line */}
                <div className="background__white-line"></div>
            </div>
            {/* Eclipse No 2 */}
            <svg width="711" height="692" viewBox="0 0 711 692" fill="none" xmlns="http://www.w3.org/2000/svg" className="background__eclipse background__eclipse--reverse">
                <ellipse cx="355.068" cy="345.767" rx="286.458" ry="211" transform="rotate(-140 355.068 345.767)" fill="url(#paint0_linear)" />
                <defs>
                    <linearGradient id="paint0_linear" x1="632.763" y1="369.068" x2="75.4996" y2="337.349" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2A74F2" />
                        <stop offset="1" stopColor="#ED88FF" />
                    </linearGradient>
                </defs>
            </svg>
            {/* Logo */}
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="background__logo">
                <defs>
                    <linearGradient id="logo" x1="0" y1="0" x2="100" y2="112" gradientUnits="userSpaceOnUse">
                        <stop offset="30%" stopColor="#2A74F2" />
                        <stop offset="100%" stopColor="#ED88FF" />
                    </linearGradient>
                </defs>
                <rect width="100" height="100" rx="10" fill="url(#logo)" className="background__logo--shape" />
                <path d="M24.1973 43V21.5254H28.5332V29.9775H37.0293V21.5254H41.3652V43H37.0293V33.6104H28.5332V43H24.1973ZM65.002 43V33.9619L57.1357 21.5254H62.2188L67.2725 30.0215L72.2236 21.5254H77.2188L69.3232 33.9912V43H65.002Z" fill="white" />
                <path d="M24.1826 79V57.5254H31.1406C33.7773 57.5254 35.4961 57.6328 36.2969 57.8477C37.5273 58.1699 38.5576 58.873 39.3877 59.957C40.2178 61.0312 40.6328 62.4229 40.6328 64.1318C40.6328 65.4502 40.3936 66.5586 39.915 67.457C39.4365 68.3555 38.8262 69.0635 38.084 69.5811C37.3516 70.0889 36.6045 70.4258 35.8428 70.5918C34.8076 70.7969 33.3086 70.8994 31.3457 70.8994H28.5186V79H24.1826ZM28.5186 61.1582V67.252H30.8916C32.6006 67.252 33.7432 67.1396 34.3193 66.915C34.8955 66.6904 35.3447 66.3389 35.667 65.8604C35.999 65.3818 36.165 64.8252 36.165 64.1904C36.165 63.4092 35.9355 62.7646 35.4766 62.2568C35.0176 61.749 34.4365 61.4316 33.7334 61.3047C33.2158 61.207 32.1758 61.1582 30.6133 61.1582H28.5186Z" fill="white" />
                <line x1="60.25" y1="58.75" x2="73.75" y2="58.75" stroke="white" strokeWidth="4.5" strokeLinecap="square" />
                <line x1="60.25" y1="67.75" x2="73.75" y2="67.75" stroke="white" strokeWidth="4.5" strokeLinecap="square" />
                <line x1="60.25" y1="76.75" x2="73.75" y2="76.75" stroke="white" strokeWidth="4.5" strokeLinecap="square" />
            </svg>
            {/* Rounded line */}
            <svg width="141" height="84" viewBox="0 0 141 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="background__round">
                <path d="M7.5 76.0002C7.5 -16.5 133.5 -12 133.5 76.0002" stroke="url(#line)" strokeWidth="15" strokeLinecap="round" />
                <defs>
                    <linearGradient id="line" x1="7" y1="76" x2="177.5" y2="76" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2A74F2" />
                        <stop offset="1" stopColor="#ED88FF" />
                    </linearGradient>
                </defs>
            </svg>

        </section>

    );
}

export default Background;