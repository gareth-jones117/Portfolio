const sitemap = [
  { label: 'Home', href: '#home' },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Review',
    href: '#review',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/gareth-jones117' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gareth-jones-5794a5341/',
  },
]

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        {/* Centered Heading */}
        <div className="flex justify-center mb-10">
          <h2 className="headline-1 text-center mb-8 lg:max-w-[40ch] reveal-up">
            I Hope To Hear From You
          </h2>
        </div>

        {/* Sitemap and Socials at the Bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 lg:mt-16">
          {/* Sitemap */}
          <div className="flex flex-col items-center lg:items-start">
            <p className="mb-2 reveal-up">Sitemap</p>
            <ul className="space-y-2">
              {sitemap.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    aria-label="Links to site"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <p className="mb-2 reveal-up">Socials</p>
            <ul className="space-y-2">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    aria-label="links to social media"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-between pt-10 mt-10 border-t border-zinc-700">
          <a href="/" className="logo reveal-up">
            <img
              src="images/gj-logo1.svg"
              alt="gj-logo-footer"
              width={40}
              height={40}
            />
          </a>
          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2024 <span className="text-zinc-200">Gareth Jones</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
