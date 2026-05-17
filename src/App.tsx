import './App.css'

type Project =  {
  title: string
  category: string
  description: string
  tags: string[]
  image: string
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'Gestura',
    category: 'Featured Project',
    description: 'A sign language learning web and recognition app that helps beginners practice ASL fingerspelling through structured lessons, quizzes, progress tracking, and real-time camera-based recognition',
    tags: ['Vue.js', 'Javascript', 'MediaPipe', 'REST API', 'Vercel', 'UI/UX'],
    image:'/images/gestura.png',
    link: 'https://gestura-frontend-iota.vercel.app/',
    github: 'https://github.com/ruqaiyaRoomi/gestura.git',
  },
  {
    title: 'Social Networking Web App',
    category: 'Full Stack Web App',
    description: 'An Instagram style social networking platform with user registration, login, posting, likes, comments, follow/unfollow, search, profiles and notifications.',
    image: '/images/socialNetworking.png',
    tags: ['JavaScript', 'Node.js','Express', 'MongoDB','REST API', 'Postman', 'UI/UX'],
  },
  {
    title: 'Minesweeper',
    category: 'Javascript Game',
    description: 'A browser-based Minesweeper game built with interactive tile reveal logic, win/loss, and real-time state updates',
    image: '/images/minesweeper.png',
    tags: ['JavaScript', 'HTML', 'CSS', 'Game Logic'],
    link: 'https://minesweeper-web-game.vercel.app/',
    github: 'https://github.com/ruqaiyaRoomi/minesweeper-web-game.git'
  }

]

function App() {
  return (
    <main className='site'>
      <nav className="navbar">
        <a href="#home" className='logo'>Ruqaiya Roomi</a>

        <div className="navLinks">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id='home' className="hero Section">
        <div className='heroContent'>
          <div className="heroeft">
          <p className="eyebrow">Frontend - UI/UX - Accessible Web Apps</p>
          <h1>Hi, I'm Ruqaiya Roomi</h1>

          <p className="heroText">
            I’m a recent IT graduate focusing on frontend development and UI/UX design.
  I like working on interfaces that feel practical, consistent, and simple for people to navigate.
          </p>

          <div className="heroActions">
            <a href="#projects" className='primaryButton'>View Projects</a>
            <a href="/Ruqaiya_Roomi_Resume.pdf" className='secondaryButton' target='_blank'>Download Resume</a>
          </div>

        </div>
        <aside className="heroCard">
      <p className="cardEyebrow">Featured Project</p>
      <h2>Gestura</h2>
      <p>
        A sign language learning web app with lessons, quizzes, progress tracking,
        camera-based recognition, and feedback states.
      </p>

      <div className="previewPhone">
        <div className="phoneHeader"></div>
        <div className="phoneCard"></div>
        <div className="phoneLine"></div>
        <div className="phoneLine short"></div>
        <div className="phoneButton"></div>
      </div>

      <div className="previewTags">
        <span>Vue.js</span>
        <span>MediaPipe</span>
        <span>REST API</span>
      </div>
      </aside>
    </div>
      </section>

      <section id="skills" className="section">
  <p className="eyebrow">Skills</p>
  <h2>What I work with</h2>

  <div className="skillsGrid">
    <div className="skillCard">
      <div className="skillHeader">
        <span className="skillIcon">💻</span>
        <h3>Frontend Development</h3>
      </div>

      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>Vue.js, Vue Router</li>
        <li>React basics, TypeScript basics</li>
        <li>Responsive layouts and reusable components</li>
      </ul>
    </div>

    <div className="skillCard">
      <div className="skillHeader">
        <span className="skillIcon">🎨</span>
        <h3>UI/UX Design</h3>
      </div>

      <ul>
        <li>Figma wireframes and prototypes</li>
        <li>User flows and interaction states</li>
        <li>Accessibility-focused interfaces</li>
        <li>Visual consistency and usability</li>
      </ul>
    </div>

    <div className="skillCard">
      <div className="skillHeader">
        <span className="skillIcon">⚙️</span>
        <h3>Backend & Tools</h3>
      </div>

      <ul>
        <li>Node.js, Express, MongoDB</li>
        <li>REST API integration</li>
        <li>Git, GitHub, Postman</li>
        <li>Vercel deployment</li>
      </ul>
    </div>
  </div>
</section>

      <section id='projects' className='section'>
        <p className="eyebrow">Selected Work</p>
        <h2>Projects</h2>

        <div className="projectsGrid">
          {projects.map((project) => (
            <article className='projectCard' key={project.title}> 
            
            {project.image && (
              <div className='projectImageWrap'>
                <img src={project.image} alt={`${project.title} preview`} />
              </div>
            )}

              <p className="projectCategory">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              
              <div className="projectLinks">
                {project.link && (
                  <a href={project.link} target='_blank'>Live Demo</a>
                )}

                {project.github && (
                  <a href={project.github} target='_blank' rel='noreferrer'>View Code</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

    <section id="contact" className='section contact'>
      <p className='eyebrow'>Contact</p>
      <h2>Lets Connect</h2>

      <p>I'm open to frontend, UX/UI opportunities and projects where I can build clean, user-focused interface.</p>

      <div className="contactLinks">
        <a href="mailto:ruqaiyaroomi@gmail.com">Email</a>
        <a href="https://github.com/ruqaiyaRoomi" target='_blank'>GitHub</a>
        <a href="#" target='_blank'>LinkedIn</a>
      </div>
    </section>
    </main>
  )
}

export default App