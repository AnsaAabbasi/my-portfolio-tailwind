import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id:0,
        title: "Countdown Timer",
        desc: "A Next.js and Typescript powered websiteto track time  with an interactive countdown feature.",
        img: "/conuntdowntimer.jpg",
        tags: ["HTML","Node","CSS","Typescript"],
    },
    {
        id:1,
        title: "WeatherApp",
        desc: "A Next.js and Typescript based tool for fetching and displaying real-time weather data. ",
        img: "/WeatherApp.jpg",
        tags: ["HTML","Node","CSS","Typescript"],

    },
    {
        id:3,
        title: "Interactive Resume",
        desc: "A Typecript based interactive Resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/resume.jpg",
        tags: ["HTML","Node","CSS","Typescript"],

    },
];
const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card  
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}

        />))}
      </div>
      
    </div>
  )
}

export default Projects
