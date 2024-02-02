import { Project } from "@/types/Home";
import Image from "next/image";
import Link from "next/link";
import { IoLogoJavascript } from "react-icons/io5";


interface ProjectsProps {
  projects: Project[];
}


export const Projects = ({projects}: ProjectsProps) => {
  return (
    <>
      <article className="sspace-y-16 flex flex-col items-center xl:items-start text-center xl:text-left">
        <h2 className="text-2xl md:text-4xl mb-2">Projetos Recentes</h2>

        <ul className="flex flex-wrap gap-16 justify-center xl:justify-start">
          {projects.map(({slug, name, image, tech}, index) => (
            <Link target="blank" href={slug} key={name + index}>
              <li className="text-md relative">
                <Image
                src={image.url}
                alt={image.alt}
                width={400}
                height={300}
                className="object-cover rounded-2xl h-[18.75rem] mb-4 transition-all duration-200 transform hover:scale-105"
                />
                <span clas>{name}</span>
                <div className="flex gap-2">
                  {tech?.map((icon, index) => (
                    <span key={icon + index}>{icon}</span>
                  ))}
                </div>
                <div className="bg-indigo-500 rounded-xl w-14 h-14 text-center flex justify-center items-center text-3xl absolute bottom-[1.25rem] -right-[1.25rem]">
                  <span>{index + 1}</span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </article>
    
    </>
  )

}

export default Projects