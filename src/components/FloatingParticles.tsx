import { motion } from "framer-motion";

const Flower = ({ x, y, size, delay, opacity }: { x: string; y: string; size: number; delay: number; opacity: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y, opacity }}
    animate={{ y: [0, -15, 0, 10, 0], x: [0, 8, -5, 3, 0], rotate: [0, 15, -10, 5, 0] }}
    transition={{ duration: 10, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <ellipse
          key={i}
          cx={30 + 13 * Math.cos((angle * Math.PI) / 180)}
          cy={30 + 13 * Math.sin((angle * Math.PI) / 180)}
          rx="9"
          ry="6"
          transform={`rotate(${angle}, ${30 + 13 * Math.cos((angle * Math.PI) / 180)}, ${30 + 13 * Math.sin((angle * Math.PI) / 180)})`}
          fill="white"
          fillOpacity="0.85"
        />
      ))}
      <circle cx="30" cy="30" r="7" fill="white" fillOpacity="0.95" />
    </svg>
  </motion.div>
);

const FloatingParticles = () => {
  const blobs = [
    { size: 100, x: "8%",  y: "15%", delay: 0,   color: "bg-yellow-200/50" },
    { size: 140, x: "75%", y: "10%", delay: 1,   color: "bg-yellow-100/60" },
    { size: 70,  x: "65%", y: "55%", delay: 2,   color: "bg-amber-100/40" },
    { size: 120, x: "15%", y: "65%", delay: 1.5, color: "bg-yellow-200/40" },
    { size: 80,  x: "88%", y: "75%", delay: 3,   color: "bg-yellow-100/50" },
    { size: 60,  x: "40%", y: "80%", delay: 0.5, color: "bg-amber-50/50"   },
  ];

  const flowers = [
    { x: "5%",  y: "8%",  size: 48, delay: 0,   opacity: 0.7 },
    { x: "82%", y: "5%",  size: 56, delay: 1.2, opacity: 0.65 },
    { x: "92%", y: "42%", size: 40, delay: 2.5, opacity: 0.6 },
    { x: "3%",  y: "55%", size: 52, delay: 0.8, opacity: 0.7 },
    { x: "55%", y: "88%", size: 44, delay: 1.8, opacity: 0.65 },
    { x: "28%", y: "12%", size: 36, delay: 3.2, opacity: 0.55 },
    { x: "70%", y: "78%", size: 50, delay: 2.0, opacity: 0.6 },
    { x: "45%", y: "30%", size: 32, delay: 1.5, opacity: 0.5 },
    { x: "18%", y: "88%", size: 42, delay: 0.4, opacity: 0.65 },
    { x: "88%", y: "25%", size: 38, delay: 2.8, opacity: 0.55 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, index) => (
        <motion.div
          key={`blob-${index}`}
          className={`absolute rounded-full blur-3xl ${blob.color}`}
          style={{ width: blob.size, height: blob.size, left: blob.x, top: blob.y }}
          animate={{ y: [0, -25, 0, 18, 0], x: [0, 12, -8, 4, 0], scale: [1, 1.1, 1, 0.95, 1] }}
          transition={{ duration: 9 + index, repeat: Infinity, delay: blob.delay, ease: "easeInOut" }}
        />
      ))}
      {flowers.map((f, i) => (
        <Flower key={`flower-${i}`} x={f.x} y={f.y} size={f.size} delay={f.delay} opacity={f.opacity} />
      ))}
    </div>
  );
};

export default FloatingParticles;
