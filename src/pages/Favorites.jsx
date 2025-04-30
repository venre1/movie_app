import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/movieCard";

function Favorites() {
    const { favorites } = useMovieContext();

    return (
        <div className="favorites">
            {favorites && favorites.length > 0 ? (
                <>
                    <h2>Your Favorites</h2>
                    <div className="movies-grid">
                        {favorites.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </div>
                </>
            ) : (
                <div className="favorites-empty">
                    <h2>No Favorites Yet</h2>
                    <p>Start adding movies to your favorites and they will appear here.</p>
                </div>
            )}
        </div>
    );
}

export default Favorites;
