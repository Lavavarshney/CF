```markdown
# CodeZen Investment Platform

CodeZen is a comprehensive investment platform that bridges the gap between traditional mutual funds and modern cryptocurrencies, offering AI-driven insights, automated portfolio management, and educational resources. This README provides detailed information about the project structure, setup instructions, and environment configuration.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Directory Structure](#directory-structure)
4. [Setup Instructions](#setup-instructions)
5. [Environment Variables](#environment-variables)
6. [API Endpoints](#api-endpoints)
7. [Contributing](#contributing)
8. [License](#license)

---

## Project Overview

CodeZen is designed to simplify investment strategies for both beginners and experienced investors. The platform integrates:
- Mutual fund analysis using historical NAV data.
- Cryptocurrency tracking with real-time price updates.
- AI-powered reports and portfolio recommendations.
- Educational resources like videos and articles.

The project consists of two main components:
- **Backend**: Built with FastAPI, MongoDB, and Python libraries for data processing.
- **Frontend**: Built with React, Vite, and TailwindCSS for a responsive and interactive user interface.

---

## Features

### Backend Features
- Fetch mutual fund schemes and details using `mftool`.
- Calculate risk metrics (volatility, Sharpe ratio, etc.) for mutual funds.
- Perform Monte Carlo simulations for future predictions.
- User authentication and portfolio management via MongoDB.

### Frontend Features
- Interactive dashboards for mutual funds and cryptocurrencies.
- AI-driven analysis and reports for individual assets and portfolios.
- Educational hub with curated content (videos, articles).
- Responsive design with TailwindCSS.

---

## Directory Structure

```
anamiiikka-codezen/
├── vercel.json                # Vercel deployment configuration
├── backend/
│   ├── Readme.md              # Backend-specific documentation
│   ├── main.py                # Main FastAPI application
│   ├── package.json           # Node.js dependencies (e.g., Plotly)
│   ├── requirements.txt       # Python dependencies
│   ├── .gitignore             # Git ignore rules
│   └── __pycache__/          # Python cache files
└── frontend/
    ├── README.md              # Frontend-specific documentation
    ├── eslint.config.js       # ESLint configuration
    ├── index.html             # Entry point for the frontend
    ├── package-lock.json      # npm lock file
    ├── package.json           # npm dependencies
    ├── postcss.config.cjs     # PostCSS configuration
    ├── tailwind.config.js     # TailwindCSS configuration
    ├── vite.config.js         # Vite configuration
    ├── .gitignore             # Git ignore rules
    ├── public/                # Static assets
    └── src/
        ├── App.jsx            # Main React application
        ├── index.css          # Global styles
        ├── main.jsx           # React entry point
        ├── style.js           # Shared styles
        ├── EducationHub/      # Educational content module
        ├── assets/            # Image and asset files
        ├── components/        # Reusable React components
        ├── constants/         # Shared constants
        └── context/           # React context providers
```

---

## Setup Instructions

### Prerequisites
- Python 3.9+
- Node.js 18+
- MongoDB instance
- API keys for CoinGecko and Groq AI

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Create a `.env` file in the `backend` directory (see [Environment Variables](#environment-variables)).
4. Start the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend` directory (see [Environment Variables](#environment-variables)).
4. Start the Vite development server:
   ```bash
   npm run dev
   ```

---

## Environment Variables

### Backend (.env in `backend/`)
```env
# MongoDB Connection
MONGODB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/codezen

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173

# Auth0 Configuration
AUTH0_DOMAIN=your-auth0-domain.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
AUTH0_AUDIENCE=https://your-api-audience
AUTH0_ISSUER_BASE_URL=https://your-auth0-domain.auth0.com/

# CoinGecko API Key
COINGECKO_API_KEY=your-coingecko-api-key

# Groq AI API Key
GROQ_API_KEY=your-groq-api-key
```

### Frontend (.env in `frontend/`)
```env
# API Base URL
VITE_API_URL=http://localhost:8000

# YouTube API Key
VITE_YOUTUBE_API_KEY=your-youtube-api-key

# Auth0 Configuration
VITE_AUTH0_DOMAIN=your-auth0-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
VITE_AUTH0_AUDIENCE=https://your-api-audience
VITE_AUTH0_SCOPE=openid profile email
```

---

## API Endpoints

### Mutual Fund Endpoints
- `GET /api/schemes`: Fetch all mutual fund schemes.
- `GET /api/scheme-details/{scheme_code}`: Fetch details of a specific scheme.
- `GET /api/historical-nav/{scheme_code}`: Fetch historical NAV data.
- `GET /api/compare-navs`: Compare NAVs of multiple schemes.
- `GET /api/risk-volatility/{scheme_code}`: Calculate risk metrics.

### Portfolio Endpoints
- `POST /api/save-user`: Save or update user details.
- `GET /api/get-user/{user_id}`: Fetch user details.
- `POST /api/add-to-portfolio`: Add an item to the user's portfolio.
- `DELETE /api/remove-from-portfolio/{user_id}/{item_id}`: Remove an item from the portfolio.
- `GET /api/get-portfolio/{user_id}`: Fetch the user's portfolio.

---

## Contributing

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m "Add YourFeatureName"`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
