import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getPostDetails } from "../redux/actions/postActions";

const DetailMovie = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigateTo = useNavigate();

  const { postDetails } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => navigateTo("/")}>
            Movielist
          </a>
        </div>
      </nav>

      <div className="card text-bg-dark">
        <img
          src={`https://image.tmdb.org/t/p/original${postDetails?.backdrop_path}`}
          className="card-img"
          alt=""
        />
        <div className="card-img-overlay ">
          <h5 className="card-title">{postDetails?.title}</h5>
          {/* <p className="card-text">{getGenres()}</p> */}
          <p className="card-text">{postDetails?.overview}</p>
          <p className="card-text" style={{ fontStyle: "italic" }}>
            release date : {postDetails?.release_date}
          </p>
          <p className="card-text">
            <FaStar />{" "}
            {postDetails?.vote_average ? postDetails?.vote_average.toFixed(1) : "N/A"}/10
          </p>
          <img className="img-poster" src={`https://image.tmdb.org/t/p/original${postDetails?.poster_path}`}/>
        </div>
      </div>
    </>
  );
};

export default DetailMovie