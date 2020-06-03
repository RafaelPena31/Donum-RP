import React from "react";
import Title from "../../atoms/Title";
import { Link } from "react-router-dom";
import "../../../styles/stylePrincipal.css";

export const Header = () => (
  <header id="main-header">
    <Link
      exact
      to="/"
      id="homeLink"
    >
      Home
    </Link>
    <Title id="logo" title="donum" />
  </header>
);
