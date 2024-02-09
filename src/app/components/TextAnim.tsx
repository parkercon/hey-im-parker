"use client"
//https://blog.noelcserepy.com/how-i-created-a-typing-text-animation-with-framer-motion
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import CursorBlinker from "./CursorBlinker";
import RedoAnimText from "./RedoAnimText";

export interface ITextAnimProps {
    delay: number;
  }

export default function TextAnim({ delay }: ITextAnimProps) {
  const [done, setDone] = useState(false);
  const baseText = "Hey! My name is Parker Conrad." as string;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
      }
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const splitIndex = baseText.indexOf("Parker Conrad");

  return (
    <span className="text-lg">
      <RedoAnimText delay={delay + 1} />
      <CursorBlinker />
    </span>
  );
}

      // {/* <motion.span style={{ display: "inline-block", overflow: "hidden" }}>
      //   <motion.span style={{ x: displayText }}>
      //     {baseText.slice(0, splitIndex)}
      //   </motion.span>
      //   <motion.span className="text-red-900" style={{ x: displayText }}>
      //     {baseText.slice(splitIndex)}
      //   </motion.span>
      // </motion.span>
      // {/* <motion.span className="text-5xl font-semibold">{displayText}</motion.span> */}
      // {done && (
      //   <>
      //     <span>&nbsp;</span>
      //   </>
      // )} */}