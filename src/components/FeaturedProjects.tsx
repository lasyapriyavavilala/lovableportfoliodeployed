import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      title: "Real-Time Pose Estimation & Threat Detection",
      description: "Advanced computer vision system for real-time human pose estimation and threat classification using deep learning models.",
      category: "Computer Vision",
      technologies: ["PyTorch", "OpenCV", "YOLO", "MediaPipe"],
      gradient: "from-pastel-cyan to-pastel-blue",
    },
    {
      title: "3D Reconstruction with NeRF Studio",
      description: "Neural radiance fields implementation for photorealistic 3D scene reconstruction from 2D images.",
      category: "Deep Learning",
      technologies: ["NeRF", "PyTorch", "CUDA", "Blender"],
      gradient: "from-pastel-lavender to-pastel-pink",
    },
    {
      title: "Agentic AI Breast Cancer Risk Assessment",
      description: "Autonomous AI pipeline for breast cancer risk prediction using multi-modal data and agentic reasoning.",
      category: "Agentic AI",
      technologies: ["LangChain", "GPT-4", "Python", "FastAPI"],
      gradient: "from-pastel-pink to-pastel-lavender",
    },
    {
      title: "Overparameterization in Deep Learning",
      description: "Research experiments exploring the effects of overparameterization on neural network generalization and optimization.",
      category: "Deep Learning",
      technologies: ["TensorFlow", "NumPy", "Matplotlib", "JAX"],
      gradient: "from-pastel-blue to-pastel-cyan",
    },
    {
      title: "Multi-Resolution Blending & Image Stitching",
      description: "Advanced image processing pipeline for seamless panorama creation using Laplacian pyramids.",
      category: "Computer Vision",
      technologies: ["OpenCV", "Python", "NumPy", "SciPy"],
      gradient: "from-pastel-mint to-pastel-cyan",
    },
    {
      title: "AWS Greengrass Face Detection Pipeline",
      description: "Edge computing solution for face detection and recognition deployed on AWS Greengrass IoT devices.",
      category: "Cloud",
      technologies: ["AWS", "Lambda", "Greengrass", "DeepLens"],
      gradient: "from-pastel-cyan to-pastel-mint",
    },
    {
      title: "Household Power Consumption Analysis & Classification",
      description:
        "Time-series feature engineering and ML classification to categorize household energy usage into low/medium/high consumption patterns.",
      category: "Time Series",
      technologies: [
        "Time Series",
        "Machine Learning",
        "Energy Analytics",
        "Classification",
      ],
      gradient: "from-pastel-blue to-pastel-lavender",
      imageUrl: "/placeholder.svg",
      githubUrl:
        "https://github.com/lasyapriyavavilala/Lasyapriya-Portfolio.github.io/tree/main/Household-Power-Consumption-Analysis",
    },
  ];

  const getCategoryChip = (category: string) => {
    const chipClasses: Record<string, string> = {
      "Computer Vision": "chip-computer-vision",
      "Deep Learning": "chip-deep-learning",
      "Agentic AI": "chip-agentic-ai",
      "Cloud": "chip-cloud",
      "Optimization": "chip-optimization",
      "Time Series": "chip-time-series",
    };
    return chipClasses[category] || "chip-deep-learning";
  };

  return (
    <section className="py-24 bg-background" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-blue via-pastel-lavender to-pastel-pink mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in AI, computer vision, and cloud engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl overflow-hidden hover-lift shadow-pastel gradient-border">
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                {/* Optional preview image */}
                {project.imageUrl && (
                  <div className="px-6 pt-6">
                    <div className="relative overflow-hidden rounded-xl border border-border/60 bg-muted/30">
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} time-series chart placeholder`}
                        loading="lazy"
                        className="h-32 w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-pastel-blue/10 via-pastel-lavender/10 to-pastel-pink/10" />
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryChip(project.category)}`}>
                      {project.category}
                    </span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-full hover:bg-pastel-lavender/20 transition-colors"
                          aria-label={`Open ${project.title} on GitHub`}
                        >
                          <Github className="w-4 h-4 text-muted-foreground" />
                        </a>
                      ) : (
                        <button className="p-2 rounded-full hover:bg-pastel-lavender/20 transition-colors">
                          <Github className="w-4 h-4 text-muted-foreground" />
                        </button>
                      )}
                      <button className="p-2 rounded-full hover:bg-pastel-lavender/20 transition-colors">
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3 transition-all">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-lg bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/projects">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 group hover:bg-pastel-lavender/20"
            >
              View All 20 Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
