import AnimatedContainer from "@/components/ui/animated-container";

const AboutHero = () => {
  return (
    <div className="gradient-bg py-16 pt-32">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedContainer animation="fadeUp" delay={0.2}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-white">About</span>
            <span className="text-[#2980B9]"> Logi</span><span className="text-[#E67E22]">Hubb</span>
          </h1>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.4}>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Learn about our mission to transform transport management with AI/ML technology and our journey to becoming the leading TMS provider.
          </p>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.6}>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-[#1E3A5F] px-4 py-2 rounded-full">
              <span className="text-[#E67E22] font-semibold">Founded 2018</span>
            </div>
            <div className="bg-[#1E3A5F] px-4 py-2 rounded-full">
              <span className="text-[#E67E22] font-semibold">Global Presence</span>
            </div>
            <div className="bg-[#1E3A5F] px-4 py-2 rounded-full">
              <span className="text-[#E67E22] font-semibold">AI/ML Pioneers</span>
            </div>
            <div className="bg-[#1E3A5F] px-4 py-2 rounded-full">
              <span className="text-[#E67E22] font-semibold">Logistics Experts</span>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default AboutHero;
