import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import './Home.css'

const categories = [
  { title: 'Development', count: '2.5k+ experts', icon: '</>' },
  { title: 'Design', count: '1.8k+ experts', icon: '🎨' },
  { title: 'Writing', count: '1.2k+ experts', icon: '✏️' },
  { title: 'Video Editing', count: '950+ experts', icon: '🎬' }
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
    icon: '👤'
  },
  {
    label: 'Post or Browse',
    description: 'Post jobs or browse available opportunities',
    icon: '📈'
  },
  {
    label: 'Start Working',
    description: 'Connect, collaborate, and get paid',
    icon: '✔️'
  }
]

export default function Home() {
  return (
    <div className="home-page">
      <Header className="hero-nav" />

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Connect worldwide</p>
            <h1>Hire Experts. Work Smarter.</h1>
            <p className="hero-description">
              Connect with top freelancers worldwide. Build your dream team or find your next opportunity.
            </p>
            <div className="hero-actions">
              <Link className="solid-btn" to="/register">
                Get Started
              </Link>
              <Link className="ghost-btn" to="/dashboard">
                Browse Freelancers
              </Link>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="section-header">
            <h2>Popular Categories</h2>
            <p>Discover in-demand expertise</p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <article key={category.title} className="category-card">
                <span className="category-icon">{category.icon}</span>
                <div>
                  <p className="category-title">{category.title}</p>
                  <p className="category-count">{category.count}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-header">
            <h2>Featured Freelancers</h2>
            <p>Handpicked professionals ready to collaborate</p>
          </div>

          <div className="freelancer-grid">
            {featuredFreelancers.map((freelancer) => (
              <article key={freelancer.name} className="freelancer-card">
                <div className="freelancer-avatar">{freelancer.name.charAt(0)}</div>
                <p className="freelancer-name">{freelancer.name}</p>
                <p className="freelancer-role">{freelancer.role}</p>
                <p className="freelancer-rating">★ {freelancer.rating}</p>
                <div className="freelancer-tags">
                  {freelancer.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block steps-section" id="how-trabahohub-works">
          <div className="section-header">
            <h2>How TrabahoHub Works</h2>
            <p>Get started in three simple steps</p>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <article key={step.label} className="step-card">
                <span className="step-icon">{step.icon}</span>
                <p className="step-count">STEP {index + 1}</p>
                <p className="step-title">{step.label}</p>
                <p className="step-description">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-card">
            <p className="eyebrow">Join the community</p>
            <h2>Ready to get started?</h2>
            <p>Join thousands of freelancers and clients building the future of work.</p>
            <Link className="solid-btn" to="/register">
              Create Your Account
            </Link>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>© 2024 TrabahoHub. All rights reserved.</p>
      </footer>
    </div>
  )
}

