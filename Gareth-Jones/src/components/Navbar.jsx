import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null)
  const activeBox = useRef(null)

  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return

    activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`
    activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`
    activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`
    activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`
  }

  useEffect(() => {
    initActiveBox()

    const handleResize = () => {
      initActiveBox()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const activeCurrentLink = (event) => {
    if (!event.target || !activeBox.current) return

    lastActiveLink.current?.classList.remove('active')
    event.target.classList.add('active')
    lastActiveLink.current = event.target

    activeBox.current.style.top = `${event.target.offsetTop}px`
    activeBox.current.style.left = `${event.target.offsetLeft}px`
    activeBox.current.style.width = `${event.target.offsetWidth}px`
    activeBox.current.style.height = `${event.target.offsetHeight}px`
  }

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
    },
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'Projects', link: '#projects', className: 'nav-link' },
    { label: 'Review', link: '#review', className: 'nav-link' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' },
  ]

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          ref={key === 0 ? lastActiveLink : null}
          className={className}
          onClick={activeCurrentLink}
        >
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
