import { AnimateSharedLayout, motion } from "framer-motion";
import styled from "styled-components";
import { ScrollRevel } from "../pages/animation";
import { About } from "../style";
import Toggle from "./Toggle";
import useScroll from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <div style={{overflow:"hidden"}}>
       <Faq
      variants={ScrollRevel}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="how do i start">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
              commodi?
            </p>
          </div>
        </Toggle>

        <Toggle title="what products do you offer ?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
              commodi?
            </p>
          </div>
        </Toggle>
        <Toggle title="diferrent payment methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
              commodi?
            </p>
          </div>
        </Toggle>

        <Toggle title="delay schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
              commodi?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
    </div>
   
  );
};

//styled the section

const Faq = styled(About)`
  display: block;
  overflow: hidden;
  width: 100%;
  h2 {
    font-weight: lighter;
    margin-bottom: 2rem;
    span {
      display: block;
    }
  }

  .question {
    cursor: pointer;
    overflow: hidden;
    padding: 3rem 0;
    h4 {
      text-transform: capitalize;
      font-weight: lighter;
    }
    p {
      padding: 1rem 0;
      font-size: 1rem;
    }
    .faq-line {
      display: block;
      width: 100%;
      height: 0.2rem;
      background: #ccc;
    }
  }
`;
export default FaqSection;
