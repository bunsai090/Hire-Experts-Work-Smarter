# Pages Folder Structure

This folder contains all the page components for the application. Each page is organized in its own folder with a clean, easy-to-understand structure.

## Structure

Each page folder contains:
- **[PageName].jsx** - The main component file
- **[PageName].css** - The styles specific to this page
- **index.js** - Barrel export for cleaner imports

## Pages

```
pages/
├── Auth/               # Authentication layout component
│   ├── AuthLayout.jsx
│   ├── AuthLayout.css
│   └── index.js
├── Dashboard/          # Main dashboard page
│   ├── Dashboard.jsx
│   ├── Dashboard.css
│   └── index.js
├── Gamification/       # Gamification features page
│   ├── Gamification.jsx
│   ├── Gamification.css
│   └── index.js
├── Home/               # Landing/home page
│   ├── Home.jsx
│   ├── Home.css
│   └── index.js
├── JobDetails/         # Job details view page
│   ├── JobDetails.jsx
│   ├── JobDetails.css
│   └── index.js
├── JobPost/            # Create new job post page
│   ├── JobPost.jsx
│   ├── JobPost.css
│   └── index.js
├── Login/              # Login page
│   ├── Login.jsx
│   ├── Login.css
│   └── index.js
├── Messaging/          # Messaging/chat page
│   ├── Messaging.jsx
│   ├── Messaging.css
│   └── index.js
├── Profile/            # User profile page
│   ├── Profile.jsx
│   ├── Profile.css
│   └── index.js
├── Register/           # Registration page
│   ├── Register.jsx
│   ├── Register.css
│   └── index.js
└── Settings/           # Settings page
    ├── Settings.jsx
    ├── Settings.css
    └── index.js
```

## Usage

Import pages in your components using the clean folder path:

```javascript
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
```

The `index.js` file in each folder automatically exports the main component, making imports cleaner and more maintainable.

## Benefits

✅ **Easy to Navigate** - Each page has its own dedicated folder
✅ **Colocation** - Related files (JSX and CSS) are kept together
✅ **Scalable** - Easy to add new pages or additional files (tests, utils, etc.)
✅ **Clean Imports** - Barrel exports make import statements simpler
✅ **Maintainable** - Clear structure makes it easy for new developers to understand
