# Abra Specialist

Technical support and customer service management system developed with React, TypeScript and Vite.

## Description

Abra Specialist is a modern web application designed for specialists and technical support agents. It allows managing support tickets, communicating with customers through real-time chat and monitoring team performance.

## Main Features

### 🔐 Authentication and Security
- Secure login system with credential validation
- Session management with Redux Toolkit
- Route protection with AuthGuard
- Data persistence in localStorage

### 📊 Agent Dashboard
- Personalized agent profile with detailed information
- Performance metrics and statistics
- Online/offline status
- Specialties and shift information

### 🎫 Ticket Management
- Ticket list organized by application (Telegram, Instagram, Docker, WhatsApp, GitHub)
- Ticket filtering and search
- Ticket status (open, pending)
- Detailed customer and date information

### 💬 Chat System
- Real-time chat interface with customers
- Sidebar with customer information
- Message history
- Integrated support tools

### 🎨 User Interface
- Modern and responsive design with Tailwind CSS
- Intuitive navigation with sidebar
- Consistent iconography with React Icons
- Professional visual theme

## Technologies Used

### Frontend
- **React 19.1.0** - User interface library
- **TypeScript 5.8.3** - Static typing
- **Vite 6.3.5** - Build tool
- **React Router DOM 7.6.2** - Routing
- **Redux Toolkit 2.8.2** - State management
- **React Icons 5.5.0** - Iconography

### Styles and UI
- **Tailwind CSS 4.1.10** - Utility CSS framework
- **React Virtuoso 4.13.0** - Virtualization for large lists

### Development
- **ESLint 9.25.0** - Code linting
- **TypeScript ESLint 8.30.1** - TypeScript linting rules

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── chat/           # Chat system components
│   ├── dashboard/      # Dashboard components
│   ├── login/          # Authentication components
│   ├── nav-bar/        # Main navigation
│   ├── sidebar/        # Sidebar
│   └── tickets/        # Ticket management components
├── guards/             # Route protection
├── models/             # TypeScript interfaces and types
├── pages/              # Application pages
│   ├── private/        # Protected pages
│   └── public/         # Public pages
├── redux/              # Global state with Redux
├── services/           # Services and APIs
├── themes/             # CSS styles and configuration
└── utilities/          # Utilities and helpers
```

## Installation and Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd abra-specialist
```

2. Install dependencies:
```bash
npm install
```

3. Configure Tailwind CSS:
```bash
npm run tailwind:build
```

4. Start the development server:
```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Builds the application for production
- `npm run lint` - Runs the linter
- `npm run preview` - Previews production build
- `npm run tailwind:watch` - Watches Tailwind CSS changes
- `npm run tailwind:build` - Builds Tailwind styles

## Usage

### System Access
1. Navigate to the login page
2. Enter your specialist credentials
3. Access the main dashboard

### Ticket Management
1. Go to the "Tickets" section from navigation
2. Filter tickets by name or application
3. Click on a ticket to open chat with the customer

### Customer Chat
1. Select a ticket from the list
2. Use the chat interface to communicate
3. Access customer information in the sidebar

## Technical Features

### Global State
- Centralized management with Redux Toolkit
- Automatic persistence in localStorage
- Complete typing with TypeScript

### Routing
- Protected routes with AuthGuard
- Programmatic navigation
- Not found route handling

### Performance
- Lazy loading of components
- Virtualization for large lists
- Re-render optimization

## License

This project is under the MIT License. See the `LICENSE` file for more details.

## Contact

For technical support or questions about the project, contact the development team.
