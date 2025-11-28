import PropTypes from 'prop-types'
import { FiAward, FiBriefcase, FiHome, FiMessageCircle, FiSettings, FiUser } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const landingLinks = [
  { label: 'Browse Freelancers', path: '/dashboard' },
  { label: 'Find Work', path: '/projects' },
  { label: 'How It Works', path: '/#how-trabahohub-works' }
]

const appLinks = [
  { label: 'Home', path: '/dashboard', icon: FiHome },
  { label: 'Projects', path: '/projects', icon: FiBriefcase },
  { label: 'Messages', path: '/messaging', icon: FiMessageCircle },
  { label: 'Gamification', path: '/gamification', icon: FiAward },
  { label: 'Profile', path: '/profile', icon: FiUser },
  { label: 'Settings', path: '/settings', icon: FiSettings }
]

const glyphs = Array.from({ length: 8 })

export default function Header({ className = '', variant = 'landing' }) {
  return (
    <header className={`global-nav ${variant} ${className}`.trim()}>
      <div className="brand-cluster">
        <span className="brand-icon">✶</span>
        <div className="brand-label">
          <span className="brand-name">TrabahoHub</span>
          <span className="brand-tagline">Hire Experts. Work Smarter.</span>
        </div>
        <div className="nav-glyphs" aria-hidden="true">
          {glyphs.map((_, index) => (
            <span key={`glyph-${index}`} />
          ))}
        </div>
      </div>

      {variant === 'landing' ? (
        <>
          <nav className="nav-links">
            {landingLinks.map((link) => (
              <Link key={link.label} to={link.path}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <Link className="ghost-btn" to="/login">
              Sign In
            </Link>
            <Link className="solid-btn" to="/register">
              Get Started
            </Link>
          </div>
        </>
      ) : (
        <nav className="nav-links app-links">
          {appLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) => `app-link ${isActive ? 'is-active' : ''}`}
            >
              <span className="link-icon">
                <link.icon />
              </span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['landing', 'app'])
}

