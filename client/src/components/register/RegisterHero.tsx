import AnimatedContainer from "@/components/ui/animated-container";

const RegisterHero = () => {
  return (
    <div className="gradient-bg py-16 pt-32">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedContainer animation="fadeUp" delay={0.2}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-white">Register for</span>
            <span className="text-[#2980B9]"> Logi</span><span className="text-[#E67E22]">Hubb</span>
          </h1>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.4}>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Take the first step toward transforming your logistics operations with <span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span>'s AI-powered TMS solution.
          </p>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.6}>
          <div className="bg-[#1E3A5F] p-6 rounded-lg max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3">
                <div className="w-24 h-24 rounded-full bg-[#0F2A47] flex items-center justify-center mx-auto">
                  <i className="fas fa-rocket text-[#E67E22] text-4xl"></i>
                </div>
              </div>
              <div className="md:w-2/3 text-left">
                <h3 className="text-xl font-semibold mb-2">Start Your Digital Transformation</h3>
                <p className="text-gray-300">
                  Fill out the form below to request a personalized demo and consultation. 
                  Our team will contact you within 24 hours to discuss your specific logistics needs.
                </p>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default RegisterHero;
