import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export class Layout extends React.Component {
  render () {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }
}
