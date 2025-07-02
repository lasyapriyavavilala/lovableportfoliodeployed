
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of scalable web applications serving 100K+ users. Mentoring junior developers and architecting cloud-native solutions.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led a team of 5 developers on major product redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      description: "Developed and maintained multiple client-facing applications. Collaborated with designers and product managers to deliver high-quality features.",
      achievements: [
        "Built 3 major features that increased user engagement by 25%",
        "Maintained 99.9% uptime for critical business applications",
        "Implemented automated testing reducing bugs by 50%"
      ],
      technologies: ["Vue.js", "Python", "Django", "MySQL", "Redis"]
    },
    {
      title: "Software Engineering Intern",
      company: "Google",
      period: "Summer 2019",
      location: "Mountain View, CA",
      description: "Worked on Google Search infrastructure team. Developed tools to improve search result accuracy and performance.",
      achievements: [
        "Contributed to search algorithm improvements",
        "Built internal tools used by 200+ engineers",
        "Presented findings to senior leadership team"
      ],
      technologies: ["Java", "C++", "Go", "BigQuery", "TensorFlow"]
    }
  ];

  return (
    <section className="py-20 bg-white" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey has been marked by continuous growth, learning, 
            and the opportunity to work on impactful projects.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <span className="text-blue-600 font-medium">{exp.period}</span>
                    </div>
                    <h4 className="text-lg text-blue-600 mb-1">{exp.company}</h4>
                    <p className="text-gray-500 mb-4">{exp.location}</p>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
