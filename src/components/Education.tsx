import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science, Analytics & Engineering",
      school: "Arizona State University",
      year: "2023 - Present",
      description: "Specializing in Machine Learning, Computer Vision, and Optimization. Focus on deep learning research and production ML systems.",
      gpa: "3.57 GPA (Cum laude)",
      courses: [
        "Deep Learning",
        "Computer Vision",
        "Optimization",
        "Statistical Machine Learning",
        "Natural Language Processing",
        "Cloud Computing"
      ]
    },
    {
      degree: "Bachelor of Technology in Electronics & Communication",
      school: "University in India",
      year: "2018 - 2022",
      description: "Strong foundation in signal processing, embedded systems, and applied mathematics. Research focus on image processing and computer vision.",
      gpa: "8.74 (Magna cum laude)",
      courses: [
        "Digital Signal Processing",
        "Embedded Systems",
        "Image Processing",
        "Machine Learning Fundamentals",
        "Linear Algebra",
        "Probability & Statistics"
      ]
    }
  ];

  const certifications = [
    { name: "AWS Certified Machine Learning", issuer: "Amazon Web Services" },
    { name: "Deep Learning Specialization", issuer: "Coursera / deeplearning.ai" },
    { name: "TensorFlow Developer Certificate", issuer: "Google" },
  ];

  return (
    <section className="py-24 gradient-pastel-soft" id="education">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-blue via-pastel-lavender to-pastel-pink mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning in AI/ML
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card rounded-2xl p-8 h-full hover-lift shadow-pastel">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pastel-lavender to-pastel-pink flex items-center justify-center shrink-0">
                    <GraduationCap className="w-7 h-7 text-foreground/80" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-pastel-cyan/30 text-foreground/80 whitespace-nowrap">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium mt-1">{edu.school}</p>
                    {edu.gpa && (
                      <span className="inline-block mt-2 text-sm font-medium px-3 py-1 rounded-full bg-pastel-mint/30 text-foreground/80">
                        {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{edu.description}</p>

                <div>
                  <h5 className="font-medium text-foreground mb-3 text-sm">Key Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-pastel-blue/20 text-foreground/80"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-4 flex items-center gap-4 hover-lift"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pastel-blue to-pastel-lavender flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-foreground/80" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
