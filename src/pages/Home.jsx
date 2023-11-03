import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import PopularMovie from "../components/PopularMovie";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions/postActions";
import { login } from "../redux/actions/authActions";


const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const { isLoggedIn } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getAllPosts());
    }
  }, [dispatch]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Hero onSearch={handleSearch}/>
      {isLoggedIn && posts && posts.length > 0 ?
         (
        <>
          <PopularMovie searchQuery={searchQuery}/>
        </>
      ) : (
        <>
          <div className="text-center">
            <h3>Tidak ada Movie Popular</h3>
            <h3>Silahkan Login untuk melihat Movie Popular</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
