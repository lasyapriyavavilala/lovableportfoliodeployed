import aiMlImage from "@/assets/ai-ml-about.jpg";
const About = () => {
  return <section className="py-20 bg-gradient-to-r from-white to-purple-50" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={aiMlImage} alt="AI and machine learning illustration" width={1024} height={1024} loading="lazy" className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-h-96 w-full object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Turning Data into Intelligence
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Data Scientist with 3+ years of experience in predictive modeling, ML pipelines, and AI-driven analytics across diverse industries. I translate complex analytical findings into actionable insights that drive operational decisions for business stakeholders.</p>
            <p className="text-gray-600 mb-6 leading-relaxed">My work spans GenAI agents, RAG pipelines, deep learning, computer vision, and end-to-end ML systems — from prototyping in research to deploying production-grade solutions on the cloud. I believe in clean code, explainable models, and continuous learning.</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                <div className="text-2xl font-bold text-foreground">16+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                <div className="text-2xl font-bold text-foreground">3+</div>
                <div className="text-sm text-muted-foreground">Years of Professional Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;