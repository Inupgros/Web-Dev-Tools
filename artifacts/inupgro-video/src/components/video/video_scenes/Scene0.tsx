import { motion } from 'framer-motion';

export function Scene0() {
  const chars = "Before choosing a school...".split("");
  const chars2 = "parents search online.".split("");

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center px-[10vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
    >
      <motion.video
        src={`${import.meta.env.BASE_URL}videos/parents-phone.mp4`}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4.5, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />

      <div className="relative z-10">
        <h1 className="text-[5vw] leading-[1.1] font-extrabold tracking-tight mb-[2vh] flex flex-wrap gap-[1vw]">
          {chars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.2 + i * 0.03, type: "spring", damping: 12, stiffness: 200 }}
              className="inline-block whitespace-pre"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        <h2 className="text-[6vw] leading-[1.1] font-extrabold tracking-tight text-brand-gold flex flex-wrap gap-[1vw]">
          {chars2.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 1.5 + i * 0.04, type: "spring", damping: 15, stiffness: 150 }}
              className="inline-block whitespace-pre drop-shadow-2xl"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>
      </div>

      <motion.div
        className="absolute bottom-[10vh] left-[10vw] w-[80vw] h-[2px] bg-brand-white/20 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2.5, duration: 1.5, ease: "circOut" }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 bg-brand-gold w-full origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.5, duration: 2, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
}