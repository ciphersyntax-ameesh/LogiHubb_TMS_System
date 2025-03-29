import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LogisticsVisualization = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isDataReady, setIsDataReady] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 5);
    }, 3500);
    
    // Simulate data loading with a slight delay for animation effect
    setTimeout(() => setIsDataReady(true), 800);
    
    return () => clearInterval(interval);
  }, []);
  
  // Enhanced logistics flow points with more metadata
  const flowPoints = [
    { x: 50, y: 70, label: "Warehouse", icon: "warehouse", status: "Active", items: 1243 },
    { x: 160, y: 130, label: "Distribution", icon: "distribution", status: "Optimized", items: 856 },
    { x: 270, y: 70, label: "Transport", icon: "truck", status: "In Transit", items: 532 },
    { x: 380, y: 130, label: "Delivery Hub", icon: "hub", status: "Ready", items: 328 },
    { x: 490, y: 70, label: "Customer", icon: "customer", status: "Receiving", items: 97 }
  ];
  
  // Enhanced visual paths between points with better curves
  const paths = [
    "M60,85 Q105,160 150,145",
    "M170,145 Q220,50 260,85",
    "M280,85 Q325,160 370,145", 
    "M390,145 Q440,50 480,85"
  ];
  
  // SVG icons for logistics stages instead of emojis
  const getNodeIcon = (type: string) => {
    switch(type) {
      case "warehouse":
        return (
          <g>
            <rect x="-8" y="-7" width="16" height="14" fill="none" stroke="white" strokeWidth="1.5" />
            <line x1="-8" y1="-7" x2="0" y2="-2" stroke="white" strokeWidth="1.5" />
            <line x1="8" y1="-7" x2="0" y2="-2" stroke="white" strokeWidth="1.5" />
            <rect x="-5" y="0" width="10" height="7" fill="none" stroke="white" strokeWidth="1" />
          </g>
        );
      case "distribution":
        return (
          <g>
            <circle cx="0" cy="-2" r="7" fill="none" stroke="white" strokeWidth="1.5" />
            <line x1="-5" y1="-2" x2="5" y2="-2" stroke="white" strokeWidth="1.5" />
            <line x1="0" y1="-7" x2="0" y2="3" stroke="white" strokeWidth="1.5" />
            <path d="M-4,3 L4,3 L4,7 L-4,7 Z" fill="none" stroke="white" strokeWidth="1" />
          </g>
        );
      case "truck":
        return (
          <g>
            <rect x="-7" y="-5" width="12" height="7" fill="none" stroke="white" strokeWidth="1.5" />
            <rect x="-9" y="2" width="16" height="5" fill="none" stroke="white" strokeWidth="1.5" />
            <circle cx="-5" cy="7" r="2" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="5" cy="7" r="2" fill="none" stroke="white" strokeWidth="1" />
          </g>
        );
      case "hub":
        return (
          <g>
            <path d="M0,-8 L8,0 L0,8 L-8,0 Z" fill="none" stroke="white" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="4" fill="none" stroke="white" strokeWidth="1.5" />
            <line x1="-4" y1="-4" x2="4" y2="4" stroke="white" strokeWidth="1" />
            <line x1="-4" y1="4" x2="4" y2="-4" stroke="white" strokeWidth="1" />
          </g>
        );
      case "customer":
        return (
          <g>
            <circle cx="0" cy="-4" r="3" fill="none" stroke="white" strokeWidth="1.5" />
            <path d="M-6,8 C-6,0 6,0 6,8" fill="none" stroke="white" strokeWidth="1.5" />
            <line x1="0" y1="-1" x2="0" y2="4" stroke="white" strokeWidth="1.5" />
            <line x1="-4" y1="2" x2="4" y2="2" stroke="white" strokeWidth="1" />
          </g>
        );
      default:
        return null;
    }
  };
  
  // Vehicle graphics based on SVG for better visuals than emojis
  const getVehicleIcon = (step: number) => {
    switch(step) {
      case 0: // Warehouse to Distribution
        return (
          <g>
            <rect x="-15" y="-8" width="30" height="16" rx="2" fill="#E67E22" />
            <rect x="-10" y="-8" width="20" height="10" rx="1" fill="#1E3A5F" />
            <circle cx="-8" cy="8" r="4" fill="#1E3A5F" stroke="white" strokeWidth="1" />
            <circle cx="8" cy="8" r="4" fill="#1E3A5F" stroke="white" strokeWidth="1" />
            <text x="0" y="0" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">LH</text>
          </g>
        );
      case 1: // Distribution to Transport
        return (
          <g>
            <rect x="-18" y="-7" width="36" height="14" rx="2" fill="#E67E22" />
            <rect x="-18" y="-7" width="10" height="8" rx="1" fill="#1E3A5F" />
            <rect x="-6" y="-7" width="24" height="14" rx="1" fill="#2980B9" fillOpacity="0.6" />
            <circle cx="-12" cy="7" r="3" fill="#1E3A5F" stroke="white" strokeWidth="1" />
            <circle cx="-4" cy="7" r="3" fill="#1E3A5F" stroke="white" strokeWidth="1" />
            <circle cx="10" cy="7" r="3" fill="#1E3A5F" stroke="white" strokeWidth="1" />
          </g>
        );
      case 2: // Transport to Delivery Hub
        return (
          <g>
            <rect x="-12" y="-6" width="24" height="12" rx="2" fill="#E67E22" />
            <rect x="-8" y="-6" width="16" height="6" rx="1" fill="#1E3A5F" />
            <circle cx="-6" cy="6" r="3" fill="#1E3A5F" stroke="white" strokeWidth="1" />
            <circle cx="6" cy="6" r="3" fill="#1E3A5F" stroke="white" strokeWidth="1" />
          </g>
        );
      case 3: // Delivery Hub to Customer
        return (
          <g>
            <rect x="-8" y="-5" width="16" height="10" rx="3" fill="#E67E22" />
            <rect x="-6" y="-5" width="12" height="5" rx="1" fill="#1E3A5F" />
            <circle cx="-4" cy="5" r="2" fill="#1E3A5F" stroke="white" strokeWidth="0.75" />
            <circle cx="4" cy="5" r="2" fill="#1E3A5F" stroke="white" strokeWidth="0.75" />
          </g>
        );
      default:
        return null;
    }
  };
  
  // Enhanced animations for dots traveling along the paths
  const dotVariants = {
    animate: (i: number) => ({
      // Using CSS custom property in variants to avoid React warnings
      // offsetDistance is handled directly via style attribute instead
      scale: [1, 1.8, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        delay: i * 0.6,
        repeat: Infinity,
        repeatType: "loop" as "loop",
        ease: "easeInOut"
      }
    })
  };
  
  // Enhanced animation for the moving vehicle icons
  const vehicleVariants = {
    animate: (i: number) => ({
      // Using CSS custom property in variants to avoid React warnings
      // offsetDistance is handled directly via style attribute instead
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        ease: "easeInOut"
      }
    })
  };
  
  // Enhanced node animations with more visual effects
  const nodeVariants = {
    initial: { scale: 0.8, opacity: 0.7 },
    active: { 
      scale: 1.2, 
      opacity: 1,
      filter: "drop-shadow(0 0 8px rgba(230, 126, 34, 0.8))"
    },
    inactive: { 
      scale: 1, 
      opacity: 0.9,
      filter: "drop-shadow(0 0 3px rgba(41, 128, 185, 0.5))"
    }
  };
  
  // Enhanced dashboard stats with additional data and visualizations
  const statsVariants = {
    initial: { y: 30, opacity: 0 },
    animate: (i: number) => ({ 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        ease: "easeOut"
      }
    }),
    refresh: (i: number) => ({
      opacity: [1, 0.7, 1],
      y: [0, -3, 0],
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeInOut"
      }
    })
  };
  
  // Generate more detailed random data for visualization
  const generateRandomData = () => {
    return {
      efficiency: Math.floor(Math.random() * 15) + 85,
      deliveries: Math.floor(Math.random() * 150) + 950,
      routes: Math.floor(Math.random() * 15) + 45,
      fuel: Math.floor(Math.random() * 12) + 18,
      accuracy: Math.floor(Math.random() * 5) + 95,
      savings: Math.floor(Math.random() * 25) + 125,
    };
  };
  
  const [data, setData] = useState(generateRandomData());
  const [dataRefresh, setDataRefresh] = useState(false);
  
  useEffect(() => {
    const dataInterval = setInterval(() => {
      setData(generateRandomData());
      setDataRefresh(true);
      setTimeout(() => setDataRefresh(false), 800);
    }, 7000);
    
    return () => clearInterval(dataInterval);
  }, []);
  
  return (
    <div className="relative bg-gradient-to-br from-[#0F2A47] to-[#1E3A5F] p-5 rounded-xl shadow-2xl overflow-hidden border border-[#2980B9]/20">
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white opacity-[0.02] rounded-xl"></div>
      
      {/* Glow effects */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#E67E22]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-[#2980B9]/10 rounded-full filter blur-3xl"></div>
      
      {/* Header with improved styling */}
      <div className="flex justify-between items-center mb-6 border-b border-[#2980B9]/30 pb-3 z-10 relative">
        <div className="flex items-center">
          <motion.div 
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E67E22] to-[#F39C12] flex items-center justify-center mr-3 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <span className="text-white font-bold text-sm">LH</span>
          </motion.div>
          <div>
            <motion.div 
              className="text-white font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              LogiHubb Command Center
            </motion.div>
            <motion.div 
              className="text-[#2980B9] text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Intelligent Logistics Visualization
            </motion.div>
          </div>
        </div>
        <motion.div 
          className="flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-3 h-3 rounded-full bg-[#E74C3C]"></div>
          <div className="w-3 h-3 rounded-full bg-[#F1C40F]"></div>
          <div className="w-3 h-3 rounded-full bg-[#2ECC71]"></div>
        </motion.div>
      </div>
      
      {/* Main Visualization with enhanced graphics */}
      <div className="relative h-60 mb-8 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isDataReady ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <svg className="w-full h-full" viewBox="0 0 550 200">
            {/* Grid background for depth */}
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#2980B9" strokeWidth="0.2" strokeOpacity="0.2"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
            
            {/* Connection Paths with better styling */}
            {paths.map((path, i) => (
              <g key={`path-group-${i}`}>
                {/* Path shadow for depth */}
                <path
                  d={path}
                  fill="none"
                  stroke="#0F172A"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeOpacity="0.3"
                  transform="translate(2, 2)"
                />
                {/* Main path */}
                <path
                  key={`path-${i}`}
                  d={path}
                  fill="none"
                  stroke={i === activeStep - 1 || (activeStep === 0 && i === paths.length - 1) ? "#E67E22" : "#2980B9"}
                  strokeWidth="4"
                  strokeDasharray={i === activeStep - 1 ? "none" : "8,4"}
                  strokeLinecap="round"
                  strokeOpacity={i === activeStep - 1 ? 1 : 0.7}
                  filter={i === activeStep - 1 ? "drop-shadow(0 0 2px rgba(230, 126, 34, 0.5))" : "none"}
                />
              </g>
            ))}
            
            {/* Enhanced moving dots with glowing effect */}
            {paths.map((path, i) => (
              <g key={`dot-group-${i}`}>
                <motion.g
                  key={`dot-glow-motion-${i}`}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 4,
                    delay: i * 0.8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                  style={{
                    // Fix for React warning by using CSS properties properly
                    offsetPath: `path('${path}')`,
                    offsetRotate: "auto",
                    offsetDistance: "0%", // Initial value
                    animation: `moveAlongPath 4s ${i * 0.8}s infinite linear`
                  }}
                >
                  {/* Glow effect */}
                  <circle
                    cx="0"
                    cy="0"
                    r="8"
                    fill="#E67E22"
                    fillOpacity="0.4"
                  />
                  {/* Main dot */}
                  <circle
                    cx="0"
                    cy="0"
                    r="4"
                    fill="#E67E22"
                    filter="drop-shadow(0 0 2px rgba(230, 126, 34, 0.8))"
                  />
                </motion.g>
              </g>
            ))}
            
            {/* Enhanced location nodes with SVG graphics */}
            {flowPoints.map((point, i) => (
              <g key={`node-${i}`}>
                {/* Node background circle with glow */}
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r="18"
                  fill={i === activeStep ? "#E67E22" : "#2980B9"}
                  fillOpacity={i === activeStep ? 0.2 : 0.1}
                  variants={nodeVariants}
                  initial="initial"
                  animate={i === activeStep ? "active" : "inactive"}
                  transition={{ duration: 0.7 }}
                />
                
                {/* Main node circle */}
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r="15"
                  fill={i === activeStep ? 
                    "url(#activeGradient)" : 
                    `url(#inactiveGradient${i % 2 ? '1' : '2'})`
                  }
                  stroke={i === activeStep ? "#F39C12" : "#3498DB"}
                  strokeWidth="1.5"
                  variants={nodeVariants}
                  initial="initial"
                  animate={i === activeStep ? "active" : "inactive"}
                  transition={{ duration: 0.7 }}
                />
                
                {/* Node SVG icon */}
                <motion.g
                  transform={`translate(${point.x}, ${point.y})`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5, type: "spring" }}
                >
                  {getNodeIcon(point.icon)}
                </motion.g>
                
                {/* Node label with better styling */}
                <g className="logistics-step">
                  <text
                    x={point.x}
                    y={point.y + 33}
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="bold"
                    filter="drop-shadow(0 1px 1px rgba(0,0,0,0.7))"
                  >
                    {point.label}
                  </text>
                  <text
                    x={point.x}
                    y={point.y + 46}
                    textAnchor="middle"
                    fill={i === activeStep ? "#F39C12" : "#3498DB"}
                    fontSize="9"
                    className="tracking-wider"
                  >
                    {point.status}
                  </text>
                </g>
                
                {/* Active node indicator */}
                {i === activeStep && (
                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r="22"
                    fill="none"
                    stroke="#E67E22"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0.8, 1.1, 0.8],
                      rotate: 360
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </g>
            ))}
            
            {/* Enhanced moving vehicle between active nodes */}
            {activeStep < 4 && (
              <motion.g
                style={{ 
                  offsetPath: `path('${paths[activeStep]}')`,
                  offsetRotate: "auto",
                  offsetDistance: "0%",
                  animation: "moveAlongPath 6s linear infinite"
                }}
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 6,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                {getVehicleIcon(activeStep)}
              </motion.g>
            )}
            
            {/* Gradients for nodes */}
            <defs>
              <radialGradient id="activeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#F39C12" />
                <stop offset="100%" stopColor="#E67E22" />
              </radialGradient>
              <radialGradient id="inactiveGradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#3498DB" />
                <stop offset="100%" stopColor="#2980B9" />
              </radialGradient>
              <radialGradient id="inactiveGradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#2980B9" />
                <stop offset="100%" stopColor="#1E3A5F" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
      
      {/* Enhanced dashboard stats with better styling and animations */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 z-10 relative">
        <motion.div 
          className="bg-gradient-to-br from-[#1E3A5F] to-[#0F2A47] p-3 rounded-lg shadow-lg border border-[#2980B9]/30"
          variants={statsVariants}
          initial="initial"
          animate={dataRefresh ? "refresh" : "animate"}
          custom={0}
        >
          <div className="flex justify-between items-start mb-1">
            <div className="text-[#3498DB] text-xs uppercase font-bold">Efficiency</div>
            <div className="bg-[#E67E22]/20 rounded-full px-2 py-0.5 text-[#F39C12] text-xs">+{data.efficiency - 76}%</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white text-xl font-bold">{data.efficiency}%</span>
            <div className="w-20 h-3 bg-[#0F2A47] rounded-full overflow-hidden shadow-inner">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#F39C12] to-[#E67E22]"
                initial={{ width: 0 }}
                animate={{ width: `${data.efficiency}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-[#1E3A5F] to-[#0F2A47] p-3 rounded-lg shadow-lg border border-[#2980B9]/30"
          variants={statsVariants}
          initial="initial"
          animate={dataRefresh ? "refresh" : "animate"}
          custom={1}
        >
          <div className="flex justify-between items-start mb-1">
            <div className="text-[#3498DB] text-xs uppercase font-bold">Deliveries</div>
            <div className="bg-[#2ECC71]/20 rounded-full px-2 py-0.5 text-[#2ECC71] text-xs">Active</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-white text-xl font-bold flex items-baseline">
              {data.deliveries}
              <span className="text-xs text-gray-400 ml-1">units</span>
            </div>
            <div className="flex space-x-0.5">
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={`delivery-dot-${i}`}
                  className="w-1.5 h-4 bg-[#3498DB] rounded-full"
                  animate={{ 
                    height: ["60%", "90%", "75%", "100%", "60%"],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-[#1E3A5F] to-[#0F2A47] p-3 rounded-lg shadow-lg border border-[#2980B9]/30"
          variants={statsVariants}
          initial="initial"
          animate={dataRefresh ? "refresh" : "animate"}
          custom={2}
        >
          <div className="flex justify-between items-start mb-1">
            <div className="text-[#3498DB] text-xs uppercase font-bold">Active Routes</div>
            <div className="bg-[#E67E22]/20 rounded-full px-2 py-0.5 text-[#F39C12] text-xs">Optimized</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-white text-xl font-bold">{data.routes}</div>
            <div className="w-5 h-5 relative">
              <motion.div
                className="absolute inset-0 border-2 border-[#3498DB] rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
              <div className="absolute inset-0 border-2 border-[#3498DB] rounded-full" />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-[#1E3A5F] to-[#0F2A47] p-3 rounded-lg shadow-lg border border-[#2980B9]/30"
          variants={statsVariants}
          initial="initial"
          animate={dataRefresh ? "refresh" : "animate"}
          custom={3}
        >
          <div className="flex justify-between items-start mb-1">
            <div className="text-[#3498DB] text-xs uppercase font-bold">Fuel Savings</div>
            <div className="bg-[#2ECC71]/20 rounded-full px-2 py-0.5 text-[#2ECC71] text-xs">+{data.fuel}%</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-white text-xl font-bold">
              ${data.savings}k
              <span className="text-xs text-gray-400 ml-1">saved</span>
            </div>
            <div className="text-[#2ECC71]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V21M12 3L6 9M12 3L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-[#1E3A5F] to-[#0F2A47] p-3 rounded-lg shadow-lg border border-[#2980B9]/30"
          variants={statsVariants}
          initial="initial"
          animate={dataRefresh ? "refresh" : "animate"}
          custom={4}
        >
          <div className="flex justify-between items-start mb-1">
            <div className="text-[#3498DB] text-xs uppercase font-bold">Delivery Accuracy</div>
            <div className="bg-[#2ECC71]/20 rounded-full px-2 py-0.5 text-[#2ECC71] text-xs">High</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white text-xl font-bold">{data.accuracy}%</span>
            <div className="w-20 h-3 bg-[#0F2A47] rounded-full overflow-hidden shadow-inner">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#2ECC71] to-[#27AE60]"
                initial={{ width: 0 }}
                animate={{ width: `${data.accuracy}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-[#1E3A5F] to-[#0F2A47] p-3 rounded-lg shadow-lg border border-[#2980B9]/30"
          variants={statsVariants}
          initial="initial"
          animate={dataRefresh ? "refresh" : "animate"}
          custom={5}
        >
          <div className="flex justify-between items-start mb-1">
            <div className="text-[#3498DB] text-xs uppercase font-bold">AI Predictions</div>
            <div className="bg-[#E67E22]/20 rounded-full px-2 py-0.5 text-[#F39C12] text-xs">Active</div>
          </div>
          <div className="text-white text-xl font-bold flex items-center justify-between">
            <div className="flex items-baseline">
              {flowPoints[activeStep].items}
              <span className="text-xs text-gray-400 ml-1">items</span>
            </div>
            <div className="relative w-6 h-6">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#3498DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center text-xs text-[#3498DB]">AI</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Status bar with more detailed info */}
      <motion.div 
        className="flex justify-between items-center text-xs text-gray-400 mt-4 border-t border-[#2980B9]/20 pt-3 z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <div className="w-2 h-2 rounded-full bg-[#2ECC71] mr-1.5 animate-pulse"></div>
            <span>System Online</span>
          </div>
          <div className="hidden md:flex items-center">
            <div className="w-2 h-2 rounded-full bg-[#F39C12] mr-1.5"></div>
            <span>Tracking Active</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span>Current Stage: <span className="text-[#F39C12]">{flowPoints[activeStep].label}</span></span>
          <span>Updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </motion.div>
      
      {/* Active Step Indicators with better styling - CSS handles positioning on different screens */}
      <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-6 z-30 bg-[#0F2A47]/90 py-2 px-4 rounded-full shadow-lg">
        {[0, 1, 2, 3, 4].map(step => (
          <motion.div
            key={`step-desktop-${step}`}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ y: -2 }}
            onClick={() => setActiveStep(step)}
          >
            <motion.div
              className={`w-3 h-3 rounded-full ${
                step === activeStep 
                  ? 'bg-[#E67E22] ring-2 ring-[#E67E22]/30' 
                  : 'bg-[#2980B9]'
              }`}
              animate={step === activeStep ? {
                scale: [1, 1.3, 1],
                transition: { 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop"
                }
              } : {}}
            />
            <motion.div
              className={`text-[10px] mt-1 font-medium ${
                step === activeStep 
                  ? 'text-[#E67E22]' 
                  : 'text-[#2980B9]'
              }`}
              animate={step === activeStep ? { opacity: 1 } : { opacity: 0.7 }}
            >
              {step + 1}
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Mobile version of step indicators (controlled by CSS) */}
      <div className="md:hidden flex space-x-4 active-step-indicator">
        {[0, 1, 2, 3, 4].map(step => (
          <motion.div
            key={`step-${step}`}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ y: -2 }}
            onClick={() => setActiveStep(step)}
          >
            <motion.div
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
                step === activeStep 
                  ? 'bg-[#E67E22] ring-2 ring-[#E67E22]/30' 
                  : 'bg-[#2980B9]'
              }`}
              animate={step === activeStep ? {
                scale: [1, 1.3, 1],
                transition: { 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop"
                }
              } : {}}
            />
            <motion.div
              className={`text-[9px] md:text-[10px] mt-1 font-medium ${
                step === activeStep 
                  ? 'text-[#E67E22]' 
                  : 'text-[#2980B9]'
              }`}
              animate={step === activeStep ? { opacity: 1 } : { opacity: 0.7 }}
            >
              {step + 1}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LogisticsVisualization;