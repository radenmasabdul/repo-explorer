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

## 🌍 Live Demo : [Repository Explorer](https://repo-explorer-self.vercel.app/)

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

## 🧠 Technical Decisions

### TanStack Query for Server State

TanStack Query is used to manage data from the GitHub REST API, including fetching, caching, loading states, error states, and infinite pagination.

**Trade-off:** It introduces additional dependencies and abstractions compared to using `useEffect` + `useState`, but makes server state management more structured and reduces boilerplate.

### Debounced Search

The search function uses debouncing to reduce the number of requests while the user is typing.

**Trade-off:** Search results are not updated immediately with every character typed, but this approach helps reduce unnecessary requests and is more efficient regarding GitHub's API rate limits.

### Infinite Scroll

The repository list uses infinite scroll to load data progressively without manual pagination.

**Trade-off:** Provides a more seamless browsing experience but requires additional handling for the Intersection Observer, loading states, and pagination APIs.

### Zustand for Global State

Zustand is used for global state such as favorites, alert notifications, themes, and repository-related state.

**Trade-off:** It requires a separate store, but its lightweight and simple API makes it easier to use compared to more complex state management solutions.

### Local Storage for Favorites

Favorite repositories are stored using Zustand persistence so that the data remains available after the page is refreshed.

**Trade-off:** Data is stored only locally in the browser and is not synchronized across devices, but this solution suffices for the application's needs without requiring an additional backend.

## 🔮 Future Improvements

🌐 **More GitHub API Endpoints** — Integrate various GitHub endpoints to explore users, organizations, repositories, branches, commits, issues, pull requests, releases, contributors, topics, languages, and repository activity.

👤 **User & Organization Explorer** — Add pages to view user or organization profiles, along with their repositories and activity.
  
📦 **Repository Insights** — Display more comprehensive information such as branches, commits, contributors, releases, languages, issues, and pull requests.
  
🔍 **Advanced Search** — Enhance search capabilities with combined filters based on repository, user, language, topic, stars, forks, and update timestamps.
  
🔗 **URL State** — Persist search queries, sorting, and filters in the URL so the state can be shared via links and maintained upon page refresh.
  
🔐 **GitHub Authentication** — Implement GitHub authentication to increase API rate limits and access endpoints requiring authentication.
  
🧪 **More Test Coverage** — Add integration and component tests for repository features, search, infinite scroll, favorites, and API interactions.
  
⚡ **Performance Optimization** — Optimize caching, rendering, image loading, and request management when handling large volumes of GitHub data.
  
♿ **Accessibility Improvements** — Improve keyboard navigation, semantic HTML, ARIA attributes, and accessibility for interactive components.

## ⏱️ Estimated Development Time

Approximately **10 hours**, including:

* Project setup and initial architecture
* GitHub API integration
* Repository search and debounced input
* Sorting and infinite scroll
* Repository detail page
* Favorites with localStorage persistence
* Loading, empty, and error states
* Responsive UI implementation
* Global alert and theme handling
* Unit testing
* Final refactoring and documentation

## 👨‍💻 Author

**radenmasabdul**
- GitHub: [@radenmasabdul](https://github.com/radenmasabdul)
