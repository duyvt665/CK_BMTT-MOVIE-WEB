import "./Home.css"
import { useNavigate } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');

    

    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = () =>{
        navigate('/login')
    }

    const handleNewFlim =() =>{
        navigate('/newfilm')
    }

    const handleHome = () => {
        fetchInitialData();
    };

    const handleCommingSoonFilm = () =>{
        navigate('/commingsoonfilm')
    }

    const handlePopularFilm = () =>{
        navigate('/phimthinhhanh')
    }
    
    const handleInforUser = () =>{
        navigate('/inforuser')
    }

    const fetchInitialData = async () => {
        try {
            setLoading(true);
    
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: '0b2543f80fbe8e5e44262fa36161c2a2',
                    page: 1,
                },
            });
    
            if (Array.isArray(response.data.results)) {
                setMovies(response.data.results);
            } else {
                console.error("Invalid data format:", response.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };
    
    // Gọi hàm fetchInitialData khi component được mount
    useEffect(() => {
        fetchInitialData();
    }, []);
    
    
    const fetchData = async (query = '') => {
        try {
          setLoading(true);

          let apiEndpoint = 'https://api.themoviedb.org/3/discover/movie';
      if (query.trim() !== '') {
          apiEndpoint = 'https://api.themoviedb.org/3/search/movie';
      }

      const response = await axios.get(apiEndpoint, {
          params: {
              api_key: '0b2543f80fbe8e5e44262fa36161c2a2',
              page: currentPage,
              query: query,
          },
      });

          if (Array.isArray(response.data.results)) {
              setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
            } else {
              console.error("Invalid data format:", response.data);
            }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
          }
      };
  
      
    useEffect(() => {
        fetchData();
      }, [currentPage]);

      const handleSearch = () => {
        if (searchKeyword.trim() !== '') {
            setMovies([]); // Reset movies khi bắt đầu tìm kiếm
            setCurrentPage(1); // Reset trang về 1 khi bắt đầu tìm kiếm
            fetchData(searchKeyword);
        }
    };

      useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            const scrollTop = window.scrollY;
    
            if (scrollTop + windowHeight >= documentHeight - 100 && !loading) {
                setCurrentPage((prevPage) => prevPage + 1);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading, setCurrentPage]);

    

  return (
    <>
        <div className="Menu-bar">
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
            <div className="profile-menu">
                <button className="icon-ant" type="button" onClick={handleInforUser}><UserOutlined /></button>
            </div>
            <input className="text-Search"
                type="text"
                placeholder="Tìm kiếm phim..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="button" onClick={handleSearch} className="btbSearch">Tìm kiếm</button>
            <div className="movie-slider">
            {
                movies.map((movie, index) => (
                    <Link key={index} to={`/movie/${movie.id}`}>
                    <div key={index} className="movieItem">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <div className="movieName">{movie.title}</div>
                    </div>
                    </Link>
                ))
            }
            </div>
        </div> 
        <div className="Container">
            <h2>HOME</h2>
            <hr className="separator" />
        </div>
    </>
  );
};

export default Home;