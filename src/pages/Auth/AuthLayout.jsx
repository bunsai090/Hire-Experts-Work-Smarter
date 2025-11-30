import PropTypes from 'prop-types'
import './AuthLayout.css'

export default function AuthLayout({ title, description, tabs = [], activeTab, onTabChange, children }) {
  return (
    <div className="auth-page">
      <div className="auth-brand">
        <span className="brand-icon">✶</span>
        <div className="brand-label">
          <span className="brand-name">TrabahoHub</span>
          <span className="brand-tagline">Hire Experts. Work Smarter.</span>
        </div>
        <p className="auth-welcome">Welcome back</p>
      </div>

      <div className="auth-card">
        {tabs.length > 0 ? (
          <div className="auth-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab.value}
                className={activeTab === tab.value ? 'is-active' : ''}
                onClick={() => onTabChange?.(tab.value)}
                role="tab"
                aria-selected={activeTab === tab.value}
              >
                {tab.label}
              </button>
            ))}
          </div>
        ) : null}

        <div className="auth-heading">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        {children}
      </div>
    </div>
  )
}

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  activeTab: PropTypes.string,
  onTabChange: PropTypes.func,
  children: PropTypes.node.isRequired
}

