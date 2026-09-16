# 🔍 Repository Explorer — GitHub Repository Search & Discovery

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" alt="React" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" alt="TypeScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" width="50" alt="Vite" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="50" alt="Tailwind CSS" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg" width="50" alt="React Router" />
  <img src="https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg" width="50" alt="TanStack Query" />
  <img src="https://raw.githubusercontent.com/pmndrs/zustand/main/examples/demo/public/favicon.ico" width="50" alt="Zustand" />
  <img src="https://cdn.simpleicons.org/axios" width="50" alt="Axios" />
  <img src="https://ui.shadcn.com/favicon.ico" width="50" alt="Shadcn UI" />
  <img src="https://lucide.dev/logo.light.svg" width="50" alt="Lucide React" />
  <img src="https://vitest.dev/logo.svg" width="50" alt="Vitest" />
</p>

Repository Explorer is a modern web application built for discovering and exploring GitHub repositories. The platform enables users to search repositories, sort and filter results, view detailed repository information, and save favorite repositories for quick access through a responsive and user-friendly interface.

## 🚀 Key Features

* 🔍 Search GitHub repositories with debounced search
* 📊 Sort repositories by stars, forks, and recently updated
* ↕️ Sort results in ascending or descending order
* ♾️ Infinite scroll for seamless repository browsing
* 📄 View detailed information for individual repositories
* ❤️ Save and manage favorite repositories
* 💾 Persist favorite repositories using localStorage
* ⚡ Fast data fetching and caching with TanStack Query
* 🌐 GitHub REST API integration using Axios
* 🗂️ Client-side routing with React Router
* 🧠 Lightweight global state management using Zustand
* 🧩 Modern and accessible UI components built with Shadcn UI
* 🎨 Clean and responsive interface built with Tailwind CSS
* 📱 Fully responsive design for desktop, tablet, and mobile devices
* ⏳ Loading, empty, and error states for better user experience
* 🧪 Unit testing for state management and custom hooks with Vitest

## 🛠️ Tech Stack

* **Library**: React 19
* **Language**: TypeScript
* **Build Tool**: Vite
* **Styling**: Tailwind CSS v4
* **UI Components**: Shadcn/UI + Base UI
* **State Management**: Zustand
* **Data Fetching & Caching**: TanStack Query
* **HTTP Client**: Axios
* **Routing**: React Router DOM v7
* **Icons**: Lucide React
* **Utilities**: Class Variance Authority, tw-animate-css
* **Testing**: Vitest + Testing Library
* **Code Quality**: ESLint + TypeScript ESLint

## 📋 Prerequisites

Before running Repository Explorer locally, make sure you have installed:

* **Node.js** v18 or higher
* **npm**
* **Git**
* **Modern Browser** (Chrome, Edge, Firefox)
* **GitHub Public REST API** access (no authentication required, but subject to rate limits)

## ⚡ Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/radenmasabdul/repo-explorer.git
cd repo-explorer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

Create a `.env` file in the root directory and add the following variable:

```bash
VITE_API_BASE_URL=your-api-base-url
```

This variable is used as the base URL for all GitHub REST API requests via Axios.

### 4. Start Development Server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

## 📁 Project Structure

```text
repo-explorer/
├── public/                              # Static assets
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/                          # Application assets
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/                      # Shared and reusable components
│   │   ├── common/                      # Application-specific reusable components
│   │   │   ├── Alert.tsx
│   │   │   ├── ApiState.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── CardSkeleton.tsx
│   │   │   ├── Filter.tsx
│   │   │   ├── IntinityScroll.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── PageState.tsx
│   │   │   └── ResultCount.tsx
│   │   └── ui/                          # Shadcn/UI components
│   ├── constants/                       # Application constants
│   │   └── index.ts
│   ├── features/                        # Feature-based modules
│   │   ├── favorites/                   # Favorite repositories feature
│   │   │   └── Favorite.tsx
│   │   └── repositories/                # Repository exploration feature
│   │       ├── Repository.tsx
│   │       ├── components/              # Repository-specific components
│   │       │   ├── RepoCard.tsx
│   │       │   └── RepoContent.tsx
│   │       ├── detail/                  # Repository detail feature
│   │       │   └── RepositoryDetail.tsx
│   │       ├── hooks/                   # Repository-specific hooks
│   │       │   ├── use-detail.ts
│   │       │   └── use-repo.ts
│   │       └── types/                   # Repository-specific types
│   │           └── index.ts
│   ├── hooks/                           # Global custom hooks
│   │   ├── use-debounce.ts
│   │   ├── use-favorite.ts
│   │   ├── use-infinity-scroll.ts
│   │   └── use-repositories.ts
│   ├── lib/                             # Shared libraries and utilities
│   │   └── utils.ts
│   ├── pages/                           # Route-level pages
│   │   ├── favorites/
│   │   │   └── index.tsx
│   │   └── repositories/
│   │       ├── detail/
│   │       │   └── index.tsx
│   │       └── index.tsx
│   ├── routes/                          # Application routing
│   │   └── AppRouter.tsx
│   ├── services/                        # API services
│   │   ├── api-client.ts
│   │   └── github-service.ts
│   ├── stores/                          # Zustand global state stores
│   │   ├── alert-store.ts
│   │   ├── favorite-store.ts
│   │   ├── repo-store.ts
│   │   └── theme-store.ts
│   ├── styles/                          # Global styles
│   │   └── index.css
│   ├── tests/                           # Unit and component tests
│   │   ├── hooks/
│   │   │   ├── use-debounce.test.ts
│   │   │   └── use-favorite.test.ts
│   │   ├── stores/
│   │   │   ├── alert-store.test.ts
│   │   │   ├── favorite-store.test.ts
│   │   │   ├── repo-store.test.ts
│   │   │   └── theme-store.test.ts
│   │   ├── setup.ts
│   │   └── testing.test.ts
│   ├── types/                           # Shared TypeScript types
│   │   ├── api-param.ts
│   │   ├── components.ts
│   │   ├── github.ts
│   │   └── infinity.ts
│   ├── App.tsx                          # Root application component
│   └── main.tsx                         # Application entry point
├── .env                                 # Environment variables
├── .gitignore                           # Git ignored files and directories
├── components.json                      # Shadcn/UI configuration
├── eslint.config.js                    # ESLint configuration
├── index.html                           # Application HTML entry point
├── package-lock.json                    # Locked dependency versions
├── package.json                         # Project dependencies and scripts
├── README.md                            # Project documentation
├── tsconfig.app.json                    # TypeScript application configuration
├── tsconfig.json                        # TypeScript configuration
├── tsconfig.node.json                   # TypeScript Node.js configuration
├── vite.config.ts                       # Vite configuration
└── vitest.config.ts                     # Vitest configuration
```
## 🌍 Live Demo : [Repository Explorer](https://repo-explorer-self.vercel.app/)

## 👨‍💻 Author

**radenmasabdul**
- GitHub: [@radenmasabdul](https://github.com/radenmasabdul)
