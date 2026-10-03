# JobSync Frontend

React + TypeScript frontend for **JobSync**, a job board platform with a LinkedIn-style permission system. Any user can create a company and post jobs. There is no admin role, only ownership-based access control.

This app consumes the [JobSync Backend API](https://github.com/anjumhere/Jobsync-Backend).

> Status: work in progress.

## Tech Stack

| Layer        | Technology     |
| ------------ | -------------- |
| Framework    | React          |
| Language     | TypeScript     |
| Build tool   | Vite           |
| Styling      | Tailwind CSS   |
| Routing      | React Router   |
| HTTP client  | Axios          |
| Server state | TanStack Query |

## Features (planned)

- Browse, search and filter jobs with pagination
- View job and company details
- Register, login and logout (JWT in httpOnly cookies)
- Save jobs and apply with a cover note
- Track and withdraw applications
- Create and manage companies
- Post, edit and toggle jobs
- Review applications and update their status

## Getting Started

```bash
# Clone the repository
git clone https://github.com/anjumhere/Jobsync-Frontend.git
cd Jobsync-Frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app runs at `http://localhost:5173`.

## Environment Variables

Create a `.env` file in the project root:

```
VITE_API_URL=https://jobsyc.bonto.run/api/v1
```

For local backend development, point it at your local server instead, for example `http://localhost:8000/api/v1`. The backend's `CORS_ORIGIN` must match the frontend URL, and credentials must be allowed so cookies work.

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project Structure

```
src/
├── components/   # Shared UI components
├── features/     # Feature-based modules (auth, jobs, companies, applications)
├── lib/          # API client and helpers
├── types/        # TypeScript types mirroring backend models
├── App.tsx
└── main.tsx
```

## Author

**Anjum**
GitHub: [@anjumhere](https://github.com/anjumhere)
