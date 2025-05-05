import { motion } from "motion/react";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  position: "left" | "right";
}

export function AnimatedArrowButton({ children, position }: Props) {
  const [isHovering, setIsHovering] = useState(false);

  const positionMultiplier = position === "left" ? -0.2 : 0.2;

  return (
    <motion.div
      animate={
        isHovering
          ? { x: 0, boxShadow: ["0px 0px 15px rgba(234, 88, 12, 0.6)"] }
          : {
              x: [0, 6 * positionMultiplier, 0],
              boxShadow: [
                "0px 0px 0px rgba(234, 88, 12, 0)",
                "0px 0px 10px rgba(234, 88, 12, 0.6)",
                "0px 0px 0px rgba(234, 88, 12, 0)",
              ],
            }
      }
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      style={{ borderRadius: "50%" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
    </motion.div>
  );
}
