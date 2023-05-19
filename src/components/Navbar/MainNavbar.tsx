// import { BrowserRouter as Link } from 'react-router-dom';
import React, { Dispatch } from "react";
import styles from "./navbar.module.scss";
import logoLight from "../../assets/icons/logo.svg";
import logoDark from "../../assets/icons/logoDark.svg";
import phoneLight from "../../assets/icons/phoneN.svg";
import phoneDark from "../../assets/icons/phoneND.svg";
import user from "../../assets/icons/userN.svg";
import userDark from "../../assets/icons/userND.svg";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import UsernameAvatar from "../UsernameAvatar/UsernameAvatar";
import Link from "next/head";
import { PATH } from "../../constants/paths";
import ProfileMenuPopUp from "../ProfileMenuPopUp";
import { useMediaQuery } from "react-responsive";
import { CONSTANTS } from "../../constants/shared";
import { useRouter } from "next/router";
import logo from "../../assets/icons/logo.svg";
type Props = {
  navType: string;
  updateSidebar: () => void;
  logout: () => void;
  header: any;
};

const MainNavbar: React.FC<Props> = ({
  navType,
  updateSidebar,
  header,
  logout,
}) => {
  const isSmallDevice = useMediaQuery({
    query: "(max-width: 991px)",
  });
  const isSidebarShow = useMediaQuery({
    query: "(max-width: 820px)",
  });
  const history = useRouter();
  //console.log("TT", localStorage.getItem("user"));
  // const userData: User = JSON.parse(localStorage.getItem('user'));
  const [showProfilePopUp, setShowProfilePopUp] =
    React.useState<boolean>(false);

  return (
    <>
      <div className="navBg ">
        <div className="container">
          <Navbar bg="" expand="lg" className={styles.navbar}>
            <Container className={styles.navbar_container}>
              {header && isSmallDevice && (
                <div style={{ position: "relative" }}>
                  {/* <UsernameAvatar
              updateSidebar={
                history.location.pathname.includes("userdash")
                  ? updateSidebar
                  : () => {
                      console.log(
                        "CLCIKED",
                        history.location.pathname.includes("userdash")
                      );
                      setShowProfilePopUp(!showProfilePopUp);
                    }
              }
              username="Wasiq Abdullah"
            /> */}
                  {showProfilePopUp && (
                    <ProfileMenuPopUp
                      logout={logout}
                      setShowProfilePopUp={setShowProfilePopUp}
                      right={true}
                    />
                  )}
                </div>
              )}
              {/* {showProfilePopUp && <ProfileMenuPopUp />} */}
              <Nav.Link href="/">
                <Image
                  src="/assets/icons/logo.svg"
                  alt="logo"
                  width={164}
                  height={18}
                />
              </Nav.Link>
              <Navbar.Collapse
                id="navbarScroll"
                className={
                  navType == "dark"
                    ? styles.navbarScrollLight
                    : styles.navbarScrollDark
                }
              >
                <Nav
                  className={
                    navType == "dark"
                      ? styles.nav_conLight + " me-auto my-2 my-lg-0"
                      : styles.nav_conDark + " me-auto my-2 my-lg-0"
                  }
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  {/* <Nav.Link className={styles.nav_links}> */}
                  {/* <Nav.Link
                    style={{ textDecoration: "none" }}
                    className={styles.nav_links}
                    href="/how-it-works"
                  >
                    How It Works
                  </Nav.Link> */}
                  {/* </Nav.Link> */}

                  {/* <Nav.Link className={styles.nav_links}> */}
                  {/* <Nav.Link
                    className={styles.nav_links}
                    style={{ textDecoration: "none" }}
                    href="/faq"
                  >
                    FAQs
                  </Nav.Link> */}
                  {/* </Nav.Link> */}
                </Nav>
                <Nav className={styles.right_menu + " d-flex"}>
                  <Nav.Link
                    href="/"
                    className={
                      navType == "dark"
                        ? styles.nav_linksLight + " " + styles.navPhone
                        : styles.nav_linksDark + " " + styles.navPhone
                    }
                  >
                    {CONSTANTS.PHONE_NUMBER}
                  </Nav.Link>
                  {header ? (
                    !isSmallDevice && (
                      <UsernameAvatar
                        updateSidebar={() =>
                          setShowProfilePopUp(!showProfilePopUp)
                        }
                        username="Wasiq Abdullah"
                      />
                    )
                  ) : (
                    <Button
                      variant="light"
                      className={
                        navType == "dark"
                          ? styles.loginBtnLight
                          : styles.loginBtnDark
                      }
                      onClick={() => {
                        history.push("/sign-in");
                      }}
                    >
                      Login
                    </Button>
                  )}
                  {showProfilePopUp && (
                    <ProfileMenuPopUp
                      logout={logout}
                      setShowProfilePopUp={setShowProfilePopUp}
                    />
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
