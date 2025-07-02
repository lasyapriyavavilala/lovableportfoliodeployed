
const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
              alt="About me"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Crafting Digital Experiences
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 5 years of experience in web development, I've had the privilege 
              of working with diverse teams and technologies. My journey began with a 
              curiosity for how things work on the web, and has evolved into a passion 
              for creating meaningful digital experiences.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I believe in the power of clean code, thoughtful design, and continuous 
              learning. When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the community.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
