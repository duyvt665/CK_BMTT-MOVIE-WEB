import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./MoviewDetail.css"
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const movieId = id;
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
};

const handleLogin = () =>{
    navigate('/login')
}

const handleNewFlim =() =>{
    navigate('/newfilm')
}

const handleHome = () =>{
    navigate('/')
}

const handleCommingSoonFilm = () =>{
    navigate('/commingsoonfilm')
}

const handlePopularFilm = () =>{
    navigate('/phimthinhhanh')
}

const handleInforUser = () =>{
    navigate('/inforuser')
}

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: '0b2543f80fbe8e5e44262fa36161c2a2',
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie detail:', error);
      }finally {
        setLoading(false); 
      }
    };
    
    fetchMovieDetail();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found!</div>;
  }


  return (
    <>
     <div className="Menu-detail">
            <div className='Menu-detail-child'>
                <button type="button" onClick={handleHome}>Home</button>
                <button type="button" onClick={handleNewFlim}>New Movie</button>
                <button type="button" onClick={handleCommingSoonFilm}>Upcoming Movie</button>
                <button type="button" onClick={handlePopularFilm}>Popular Movie</button>
                <div className="Login-home">
                <button type="button" onClick={handleLogin}>Log out</button>
                {/* <span>/</span>
                <button type="button" onClick={handleRegister}>Register</button> */}
            </div>
            <div className="icon-home"></div>
            </div>
            
            
    </div>
          <div className="profile-menu-detail">
                <button className="icon-ant" type="button" onClick={handleInforUser}></button>
          </div>
        <h2 className='title-detail'>Detail Movie</h2>
        <hr className="separator-detail"></hr>
        <div className="movie-detail-container">
        <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
        />
        <div className="movie-info">
            <p className='title-child'><b>{movie.title}</b></p>
            <p><b>Overview:</b> {movie.overview}</p>
            <p><b>Launch Date:</b> {movie.release_date}</p>
            <p><b>Production Country:</b> {movie.production_countries[0].name}</p>
            <p><b>Production Companies:</b> {movie.production_companies.map(company => company.name).join(',')}</p>
            <p><b>Vote_Rate:</b> {movie.vote_average}</p>
            <p><b>Genres:</b> {movie.genres.map(gen => gen.name).join(',')}</p>
            <button className='btn-detail'>Trailer</button>
            <span></span>
            <button className='btn-detail-1'>Play</button>
        </div>
        </div>
    </>
  );
};

export default MovieDetail;
