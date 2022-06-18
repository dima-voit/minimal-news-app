import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./layout/Layout";

import { Homepage } from "../pages/homepage/Homepage";
import Pageone from "../pages/pageone/Pageone";
import { Notfound } from "../pages/notfound/Notfound";

export class Router extends React.Component {

  render () {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="pageone" element={<Pageone />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    )
  }
}
