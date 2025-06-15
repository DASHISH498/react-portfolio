import React from 'react'

function Projectcards() {
    const projects = [
    {
      title: 'Strawberries',
      image: 'https://cdn.freshfruitportal.com/2017/03/strawberry_62221615.jpg',
      link: "https://google.com"
    },
    {
      title: 'Apple',
      image: 'https://st4.depositphotos.com/1044737/30675/i/450/depositphotos_306750856-stock-photo-fruits-collection-food-background-apple.jpg',
      link: "https://google.com"
    },
    {
      title: 'Lemons',
      image: 'https://www.jessicagavin.com/wp-content/uploads/2019/04/types-of-lemons-2.jpg',
      link: "https://google.com"
    },
    {
      title: 'Banana',
      image: 'https://www.fruitsmith.com/pub/media/mageplaza/blog/post/e/x/exotic_fruits_you_might_not_know_about.jpg',
      link: "https://google.com"
    },
    {
      title: 'Strawberries',
      image: 'https://cdn.freshfruitportal.com/2017/03/strawberry_62221615.jpg',
      link: "https://google.com"
    },
    {
      title: 'Lemons',
      image: 'https://www.jessicagavin.com/wp-content/uploads/2019/04/types-of-lemons-2.jpg',
      link: "https://google.com"
    },
  ];
    return (
        <>
            <a href="{project.link}">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-lg group"
                        >
                        <img src={project.image} alt={project.title} className="w-full h-96 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                            <h2 className="text-white text-xl font-semibold">{project.title}</h2>
                        </div>
                        </div>
                    ))}
                </div>
            </a>
        </>
    )
}

export default Projectcards