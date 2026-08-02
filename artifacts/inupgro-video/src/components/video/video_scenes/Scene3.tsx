import { motion } from 'framer-motion';

export function Scene3() {
  const images = [
    'aone.webp', 'banyantree.webp', 'dps-udaipur.webp',
    'rookwood.webp', 'semount.webp', 'st-marys.webp',
    'stpaul.webp', 'stteresa.webp', 'vardhman.webp'
  ];

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-brand-navy"
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 flex flex-wrap gap-[1vw] p-[2vw] opacity-40">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="w-[32%] h-[30vh] rounded-2xl overflow-hidden shadow-2xl relative"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.1, type: "spring", damping: 15 }}
          >
            <motion.img
              src={`${import.meta.env.BASE_URL}portfolio/${img}`}
              className="w-full h-full object-cover object-top"
              animate={{ y: ["0%", "-30%", "0%"] }}
              transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-brand-navy/30" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring", damping: 12, stiffness: 200 }}
          className="bg-brand-gold text-brand-navy px-[4vw] py-[2vh] rounded-full mb-[3vh] shadow-[0_0_50px_rgba(234,179,8,0.5)]"
        >
          <h2 className="text-[5vw] font-black uppercase tracking-tighter leading-none">
            500+ Institutes
          </h2>
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-[3vw] font-bold text-brand-white drop-shadow-lg"
        >
          Trust Inupgro for their digital growth.
        </motion.h3>
      </div>
      
      {/* Flash effect */}
      <motion.div
        className="absolute inset-0 bg-brand-white pointer-events-none z-20"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.div>
  );
}