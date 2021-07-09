import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <Navbar>
      <Link to="/" id="logo">
        kabo
      </Link>
      <ul>
        <li>
          <Link to="/">1. About US</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
          />
        </li>
      </ul>
    </Navbar>
  );
};
const Navbar = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 10;
  a {
    text-decoration: none;
    color: #fff;
  }
  #logo {
    font-size: 2.5rem;
    font-family: "Permanent Marker", cursive;
  }
  ul {
    list-style: none;
    display: flex;
    li {
      position: relative;
      margin-left: 3rem;
    }
  }
  @media (max-width : 1300px)
  {
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 2rem;
    ul{
      padding: 2rem ;
      justify-content: space-around;
      width: 100%;
      li{
        padding: 0;
        margin: 0 1rem;
      }
    }
  }
`;
const Line = styled(motion.div)`
  position: absolute;
  bottom: -50%;
  left: 0;
  width: 0;
  height: 4px;
  border-radius: 2rem;
  background: #23d997;
`;
export default Nav;
