import { ANALYTICS_REPORTING } from "@/lib/constants";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";

const Analytics = () => {
  return (
    <div className="py-16 bg-[#1E293B]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            Analytics & <span className="text-[#E67E22]">Reporting</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Data-driven insights to optimize your logistics operations with <span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span>'s powerful analytics engine
          </p>
        </AnimatedContainer>
        
        {/* Featured Analytics Visualization */}
        <AnimatedContainer animation="fadeUp" className="mb-16">
          <div className="relative h-64 md:h-80 bg-[#1E3A5F] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Grid lines */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="border border-white"></div>
                ))}
              </div>
              
              {/* Animated data points */}
              <div className="absolute inset-0 flex items-end justify-around px-8 pb-8">
                {[65, 40, 75, 60, 80, 50, 90, 45, 70, 55].map((height, i) => (
                  <motion.div
                    key={i}
                    className="w-2 md:w-3 bg-[#2980B9] rounded-t-sm opacity-80"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}px` }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: i % 3
                    }}
                  />
                ))}
              </div>
              
              {/* Line chart */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
                  <motion.path
                    d="M 50,250 C 100,200 150,240 200,180 S 300,100 350,150 S 450,120 550,50"
                    fill="none"
                    stroke="#E67E22"
                    strokeWidth="3"
                    strokeDasharray="650"
                    strokeDashoffset="650"
                    strokeLinecap="round"
                    animate={{ strokeDashoffset: 0 }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />
                  
                  {/* Data points on line */}
                  {[
                    [50, 250], [125, 220], [200, 180], [275, 130], 
                    [350, 150], [425, 135], [500, 90], [550, 50]
                  ].map((point, i) => (
                    <motion.circle
                      key={i}
                      cx={point[0]}
                      cy={point[1]}
                      r="5"
                      fill="#E67E22"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: 1,
                        r: [5, 7, 5]
                      }}
                      transition={{
                        delay: i * 0.3,
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    />
                  ))}
                </svg>
              </div>
              
              {/* Pie chart animation */}
              <motion.div
                className="absolute top-12 right-12 w-36 h-36 md:w-48 md:h-48"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#111827" strokeWidth="20" />
                  
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#2980B9"
                    strokeWidth="20"
                    strokeDasharray="251.2"
                    strokeDashoffset="251.2"
                    strokeLinecap="round"
                    animate={{ strokeDashoffset: 188.4 }} // 75% of circle
                    transition={{
                      duration: 2,
                      delay: 1.5,
                    }}
                  />
                  
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#E67E22"
                    strokeWidth="20"
                    strokeDasharray="251.2"
                    strokeDashoffset="251.2"
                    strokeLinecap="round"
                    animate={{ strokeDashoffset: 125.6 }} // 50% of circle
                    transition={{
                      duration: 2.5,
                      delay: 1.8,
                    }}
                  />
                </svg>
              </motion.div>
              
              {/* Floating data labels */}
              {[
                { label: "On-Time Delivery", value: "94%", x: "15%", y: "20%" },
                { label: "Cost Reduction", value: "23%", x: "70%", y: "30%" },
                { label: "Capacity Utilization", value: "87%", x: "40%", y: "70%" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="absolute px-3 py-1 bg-[#0F2A47] rounded border border-[#2980B9] shadow-lg text-center"
                  style={{ left: item.x, top: item.y }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 2 + (i * 0.3),
                    duration: 0.5
                  }}
                >
                  <div className="text-xs text-gray-400">{item.label}</div>
                  <div className="text-lg font-bold text-[#E67E22]">{item.value}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F] via-transparent to-[#1E3A5F] opacity-30"></div>
            
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 bg-[#0F2A47] bg-opacity-80 rounded-lg px-5 py-3 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-1">
                Data-Driven <span className="text-[#E67E22]">Decision Making</span>
              </h3>
              <p className="text-sm text-gray-300">
                Turn logistics data into actionable business intelligence
              </p>
            </div>
          </div>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedContainer animation="slideInLeft">
            <motion.div 
              className="bg-[#1E3A5F] rounded-lg p-6 shadow-lg h-full"
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-display font-semibold mb-4">Interactive Dashboards</h3>
              <div className="space-y-3">
                {ANALYTICS_REPORTING.dashboards.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#2980B9] flex items-center justify-center">
                        <i className="fas fa-chart-bar text-xs text-white"></i>
                      </div>
                    </div>
                    <span className="text-gray-300 ml-3">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <div className="relative w-full max-w-xs h-48 bg-[#0F2A47] rounded-lg overflow-hidden">
                  {/* Animated dashboard preview */}
                  <div className="absolute inset-0 p-3">
                    {/* Dashboard header */}
                    <div className="h-5 w-full bg-[#2980B9] opacity-20 rounded mb-2"></div>
                    
                    {/* Dashboard grid */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[calc(100%-24px)]">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="bg-[#1E3A5F] rounded p-1 overflow-hidden"
                          initial={{ opacity: 0.5 }}
                          animate={{ opacity: [0.5, 0.8, 0.5] }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity, 
                            delay: i * 0.5
                          }}
                        >
                          {/* Chart type based on position */}
                          {i === 0 && (
                            <div className="h-full flex items-end justify-around p-1">
                              {[60, 30, 80, 40].map((h, j) => (
                                <motion.div
                                  key={j}
                                  className="w-2 bg-[#E67E22]"
                                  style={{ height: `${h}%` }}
                                  initial={{ scaleY: 0 }}
                                  animate={{ scaleY: 1 }}
                                  transition={{ 
                                    duration: 1,
                                    delay: 1 + (j * 0.1),
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 4
                                  }}
                                />
                              ))}
                            </div>
                          )}
                          
                          {i === 1 && (
                            <div className="h-full flex items-center justify-center">
                              <div className="w-12 h-12 relative">
                                <motion.div
                                  className="absolute inset-0 rounded-full border-4 border-[#2980B9]"
                                  initial={{ strokeDashoffset: 100 }}
                                  animate={{ rotate: 360 }}
                                  transition={{ 
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear"
                                  }}
                                />
                                <motion.div
                                  className="absolute inset-0 rounded-full border-4 border-[#E67E22]"
                                  style={{ borderRightColor: 'transparent', borderBottomColor: 'transparent' }}
                                  initial={{ rotate: 0 }}
                                  animate={{ rotate: 360 }}
                                  transition={{ 
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear"
                                  }}
                                />
                              </div>
                            </div>
                          )}
                          
                          {i === 2 && (
                            <div className="h-full p-1">
                              {[...Array(3)].map((_, k) => (
                                <motion.div
                                  key={k}
                                  className="h-2 bg-[#2980B9] rounded-full mb-1 opacity-60"
                                  style={{ width: `${70 - (k * 20)}%` }}
                                  animate={{ width: [`${70 - (k * 20)}%`, `${90 - (k * 15)}%`, `${70 - (k * 20)}%`] }}
                                  transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: k * 0.5
                                  }}
                                />
                              ))}
                            </div>
                          )}
                          
                          {i === 3 && (
                            <svg viewBox="0 0 100 50" className="h-full w-full">
                              <motion.path
                                d="M 0,40 C 20,35 30,20 40,35 S 60,15 80,25 S 90,40 100,30"
                                fill="none"
                                stroke="#E67E22"
                                strokeWidth="2"
                                strokeDasharray="200"
                                strokeDashoffset="200"
                                animate={{ strokeDashoffset: 0 }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  repeatDelay: 2
                                }}
                              />
                            </svg>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedContainer>
          
          <AnimatedContainer animation="slideInRight">
            <motion.div 
              className="bg-[#1E3A5F] rounded-lg p-6 shadow-lg h-full"
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-display font-semibold mb-4">Performance Analytics</h3>
              <div className="space-y-3">
                {ANALYTICS_REPORTING.performance.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center">
                        <i className="fas fa-truck text-xs text-white"></i>
                      </div>
                    </div>
                    <span className="text-gray-300 ml-3">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <div className="relative w-full max-w-xs h-48 bg-[#0F2A47] rounded-lg overflow-hidden">
                  {/* Animated carrier performance visualization */}
                  <div className="absolute inset-0 flex flex-col p-2">
                    <div className="text-center text-xs text-gray-500 mb-2">Carrier Performance</div>
                    
                    <div className="flex-1 flex flex-col justify-around">
                      {[
                        { name: "Carrier A", score: 92, color: "#2980B9" },
                        { name: "Carrier B", score: 78, color: "#E67E22" },
                        { name: "Carrier C", score: 86, color: "#27AE60" },
                        { name: "Carrier D", score: 65, color: "#E74C3C" }
                      ].map((carrier, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="text-xs w-14 text-gray-400">{carrier.name}</div>
                          <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: carrier.color }}
                              initial={{ width: 0 }}
                              animate={{ width: `${carrier.score}%` }}
                              transition={{ 
                                duration: 1.5,
                                delay: i * 0.2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                repeatDelay: 4
                              }}
                            />
                          </div>
                          <div className="text-xs w-8 text-gray-300">{carrier.score}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedContainer>
          
          <AnimatedContainer animation="slideInLeft" delay={0.2}>
            <motion.div 
              className="bg-[#1E3A5F] rounded-lg p-6 shadow-lg h-full"
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-display font-semibold mb-4">Automated Reports</h3>
              <div className="space-y-3">
                {ANALYTICS_REPORTING.reports.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#2980B9] flex items-center justify-center">
                        <i className="fas fa-file-export text-xs text-white"></i>
                      </div>
                    </div>
                    <span className="text-gray-300 ml-3">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <div className="relative w-full max-w-xs h-48 bg-[#0F2A47] rounded-lg overflow-hidden">
                  {/* Animated reports visualization */}
                  <div className="absolute inset-0 flex flex-col p-2">
                    <div className="text-xs text-gray-500 mb-2 flex justify-between items-center">
                      <span>Schedule Reports</span>
                      <span className="text-[#2980B9]"><i className="fas fa-calendar"></i></span>
                    </div>
                    
                    <div className="flex-1 relative">
                      {/* Stacked reports */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-40 h-32 bg-white rounded shadow-lg"
                          style={{ 
                            left: '50%',
                            top: '40%',
                            transform: `translate(-50%, -50%) rotate(${(i-1)*5}deg)`,
                            zIndex: 3-i
                          }}
                          animate={{
                            y: [i*3, i*8, i*3],
                            rotate: [(i-1)*5, (i-1)*3, (i-1)*5]
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          <div className="p-2">
                            <div className="h-3 w-2/3 bg-gray-300 rounded mb-2"></div>
                            
                            <div className="flex space-x-1 mb-3">
                              <div className="h-2 w-8 bg-[#2980B9] opacity-50 rounded"></div>
                              <div className="h-2 w-12 bg-gray-200 rounded"></div>
                            </div>
                            
                            <div className="space-y-1">
                              {[...Array(5)].map((_, j) => (
                                <div key={j} className="h-1.5 w-full bg-gray-200 rounded"></div>
                              ))}
                            </div>
                            
                            <div className="absolute bottom-2 right-2">
                              <motion.div
                                className="h-6 w-6 rounded-full flex items-center justify-center"
                                style={{ 
                                  backgroundColor: i === 0 ? '#2980B9' : '#E67E22',
                                  opacity: i === 0 ? 1 : 0.5
                                }}
                                animate={{
                                  opacity: i === 0 ? [1, 0.7, 1] : [0.5, 0.3, 0.5]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity
                                }}
                              >
                                <i className={`fas fa-${i === 0 ? 'file-pdf' : i === 1 ? 'file-excel' : 'file-csv'} text-white text-xs`}></i>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      
                      {/* Flying report animation */}
                      <motion.div
                        className="absolute h-32 w-40 bg-white rounded shadow-lg flex items-center justify-center"
                        style={{ 
                          left: '-30%',
                          top: '40%',
                          transform: 'translateY(-50%)'
                        }}
                        animate={{
                          x: ['0%', '150%', '150%', '0%'],
                          rotate: [0, 0, 180, 180],
                          scale: [1, 1, 0, 0]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatDelay: 1,
                          times: [0, 0.4, 0.5, 0.51]
                        }}
                      >
                        <i className="fas fa-paper-plane text-[#2980B9] text-2xl"></i>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedContainer>
          
          <AnimatedContainer animation="slideInRight" delay={0.2}>
            <motion.div 
              className="bg-[#1E3A5F] rounded-lg p-6 shadow-lg h-full"
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-display font-semibold mb-4">Predictive Analytics</h3>
              <div className="space-y-3">
                {ANALYTICS_REPORTING.predictive.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center">
                        <i className="fas fa-brain text-xs text-white"></i>
                      </div>
                    </div>
                    <span className="text-gray-300 ml-3">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <div className="relative w-full max-w-xs h-48 bg-[#0F2A47] rounded-lg overflow-hidden">
                  {/* Animated AI visualization */}
                  <div className="absolute inset-0">
                    {/* Neural network background */}
                    <div className="absolute inset-0 opacity-10">
                      <svg width="100%" height="100%" viewBox="0 0 100 100">
                        {/* Generate random nodes */}
                        {[...Array(20)].map((_, i) => {
                          const x = 10 + Math.random() * 80;
                          const y = 10 + Math.random() * 80;
                          return (
                            <motion.circle
                              key={i}
                              cx={x}
                              cy={y}
                              r="2"
                              fill="#E67E22"
                              animate={{ 
                                opacity: [0.3, 0.6, 0.3],
                                r: [1, 2, 1]
                              }}
                              transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity
                              }}
                            />
                          );
                        })}
                        
                        {/* Generate random connections */}
                        {[...Array(30)].map((_, i) => {
                          const x1 = 10 + Math.random() * 80;
                          const y1 = 10 + Math.random() * 80;
                          const x2 = 10 + Math.random() * 80;
                          const y2 = 10 + Math.random() * 80;
                          return (
                            <motion.line
                              key={i}
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke="#2980B9"
                              strokeWidth="0.5"
                              animate={{ 
                                opacity: [0.1, 0.3, 0.1],
                                strokeWidth: [0.3, 0.6, 0.3]
                              }}
                              transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity
                              }}
                            />
                          );
                        })}
                      </svg>
                    </div>
                    
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        className="relative"
                        animate={{
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity
                        }}
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1E3A5F] rounded-full border-2 border-[#2980B9] flex items-center justify-center">
                          <motion.div
                            animate={{
                              rotate: 360
                            }}
                            transition={{
                              duration: 10,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          >
                            <svg width="40" height="40" viewBox="0 0 50 50">
                              <circle cx="25" cy="25" r="20" fill="none" stroke="#E67E22" strokeWidth="1.5" strokeDasharray="5 5" />
                              <motion.path
                                d="M 15,25 C 20,15 30,15 35,25 S 30,35 15,25"
                                fill="none"
                                stroke="#2980B9"
                                strokeWidth="2"
                                animate={{ 
                                  d: [
                                    "M 15,25 C 20,15 30,15 35,25 S 30,35 15,25",
                                    "M 15,25 C 20,35 30,35 35,25 S 30,15 15,25",
                                    "M 15,25 C 20,15 30,15 35,25 S 30,35 15,25"
                                  ]
                                }}
                                transition={{
                                  duration: 5,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                            </svg>
                          </motion.div>
                        </div>
                        
                        {/* Pulse rings */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E67E22]"
                            initial={{
                              width: "100%",
                              height: "100%",
                              opacity: 0.5
                            }}
                            animate={{
                              width: [`${100 + i*0}%`, `${180 + i*20}%`],
                              height: [`${100 + i*0}%`, `${180 + i*20}%`],
                              opacity: [0.5, 0]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.8,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                    
                    {/* Floating prediction tags */}
                    {[
                      { text: "Peak Season: +22%", color: "#E74C3C", x: "20%", y: "25%" },
                      { text: "Q3 Volumes: -5%", color: "#3498DB", x: "75%", y: "30%" },
                      { text: "Risk Level: Low", color: "#2ECC71", x: "65%", y: "70%" },
                    ].map((prediction, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-xs py-1 px-2 rounded"
                        style={{ 
                          backgroundColor: prediction.color, 
                          left: prediction.x, 
                          top: prediction.y
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: [0, 1, 1, 0],
                          scale: [0.8, 1, 1, 0.8],
                          y: ["0%", "-20%", "-20%", "-40%"]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatDelay: i,
                          times: [0, 0.1, 0.9, 1]
                        }}
                      >
                        {prediction.text}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
