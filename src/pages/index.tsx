import AboutMe from "@/components/Home/AboutMe";
import { Projects } from "@/components/Home/Projects";
import Head from "next/head";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiMongodb  } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { SiTypescript } from "react-icons/si";




interface Project {
  slug: string;
  name: string;
  image: {
    url: string;
    alt: string;
  };
  tech?: any[];
}

export const logoIcons = {
  tailwind: <SiTailwindcss />,
  javascript: <IoLogoJavascript />,
  typescript: <SiTypescript />,
  nextjs: <TbBrandNextjs />,
  mongodb: <SiMongodb />,




}

const Home = () => {
  const projects: Project[] = [
    {
      slug: 'https://dogs.origamid.dev/',
      name: 'Dogs API',
      image: {
        url: 'https://i.imgur.com/IqnFWOt.png',
        alt: 'Página Inicial do projeto Dogs',
      },
      tech: [logoIcons.javascript],
    },
    {
      slug: 'https://landingpage-eight-brown.vercel.app/',
      name: 'Landing Page para Cursos',
      image: {
        url: 'https://i.imgur.com/Eljyq6f.png',
        alt: 'Página inicial do projeto Next Dev',
      },
      tech: [logoIcons.typescript,logoIcons.nextjs,logoIcons.mongodb,logoIcons.tailwind],
    },
    {
      slug: 'https://ceplacas.vercel.app/',
      name: 'Site para a Ceplacas',
      image: {
        url: 'https://i.imgur.com/jYbtZTL.png',
        alt: 'Pagina inicial ceplacas',
      },
      tech: [logoIcons.typescript,logoIcons.tailwind],
    },
    {
      slug: 'https://spotfly.vercel.app/',
      name: 'Landing page spotify',
      image: {
        url: 'https://i.imgur.com/np6HTz7.png',
        alt: 'Página inicial do projeto Animais fantásticos',
      },
      tech: [logoIcons.tailwind]
    },
  ];

  return (
    <>
      <Head>
        <title>Sobre mim | Marcelo</title>
        <meta name="description" content="Desenvolvedor Front-End" />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe />
        <Projects projects={projects} />
      </div>
    </>
  );
};
export default Home;
