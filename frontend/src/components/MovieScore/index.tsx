import MovieStars from "components/MovieStars";
import './styles.css';

function MovieScore() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="plusmovie-score-container">
            <p className="plusmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="plusmovie-score-count">{count} avaliações</p>
        </div>
    )
}

export default MovieScore;