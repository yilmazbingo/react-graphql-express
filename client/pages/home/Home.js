import React from "react";
import SongList from "../../components/song-list/SongList";
import { Link } from "react-router-dom";
import { FcPlus } from "react-icons/fc";
import BaseLayout from "../../components/base-layout/BaseLayout";
import "./home-style.scss";

const Home = () => {
  return (
    <BaseLayout className="home-page">
      <SongList />
      <Link to="/songs/new">
        <FcPlus className="plus-icon" />
      </Link>
    </BaseLayout>
  );
};

export default Home;
