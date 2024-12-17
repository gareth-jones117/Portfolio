import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ navOpen }) => {
  const [activeLink, setActiveLink] = useState(null)
  const [boxPosition, setBoxPosition] = useState({ top: 0, height: 0 })
  const linkRefs = useRef([])

  const handleLinkClick = (index) => {
    setActiveLink(index)
  }

  useEffect(() => {
    if (activeLink !== null) {
      const activeLinkElement = linkRefs.current[activeLink]
      setBoxPosition({
        top: activeLinkElement.offsetTop,
        height: activeLinkElement.offsetHeight,
      })
    }
  }, [activeLink])

  return (
    <nav
      className={`navbar ${navOpen ? 'active' : ''}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <ul className="flex flex-col md:flex-row">
        <li
          className={`nav-link ${activeLink === 0 ? 'active' : ''}`}
          onClick={() => handleLinkClick(0)}
          ref={(el) => (linkRefs.current[0] = el)}
        >
          <a href="#home">Home</a>
        </li>
        <li
          className={`nav-link ${activeLink === 1 ? 'active' : ''}`}
          onClick={() => handleLinkClick(1)}
          ref={(el) => (linkRefs.current[1] = el)}
        >
          <a href="#about">About</a>
        </li>
        <li
          className={`nav-link ${activeLink === 2 ? 'active' : ''}`}
          onClick={() => handleLinkClick(2)}
          ref={(el) => (linkRefs.current[2] = el)}
        >
          <a href="#services">Services</a>
        </li>
        <li
          className={`nav-link ${activeLink === 3 ? 'active' : ''}`}
          onClick={() => handleLinkClick(3)}
          ref={(el) => (linkRefs.current[3] = el)}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/*Active-box*/}
      <div
        className={`navbar activeBox ${activeLink !== null ? 'active' : ''}`}
        style={{
          top: `${boxPosition.top}px`,
          height: `${boxPosition.height}px`,
        }}
      />
    </nav>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
}

export default Navbar
