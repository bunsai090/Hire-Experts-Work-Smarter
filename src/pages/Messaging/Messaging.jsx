import ChatList from '../../components/messaging/ChatList'
import ChatRoom from '../../components/messaging/ChatRoom'
import Header from '../../components/layout/Header'
import './Messaging.css'

const chatThreads = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    preview: 'Can we schedule a call to discuss the redesign?',
    time: '5 min ago',
    status: 'online',
    statusLabel: 'Online',
    unreadCount: 2,
    avatar: 'https://i.pravatar.cc/80?img=47'
  },
  {
    id: 'mike-chen',
    name: 'Mike Chen',
    preview: 'Great work on the latest mockups!',
    time: '2 hours ago',
    status: 'online',
    statusLabel: 'Online',
    unreadCount: 0,
    avatar: 'https://i.pravatar.cc/80?img=12'
  },
  {
    id: 'emma-davis',
    name: 'Emma Davis',
    preview: 'Payment has been released for Project Aurora.',
    time: '1 day ago',
    status: 'away',
    statusLabel: 'Away',
    unreadCount: 0,
    avatar: 'https://i.pravatar.cc/80?img=32'
  },
  {
    id: 'alex-morgan',
    name: 'Alex Morgan',
    preview: 'When can you start the new sprint?',
    time: '2 days ago',
    status: 'offline',
    statusLabel: 'Offline',
    unreadCount: 1,
    avatar: 'https://i.pravatar.cc/80?img=5'
  }
]

const activeThread = {
  ...chatThreads[0],
  messages: [
    {
      id: 'msg-1',
      content: "Hi! I reviewed your portfolio and I'm impressed with your work.",
      time: '10:30 AM',
      isOwn: false
    },
    {
      id: 'msg-2',
      content: "Thank you! I'd love to hear more about your project.",
      time: '10:32 AM',
      isOwn: true
    },
    {
      id: 'msg-3',
      content:
        'We need a complete redesign of our e-commerce platform. Can we schedule a call to discuss the details?',
      time: '10:35 AM',
      isOwn: false
    },
    {
      id: 'msg-4',
      content: "Absolutely! I'm available tomorrow afternoon. What time works best for you?",
      time: '10:38 AM',
      isOwn: true
    },
    {
      id: 'msg-5',
      content: 'Perfect! How about 2 PM EST?',
      time: '10:40 AM',
      isOwn: false
    }
  ]
}

export default function Messaging() {
  return (
    <div className="messaging-page">
      <Header className="messaging-nav" variant="app" />

      <main className="messaging-content">
        <section className="messaging-layout">
          <ChatList threads={chatThreads} activeId={activeThread.id} />
          <div className="chat-room-wrapper">
            <div className="chat-room-heading">
              <div>
                <h1>Messages</h1>
                <p className="eyebrow">Stay connected</p>
              </div>
              <button className="ghost-btn">New Message</button>
            </div>
            <ChatRoom thread={activeThread} />
          </div>
        </section>
      </main>
    </div>
  )
}

