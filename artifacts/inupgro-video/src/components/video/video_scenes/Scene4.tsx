import { motion } from 'framer-motion';

export function Scene4() {
  const plans = [
    { duration: "1 Year", price: "₹15,000", tag: "STARTER" },
    { duration: "5 Years", price: "₹50,000", tag: "POPULAR" },
    { duration: "10 Years", price: "₹80,000", tag: "BEST VALUE" },
  ];

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-brand-white text-brand-navy px-[5vw]"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ scale: 1.2, opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="absolute inset-0 bg-brand-navy opacity-[0.02]" />
      
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mb-[6vh] text-center"
      >
        <h2 className="text-[3vw] font-bold text-brand-navy-light uppercase tracking-widest mb-[1vh]">Complete Package</h2>
        <h1 className="text-[5vw] font-black tracking-tighter leading-none">
          Unbeatable Value.
        </h1>
      </motion.div>

      <div className="flex gap-[3vw] w-full max-w-[80vw] justify-center perspective-[1000px]">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className={`flex-1 rounded-3xl p-[2.5vw] flex flex-col items-center justify-center shadow-2xl relative overflow-hidden ${
              i === 2 ? 'bg-brand-navy text-brand-white scale-110 z-10' : 'bg-gray-100 text-brand-navy'
            }`}
            initial={{ opacity: 0, rotateY: -30, z: -200, y: 50 }}
            animate={{ opacity: 1, rotateY: 0, z: 0, y: 0 }}
            transition={{ delay: 1.2 + i * 0.2, type: "spring", damping: 15, stiffness: 100 }}
          >
            {i === 2 && (
              <motion.div
                className="absolute inset-0 bg-brand-gold/20"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            
            <div className={`text-[1.2vw] font-bold uppercase tracking-widest mb-[2vh] px-[1vw] py-[0.5vh] rounded-full ${
              i === 2 ? 'bg-brand-gold text-brand-navy' : 'bg-brand-navy/10'
            }`}>
              {plan.tag}
            </div>
            
            <div className="text-[2.5vw] font-semibold mb-[1vh]">{plan.duration}</div>
            <div className={`text-[4vw] font-black tracking-tighter ${i === 2 ? 'text-brand-gold' : ''}`}>
              {plan.price}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}