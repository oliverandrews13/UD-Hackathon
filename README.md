# ⚡ University Energy Optimizer

Smart campus energy scheduling — allocates solar energy first across buildings, falls back to the grid, and responds dynamically to any infrastructure issues.

## Project Structure

```
university-energy-optimizer/
├── backend/
│   ├── app.py          # Flask API
│   ├── optimizer.py    # Greedy energy scheduler
│   ├── data.py         # Mock campus building data
│   └── requirements.txt
└── frontend/
    ├── public/
    │   └── index.html
    └── src/
        ├── App.jsx     # Main dashboard
        ├── index.js
        └── index.css
```

## Setup

### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```
Flask runs on http://localhost:5000

### Frontend
```bash
cd frontend
npm install
npm start
```
React runs on http://localhost:3000

## Features

- **Dashboard** — view all campus buildings and their energy profiles
- **Optimizer** — run the scheduler, see solar vs grid allocation per building with visual bars
- **Issues** — report infrastructure problems (e.g. high current draw), which automatically flags the building and reduces its energy allocation in the next optimization run

## How the Optimizer Works

1. Buildings are sorted by priority (critical → low)
2. Solar energy is allocated first to highest priority buildings
3. Remaining demand is filled from the grid
4. Flagged buildings (reported issues) get 50% reduced allocation
5. Summary stats show grid dependency %, solar usage, and surplus

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/buildings | Get all campus buildings |
| POST | /api/optimize | Run optimizer, returns schedule |
| POST | /api/report-issue | Flag a building issue |
| GET | /api/issues | Get all reported issues |
