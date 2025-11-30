import Header from '../../components/layout/Header'
import './Dashboard.css'

const summaryStats = [
  { title: 'Active Projects', value: '8', detail: '+2 this week', icon: '📁' },
  { title: 'Total Earnings', value: '$12,450', detail: '+$1,200 this month', icon: '$' },
  { title: 'Unread Messages', value: '5', detail: '3 urgent', icon: '💬' },
  { title: 'Points Earned', value: '2,340', detail: 'Level 7', icon: '🏆' }
]

const activeProjects = [
  {
    name: 'E-commerce Website Redesign',
    client: 'TechCorp Inc.',
    budget: '$3,500',
    progress: 75,
    deadline: '5 days remaining'
  },
  {
    name: 'Mobile App UI Design',
    client: 'StartupXYZ',
    budget: '$2,800',
    progress: 40,
    deadline: '12 days remaining'
  },
  {
    name: 'Brand Identity Package',
    client: 'Creative Agency',
    budget: '$1,500',
    progress: 90,
    deadline: '8 days remaining'
  }
]

const recentMessages = [
  {
    name: 'Sarah Johnson',
    preview: 'Can we schedule a call to discuss the redesign?',
    time: '5 min ago',
    status: 'online'
  },
  {
    name: 'Mike Chen',
    preview: 'Great work on the latest mockups!',
    time: '2 hours ago',
    status: 'online'
  },
  {
    name: 'Emma Davis',
    preview: 'Payment has been released for Project Aurora.',
    time: '1 day ago',
    status: 'offline'
  },
  {
    name: 'Alex Morgan',
    preview: 'When can you start the new sprint?',
    time: '2 days ago',
    status: 'offline'
  }
]

const badges = [
  { title: 'Excellence', description: 'Maintain 4.8+ rating' },
  { title: 'Fast Response', description: 'Reply within 1 hour' },
  { title: 'Top Rated', description: 'Top 5% talent' }
]

const achievements = [
  { label: 'First Project Completed', date: 'Jan 15, 2024', points: '+100 pts' },
  { label: 'Excellence Badge Earned', date: 'Feb 2, 2024', points: '+500 pts' },
  { label: 'Reached Level 5', date: 'Feb 20, 2024', points: '+250 pts' },
  { label: 'Fast Response Badge Earned', date: 'Mar 5, 2024', points: '+300 pts' },
  { label: 'Reached Level 7', date: 'Mar 18, 2024', points: '+350 pts' }
]

const leaderboard = [
  { name: 'Sarah Chen', points: '8,450', rank: 1 },
  { name: 'Marcus Johnson', points: '7,820', rank: 2 },
  { name: 'Elena Rodriguez', points: '6,940', rank: 3 },
  { name: 'You', points: '2,340', rank: 4 },
  { name: 'David Kim', points: '2,180', rank: 5 }
]

const pointTips = [
  { label: 'Complete a project', points: '+100 pts' },
  { label: 'Get a 5-star review', points: '+50 pts' },
  { label: 'Deliver early', points: '+25 pts' },
  { label: 'Reply within 1 hour', points: '+10 pts' },
  { label: 'Unlock a badge', points: '+500 pts' }
]

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <Header className="dashboard-nav" variant="app" />

      <main className="dashboard-content">
        <section className="page-heading">
          <div>
            <p className="eyebrow">Welcome back! Here&apos;s what&apos;s happening today.</p>
            <h1>Dashboard</h1>
          </div>
          <button className="solid-btn">View Projects</button>
        </section>

        <section className="summary-grid">
          {summaryStats.map((stat) => (
            <article key={stat.title} className="summary-card">
              <div className="summary-icon" aria-hidden="true">
                {stat.icon}
              </div>
              <p className="summary-label">{stat.title}</p>
              <p className="summary-value">{stat.value}</p>
              <p className="summary-detail">{stat.detail}</p>
            </article>
          ))}
        </section>

        <section className="primary-grid">
          <article className="panel">
            <div className="panel-header">
              <div>
                <h2>Active Projects</h2>
                <p>Your ongoing work</p>
              </div>
              <button className="ghost-btn">View All</button>
            </div>

            <div className="project-list">
              {activeProjects.map((project) => (
                <div key={project.name} className="project-card">
                  <div className="project-meta">
                    <div>
                      <h3>{project.name}</h3>
                      <p>{project.client}</p>
                    </div>
                    <span className="project-budget">{project.budget}</span>
                  </div>

                  <div className="project-progress">
                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <div className="project-progress-row">
                      <span>{project.progress}%</span>
                      <span>{project.deadline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className="sidebar-stack">
            <article className="panel">
              <div className="panel-header">
                <div>
                  <h2>Recent Messages</h2>
                  <p>Latest conversations</p>
                </div>
                <button className="ghost-btn">View All</button>
              </div>

              <div className="message-list">
                {recentMessages.map((message) => (
                  <div key={message.name} className="message-card">
                    <div className="avatar" data-status={message.status.charAt(0)}>
                      {message.name.charAt(0)}
                    </div>
                    <div className="message-meta">
                      <div className="message-name">
                        <span>{message.name}</span>
                        <span className="message-time">{message.time}</span>
                      </div>
                      <p>{message.preview}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel progress-panel">
              <div className="panel-header">
                <div>
                  <h2>Your Progress</h2>
                  <p>Level 7 · 2,340 points</p>
                </div>
                <span className="level-pill">Next Level · 660 pts</span>
              </div>

              <div className="progress-track large">
                <div className="progress-fill" style={{ width: '78%' }} />
              </div>

              <div className="badge-grid">
                {badges.map((badge) => (
                  <div key={badge.title} className="badge-card">
                    <span className="badge-dot" />
                    <div>
                      <p className="badge-title">{badge.title}</p>
                      <p className="badge-desc">{badge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="secondary-grid">
          <article className="panel achievements-panel">
            <div className="panel-header">
              <h2>Recent Achievements</h2>
              <p>Keep up the momentum</p>
            </div>

            <div className="achievement-list">
              {achievements.map((item) => (
                <div key={item.label} className="achievement-row">
                  <div>
                    <p className="achievement-label">{item.label}</p>
                    <p className="achievement-date">{item.date}</p>
                  </div>
                  <span className="achievement-points">{item.points}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel leaderboard-panel">
            <div className="panel-header">
              <h2>Leaderboard</h2>
              <p>Top performers this week</p>
            </div>

            <div className="leaderboard-list">
              {leaderboard.map((entry) => (
                <div key={entry.name} className="leaderboard-row" data-rank={entry.rank}>
                  <span className="rank">{entry.rank}</span>
                  <div className="leader-info">
                    <p>{entry.name}</p>
                  </div>
                  <span className="points">{entry.points} pts</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel tips-panel">
            <div className="panel-header">
              <h2>How to Earn Points</h2>
              <p>Complete goals to level up</p>
            </div>

            <div className="tips-list">
              {pointTips.map((tip) => (
                <div key={tip.label} className="tip-row">
                  <p>{tip.label}</p>
                  <span>{tip.points}</span>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

