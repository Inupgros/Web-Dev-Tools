import { motion } from 'framer-motion';

export function Scene1() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-[8vw]"
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{ clipPath: "circle(150% at 50% 50%)" }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.video
        src={`${import.meta.env.BASE_URL}videos/empty-hallway.mp4`}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-transparent to-brand-navy/80" />

      <div className="relative z-10 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="bg-brand-white/10 backdrop-blur-md border border-brand-white/20 px-[3vw] py-[2vh] rounded-full mb-[4vh]"
        >
          <span className="text-[2vw] font-bold text-brand-white uppercase tracking-widest">The Reality</span>
        </motion.div>

        <h1 className="text-[5.5vw] leading-[1.1] font-extrabold tracking-tight max-w-[80vw]">
          <motion.span
            className="block text-brand-gray"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Without a strong digital presence...
          </motion.span>
          <motion.span
            className="block text-brand-white mt-[1vh]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Your institute is <span className="text-brand-gold italic">invisible.</span>
          </motion.span>
        </h1>
        
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay bg-brand-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.05, 0] }}
          transition={{ delay: 2, duration: 0.1, repeat: 5, repeatType: "mirror" }}
        />
      </div>
    </motion.div>
  );
}