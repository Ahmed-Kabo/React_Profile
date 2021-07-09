
import { motion } from "framer-motion";
import styled from "styled-components";

export const About = styled(motion.div)`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem ;
color: #fff;
overflow: hidden;
@media (max-width :1300px){
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem ;
  text-align:center;
 
}

`

export const Description = styled(motion.div)`
z-index: 2;
flex: 1;
padding-right: 5rem;
h2{
  font-weight: lighter;
}
@media (max-width : 1300px){
  padding: 1rem  0rem;
}

`
export const Image = styled.div`
z-index: 2;
flex: 1;
overflow: hidden;
img{
  width: 100%;
  height: 80vh;
  object-fit: cover;
}

`
export const Hide = styled.div`
overflow: hidden;
`

