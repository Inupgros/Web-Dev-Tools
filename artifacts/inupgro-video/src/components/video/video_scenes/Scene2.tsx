import { motion } from 'framer-motion';

export function Scene2() {
  const features = ["Professional Website", "Google SEO", "Social Media (SMO)", "Analytics", "WhatsApp Enquiries"];

  return (
    <motion.div
      className="absolute inset-0 flex items-center px-[8vw]"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1, type: "spring", damping: 20, stiffness: 100 }}
    >
      <motion.video
        src={`${import.meta.env.BASE_URL}videos/digital-presence.mp4`}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover origin-right"
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-brand-navy/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />

      <div className="relative z-10 w-full max-w-[50vw]">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[4vw] leading-[1.1] font-extrabold mb-[4vh]"
        >
          <span className="text-brand-gold">Inupgro</span> delivers everything in one package.
        </motion.h1>

        <div className="flex flex-col gap-[2vh]">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30, rotateX: 90 }}
              animate={{ opacity: 1, x: 0, rotateX: 0 }}
              transition={{ delay: 1 + i * 0.15, type: "spring", damping: 15 }}
              className="flex items-center gap-[1.5vw]"
            >
              <div className="w-[1vw] h-[1vw] bg-brand-gold rounded-full shrink-0" />
              <span className="text-[2vw] font-bold tracking-wide">{feat}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-[5vh] inline-block bg-brand-white text-brand-navy px-[3vw] py-[1.5vh] rounded-xl font-extrabold text-[1.8vw] tracking-wider uppercase"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2.5, type: "spring", damping: 12, stiffness: 200 }}
        >
          Not just web dev. A complete presence.
        </motion.div>
      </div>
      
      {/* Decorative floating shapes */}
      <motion.div
        className="absolute right-[10vw] top-[20vh] w-[30vw] h-[30vw] border-[2px] border-brand-gold/30 rounded-full"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 180 }}
        transition={{ duration: 5.5, ease: "linear" }}
      />
      <motion.div
        className="absolute right-[5vw] bottom-[10vh] w-[20vw] h-[20vw] border border-brand-white/20 rounded-full"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: -90 }}
        transition={{ delay: 0.5, duration: 5, ease: "linear" }}
      />
    </motion.div>
  );
}