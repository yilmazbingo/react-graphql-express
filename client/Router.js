import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import SongCreate from "./pages/song-create/SongCreate";
import SongDetail from "./pages/song-detail/SongDetail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/songs/new" component={SongCreate} />
        <Route path="/songs/:id" component={SongDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
