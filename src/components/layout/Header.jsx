import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { FiAward, FiBriefcase, FiHome, FiMessageCircle, FiSettings, FiUser, FiMenu, FiX } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'
import TrabahoHubLogo from '../../assets/TrabahoHub.png'
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

export default function Header({ className = '', variant = 'landing' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`global-nav ${variant} ${className}`.trim()}>
        <div className="brand-cluster">
          <img src={TrabahoHubLogo} alt="TrabahoHub" className="brand-logo" />
          <span className="brand-baybayin">ᜆᜇᜊᜑᜓ ᜑᜊᜓ</span>
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
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <FiMenu />
            </button>
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

      {/* Mobile Menu Overlay */}
      {variant === 'landing' && (
        <div 
          className={`mobile-menu-overlay ${isMobileMenuOpen ? 'is-open' : ''}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeMobileMenu()
            }
          }}
        >
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <div className="brand-cluster">
                <img src={TrabahoHubLogo} alt="TrabahoHub" className="brand-logo" />
                <span className="brand-baybayin">ᜆᜇᜊᜑᜓ ᜑᜊᜓ</span>
              </div>
              <button className="mobile-menu-close" onClick={closeMobileMenu} aria-label="Close menu">
                <FiX />
              </button>
            </div>
            <div className="mobile-menu-divider"></div>
            <nav className="mobile-menu-links">
              {landingLinks.map((link) => (
                <Link key={link.label} to={link.path} onClick={closeMobileMenu}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mobile-menu-divider"></div>
            <div className="mobile-menu-actions">
              <Link className="mobile-ghost-btn" to="/login" onClick={closeMobileMenu}>
                Sign In
              </Link>
              <Link className="mobile-solid-btn" to="/register" onClick={closeMobileMenu}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['landing', 'app'])
}

