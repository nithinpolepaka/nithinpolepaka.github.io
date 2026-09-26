import { AnimatePresence, Variants, motion } from "framer-motion";

/**
 * "NE" monogram for Nithin Emmanuel.
 *
 * Drawn as a rounded accent tile with stroked letterforms rather than a fixed
 * hex, so it inherits the active light/dark theme and stays legible when the
 * browser scales it down to favicon size.
 */
export default function AnimatedLogo() {
  const fade: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  };

  const draw: Variants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        role="img"
        aria-label="Nithin Emmanuel"
      >
        <motion.rect
          x="2"
          y="2"
          width="60"
          height="60"
          rx="18"
          className="fill-accent"
          variants={fade}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <motion.path
          d="M16 46V18l16 28V18"
          fill="none"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-background"
          variants={draw}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
        />

        <motion.path
          d="M50 18H40v28h10M40 32h8"
          fill="none"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-background"
          variants={draw}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.45 }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
