import ProjectCard from './ProjectCard'

const project = [
  {
    imgSrc: 'src/assets/images/Stellar-share.png',
    title: 'Stellar-Share',
    tags: ['Fullstack', 'Web Development', 'API'],
    projectLink: 'https://stellar-share-mania-roa-24.pushed.nz/',
  },
  {
    imgSrc: 'src/assets/images/Snake.png',
    title: 'Snake',
    tags: ['Game', 'HTML', 'Javascript'],
    projectLink: 'https://gareth-jones117.github.io/Snake/',
  },
]

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Some Of My Projects</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {project.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
