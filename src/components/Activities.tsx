
import { Award, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Activities = () => {
  const activities = [
    {
      category: "Leadership",
      icon: Users,
      items: [
        {
          title: "President, Computer Science Society",
          organization: "Stanford University",
          period: "2021-2022",
          description: "Led a team of 15 students in organizing hackathons, workshops, and networking events. Increased membership by 40% and secured $50K in sponsorships."
        },
        {
          title: "Team Lead, Google Developer Student Club",
          organization: "UC Berkeley",
          period: "2019-2020",
          description: "Mentored 30+ students in web development and mobile app development. Organized weekly coding sessions and industry speaker events."
        }
      ]
    },
    {
      category: "Volunteer Work",
      icon: Heart,
      items: [
        {
          title: "Code Coach",
          organization: "Code.org",
          period: "2020-Present",
          description: "Teaching programming fundamentals to underprivileged students. Helped 100+ students learn their first programming language."
        },
        {
          title: "Tech Mentor",
          organization: "Girls Who Code",
          period: "2019-2021",
          description: "Mentored young women interested in technology careers. Provided guidance on career paths and technical skill development."
        }
      ]
    },
    {
      category: "Awards & Recognition",
      icon: Award,
      items: [
        {
          title: "Winner, Best Mobile App",
          organization: "Stanford Hackathon 2022",
          period: "2022",
          description: "Developed an AI-powered accessibility app that won first place among 200+ participants. App featured in local tech news."
        },
        {
          title: "Dean's List",
          organization: "UC Berkeley",
          period: "2018-2020",
          description: "Consistently maintained high academic performance with GPA above 3.7 for four consecutive semesters."
        },
        {
          title: "Open Source Contributor Award",
          organization: "GitHub",
          period: "2021",
          description: "Recognized for significant contributions to open source projects with over 500 commits and 50+ merged pull requests."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="activities">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Extracurricular Activities</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beyond coding, I'm passionate about giving back to the community, leading teams, 
            and continuously learning and growing.
          </p>
        </div>

        <div className="space-y-12">
          {activities.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-100 p-3 rounded-full">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-gray-900 flex-1">{item.title}</h4>
                        <span className="text-blue-600 font-medium text-sm ml-4">{item.period}</span>
                      </div>
                      <h5 className="text-blue-600 font-medium mb-3">{item.organization}</h5>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills & Interests */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Skills & Interests</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Technical Skills</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {["JavaScript", "Python", "React", "Node.js", "AWS", "Docker", "GraphQL", "MongoDB"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Languages</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-green-600">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>Spanish</span>
                  <span className="text-green-600">Fluent</span>
                </div>
                <div className="flex justify-between">
                  <span>French</span>
                  <span className="text-green-600">Intermediate</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Hobbies</h4>
              <div className="text-center space-y-2 text-gray-600">
                <div>Photography</div>
                <div>Rock Climbing</div>
                <div>Chess</div>
                <div>Cooking</div>
                <div>Travel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
