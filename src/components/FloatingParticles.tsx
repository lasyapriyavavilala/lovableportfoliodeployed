import { motion } from "framer-motion";

const FloatingParticles = () => {
  const particles = [
    { size: 80, x: "10%", y: "20%", delay: 0, color: "bg-pastel-blue/40" },
    { size: 120, x: "80%", y: "15%", delay: 1, color: "bg-pastel-lavender/40" },
    { size: 60, x: "70%", y: "60%", delay: 2, color: "bg-pastel-cyan/40" },
    { size: 100, x: "20%", y: "70%", delay: 1.5, color: "bg-pastel-pink/40" },
    { size: 50, x: "50%", y: "40%", delay: 0.5, color: "bg-pastel-mint/40" },
    { size: 70, x: "90%", y: "80%", delay: 3, color: "bg-pastel-blue/30" },
    { size: 90, x: "5%", y: "50%", delay: 2.5, color: "bg-pastel-lavender/30" },
    { size: 40, x: "35%", y: "85%", delay: 1, color: "bg-pastel-cyan/30" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-2xl ${particle.color}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.1, 1, 0.95, 1],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
