import PropTypes from 'prop-types'
import MessageBubble from './MessageBubble'

export default function ChatRoom({ thread }) {
  if (!thread) return null

  return (
    <section className="chat-room-panel">
      <header className="chat-room-header">
        <div className="chat-room-person">
          <div className="thread-avatar large">
            <img src={thread.avatar} alt={thread.name} />
            <span className={`status-dot ${thread.status}`} aria-label={thread.status} />
          </div>
          <div>
            <p className="chat-room-name">{thread.name}</p>
            <p className="chat-room-status">{thread.statusLabel}</p>
          </div>
        </div>
        <div className="chat-room-actions">
          <button className="ghost-btn small" type="button">
            View Profile
          </button>
          <button className="ghost-btn small" type="button">
            Schedule Call
          </button>
        </div>
      </header>

      <div className="chat-room-body">
        {thread.messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        <div className="typing-indicator">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  )
}

ChatRoom.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    statusLabel: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        isOwn: PropTypes.bool
      })
    )
  })
}


