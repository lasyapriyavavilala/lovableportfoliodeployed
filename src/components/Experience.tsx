import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "Research Lab / Company",
      period: "2023 - Present",
      location: "Arizona, USA",
      description: "Developing advanced computer vision systems and optimization algorithms for real-world applications.",
      achievements: [
        "Built real-time pose estimation and threat detection systems",
        "Implemented 3D reconstruction pipelines using NeRF Studio",
        "Designed agentic AI systems for healthcare diagnostics"
      ],
      technologies: ["PyTorch", "TensorFlow", "AWS", "OpenCV", "LangChain"]
    },
    {
      title: "Data Science Intern",
      company: "Tech Company",
      period: "2022 - 2023",
      location: "Remote",
      description: "Worked on deep learning models and cloud-based ML infrastructure.",
      achievements: [
        "Developed face detection and recognition pipelines on AWS Greengrass",
        "Optimized deep learning models for edge deployment",
        "Created data pipelines for large-scale image processing"
      ],
      technologies: ["Python", "AWS Lambda", "Docker", "PostgreSQL", "Redis"]
    },
    {
      title: "Research Assistant",
      company: "University Research",
      period: "2021 - 2022",
      location: "India",
      description: "Conducted research on overparameterization in deep neural networks and image processing techniques.",
      achievements: [
        "Published research on neural network optimization",
        "Developed multi-resolution image blending algorithms",
        "Built simulation models for autonomous systems"
      ],
      technologies: ["MATLAB", "Python", "NumPy", "SciPy", "Jupyter"]
    }
  ];

  return (
    <section className="py-24 gradient-pastel-soft" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-blue via-pastel-lavender to-pastel-pink mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in AI/ML, from research to production systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pastel-blue via-pastel-lavender to-pastel-pink transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-pastel-blue to-pastel-lavender transform -translate-x-1/2 border-4 border-background z-10" />

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card rounded-2xl p-6 hover-lift shadow-pastel">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pastel-blue to-pastel-lavender flex items-center justify-center shrink-0">
                        <Briefcase className="w-6 h-6 text-foreground/80" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                          <span className="text-sm font-medium px-3 py-1 rounded-full bg-pastel-lavender/30 text-foreground/80">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h5 className="font-medium text-foreground mb-2 text-sm">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-pastel-cyan mt-2 shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-pastel-blue/20 text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
