import MovieLookUp from "./components/MovieLookUp";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-9">
      <h2 className="text-blue-400 text-center font-bold text-2xl sm:text-2xl md:text-4xl lg:text-6xl uppercase">
        Welcome to MovieLookup
      </h2>
      <MovieLookUp />
    </div>
  );
}

export default App;
