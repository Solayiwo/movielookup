import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (!query || query.length < 3) return; // Prevent fetching with an empty query
      searchMoviesHandler(query);
    }, 500); // Wait 500ms after user stops typing

    return () => clearTimeout(delayDebounce); // Cleanup function
  }, [query]); // Runs when `query` changes

  const searchMoviesHandler = async (searchTerm) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&s=${searchTerm}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search || []);
      } else {
        setMovies([]);
        setError("No results found");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="text-center my-6">
        <input
          type="text"
          placeholder="Search Movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-1 md:w-md lg:md p-1 lg:p-2 rounded-xl lg:rounded-2xl outline-none text-blue-600"
        />
        <div className="mt-6">
          {loading && <p className="text-blue-600">Loading...</p>}
          {error && <p className="text-red-500 font-semibold">{error}</p>}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-[80dvw]">
        {movies.map((movie) => {
          const { imdbID, Title, Year, Poster } = movie;
          return (
            <motion.div
              key={imdbID}
              whileHover={{ scale: 1.05 }} // Scale effect on hover
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={Poster} alt={Title} className="rounded-2xl" />
              <p className="text-center">
                {Title} ({Year})
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchMovies;
