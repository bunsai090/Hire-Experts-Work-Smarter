import { Link } from 'react-router-dom'
import { FiCheckCircle, FiCode, FiEdit3, FiPenTool, FiTrendingUp, FiUserPlus, FiVideo } from 'react-icons/fi'
import Header from '../components/layout/Header'
import './Home.css'

const categories = [
  { title: 'Development', count: '2.5k+ experts', icon: FiCode },
  { title: 'Design', count: '1.8k+ experts', icon: FiPenTool },
  { title: 'Writing', count: '1.2k+ experts', icon: FiEdit3 },
  { title: 'Video Editing', count: '950+ experts', icon: FiVideo }
]

const featuredFreelancers = [
  {
    name: 'Sarah Chen',
    role: 'Full Stack Developer',
    rating: '4.9',
    skills: ['React', 'Node.js', 'TypeScript']
  },
  {
    name: 'Marcus Johnson',
    role: 'UI/UX Designer',
    rating: '5.0',
    skills: ['Figma', 'Webflow', 'Branding']
  },
  {
    name: 'Elena Rodriguez',
    role: 'Content Writer',
    rating: '4.8',
    skills: ['SEO', 'Copywriting', 'Blogging']
  }
]

const steps = [
  {
    label: 'Create Account',
    description: 'Sign up as a client or freelancer in seconds',
    icon: FiUserPlus
  },
  {
    label: 'Post or Browse',
    description: 'Post jobs or browse available opportunities',
    icon: FiTrendingUp
  },
  {
    label: 'Start Working',
    description: 'Connect, collaborate, and get paid',
    icon: FiCheckCircle
  }
]

export default function Home() {
  return (
    <div className="home-page">
      <Header className="hero-nav" />

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Hire Experts.<br />Work Smarter.</h1>
            <p className="hero-description">
              Connect with top freelancers worldwide. Build your dream team or find your next opportunity.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/register">
                Get Started
              </Link>
              <Link className="btn btn-secondary" to="/dashboard">
                Browse Freelancers
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Categories Section */}
        <section className="section">
          <h2 className="section-title">Popular Categories</h2>

          <div className="category-grid">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <div key={category.title} className="category-card">
                  <div className="category-icon">
                    <IconComponent />
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-count">{category.count}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Featured Freelancers Section */}
        <section className="section">
          <h2 className="section-title">Featured Freelancers</h2>

          <div className="freelancer-grid">
            {featuredFreelancers.map((freelancer) => (
              <div key={freelancer.name} className="freelancer-card">
                <div className="freelancer-avatar">
                  {freelancer.name.charAt(0)}
                </div>
                <h3 className="freelancer-name">{freelancer.name}</h3>
                <p className="freelancer-role">{freelancer.role}</p>
                <p className="freelancer-rating">★ {freelancer.rating}</p>
                <div className="freelancer-skills">
                  {freelancer.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section how-it-works">
          <h2 className="section-title">How TrabahoHub Works</h2>

          <div className="steps-grid">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={step.label} className="step-card">
                  <div className="step-icon">
                    <IconComponent />
                  </div>
                  <p className="step-number">STEP {index + 1}</p>
                  <h3 className="step-title">{step.label}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to get started?</h2>
          <p>Join thousands of freelancers and clients building the future of work.</p>
          <Link className="btn btn-primary" to="/register">
            Create Your Account
          </Link>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 TrabahoHub. All rights reserved.</p>
      </footer>
    </div>
  )
}
