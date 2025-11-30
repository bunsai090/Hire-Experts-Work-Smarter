import Header from '../components/layout/Header'
import './JobPost.css'

const suggestedSkills = ['React', 'TypeScript', 'Node.js', 'UI/UX Design', 'Figma', 'Python', 'AWS']

export default function JobPost() {
  return (
    <div className="job-post-page">
      <Header className="dashboard-nav" variant="app" />

      <main className="job-post-content">
        <header className="job-post-heading">
          <div>
            <p className="eyebrow">Fill in the details to find the perfect freelancer</p>
            <h1>Post a New Job</h1>
          </div>
          <div className="job-post-actions">
            <button className="ghost-btn" type="button">
              Save as Draft
            </button>
            <button className="solid-btn" type="button">
              Post Job
            </button>
          </div>
        </header>

        <section className="job-post-grid">
          <div className="job-form-card">
            <section>
              <h2>Job Details</h2>
              <div className="form-grid">
                <label>
                  Job Title
                  <input type="text" placeholder="e.g., Build a responsive e-commerce website" />
                </label>
                <label>
                  Category
                  <select defaultValue="">
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option>Web Development</option>
                    <option>Design</option>
                    <option>Writing</option>
                  </select>
                </label>
              </div>
              <label className="full-width">
                Description
                <textarea placeholder="Describe your project in detail..." rows={5} />
              </label>
            </section>

            <section>
              <h2>Required Skills</h2>
              <div className="skills-input">
                <input type="text" placeholder="Add a skill..." />
                <button className="solid-btn" type="button">
                  Add
                </button>
              </div>
              <div className="suggested-skills">
                {suggestedSkills.map((skill) => (
                  <button key={skill} type="button">
                    + {skill}
                  </button>
                ))}
              </div>
            </section>

            <section className="budget-grid">
              <label>
                Budget
                <input type="number" defaultValue="5000" />
              </label>
              <label>
                Currency
                <select defaultValue="USD">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </label>
              <label>
                Project Duration
                <select defaultValue="Less than 1 week">
                  <option>Less than 1 week</option>
                  <option>1-4 weeks</option>
                  <option>1-3 months</option>
                </select>
              </label>
              <label>
                Experience Level
                <select defaultValue="Entry Level">
                  <option>Entry Level</option>
                  <option>Intermediate</option>
                  <option>Expert</option>
                </select>
              </label>
            </section>

            <section>
              <h2>Attachments</h2>
              <div className="attachment-drop">
                <p>Drop files here or click to upload</p>
                <span>PDF, DOC, PNG, JPG up to 10MB</span>
              </div>
            </section>
          </div>

          <aside className="preview-card">
            <div className="preview-header">
              <h2>Preview</h2>
              <p>Your job title will appear here</p>
            </div>
            <dl>
              <div>
                <dt>Budget</dt>
                <dd>$0 USD</dd>
              </div>
              <div>
                <dt>Duration</dt>
                <dd>Not specified</dd>
              </div>
              <div>
                <dt>Skills</dt>
                <dd>No skills added</dd>
              </div>
            </dl>
            <button className="solid-btn" type="button">
              Post Job
            </button>
            <button className="ghost-btn" type="button">
              Save as Draft
            </button>
          </aside>
        </section>
      </main>
    </div>
  )
}


