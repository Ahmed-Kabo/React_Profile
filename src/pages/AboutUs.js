import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/servicesSection";
//animation 
import { motion } from "framer-motion";
import {PageTransition} from "../pages/animation"
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div variants={PageTransition} initial="hidden" animate="show" exit="exit">
      <AboutSection />
      <ServicesSection />
      <FaqSection/>
      <ScrollTop/>
    </motion.div>
  );
};
export default AboutUs;
