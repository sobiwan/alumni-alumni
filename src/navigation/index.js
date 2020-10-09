import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteProvider from "./RouteProvider";
import ScrollToTop from "./ScrollToTop";

function Navigation() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <RouteProvider />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Navigation;
