# Movielookup Website

## Project Description

This is a simple movie search website that allows users to search for movies and view basic details. The application fetches movie data using the free [OMDB API](http://www.omdbapi.com/).

## Features

- Search input field to find movies
- Display search results in a grid format
- Show movie details including title, year, and poster
- Responsive design for both mobile and desktop

## Technology Stack

- **Frontend:** React (using Create React App or Vite)
- **Styling:** Vanilla CSS or Tailwind CSS
- **API:** OMDB API for fetching movie data

## API Setup Guide

To use the OMDB API, follow these steps:

1. Visit [OMDB API Key Registration](http://www.omdbapi.com/apikey.aspx)
2. Choose the FREE tier (1,000 requests per day)
3. Fill in the form with:
   - Your email address
   - Purpose: "Educational/Learning"
4. Check your email for the API key (usually arrives within minutes)
5. Test your API key using the following URL:

   ```
   http://www.omdbapi.com/?apikey=YOUR_KEY_HERE&s=batman
   ```

6. Store the API key in an `.env` file within your React project:
   - For Vite:
     ```
     VITE_OMDB_API_KEY=your_api_key_here
     ```
   - For Create React App:
     ```
     REACT_APP_OMDB_API_KEY=your_api_key_here
     ```

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/Solayiwo/movielookup.git
   ```
2. Navigate to the project directory:
   ```sh
   cd movielookup
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your API key:
   ```
   VITE_OMDB_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```sh
   npm run dev  # For Vite
   # OR
   npm start  # For Create React App
   ```
6. Open your browser and go to `http://localhost:5173/` (for Vite) or `http://localhost:3000/` (for CRA)

## Sample API Usage

```javascript
const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_OMDB_API_KEY
      }&s=${query}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
```

## Deployment

The project link:

- [Vercel](https://vercel.com/)
