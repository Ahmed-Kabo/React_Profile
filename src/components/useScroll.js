//laibary that from js allow you to know if you are in the section
import { useInView } from "react-intersection-observer";
//to control the section when scroll on it
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  //to control the element when scroll it will add on animate
  const controls = useAnimation();
  //to start true when scroll in half of section
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
export default useScroll;
