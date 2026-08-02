import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function Scene5() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-brand-navy overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* Animated background rings */}
      <motion.div
        className="absolute w-[100vw] h-[100vw] border border-brand-gold/10 rounded-full"
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 2, opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />
      <motion.div
        className="absolute w-[100vw] h-[100vw] border border-brand-gold/20 rounded-full"
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 1 }}
        transition={{ delay: 0.5, duration: 4, ease: "easeOut" }}
      />
      <motion.div
        className="absolute w-[100vw] h-[100vw] border border-brand-gold/30 rounded-full bg-brand-gold/5"
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 4, ease: "easeOut" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-[5vw]">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", damping: 15 }}
          className="mb-[4vh]"
        >
          <h2 className="text-[3vw] font-bold text-brand-gray tracking-widest uppercase">
            Transform Your Institute Today
          </h2>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ delay: 2, type: "spring", damping: 12, stiffness: 100 }}
          className="text-[7vw] font-black tracking-tighter leading-none mb-[8vh]"
        >
          <span className="text-brand-white">Go Digital with </span>
          <span className="text-brand-gold">Inupgro.</span>
        </motion.h1>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.8, type: "spring", damping: 15, stiffness: 200 }}
          className="flex items-center gap-[2vw] bg-[#25D366] text-white px-[4vw] py-[2.5vh] rounded-full shadow-[0_0_40px_rgba(37,211,102,0.4)]"
        >
          <MessageCircle className="w-[4vw] h-[4vw]" />
          <div className="flex flex-col text-left">
            <span className="text-[1.2vw] font-bold uppercase tracking-wider opacity-90">WhatsApp Us</span>
            <span className="text-[3vw] font-black leading-none">+91 82096 47142</span>
          </div>
        </motion.div>
      </div>
      
      {/* Glint effect on button */}
      <motion.div
        className="absolute bottom-[20vh] w-[20vw] h-[10vh] bg-white/30 blur-2xl rounded-full pointer-events-none"
        initial={{ x: "-50vw", opacity: 0 }}
        animate={{ x: "50vw", opacity: [0, 1, 0] }}
        transition={{ delay: 3.5, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
}