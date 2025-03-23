// Colors
export const COLORS = {
  primary: {
    DEFAULT: '#0F2A47', // dark blue
    light: '#1E3A5F'
  },
  secondary: {
    DEFAULT: '#E67E22', // orange
    light: '#F39C12'
  },
  tertiary: {
    DEFAULT: '#2980B9', // blue
    light: '#3498DB'
  }
};

// Navigation links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/register", label: "Register Now", isPrimary: true }
];

// Footer links
export const FOOTER_LINKS = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Blog" },
    { href: "#", label: "News" },
  ],
  solutions: [
    { href: "/features", label: "Features" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Integration" },
    { href: "#", label: "API" },
  ],
  support: [
    { href: "#", label: "Help Center" },
    { href: "#", label: "Documentation" },
    { href: "#", label: "Contact Us" },
    { href: "#", label: "Status" },
  ],
};

// Social links
export const SOCIAL_LINKS = [
  { href: "#", icon: "linkedin", label: "LinkedIn" },
  { href: "#", icon: "twitter", label: "Twitter" },
  { href: "#", icon: "facebook", label: "Facebook" },
  { href: "#", icon: "youtube", label: "YouTube" },
];

// About sections
export const TEAM_MEMBERS = [
  {
    name: "Michael Johnson",
    title: "CEO & Co-Founder",
    bio: "Former logistics executive with 20+ years of experience in global supply chain management.",
  },
  {
    name: "Sarah Chen",
    title: "CTO & Co-Founder",
    bio: "AI/ML specialist with previous experience at leading tech companies and a background in logistics software.",
  },
  {
    name: "David Rodriguez",
    title: "Head of Product",
    bio: "Transport management expert focused on creating intuitive, powerful solutions for complex logistics challenges.",
  },
];

// Global presence
export const GLOBAL_LOCATIONS = [
  {
    region: "North America",
    locations: ["New York (HQ)", "Los Angeles", "Toronto"],
  },
  {
    region: "Europe",
    locations: ["London", "Rotterdam", "Frankfurt"],
  },
  {
    region: "Asia Pacific",
    locations: ["Singapore", "Shanghai", "Sydney"],
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    quote: "LogiHubb has transformed our logistics operations, reducing costs by 22% and improving on-time delivery performance by 35% in just six months.",
    name: "James Wilson",
    title: "VP of Supply Chain, Global Retail Corp",
  },
  {
    quote: "The AI-powered route optimization and predictive analytics have given us a competitive edge in our market. We now have visibility we never thought possible.",
    name: "Maria Sanchez",
    title: "Logistics Director, E-commerce Leader",
  },
  {
    quote: "The integration capabilities of LogiHubb with our existing ERP and WMS systems made the implementation smooth. Their customer support team is exceptional.",
    name: "Robert Chen",
    title: "CIO, Manufacturing Group",
  },
];

// Company sizes for form dropdown
export const COMPANY_SIZES = [
  { value: "1-50", label: "1-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "501-1000", label: "501-1000 employees" },
  { value: "1001+", label: "1001+ employees" },
];

// Process flow steps
export const PROCESS_FLOW_STEPS = [
  { icon: "industry", label: "Shipper" },
  { icon: "warehouse", label: "Warehouse" },
  { icon: "file-contract", label: "Customs Clearance" },
  { icon: "ship", label: "POL" },
  { icon: "anchor", label: "POD" },
  { icon: "file-contract", label: "Customs Clearance" },
  { icon: "warehouse", label: "Warehouse" },
  { icon: "building", label: "Consignee" },
];

// Key modules
export const KEY_MODULES = [
  "Contract Rates, Spot Rates",
  "Order Management",
  "Shipment Execution",
  "Track & Trace",
  "Cost Management",
  "Freight Audit",
  "Supply Chain Intelligence",
];

// TMS solution modules
export const TMS_SOLUTION = [
  {
    title: "Order Management",
    features: [
      "Online Shipping Requests",
      "Automated shipment status update"
    ]
  },
  {
    title: "Rate Management",
    features: [
      "Repository of Contract Rates",
      "Online eBidding for Spot Rates"
    ]
  },
  {
    title: "Workflow Management",
    features: [
      "Shipment Planning",
      "End-to-end Process Automation"
    ]
  },
  {
    title: "Shipment Booking",
    features: [
      "Online rate analysis",
      "Freight Forwarder Collaboration"
    ]
  },
  {
    title: "Visibility & Tracking",
    features: [
      "Real-time Tracking",
      "Exception Reporting & Alerts"
    ]
  },
  {
    title: "Freight Management",
    features: [
      "End-to-End shipping Costs",
      "Automated Freight Audit"
    ]
  },
  {
    title: "Document Management",
    features: [
      "End-to-End digital Documentation",
      "API Integration with ERP/WMS"
    ]
  },
  {
    title: "Business Intelligence",
    features: [
      "Interactive Dashboards & KPIs",
      "AI/ML enabled Analytics"
    ]
  }
];

// AI/ML features
export const AI_ML_FEATURES = [
  {
    icon: "chart-line",
    title: "Predictive Analytics",
    description: "Forecast shipping delays, demand patterns, and capacity requirements with advanced predictive models.",
  },
  {
    icon: "route",
    title: "Route Optimization",
    description: "Automatically determine the most efficient routes based on multiple factors including traffic, weather, and vehicle capacity.",
  },
  {
    icon: "coins",
    title: "Dynamic Pricing",
    description: "Optimize freight rates and spot pricing based on market conditions, capacity, and historical data.",
  },
  {
    icon: "boxes",
    title: "Load Optimization",
    description: "Maximize container and vehicle capacity utilization with intelligent load planning algorithms.",
  },
  {
    icon: "exclamation-triangle",
    title: "Risk Assessment",
    description: "Identify potential disruptions and delays with AI-powered risk analysis and mitigation recommendations.",
  },
  {
    icon: "robot",
    title: "Automated Documentation",
    description: "Generate and process shipping documents automatically with machine learning and OCR technology.",
  },
];

// API integrations
export const API_INTEGRATIONS = [
  {
    icon: "boxes",
    title: "WMS Integration",
    description: "Connect directly with your Warehouse Management System for seamless inventory and shipment coordination.",
  },
  {
    icon: "cogs",
    title: "ERP Integration",
    description: "Synchronize logistics data with your Enterprise Resource Planning system for end-to-end business process integration.",
  },
  {
    icon: "file-invoice",
    title: "Customs API",
    description: "Direct integration with customs systems for automated documentation submission and clearance processing.",
  },
];

// Analytics & reporting features
export const ANALYTICS_REPORTING = {
  dashboards: [
    "Customizable KPI dashboards for real-time performance monitoring",
    "Visual analytics with drill-down capabilities",
    "Flexible filtering and segmentation options",
  ],
  performance: [
    "Carrier performance scorecards and benchmarking",
    "Cost analysis and optimization recommendations",
    "On-time delivery performance tracking",
  ],
  reports: [
    "Scheduled reporting with email distribution",
    "Export capabilities in multiple formats (PDF, Excel, CSV)",
    "Role-based report access and customization",
  ],
  predictive: [
    "AI-powered forecasting for demand planning",
    "Risk prediction and mitigation recommendations",
    "Trend analysis and future performance projections",
  ],
};

// Mobile app features
export const MOBILE_APP_FEATURES = [
  {
    title: "Real-time Tracking",
    description: "Monitor shipment status and location from anywhere"
  },
  {
    title: "Push Notifications",
    description: "Instant alerts for delays, exceptions, and critical events"
  },
  {
    title: "Document Access",
    description: "View and share shipping documents on the go"
  },
  {
    title: "Approval Workflows",
    description: "Review and approve shipments and documents remotely"
  },
];

// Next steps after form submission
export const NEXT_STEPS = [
  {
    step: 1,
    title: "Initial Contact",
    description: "A LogiHubb representative will contact you within 24 hours to schedule your demo."
  },
  {
    step: 2,
    title: "Personalized Demo",
    description: "We'll provide a customized presentation of LogiHubb tailored to your specific needs."
  },
  {
    step: 3,
    title: "Implementation Plan",
    description: "Our team will develop a custom implementation strategy for your business."
  }
];

// Contact information
export const CONTACT_INFO = [
  {
    icon: "envelope",
    title: "Email Us",
    lines: ["sales@logihubb.com", "support@logihubb.com"]
  },
  {
    icon: "phone-alt",
    title: "Call Us",
    lines: ["US: +1 (800) 123-4567", "International: +1 (646) 789-0123"]
  },
  {
    icon: "map-marker-alt",
    title: "Visit Us",
    lines: ["350 5th Avenue", "New York, NY 10118"]
  }
];
