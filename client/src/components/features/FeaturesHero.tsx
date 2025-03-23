import AnimatedContainer from "@/components/ui/animated-container";

const FeaturesHero = () => {
  return (
    <div className="gradient-bg py-16 pt-32">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedContainer animation="fadeUp" delay={0.2}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-white">LogiHubb</span>
            <span className="text-[#E67E22]"> Features</span>
          </h1>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.4}>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Discover the comprehensive set of features that make LogiHubb the leading transport management solution in the industry.
          </p>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.6}>
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mt-8">
            <div className="absolute inset-0 bg-[#1E3A5F] bg-opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
              alt="Logistics operations dashboard" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">End-to-End Visibility</h3>
                <p className="text-lg text-gray-200 max-w-2xl">Complete control and real-time insights across your entire supply chain</p>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default FeaturesHero;
