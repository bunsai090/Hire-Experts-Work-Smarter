import PropTypes from 'prop-types'

export default function MessageBubble({ message }) {
  if (!message) return null

  return (
    <div className={`message-bubble ${message.isOwn ? 'is-own' : ''}`}>
      <div className="bubble-body">
        <p>{message.content}</p>
        {message.attachments?.length ? (
          <div className="bubble-attachments">
            {message.attachments.map((file) => (
              <span key={file}>{file}</span>
            ))}
          </div>
        ) : null}
      </div>
      <span className="bubble-time">{message.time}</span>
    </div>
  )
}

MessageBubble.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    time: PropTypes.string,
    isOwn: PropTypes.bool,
    attachments: PropTypes.arrayOf(PropTypes.string)
  })
}


