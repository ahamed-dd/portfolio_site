# Portfolio Website  
### Modular developer portfolio built for scalability, reliability, and easy customization

---

## Overview

This portfolio was originally built as a **fully modular, backend-driven application** using **Django REST Framework** with an **admin panel** to manage all content (profile, projects, skills, experience) dynamically.

For deployment and long-term reliability, the project was later converted into a **frontend-only version** using static JSON data, while preserving the same modular architecture.

This approach ensures:
- Zero backend downtime
- Faster load times
- Free and stable hosting
- Clean separation between content and UI

---

## Tech Stack

**Frontend**
- React (TypeScript)
- Vite
- CSS (custom styling)

**Backend (up to commit `3955cd2`)**
- Django
- Django REST Framework
- Django Admin
- PostgreSQL

**Deployment**
- Frontend: Vercel  
- Contact Form: EmailJS (no backend dependency)

---

## Project Structure Philosophy

- **Modular by design**: each section (Projects, Skills, Experience, Contact) is isolated and reusable  
- **Backend-editable content** (initial version): all data managed via Django Admin  
- **Frontend-only deployment** (current): content served via static JSON for reliability  

Backend-heavy logic is intentionally showcased in **separate projects**, not coupled to the portfolio itself.

---

## Installation & Setup

### Option A — Full Modular Backend Version  
*(Up to commit `3955cd2`)*

This version uses Django as a content API.

```bash
git checkout 3955cd2

cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver

cd frontend
npm install
npm run dev
```
You can now manage all portfolio content via Django Admin.

##  Option B — Frontend-Only Version (Current & Recommended)

This version removes backend dependency for ultimate deployment simplicity.

### Quick Start
```bash
git checkout main
cd frontend
npm install
npm run dev
```
All portfolio content lives in one file:
public/data/portfolio.json

### Why Frontend-Only for Deployment?

- The portfolio is read-only by nature.
- Running a backend only to serve static content:
- Adds unnecessary cost
- Introduces cold starts on free tiers
- Increases failure points

### Customization Guide
1. Fork the repository
2. Edit public/data/portfolio.json
3. Replace assets in public/media/
4. Deploy to Vercel


