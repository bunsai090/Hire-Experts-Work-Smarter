import Header from '../components/layout/Header'
import './Profile.css'

const stats = [
  { label: 'Rating', value: '4.9', sub: '★' },
  { label: 'Projects', value: '127' },
  { label: 'Earned', value: '$85k' },
  { label: 'Success', value: '98%' }
]

const skills = ['React', 'TypeScript', 'Node.js', 'UI/UX Design', 'Figma', 'Tailwind CSS']

const portfolio = [
  { title: 'E-commerce Platform', category: 'Web Development', image: 'https://images.unsplash.com/photo-1515165562835-c4c1bfa1394b?auto=format&fit=crop&w=600&q=60' },
  { title: 'Mobile Banking App', category: 'Mobile Design', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=60' },
  { title: 'SaaS Dashboard', category: 'UI Design', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=60' },
  { title: 'Brand Identity', category: 'Branding', image: 'https://images.unsplash.com/photo-1498050108023-4f785aeaf792?auto=format&fit=crop&w=600&q=60' }
]

const badges = ['Excellence', 'Fast Response', 'Top Rated', 'Client Favorite']

export default function Profile() {
  return (
    <div className="profile-page">
      <Header className="dashboard-nav" variant="app" />

      <main className="profile-content">
        <section className="profile-hero">
          <div className="profile-meta">
            <div className="profile-avatar">A</div>
            <div>
              <h1>Alex Morgan</h1>
              <p>Full Stack Developer &amp; UI Designer</p>
              <p className="profile-detail">San Francisco, CA · Member since 2022</p>
            </div>
          </div>
          <button className="solid-btn" type="button">
            Edit Profile
          </button>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">
                {stat.sub ? (
                  <>
                    {stat.value} <span>{stat.sub}</span>
                  </>
                ) : (
                  stat.value
                )}
              </p>
            </div>
          ))}
        </section>

        <section className="profile-grid">
          <article className="panel">
            <h2>About</h2>
            <p>
              Passionate full-stack developer with 5+ years of experience building scalable web applications.
              Specialized in React, Node.js, and modern UI/UX design. I love turning complex problems into
              simple, beautiful, and intuitive solutions.
            </p>
          </article>

          <article className="panel">
            <h2>Skills</h2>
            <div className="skill-tags">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="portfolio-section panel">
          <div className="section-header">
            <div>
              <h2>Portfolio</h2>
              <p>Recent work and case studies</p>
            </div>
            <button className="ghost-btn" type="button">
              Add Project
            </button>
          </div>
          <div className="portfolio-grid">
            {portfolio.map((project) => (
              <article key={project.title} className="portfolio-card">
                <img src={project.image} alt={project.title} />
                <div>
                  <p className="portfolio-title">{project.title}</p>
                  <p className="portfolio-category">{project.category}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel badges-section">
          <div className="section-header">
            <div>
              <h2>Badges</h2>
              <p>Achievements and recognition</p>
            </div>
            <button className="ghost-btn" type="button">
              View All Badges
            </button>
          </div>
          <div className="badge-row">
            {badges.map((badge) => (
              <div key={badge} className="profile-badge">
                <span>★</span>
                <p>{badge}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}


