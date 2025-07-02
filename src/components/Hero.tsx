
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            John Doe
          </h1>
          <h2 className="text-2xl text-blue-600 mb-6 font-medium">
            Full Stack Developer & Designer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and beautiful user experiences. 
            I specialize in modern web technologies and love turning ideas into reality.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </div>
        
        <div className="flex justify-center gap-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
