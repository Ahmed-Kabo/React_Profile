import { motion } from "framer-motion";
import styled from "styled-components";
import { PageTransition , TitleAnimate } from "../pages/animation";

const ContactUs = () => {
  return (
    <Contact
      variants={PageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
      
    >
      <Title>contact us </Title>
      <Hide>
          <SocialBox variants={TitleAnimate} >
              <Box/>
              <h4>call us now </h4> 
          </SocialBox>
          <SocialBox variants={TitleAnimate} >
              <Box/>
              <h4>conatct now </h4> 
          </SocialBox>
          <SocialBox variants={TitleAnimate} >
              <Box/>
              <h4>get our map  </h4> 
          </SocialBox>
      </Hide>
    </Contact>
  );
};

const Contact = styled(motion.div)`
  padding: 5rem 10rem;
  background: #fff;
  height: 90vh;
  @media (max-width : 1300px)
  {
    padding: 2rem;
    margin-top: 5rem;
  }
`;
const Title = styled(motion.h1)`
  padding: 1rem 0;
  text-transform: capitalize;
`;
const Hide = styled.div`
    overflow: hidden;
`;
const SocialBox = styled(motion.div)`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;
const Box = styled.div`
    width: 1rem;
    height: 1rem;
    background: #222;
    margin-right: 1rem;
    border-radius: 50%;
`

export default ContactUs;
