import React from 'react'

function Experience() {

    const experiences = [
        {
            company_name: 'Aditadv Tech Private Limited',
            paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
            summary : 'I have working as a front end developer. I am working on HTML CSS Bootstrap, JavaScript, AngularJS & Figma',
            year: '2021 - Present',
            data: [
                {point: "Working on AngularJS UI Development"},
                {point: "Working with developers and designers to create a design strategy"},
                {point: "Testing and improving the design of the website"},
                {point: "Pull, Push & Commit the code in working branch in GIT"},
                {point: "Update the code on beta server for testing before release live."}
            ]
        },
        {
            company_name: 'Red Symbol Technologies Pvt. Ltd.',
            paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
            summary : 'I have worked as a Web Graphic Designer. I am worked on HTML, CSS, Bootstrap, JavaScript & Photoshop',
            year: 'June - 2020 – January - 2021',
            data: [
                {point: "Creating the website on Wordpress"},
                {point: "Working with developers and designers to create a design strategy"},
                {point: "Testing and improving the design of the website"},
                {point: "Designing sample pages including color and fonts"},
                {point: "Preparing design plans and presenting the website structure"},
                {point: "Making the website faster using remove unwanted images and code in whole website"}
            ]
        },
        {
            company_name: 'Vaibhav Global Limited',
            paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
            summary : 'I have worked as a Web Graphic Designer. I am worked on HTML, CSS & Mostly worked on Photoshop for design banner and EPG for Official Website.',
            year: 'August - 2019 – January - 2020',
            data: [
                {point: "Adobe Photoshop"},
                {point: "Adobe XD"},
                {point: "Adobe Illustrator"},
                {point: "Making EPG"},
                {point: "Making Product Tags"}
            ]
        },
        {
            company_name: 'Aunico India',
            paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
            summary : 'I have worked as a Web Graphic Designer. I am worked on HTML, CSS, Bootstrap & Photoshop',
            year: 'November - 2018 – May - 2019',
            data: [
                {point: "Working with developers and designers to create a design strategy"},
                {point: "Testing and improving the design of the website"},
                {point: "Designing sample pages including color and fonts"},
                {point: "Preparing design plans and presenting the website structure"}
            ]
        }
    ];
  return (
    <>
        <div className="experience">
            {experiences.map((experience, index) => (
                <div key={index} className="experience-card grid group relative overflow-hidden mb-6">
                    <span className="text-gray-400 font-bold text-xl">{experience.year}</span>
                    <h2 className="text-2xl font-semibold mt-2">{experience.company_name}</h2>
                    <p className="mt-1 text-[16px]">{experience.summary}</p>
                    <div className="responsibility mt-2">
                        <ul className="list-disc pl-5 text-sm text-gray-700">
                            {experience.data.map((item, idx) => (
                            <li className="text-white text-[14px]" key={idx}>{item.point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default Experience