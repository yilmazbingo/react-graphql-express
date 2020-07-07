import React from "react";
import SongList from "../../components/song-list/SongList";
import BaseLayout from "../../components/base-layout/BaseLayout";
import "./home-style.scss";

const Home = () => {
  return (
    <BaseLayout className="home-page">
      <SongList />
    </BaseLayout>
  );
};

export default Home;
