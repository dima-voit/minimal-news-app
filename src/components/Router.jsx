import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./../pages/home/Home";
import { History } from "../pages/pageone/Pageone";
import { Notfound } from "./../pages/notfound/Notfound";

export class Router extends React.Component {

  render () {
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    )
  }
}
