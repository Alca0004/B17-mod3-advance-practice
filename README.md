# 🎬 Filmax - Movie Explorer App

Welcome to **Filmax**, a single-page movie browsing app built with **Vanilla JavaScript**, **SCSS**, and **TMDB API**. This project is part of a bootcamp final practice, aiming to simulate a real-world SPA experience — without using any front-end frameworks like React or Vue.

🔗 **Live Demo:** [https://filmax-b17.netlify.app/](https://filmax-b17.netlify.app/)

---

## 🚀 Features

- Browse movies by:
  - 🎞️ Now Playing
  - ⭐ Top Rated
  - 🔥 Popular
  - 🎬 Upcoming
- Toggle between **Grid** and **List** layout views
- Dynamic movie cards with poster, title, rating, year, and description
- Click on a movie to see detailed info including:
  - Backdrop
  - Full synopsis
  - Cast with photos and character names
- Sticky toolbar for filtering and layout toggle
- Smooth user experience using only one HTML page (SPA behavior)

---

## 🛠 Tech Stack

- **JavaScript (ES6+)**
- **SCSS** (Modular, component-based)
- **Bootstrap** (for basic layout utilities)
- **TMDB API** (The Movie Database)
- **Vite** (for fast development and build)

---

## 📁 Project Structure

```plaintext
src/
├── api/
│   ├── api.js
│   └── apiConfig.js
├── events/
│   └── layoutToggle.js
├── movie-list/
│   ├── movieCard.js
│   ├── movieDetails.js
│   ├── movieList.js
│   └── toolbar.js
├── util/
│   └── dom.js
├── scss/
│   ├── _buttons.scss
│   ├── _header.scss
│   ├── _movie.scss
│   └── style.scss
├── main.js
└── index.html

git clone https://github.com/your-username/filmax.git
cd filmax
npm install
npm run dev
