import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectsArchive = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Computer Vision",
    "Deep Learning",
    "Optimization",
    "Cloud",
    "Agentic AI",
    "Simulation",
    "GenAI",
    "Databases",
  ];

  const allProjects = [
    // Featured Projects
    { title: "Real-Time Pose Estimation & Threat Detection", category: "Computer Vision", description: "Advanced computer vision system for real-time human pose estimation and threat classification.", technologies: ["PyTorch", "OpenCV", "YOLO", "MediaPipe"] },
    { title: "3D Reconstruction with NeRF Studio", category: "Deep Learning", description: "Neural radiance fields implementation for photorealistic 3D scene reconstruction.", technologies: ["NeRF", "PyTorch", "CUDA", "Blender"] },
    { title: "Agentic AI Breast Cancer Risk Assessment", category: "Agentic AI", description: "Autonomous AI pipeline for breast cancer risk prediction using multi-modal data.", technologies: ["LangChain", "GPT-4", "Python", "FastAPI"] },
    { title: "Overparameterization in Deep Learning", category: "Deep Learning", description: "Research on neural network generalization and optimization with overparameterization.", technologies: ["TensorFlow", "NumPy", "JAX", "Matplotlib"] },
    { title: "Multi-Resolution Blending & Image Stitching", category: "Computer Vision", description: "Seamless panorama creation using Laplacian pyramids and advanced blending.", technologies: ["OpenCV", "Python", "NumPy", "SciPy"] },
    { title: "AWS Greengrass Face Detection Pipeline", category: "Cloud", description: "Edge computing solution for face detection deployed on AWS IoT devices.", technologies: ["AWS", "Lambda", "Greengrass", "DeepLens"] },
    
    // Additional Projects
    { title: "Gradient Descent Optimization Variants", category: "Optimization", description: "Implementation and comparison of Adam, RMSprop, AdaGrad, and custom optimizers.", technologies: ["Python", "NumPy", "JAX", "Matplotlib"] },
    { title: "Autonomous Vehicle Simulation", category: "Simulation", description: "Reinforcement learning based autonomous driving in CARLA simulator.", technologies: ["CARLA", "PyTorch", "ROS", "Python"] },
    { title: "LLM-Powered Code Assistant", category: "GenAI", description: "AI coding assistant using fine-tuned language models for code generation.", technologies: ["Transformers", "HuggingFace", "FastAPI", "React"] },
    { title: "Time Series Forecasting with Transformers", category: "Deep Learning", description: "Temporal Fusion Transformer for multi-horizon forecasting.", technologies: ["PyTorch", "Pandas", "Plotly", "Darts"] },
    { title: "Object Detection on Edge Devices", category: "Computer Vision", description: "Optimized YOLO models for real-time detection on Raspberry Pi.", technologies: ["TensorRT", "OpenCV", "ONNX", "Raspberry Pi"] },
    { title: "Distributed Database Sharding", category: "Databases", description: "Horizontal scaling solution for high-throughput data systems.", technologies: ["PostgreSQL", "Redis", "Python", "Docker"] },
    { title: "Semantic Segmentation for Medical Imaging", category: "Computer Vision", description: "U-Net based segmentation for tumor detection in MRI scans.", technologies: ["PyTorch", "MONAI", "NIfTI", "SimpleITK"] },
    { title: "Convex Optimization Solver", category: "Optimization", description: "Custom solver for linear programming and quadratic optimization problems.", technologies: ["CVXPY", "NumPy", "SciPy", "Gurobi"] },
    { title: "Multi-Agent Reinforcement Learning", category: "Agentic AI", description: "Cooperative and competitive multi-agent systems in custom environments.", technologies: ["RLlib", "PettingZoo", "PyTorch", "Gymnasium"] },
    { title: "Real-Time Data Pipeline on Kafka", category: "Cloud", description: "Streaming data architecture for real-time ML inference.", technologies: ["Kafka", "Spark", "AWS", "Python"] },
    { title: "Physics-Informed Neural Networks", category: "Simulation", description: "Solving PDEs with neural networks constrained by physics.", technologies: ["DeepXDE", "PyTorch", "NumPy", "Matplotlib"] },
    { title: "Vector Database for RAG Systems", category: "Databases", description: "High-performance vector search for retrieval-augmented generation.", technologies: ["Pinecone", "LangChain", "FastAPI", "PostgreSQL"] },
    { title: "Text-to-Image Diffusion Model", category: "GenAI", description: "Custom stable diffusion implementation with LoRA fine-tuning.", technologies: ["Diffusers", "PyTorch", "HuggingFace", "Gradio"] },
  ];

  const filteredProjects = activeFilter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  const getCategoryChip = (category: string) => {
    const chipClasses: Record<string, string> = {
      "Computer Vision": "chip-computer-vision",
      "Deep Learning": "chip-deep-learning",
      "Agentic AI": "chip-agentic-ai",
      "Cloud": "chip-cloud",
      "Optimization": "chip-optimization",
      "Simulation": "chip-simulation",
      "GenAI": "chip-genai",
      "Databases": "chip-databases",
    };
    return chipClasses[category] || "chip-deep-learning";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link to="/">
              <Button variant="ghost" className="mb-6 hover:bg-pastel-lavender/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              A comprehensive archive of my work across AI, machine learning, cloud engineering, and more.
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-pastel-blue to-pastel-lavender text-foreground shadow-pastel"
                      : "glass-card hover:shadow-pastel text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full glass-card rounded-2xl overflow-hidden hover-lift shadow-pastel gradient-border">
                  <div className="h-1 bg-gradient-to-r from-pastel-blue via-pastel-lavender to-pastel-pink" />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryChip(project.category)}`}>
                        {project.category}
                      </span>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 rounded-full hover:bg-pastel-lavender/20 transition-colors">
                          <Github className="w-4 h-4 text-muted-foreground" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-pastel-lavender/20 transition-colors">
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:gradient-text transition-all line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsArchive;
