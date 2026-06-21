import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navItems } from '../data/content'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          OmicsAI
          <span>Academic Lab</span>
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <span aria-hidden="true">Menu</span>
        </button>

        <nav
          id="site-navigation"
          className={`site-nav ${menuOpen ? 'open' : ''}`}
          aria-label="Primary"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a className="demo-cta" href="/agentic-causal/">
            Launch Agentic-Causal Demo
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
