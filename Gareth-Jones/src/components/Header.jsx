import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex-items-center z-40 bg-gradient-to-b from bg-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grids md:grid-cols-[1fr, 3f, 1fr]">
        <h1>
          <a href="/" className="logo">
            <img src="src/assets/gj-logo.png" width={60} height={60} alt="GJ" />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={null}>
            <span className="material-symbols-rounded">menu</span>
          </button>
          <Navbar />
        </div>
        <a href="#contact" className="">
          Contact Me
        </a>
      </div>
    </header>
  )
}

export default Header
