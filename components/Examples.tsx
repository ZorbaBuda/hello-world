"use client";

import { motion } from "framer-motion";

export function WhileTap() {
  return (
    <div className="center">
      <div className="title">While Tap</div>
      <motion.div
         className="blue-square cursor-pointer"
         whileTap={{ rotate: 90, scale: 0.75 }}
      />
      </div>
  );
}


// Add one line of code to create a whileHover animation between 
//two states.
export function WhileHover() {
  return (
    <div className="center">
      <div className="title">While Hover</div>
      <motion.div
         className="blue-square"
          whileHover={{ scale: 0.8 }}
      />
      </div>
  );
}

// When using repeat, you can add a repeatType of "reverse" to make 
// the animation go back and forth.
export function Reverse() {
    return (
        <div className="center">
      <div className="title">Reverse</div>
        <motion.div
            className="blue-square"
            animate={{ rotate: 360 }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
            }}
        />
        </div>
    );
}

// With a repeat of Infinity, the animation will never end.
export function Repeat() {
    return (
        <div className="center">
      <div className="title">Repeat</div>
        <motion.div
           className="blue-square"
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        />
        </div>
    );
}



// A simple animation that uses the default tween curve.
// Just passing an object with visual properties to animate will trigger an animation.
// And with the transition property, you define how things should animate.
// Like, for example, which duration it should have.

export function Tween() {
  return (
    <div className="center">
      <div className="title">Tween</div>
      <motion.div
        className="blue-square"
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
}

// Here’s another animation that starts automatically. This one has a spring curve.
export function Spring() {
  return (
    <div className="center">
      <div className="title">Spring</div>
      <motion.div
        className="blue-square"
        animate={{ rotate: 180 }}
        transition={{
          type: "spring",
          damping: 10,
          mass: 0.75,
          stiffness: 100,
         
        }}
      />
    </div>
  );
}

// Instead of tweaking stiffness, damping, and mass (as in the former spring example), 
// you can use a duration-based spring and just pick a duration and a desired level of
//  bounce.
export function DBSpring() {
    return (
        <div className="center">
        <div className="title">Duration-based spring</div>
        <motion.div
          className="blue-square"
            animate={{ rotate: 360 }}
            transition={{ type: "spring", duration: 5, bounce: 0.6 }}
        />
        </div>
    );
}
