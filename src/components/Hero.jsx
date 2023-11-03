import React, { useState, useEffect } from "react";
import { FaSistrix } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { logout, getMe } from "../redux/actions/authActions";

const Hero = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [movieList, setMovieList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe(null, null, null));
  }, [dispatch]);


  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  const getMovie = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_HERO}`,
      );
      setMovieList(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => navigateTo("/")}>
            Movielist
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="What do you want to watch?"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="icon" type="submit">
                <FaSistrix className="search-icon" />
              </button>
            </form>
          </div>
          <div className="button-header">
            {isLoggedIn ? (
              <>
                <Link className="getMe me-3">Hi, {user?.name}</Link>
                <Link
                  onClick={() => {
                    dispatch(logout(navigate));
                  }}
                  className="btn btn-danger me-3"
                >
                  LogOut
                </Link>
              </>
            ) : (
              <>
                <Link to={"/login"} className="btn btn-outline-danger me-3">
                  Login
                </Link>
                <Link to={"/register"} className="btn btn-danger me-3">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

          <div id="carouselExampleInterval" className="carousel slide">
            <div className="carousel-indicators">
              {movieList.slice(6, 9).map((movie, index) => (
                <button
                  key={movie.id}
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {movieList.slice(6, 9).map((movie, index) => (
                <div
                  key={movie.id}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval="3000"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    className=" carousel-img"
                    alt=""
                  />
                  <div className="carousel-caption">
                    <h5 className="carousel-title">{movie.original_title}</h5>
                    <p>{movie.overview}</p>
                    <button className="btn btn-danger">watch trailer</button>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </div>
  );
};

export default Hero;
