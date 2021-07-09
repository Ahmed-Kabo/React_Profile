//import the image
import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import { About, Description, Hide, Image } from "../style";
import styled from "styled-components";

import { ScrollRevel, scrollLeft } from "../pages/animation";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Service>
      <Image>
        <motion.img
          variants={ScrollRevel}
          ref={element}
          animate={controls}
          initial="hidden"
          src={home2}
          alt="home 2"
        />
      </Image>
      <Descriptions
        variants={scrollLeft}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <h2>
          heigh <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Descriptions>
    </Service>
  );
};

//styled components

const Service = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width : 1300px)
  {
    flex-direction: column;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width : 1300px)
  {
    justify-content: center;
  }

`;
const Card = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: #fff;
      color: #000;
      padding: 0.8rem;
    }
  }

`;
const Descriptions = styled(Description)`
  padding: 0 0 0 5rem;
`;

export default ServicesSection;
