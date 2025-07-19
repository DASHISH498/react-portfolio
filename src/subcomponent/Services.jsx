import React from 'react'

function Servicessection() {
    const services = [
    {
        number: '01',
        title: 'Web Devlopment',
        text: 'I build modern, scalable, and high-performing websites using the latest technologies — tailored to your goals, audience, and brand identity.'
    },
    {
        number: '02',
        title: 'Responsive Design',
        text: 'Your website will look pixel-perfect across all devices — from desktops to smartphones — ensuring a seamless user experience everywhere.'
    },
    {
        number: '03',
        title: 'Clean Code  ',
        text: 'I write clean, well-structured, and reusable code that’s easy to maintain and optimized for performance, accessibility, and SEO.'
    },
    {
        number: '04',
        title: 'UI/UX Design',
        text: 'I create user-friendly interfaces with a focus on clarity, usability, and visual appeal — making sure users enjoy every interaction on your site.'
    }
  ];
    return (
        <>
            <div className="service-weight relative">
                {services.map((service, index) => (    
                    <div className="service-item px-15px lg:px-30px border-b border-body-color dark:border-seondary-color relative z-10 group wow fadeInUp">
                        <a href="" className="no-underline text-white flex items-center flex-wrap py-4 gap-15">
                            <span className="left flex flex-wrap gap-4 items-center">
                                <b className="service-sl-num text-primary-color group-hover:text-white transition-all duration-300">{service.number}</b>
                                <b className="text-xl md:text-size-25 lg:text-3xl">{service.title}</b>
                            </span>
                            <span className="text-primary-color-light text-white max-w-630px">{service.text}</span>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Servicessection