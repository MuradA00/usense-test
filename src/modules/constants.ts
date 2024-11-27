import { PasswordStrengthLevels } from "./types";

export const passwordBarColors = {
  empty: "bg-gray-200",
  weak: ["bg-red-500", "bg-gray-200", "bg-gray-200"],
  medium: ["bg-yellow-500", "bg-yellow-500", "bg-gray-200"],
  strong: ["bg-green-500", "bg-green-500", "bg-green-500"],
};

export const passwordBoxMotionProps = {
  transition: {
    bounce: 0.4,
    delay: 0.5,
    type: "spring",
  },
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0
  },
};

export const passwordStrengthLevels: 
  Record<keyof PasswordStrengthLevels, number> = {
  weak: 0,
  medium: 1,
  strong: 2,
};