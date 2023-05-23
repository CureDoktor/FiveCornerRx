import type { AppProps } from "next/app";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer/Footer";
import MainNavbar from "../components/Navbar/MainNavbar";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { AuthContextProvider } from "../store/auth-context";
// import "bootstrap/dist/js/bootstrap.min.js";

export default function App({ Component, pageProps }: AppProps) {
  const [isLogedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("Token");
    setIsLoggedIn(false);
  };

  const loginChange = () => {
    if (isLogedIn) {
      return (
        <AuthContextProvider>
          <MainNavbar
            updateSidebar={() => {}}
            navType="dark"
            logout={logoutHandler}
            header={isLogedIn}
          />
          <Component isLoggedIn={loginHandler} {...pageProps} />
          <Footer />
        </AuthContextProvider>
      );
    } else if (
      Component.name == "UserDashboard" ||
      Component.name == "VisitForm" ||
      Component.name == "Switch" ||
      Component.name == "Order" ||
      Component.name == "SignIn"
    ) {
      return (
        <AuthContextProvider>
          <MainNavbar
            updateSidebar={() => {}}
            navType="dark"
            logout={loginHandler}
            header={isLogedIn}
          />
          <SignIn isLoggedIn={loginHandler} />
          <Footer />
        </AuthContextProvider>
      );
    } else {
      return (
        <AuthContextProvider>
          <MainNavbar
            updateSidebar={() => {}}
            navType="dark"
            logout={loginHandler}
            header={isLogedIn}
          />
          <Component isLoggedIn={loginHandler} {...pageProps} />
          <Footer />
        </AuthContextProvider>
      );
    }
  };
  return loginChange();
}
