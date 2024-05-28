// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Posters from '../Cards/Cards';
import './home.css';
import CompanyInformation from '../CompanyInfo/CompanyInformation';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.post('https://hoblist.com/api/movieList', {
      category: 'movies',
      language: 'kannada',
      genre: 'all',
      sort: 'voting'
    })
    .then(response => {
      setMovies(response.data.result || []);
    })
    .catch(error => {
      console.error("There was an error fetching the movies!", error);
    });
  }, []);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div className='home'>
      <div className='navbarr'>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <div className="container-fluid">
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link onClick={handleModalShow}>Company Information</Link></li>
                <li><Link to="/">Logout</Link></li>
              </ul>
          </div>
      </nav>
      </div>

      <div className='container'>
        <div className='cards'>
          {movies.map((movie, index) => (
            <Posters key={index} movie={movie} />
          ))}
        </div>
      </div>

      <CompanyInformation show={showModal} handleClose={handleModalClose} />
    </div>
  );
}

export default Home;
