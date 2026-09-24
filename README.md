# Zenith Banking Web Clone — Next.js + Python

Assignment starter implementing the supplied Figma mobile UI as a responsive web application.

## Stack
- Frontend: Next.js 14 / React / JavaScript
- Styling: plain CSS (no Tailwind dependency)
- Backend: Python / FastAPI

## Run frontend
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:3000

## Run backend
```bash
cd backend
python -m venv .venv
# Windows: .venv\\Scripts\\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
API docs: http://localhost:8000/docs

## Design mapping
The mobile layouts are based on Figma frames 01 — Customize Page, 02 — Product & Services, 03 — LifeStyle, and 04 — Login / Welcome. Desktop CSS expands the same content into a web layout while preserving the 390px mobile composition at phone widths.

The implementation uses original text/layout values from the supplied Figma rather than embedding screenshots as the UI.
