import athlete from "../img/athlete-small.png";
import goodtimes from "../img/goodtimes-small.png";
import theracer from "../img/theracer-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
//animation
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";

import {
  PageTransition,
  Fade,
  photoAnimate,
  LineAnimate,
  slide,
  ContainerSlide,
} from "./animation";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element1, controls1] = useScroll();
  return (
    <Work
      variants={PageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <FramerContainer variants={ContainerSlide}>
        <Framer1 variants={slide}></Framer1>
        <Framer2 variants={slide}></Framer2>
        <Framer3 variants={slide}></Framer3>
        <Framer4 variants={slide}></Framer4>
      </FramerContainer>
      <Movie>
        <motion.h2 variants={Fade}>the athlete </motion.h2>
        <motion.div variants={LineAnimate} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnimate} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      <Movie variants={Fade} ref={element} animate={controls} initial="hidden">
        <motion.h2 variants={Fade}>the racer </motion.h2>
        <motion.div variants={LineAnimate} className="line"></motion.div>
        <Link to="/work/the-racer">
          <Hide>
            <motion.img variants={photoAnimate} src={theracer} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      <Movie variants={Fade} ref={element1} animate={controls1} initial="hidden">
        <motion.h2 variants={Fade}>good times </motion.h2>
        <motion.div variants={LineAnimate} className="line"></motion.div>
        <Link to="/work/good-times">
          <Hide>
            <motion.img variants={photoAnimate} src={goodtimes} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop/>
    </Work>
  );
};

const Work = styled(motion.section)`
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow: hidden;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width : 1300px){
    padding: 2rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const FramerContainer = styled(motion.div)``;
const Framer1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: #000;
`;
const Framer2 = styled(Framer1)`
  background: #23d997;
`;
const Framer3 = styled(Framer1)`
  background: #125486;
`;
const Framer4 = styled(Framer1)`
  background: #cc00ff;
`;

export default OurWork;
