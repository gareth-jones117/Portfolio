import SkillCard from './Skillcard'

const skillItem = [
  {
    imgSrc: 'images/figma.svg',
    label: 'Figma',
    desc: 'Design tool',
  },
  {
    imgSrc: 'images/css3.svg',
    label: 'CSS',
    desc: 'User Interface',
  },
  {
    imgSrc: 'images/javascript.svg',
    label: 'JavaScript',
    desc: 'Dynamic and interactive web development',
  },
  {
    imgSrc: 'images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server',
  },
  {
    imgSrc: 'images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Lightweight web framework for Node.js',
  },
  {
    imgSrc: 'images/react.svg',
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: 'images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface',
  },
  {
    imgSrc: 'images/typescript.svg',
    label: 'Typescript',
    desc: 'Typed javascript for scalable applications',
  },
  {
    imgSrc: 'images/docker.svg',
    label: 'Docker',
    desc: 'Platform',
  },
  {
    imgSrc: 'images/postman.svg',
    label: 'Postman',
    desc: 'API client',
  },
]

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          Languages, Frameworks, and Tools
        </h2>
        <p className="text-zinc-300 mt-3 mb-8 max-w-[50ch] reveal-up">
          These are some of the tools I&apos;ve used to bring my projects to
          life. I&apos;m excited to keep learning and expanding this list in the
          future!
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
