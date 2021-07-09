export const PageTransition = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 300,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const TitleAnimate = {
  hidden: {
    y: 150,
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const Fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};
export const photoAnimate = {
  hidden: { scale: 1.5, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 1 } },
};
export const LineAnimate = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 0.5 } },
};
export const ContainerSlide = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export const slide = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      duration: 1,
    },
  },
};

export const ScrollRevel = {
  hidden: { scale: 1.1, opacity: 0 ,transition:{duration : .5}},
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: .5,
      delay: .7
    },
  },
};

export const scrollLeft = {
  hidden: { x: 100, opacity: 0 ,transition:{duration : .5}},
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .5,
    },
  },
}
