import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef()
  const activeBox = useRef()
  const initActiveBox = () => {
    console.log(lastActiveLink.current)
    console.log(activeBox.current)

    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px'

    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px'

    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px'

    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px'
  }

  useEffect(initActiveBox, [])

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink,
    },
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'Projects', link: '#projects', className: 'nav-link' },
    { label: 'Resume', link: '#Resume', className: 'nav-link' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' },
  ]

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a href={link} key={key} ref={ref} className={className}>
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
}

export default Navbar
