
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      year: "2020-2022",
      description: "Specialized in Machine Learning and Software Engineering. Graduated Magna Cum Laude with a 3.8 GPA.",
      courses: ["Advanced Algorithms", "Machine Learning", "Database Systems", "Software Architecture"]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      year: "2016-2020",
      description: "Comprehensive foundation in computer science principles and software development practices.",
      courses: ["Data Structures", "Web Development", "Mobile App Development", "Software Testing"]
    },
    {
      degree: "High School Diploma",
      school: "Lincoln High School",
      year: "2012-2016",
      description: "Valedictorian, National Honor Society member, and Computer Science Club President.",
      courses: ["AP Computer Science", "AP Mathematics", "AP Physics", "AP English"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="education">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My educational journey has provided me with a strong foundation in computer science 
            and software engineering principles.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                      <span className="text-blue-600 font-medium">{edu.year}</span>
                    </div>
                    <h4 className="text-lg text-blue-600 mb-3">{edu.school}</h4>
                    <p className="text-gray-600 mb-4">{edu.description}</p>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Key Courses:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <span 
                            key={courseIndex}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                          >
                            {course}
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

export default Education;
