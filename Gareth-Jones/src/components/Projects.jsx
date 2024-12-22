import ProjectCard from './ProjectCard'

const project = [
  {
    imgSrc: 'images/Stellar-share.png',
    title: 'Stellar-Share',
    tags: ['Fullstack', 'Web Development', 'API'],
    projectLink: 'https://stellar-share-mania-roa-24.pushed.nz/',
    description:
      'One of the largest projects I have ever done. I used Express.js for the backend , dbdiagram to create the database and react typescript to create the Front End. In the future I would like to return to this to fix some of the accessibilty issues and some more styling ',
  },
  {
    imgSrc: 'images/Snake.png',
    title: 'Snake',
    tags: ['Game', 'HTML', 'Javascript'],
    projectLink: 'https://gareth-jones117.github.io/Snake/',
    description:
      'A small project that was fun to code. Went back to the basics and used CSS, HTMl and Javascript. I think in the future I will change the styling , and add the sequel to the original Snake',
  },
]

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Some Of My Projects</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {project.map(
            ({ imgSrc, title, tags, projectLink, description }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                description={description}
                projectLink={projectLink}
                classes="reveal-up"
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
