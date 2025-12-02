import { Transition } from "framer-motion";

export const springTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
};

export const easeTransition = {
  type: "ease",
  duration: 0.5,
};

export const staggerTransition = (index: number) => ({
  duration: 0.5,
  delay: index * 0.2,
});

export const smoothTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};