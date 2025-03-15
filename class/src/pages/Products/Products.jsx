import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import './products.css';  

const Cards = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie.original_title}</div>
                    <div className="card__runtime">
                        {movie.release_date}
                        <span className="card__rating">{movie.vote_average} <i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie.overview.slice(0, 118)}...</div>
                </div>
            </div>
        </Link>
    );
};

const Products = () => {
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 20; 

    useEffect(() => {
        const fetchMovies = async () => {
            const genres = [35, 18, 27, 28, 878]; 
            const allMovies = [];
            for (let genreId of genres) {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&with_genres=${genreId}`);
                const data = await response.json();
                allMovies.push(...data.results.slice(0, 20));  
            }
            setMovieList(allMovies);
            setIsLoading(false);
        };

        fetchMovies();
    }, []);

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movieList.slice(indexOfFirstMovie, indexOfLastMovie);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(movieList.length / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <h1>Top 100 Movies</h1>
            <div className="list__cards">
                {isLoading ? (
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton height={300} duration={2} count={5} />
                    </SkeletonTheme>
                ) : (
                    currentMovies.map((movie) => <Cards key={movie.id} movie={movie} />)
                )}
            </div>

            {/* Пагинация */}
            <div className="pagination">
                {pageNumbers.map(number => (
                    <button key={number} onClick={() => paginate(number)} className={number === currentPage ? 'active' : ''}>
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Products;