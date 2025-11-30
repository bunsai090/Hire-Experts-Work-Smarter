import Header from '../components/layout/Header'
import './Gamification.css'

const badges = [
  { title: 'Excellence', description: 'Maintain 4.8+ rating', progress: 1 },
  { title: 'Fast Response', description: 'Reply within 1 hour', progress: 1 },
  { title: 'Completion Master', description: 'Complete 100 projects', progress: 1 },
  { title: 'Client Favorite', description: 'Get 50 5-star reviews', progress: 0.78 },
  { title: 'Top Earner', description: 'Earn $100k total', progress: 0.45 },
  { title: 'Speed Demon', description: 'Deliver 20 projects early', progress: 0.6 },
  { title: 'Specialist', description: 'Complete 50 projects in one category', progress: 0.34 },
  { title: 'Rising Star', description: 'Reach Level 10', progress: 0.7 }
]

const leaderboard = [
  { name: 'Sarah Chen', points: '8,450' },
  { name: 'Marcus Johnson', points: '7,820' },
  { name: 'Elena Rodriguez', points: '6,940' },
  { name: 'You', points: '2,340', highlight: true },
  { name: 'David Kim', points: '2,180' }
]

const achievements = [
  { title: 'First Project Completed', date: 'Jan 15, 2024', points: '+100 pts' },
  { title: 'Excellence Badge Earned', date: 'Feb 2, 2024', points: '+500 pts' },
  { title: 'Reached Level 5', date: 'Feb 20, 2024', points: '+250 pts' },
  { title: 'Fast Response Badge Earned', date: 'Mar 5, 2024', points: '+300 pts' },
  { title: 'Reached Level 7', date: 'Mar 18, 2024', points: '+350 pts' }
]

const earnPoints = [
  { label: 'Complete a project', value: '+100 pts' },
  { label: 'Get a 5-star review', value: '+50 pts' },
  { label: 'Deliver early', value: '+25 pts' },
  { label: 'Reply within 1 hour', value: '+10 pts' },
  { label: 'Unlock a badge', value: '+500 pts' }
]

export default function Gamification() {
  return (
    <div className="gamification-page">
      <Header className="dashboard-nav" variant="app" />

      <main className="gamification-content">
        <section className="level-panel">
          <div>
            <p className="eyebrow">Track your progress and earn rewards</p>
            <h1>Level 7</h1>
            <p className="level-points">2,340 total points</p>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '78%' }} />
            </div>
            <p className="next-level">660 points to next level</p>
          </div>
          <div className="level-icon" aria-hidden="true">
            🏆
          </div>
        </section>

        <section className="gamification-grid">
          <article className="panel badges-panel">
            <h2>Badges</h2>
            <div className="badge-grid">
              {badges.map((badge) => (
                <div key={badge.title} className={`badge-card ${badge.progress === 1 ? 'earned' : ''}`}>
                  <div className="badge-head">
                    <span className="badge-icon">★</span>
                    <div>
                      <p className="badge-title">{badge.title}</p>
                      <p className="badge-desc">{badge.description}</p>
                    </div>
                  </div>
                  {badge.progress < 1 ? (
                    <div className="progress-track small">
                      <div className="progress-fill" style={{ width: `${badge.progress * 100}%` }} />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </article>

          <article className="panel leaderboard-panel">
            <h2>Leaderboard</h2>
            <div className="leaderboard-list">
              {leaderboard.map((entry, index) => (
                <div key={entry.name} className={`leaderboard-row ${entry.highlight ? 'highlight' : ''}`}>
                  <span className="rank-pill">{index + 1}</span>
                  <span>{entry.name}</span>
                  <strong>{entry.points} pts</strong>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="achievements-grid">
          <article className="panel achievements-panel">
            <h2>Recent Achievements</h2>
            <div className="achievement-list">
              {achievements.map((item) => (
                <div key={item.title} className="achievement-row">
                  <div>
                    <p className="achievement-title">{item.title}</p>
                    <p className="achievement-date">{item.date}</p>
                  </div>
                  <span>{item.points}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel earn-panel">
            <h2>How to Earn Points</h2>
            <div className="earn-list">
              {earnPoints.map((item) => (
                <div key={item.label} className="earn-row">
                  <p>{item.label}</p>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}


