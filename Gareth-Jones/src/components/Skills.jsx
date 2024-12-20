import SkillCard from './Skillcard'

const skillItem = [
  {
    imgSrc: 'src/assets/figma.svg',
    label: 'Figma',
    desc: 'Design tool',
  },
  {
    imgSrc: 'src/assets/css3.svg',
    label: 'CSS',
    desc: 'User Interface',
  },
  {
    imgSrc: 'src/assets/javascript.svg',
    label: 'JavaScript',
    desc: 'Dynamic and interactive web development',
  },
  {
    imgSrc: 'src/assets/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server',
  },
  {
    imgSrc: 'src/assets/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Lightweight web framework for Node.js',
  },
  {
    imgSrc: 'src/assets/react.svg',
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: 'src/assets/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface',
  },
  {
    imgSrc: 'src/assets/typescript.svg',
    label: 'Typescript',
    desc: 'Typed javascript for scalable applications',
  },
  {
    imgSrc: 'src/assets/docker.svg',
    label: 'Docker',
    desc: 'Platform',
  },
  {
    imgSrc: 'src/assets/postman.svg',
    label: 'Postman',
    desc: 'API client',
  },
]

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Languages, Frameworks, and Tools</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          These are some of the tools I&apos;ve used to bring my projects to
          life. I&apos;m excited to keep learning and expanding this list in the
          future!
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
