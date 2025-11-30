import Header from '../../components/layout/Header'
import './JobDetails.css'

const jobData = {
  title: 'Build a Modern E-commerce Website',
  posted: 'Posted 2 days ago',
  type: 'Remote',
  duration: '2-4 weeks',
  tags: ['React', 'Node.js', 'TypeScript', 'E-commerce', 'Payment Integration'],
  description:
    "We're looking for an experienced full-stack developer to build a modern e-commerce platform for our fashion brand. The website should be fast, responsive, and provide an excellent user experience across all devices."
}

const requirements = [
  'Product catalog with search and filtering',
  'Shopping cart and checkout flow',
  'Payment gateway integration (Stripe)',
  'User authentication and profiles',
  'Admin dashboard for inventory management',
  'Responsive design for mobile and desktop',
  'SEO optimization'
]

const deliverables = [
  'Fully functional e-commerce website',
  'Source code with documentation',
  'Deployment on hosting platform',
  '2 weeks of post-launch support'
]

const proposalStats = [
  { label: 'Client Budget', value: '$3,000 - $5,000' },
  { label: 'Duration', value: '2-4 weeks' },
  { label: 'Proposals', value: '3' }
]

const proposals = [
  {
    name: 'Sarah Chen',
    rate: '$2,800',
    eta: 'in 7 days',
    rating: '4.9',
    jobs: '127 jobs completed',
    summary:
      'I have extensive experience building e-commerce platforms with React and Node.js. I can deliver a fully responsive, SEO-optimized website with payment integration.'
  },
  {
    name: 'Marcus Johnson',
    rate: '$3,200',
    eta: 'in 10 days',
    rating: '5',
    jobs: '89 jobs completed',
    summary:
      'Specialized in modern e-commerce solutions. I will provide a scalable architecture with admin dashboard, inventory management, and analytics.'
  },
  {
    name: 'Elena Rodriguez',
    rate: '$2,500',
    eta: 'in 14 days',
    rating: '4.8',
    jobs: '156 jobs completed',
    summary:
      'Full-stack developer with 6 years of experience. I can build your e-commerce site with custom features and ensure smooth deployment.'
  }
]

export default function JobDetails() {
  return (
    <div className="job-details-page">
      <Header className="dashboard-nav" variant="app" />

      <main className="job-details-content">
        <div className="job-details-grid">
          <article className="job-details-card">
            <header className="job-details-header">
              <div>
                <h1>{jobData.title}</h1>
                <p className="job-meta">
                  <span>{jobData.posted}</span>
                  <span>{jobData.type}</span>
                  <span>{jobData.duration}</span>
                </p>
              </div>
              <div className="job-tags">
                {jobData.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </header>

            <section>
              <h2>Description</h2>
              <p>{jobData.description}</p>
            </section>

            <section>
              <h2>Requirements</h2>
              <ul>
                {requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Deliverables</h2>
              <ul>
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="proposal-form">
            <div className="proposal-stats">
              {proposalStats.map((stat) => (
                <div key={stat.label}>
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-value">{stat.value}</p>
                </div>
              ))}
            </div>

            <form className="proposal-fields">
              <label>
                Your Bid Amount
                <input type="number" defaultValue="3500" />
              </label>
              <label>
                Delivery Time
                <input type="text" placeholder="e.g., 10 days" />
              </label>
              <label>
                Cover Letter
                <textarea placeholder="Explain why you're the best fit for this project..." rows={4} />
              </label>
              <button className="solid-btn" type="button">
                Submit Proposal
              </button>
            </form>

            <p className="proposal-note">
              By submitting, you agree to TrabahoHub&apos;s Terms of Service.
            </p>
          </aside>
        </div>

        <section className="proposal-list">
          <header>
            <h2>Proposals ({proposals.length})</h2>
          </header>

          <div className="proposal-cards">
            {proposals.map((proposal) => (
              <article key={proposal.name} className="proposal-card">
                <div className="proposal-person">
                  <div className="avatar-placeholder">{proposal.name.charAt(0)}</div>
                  <div>
                    <p className="proposal-name">{proposal.name}</p>
                    <p className="proposal-rating">
                      ★ {proposal.rating} · {proposal.jobs}
                    </p>
                  </div>
                </div>
                <div className="proposal-price">
                  <strong>{proposal.rate}</strong>
                  <span>{proposal.eta}</span>
                </div>
                <p className="proposal-summary">{proposal.summary}</p>
                <div className="proposal-actions">
                  <button className="solid-btn" type="button">
                    Accept Proposal
                  </button>
                  <button className="ghost-btn" type="button">
                    View Profile
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}


