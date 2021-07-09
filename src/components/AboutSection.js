import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Hide, Image } from "../style";

//framer motion 
import { motion } from "framer-motion";
import { TitleAnimate ,Fade ,photoAnimate} from "../pages/animation";
import Wave from "./Wave";


const AboutSection = () => {



  return (
    <About>
      <Description>
        <motion.div  className="title">
          <Hide>
            <motion.h2 variants={TitleAnimate} >we work to make </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={TitleAnimate} >
              your <span>dream</span>{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={TitleAnimate} >comes true </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={Fade} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id
          ullam reprehenderit culpa aliquam eius
        </motion.p>
        <motion.button variants={Fade}>contact</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnimate} src={home1} alt="home one " />
      </Image>
      <Wave/>
    </About>
  );
};

//styled components

export default AboutSection;
