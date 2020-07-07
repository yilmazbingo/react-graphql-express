import React from "react";
import { Link } from "react-router-dom";
import "./empty-home-page.style.scss";

const EmptyHomePage = () => {
  return (
    <div className="empty-page">
      <h4>
        Currently there is no song to display. You can add by clicking{" "}
        <span className="add-song">
          <Link to="/songs/new">Add Song</Link>
        </span>
      </h4>
    </div>
  );
};

export default EmptyHomePage;

// <FcPlus className="add-song-plus" />
