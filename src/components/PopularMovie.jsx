import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts, getPostSearch } from "../redux/actions/postActions"


const PopularMovie = ({ searchQuery}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { posts } = useSelector((state) => state.post);
    const { searchResults } = useSelector((state) => state.post);

    useEffect(() => {
      if (searchQuery) {
        dispatch(getPostSearch(searchQuery));
      } else {
        dispatch(getAllPosts());
      }
    }, [dispatch, searchQuery]);
  
  return (
    <div>
      <div className="movie-list">
        <h3 className="">
          {searchQuery ? "Search Results" : "Popular Movies"}
        </h3>
        <div className="see-all">
          <button
            type="button"
            className="btn btn-link"
            style={{ color: "red" }}
          >
            See All Movie
          </button>
        </div>
      </div>
      <div className="movie">
        { searchQuery ?
        searchResults.map((movie) => (
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            className="poster"
            key={movie.id}
            onClick={() => navigate(`/detailMovie/${movie.id}`)}
          />
        ))
      : posts.map((movie) => (
        <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        className="poster"
        key={movie.id}
        onClick={() => navigate(`/detailMovie/${movie.id}`)}
      />
      ))}
      </div>
    </div>
  )
}

export default PopularMovie