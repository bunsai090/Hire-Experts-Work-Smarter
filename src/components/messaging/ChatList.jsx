import PropTypes from 'prop-types'

export default function ChatList({ threads = [], activeId }) {
  const unreadTotal = threads.filter((thread) => thread.unreadCount > 0).length

  return (
    <aside className="chat-list-panel">
      <div className="chat-list-header">
        <div>
          <p className="eyebrow">Inbox</p>
          <h2>Messages</h2>
        </div>
        <span className="pill">{unreadTotal} new</span>
      </div>

      <label className="chat-search" htmlFor="chat-search">
        <input id="chat-search" placeholder="Search messages..." readOnly />
        <span aria-hidden="true">⌕</span>
      </label>

      <div className="chat-thread-list">
        {threads.map((thread) => (
          <button
            type="button"
            key={thread.id}
            className={`chat-thread ${thread.id === activeId ? 'is-active' : ''}`}
          >
            <div className="thread-avatar">
              <img src={thread.avatar} alt={thread.name} />
              <span className={`status-dot ${thread.status}`} aria-label={thread.status} />
            </div>

            <div className="chat-thread-meta">
              <div className="chat-thread-row">
                <p>{thread.name}</p>
                <span>{thread.time}</span>
              </div>
              <p className="chat-thread-preview">{thread.preview}</p>
            </div>

            {thread.unreadCount ? (
              <span className="unread-pill" aria-label={`${thread.unreadCount} unread messages`}>
                {thread.unreadCount}
              </span>
            ) : null}
          </button>
        ))}
      </div>
    </aside>
  )
}

ChatList.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['online', 'away', 'offline']),
      unreadCount: PropTypes.number,
      avatar: PropTypes.string.isRequired
    })
  ),
  activeId: PropTypes.string
}


