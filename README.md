# TrabahoHub - Hire Experts. Work Smarter.

A modern freelancing platform built with React and Vite that connects freelancers with clients worldwide.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Component Architecture](#component-architecture)
- [Available Pages](#available-pages)
- [Styling](#styling)
- [Development](#development)

## ✨ Features

- **User Dashboard** - Track active projects, earnings, messages, and gamification points
- **Project Management** - Post jobs, browse opportunities, and manage proposals
- **Real-time Messaging** - Chat with clients and freelancers
- **Gamification System** - Earn points, badges, and level up
- **User Profiles** - Showcase portfolio, skills, and achievements
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Sticky Navigation** - Header stays visible while scrolling for easy navigation

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Icons:** React Icons (Feather Icons)
- **Styling:** CSS3 (Custom styling with CSS modules)
- **State Management:** React Hooks
- **Code Quality:** ESLint

## 📁 Project Structure

```
Hire-Experts-Work-Smarter/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # Reusable components
│   │   ├── layout/        # Layout components
│   │   │   ├── Header.jsx          # Global navigation header
│   │   │   └── Header.css
│   │   └── messaging/     # Messaging components
│   │       ├── ChatList.jsx
│   │       └── ChatRoom.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Landing page
│   │   ├── Dashboard.jsx  # User dashboard
│   │   ├── Messaging.jsx  # Messages page
│   │   ├── Gamification.jsx
│   │   ├── Profile.jsx
│   │   ├── Settings.jsx
│   │   ├── JobPost.jsx    # Create job posting
│   │   └── JobDetails.jsx # View job details
│   ├── styles/            # Global styles
│   ├── App.jsx            # Root component
│   ├── App.css
│   └── main.jsx           # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
cd "d:\SCHOOL YEAR 2025-2026\FIRST SEM THIRD YEAR\SYSTEM ANALYSIS AND DESIGN\Hire-Experts-Work-Smarter"
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🧩 Component Architecture

### Header Component (Reusable)

The `Header` component is a **reusable component** that is imported and used across all pages.

**Location:** `src/components/layout/Header.jsx`

**Usage Example:**
```jsx
import Header from '../components/layout/Header'

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <Header className="dashboard-nav" variant="app" />
      {/* Page content */}
    </div>
  )
}
```

**Props:**
- `className` (string, optional) - Additional CSS classes
- `variant` (string, optional) - Either 'landing' or 'app' (default: 'landing')

**Features:**
- ✅ Sticky positioning - stays at top while scrolling
- ✅ Responsive design - adapts to mobile devices
- ✅ Two variants: Landing page and App navigation
- ✅ Icon-based navigation with labels
- ✅ Active state highlighting

## 📄 Available Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero section and features |
| Dashboard | `/dashboard` | User dashboard with stats and recent activity |
| Projects | `/projects` | Browse and post projects |
| Messages | `/messaging` | Real-time chat with other users |
| Gamification | `/gamification` | View points, badges, and leaderboard |
| Profile | `/profile` | User profile with portfolio and skills |
| Settings | `/settings` | Account settings |
| Job Post | `/job-post` | Create new job posting |
| Job Details | `/job/:id` | View specific job details |

## 🎨 Styling

### Design System

- **Primary Color:** #111 (Black)
- **Background:** #f8f8f8 (Light Gray)
- **Border Radius:** 8-14px (Rounded corners)
- **Transitions:** 0.2s ease (Smooth animations)

### CSS Architecture

- **No top padding** - Pages start from the very top for sticky header
- **Consistent spacing** - Uses standardized gap and padding values
- **Responsive breakpoints:**
  - Desktop: 1024px+
  - Tablet: 640px - 1024px
  - Mobile: < 640px

### Key CSS Features

- Sticky header with `position: sticky`
- Flexbox and Grid layouts
- Custom hover states
- Mobile-first responsive design

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Code Style

- **Component Pattern:** Functional components with hooks
- **Export Pattern:** Default exports for components
- **Props:** Destructured with default values
- **CSS:** Component-scoped CSS files

### Best Practices

1. **Reusable Components** - Create components in `src/components/` for reusability
2. **Import Order** - External libraries → Local components → Styles
3. **Consistent Naming** - PascalCase for components, kebab-case for CSS files
4. **One Component Per File** - Each component in its own file

## 🌟 Key Features Explained

### Sticky Header
The header uses `position: sticky` and stays at the top of the viewport while scrolling, providing easy access to navigation at all times.

### No Top Padding
All pages have `padding: 0 48px 64px` to ensure the header sits flush at the top of the browser window.

### Component Reusability
The Header component is defined once in `src/components/layout/Header.jsx` and imported into all pages, following the DRY (Don't Repeat Yourself) principle.

### Responsive Navigation
On mobile devices (< 640px), the navigation text labels hide and only icons are shown to save space.

## 📝 License

This project is created for educational purposes as part of the System Analysis and Design course.

## 👥 Contributing

This is a school project. For questions or suggestions, please contact the development team.

---

**Built with ❤️ using React + Vite**