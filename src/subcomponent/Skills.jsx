import React from "react";

const skillsData = [
  {
    name: "HTML5",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="60" fill="#e44d26"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" /></svg>
    ),
    percent: "90%",
  },
  {
    name: "CSS3",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="#e44d26" viewBox="0 0 384 512" height="60"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
    ),
    percent: "90%",
  },
  {
    name: "Angular UI",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="#e44d26" viewBox="0 0 384 512" height="60"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"/></svg>
    ),
    percent: "80%",
  },
  {
    name: "Responsive UI",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="#e44d26" viewBox="0 0 384 512" height="60"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
    ),
    percent: "90%",
  },
];

function Skills() {
  return (
    <div className="skill-parent">
      {skillsData.map((skill, index) => (
          <div key={index} className="skill-card rounded-[25px]">
            {skill.svg}
            <p className="percent">{skill.percent}</p>
            <p className="name">{skill.name}</p>
          </div>
        ))}
    </div>
  );
}

export default Skills;
