'use client'
import { useState } from "react"
import Wrapper from "./Wrapper";
import Image from "next/image";


const Portfolio = () => {
    const projects = [
        {
            id: 1,
            src:'/1.jpg',
            width: 500,
            height: 500,
        },
        {
            id: 2,
            src:'/2.jpg',
            width: 500,
            height: 500,
        },
        {
            id: 3,
            src:'/3.jpg',
            width: 500,
            height: 500,
        },
        {
            id: 4,
            src:'/4.jpg',
            width: 500,
            height: 500,
        },
        {
            id: 5,
            src:'/5.jpg',
            width: 500,
            height: 500,
        },
        {
            id: 6,
            src:'/6.jpg',
            width: 500,
            height: 500,
        }
    ] 
    const [filter,setFilter] = useState('all');

  return (
    <div>
        
        <div className="grid gap-5 md:grid-cols-3">
            {projects.map(project=>{
                return <Image className="w-full" src={project.src} alt="projects image" width={project.width} height={project.height} />
            })}
        </div>
      
    </div>
  )
}

export default Portfolio