import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";
import profilePhoto from "@/assets/profile-photo-2025-11-07.jpeg";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-pastel-soft">
      <FloatingParticles />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10 pt-20">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="mb-8">
          <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 100
        }} className="w-36 h-36 mx-auto mb-8 rounded-full gradient-border p-1">
            <img src={profilePhoto} alt="Jahnavi Lasyapriya Vavilala" className="w-full h-full rounded-full object-cover" />
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="text-5xl lg:text-7xl mb-4 md:text-3xl font-mono font-semibold text-red-900">Jahnavi Lasyapriya
Vavilala ˚.🎀༘⋆<br />
            Vavilala
          </motion.h1>

          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="text-xl text-muted-foreground mb-6 font-medium md:text-lg">Gen AI | ML Engineer | Computer Vision | Optimization | Analytics | Cloud | Data Engineering </motion.h2>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5
        }} className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">Building intelligent systems across optimization, deep learning, 3D vision, and agentic AI pipelines.</motion.p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6
      }} className="flex flex-wrap justify-center gap-4 mb-10">
          <Button size="lg" className="bg-gradient-to-r from-pastel-blue via-pastel-lavender to-pastel-cyan text-foreground hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-pastel rounded-full px-8">
            <ArrowDown className="w-4 h-4 mr-2" />
            View Projects
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-2 hover:bg-pastel-lavender/20 transition-all duration-300 hover:scale-105">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.7
      }} className="flex justify-center gap-6">
          {[{
          icon: Github,
          href: "#",
          label: "GitHub"
        }, {
          icon: Linkedin,
          href: "#",
          label: "LinkedIn"
        }, {
          icon: Mail,
          href: "#",
          label: "Email"
        }].map(({
          icon: Icon,
          href,
          label
        }) => <a key={label} href={href} className="p-3 rounded-full glass-card hover:shadow-pastel transition-all duration-300 hover:scale-110 text-muted-foreground hover:text-foreground" aria-label={label}>
              <Icon className="w-5 h-5" />
            </a>)}
        </motion.div>
      </div>

      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }}>
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;