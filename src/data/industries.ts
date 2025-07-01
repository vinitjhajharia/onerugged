export interface IndustryData {
  id: string;
  name: string;
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  description: string;
  challenges: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  solutions: Array<{
    title: string;
    description: string;
    features: string[];
    image: string;
  }>;
  products: string[];
  caseStudy: {
    title: string;
    company: string;
    challenge: string;
    solution: string;
    results: string[];
    image: string;
    testimonial: {
      quote: string;
      author: string;
      position: string;
    };
  };
  certifications: string[];
  supportFeatures: string[];
}

export const industriesData: { [key: string]: IndustryData } = {
  mining: {
    id: "mining",
    name: "Mining & Resources",
    slug: "mining",
    heroTitle: "Rugged Technology for Mining Operations",
    heroSubtitle: "Certified devices that withstand extreme heat, dust, vibration, and corrosive environments found in mining operations worldwide.",
    heroImage: "https://images.pexels.com/photos/6595788/pexels-photo-6595788.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    description: "Mining operations demand the most robust technology solutions available. Our rugged devices are specifically tested and certified for extreme conditions including high temperatures, excessive dust, constant vibration, and corrosive environments.",
    challenges: [
      {
        title: "Extreme Temperature Ranges",
        description: "Mining sites experience temperatures from -40°C to +70°C, requiring devices that operate reliably in these extremes.",
        icon: "thermometer"
      },
      {
        title: "Dust and Particle Exposure",
        description: "Heavy dust, sand, and mineral particles can damage standard electronics and compromise operation.",
        icon: "shield"
      },
      {
        title: "Constant Vibration",
        description: "Heavy machinery and blasting operations create continuous vibration that destroys conventional devices.",
        icon: "zap"
      },
      {
        title: "Remote Connectivity",
        description: "Mining sites are often in remote locations with limited connectivity infrastructure.",
        icon: "wifi"
      }
    ],
    solutions: [
      {
        title: "Heat & Dust Resistant Laptops",
        description: "MIL-STD-810H certified rugged laptops with IP65 protection and fanless cooling systems designed for extreme mining environments.",
        features: [
          "Operating temp: -20°C to +60°C",
          "IP65 dust and water protection", 
          "Shock and vibration resistant",
          "Sunlight readable displays",
          "Hot-swappable batteries"
        ],
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      },
      {
        title: "Industrial Rugged Tablets",
        description: "Lightweight yet durable tablets for mobile data collection, equipment monitoring, and real-time communication in the field.",
        features: [
          "Drop-tested to 6 feet",
          "Glove-friendly touchscreens",
          "Long-life battery options",
          "Barcode/QR scanning capability",
          "4G/5G connectivity"
        ],
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      },
      {
        title: "Vehicle-Mounted Systems",
        description: "Integrated computing solutions for mining vehicles, with GPS tracking, fleet management, and real-time monitoring capabilities.",
        features: [
          "Wide voltage input (9-36V)",
          "CAN bus integration",
          "Multi-camera support",
          "GPS and mapping systems",
          "Fleet management ready"
        ],
        image: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      }
    ],
    products: ["n14a", "n14m", "m10t-mt6789", "v12r"],
    caseStudy: {
      title: "Iron Ore Mining Operation Increases Efficiency 35%",
      company: "Global Mining Corp",
      challenge: "Frequent device failures in extreme heat and dust conditions were causing operational delays and increased maintenance costs. Standard tablets lasted only 2-3 months in the field.",
      solution: "Deployed 150 rugged tablets and 50 rugged laptops across mining operations, with vehicle-mounted systems for fleet management and real-time monitoring.",
      results: [
        "35% increase in operational efficiency",
        "90% reduction in device failures",
        "€280,000 annual savings in replacement costs",
        "Real-time data collection improved safety compliance"
      ],
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      testimonial: {
        quote: "These rugged devices have transformed our operations. We've gone from replacing tablets every few months to having devices that have been running flawlessly for over two years in some of the harshest conditions on Earth.",
        author: "Sarah Chen",
        position: "IT Operations Manager"
      }
    },
    certifications: ["MIL-STD-810H", "IP65/IP67", "ATEX Zone 2/22", "IECEx", "CE Marking"],
    supportFeatures: [
      "24/7 global technical support",
      "On-site repair services",
      "Preventive maintenance programs",
      "Custom configuration services",
      "Training and certification programs"
    ]
  },

  construction: {
    id: "construction",
    name: "Construction",
    slug: "construction", 
    heroTitle: "Built Tough for Construction Sites",
    heroSubtitle: "Rugged devices designed to survive drops, weather, and the demanding conditions of construction environments while keeping teams connected.",
    heroImage: "https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    description: "Construction sites demand technology that can withstand impacts, weather exposure, and constant movement while maintaining reliable connectivity for project management, safety compliance, and real-time collaboration.",
    challenges: [
      {
        title: "Drop and Impact Damage",
        description: "Construction environments involve frequent drops, impacts, and rough handling that destroy standard devices.",
        icon: "shield"
      },
      {
        title: "Weather Exposure",
        description: "Devices must operate reliably in rain, snow, extreme temperatures, and direct sunlight.",
        icon: "cloud-rain"
      },
      {
        title: "Dust and Debris",
        description: "Construction dust, concrete particles, and debris can infiltrate and damage electronics.",
        icon: "wind"
      },
      {
        title: "Connectivity Challenges",
        description: "Large construction sites often have poor cellular coverage and need reliable communication systems.",
        icon: "signal"
      }
    ],
    solutions: [
      {
        title: "Drop-Proof Rugged Tablets",
        description: "Purpose-built tablets that survive 6-foot drops while providing clear visibility for blueprints, project management, and safety documentation.",
        features: [
          "6-foot drop resistance",
          "Daylight readable screens",
          "Waterproof IP67 rating",
          "Integrated project management apps",
          "Long battery life (12+ hours)"
        ],
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      },
      {
        title: "Weatherproof Laptops",
        description: "Full-featured rugged laptops for site offices and mobile workstations, with sealed keyboards and reinforced displays.",
        features: [
          "IP65 weather protection",
          "Spill-resistant keyboard",
          "Anti-glare displays",
          "CAD software compatibility",
          "Multiple connectivity options"
        ],
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      },
      {
        title: "Handheld Data Collectors",
        description: "Professional PDAs for inventory management, quality control, and safety inspections with barcode scanning capabilities.",
        features: [
          "Professional barcode scanning",
          "NFC and RFID support", 
          "Voice recording capability",
          "Photo documentation",
          "Offline data synchronization"
        ],
        image: "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      }
    ],
    products: ["m10t-mt6789", "n14a", "h68t", "m20a"],
    caseStudy: {
      title: "Major Infrastructure Project Reduces Delays by 25%",
      company: "BuildCorp International",
      challenge: "Project delays due to equipment failures and inefficient paper-based processes. Standard tablets were breaking weekly from drops and weather exposure.",
      solution: "Implemented rugged tablets for all field teams with integrated project management software, plus rugged laptops for site offices.",
      results: [
        "25% reduction in project delays",
        "60% faster document processing",
        "95% reduction in device replacements",
        "Improved safety compliance tracking"
      ],
      image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      testimonial: {
        quote: "The rugged tablets have revolutionized our field operations. They survive everything our construction sites can throw at them, and the real-time project updates have significantly improved our efficiency.",
        author: "Michael Rodriguez",
        position: "Operations Director"
      }
    },
    certifications: ["IP67", "MIL-STD-810H", "Drop Test Certified", "CE Marking", "FCC"],
    supportFeatures: [
      "Rapid replacement program",
      "Construction-specific software integration",
      "Multi-language support",
      "Cloud synchronization services",
      "Volume pricing for large projects"
    ]
  },

  "field-services": {
    id: "field-services",
    name: "Field Services",
    slug: "field-services",
    heroTitle: "Mobile Technology for Field Professionals",
    heroSubtitle: "Reliable computing solutions for technicians, inspectors, and service professionals working in diverse and challenging environments.",
    heroImage: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    description: "Field service professionals need technology that travels with them anywhere, providing reliable access to documentation, communication tools, and data collection capabilities regardless of environmental conditions.",
    challenges: [
      {
        title: "Mobile Connectivity",
        description: "Field locations often have poor or no internet connectivity, requiring offline capabilities and reliable sync.",
        icon: "wifi-off"
      },
      {
        title: "Battery Life Requirements",
        description: "Long work days without access to power require devices with extended battery life and power management.",
        icon: "battery"
      },
      {
        title: "Documentation & Reporting",
        description: "Need to capture photos, videos, signatures, and detailed reports while maintaining data integrity.",
        icon: "file-text"
      },
      {
        title: "Equipment Integration",
        description: "Must interface with diagnostic equipment, sensors, and measurement tools used in field work.",
        icon: "settings"
      }
    ],
    solutions: [
      {
        title: "All-Day Battery Tablets",
        description: "Professional tablets with hot-swappable batteries and power-efficient designs for extended field operations.",
        features: [
          "12+ hour battery life",
          "Hot-swappable batteries",
          "Offline documentation sync",
          "Digital signature capture",
          "Photo and video recording"
        ],
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      },
      {
        title: "Portable Rugged Laptops",
        description: "Lightweight yet durable laptops for complex diagnostics, report generation, and equipment programming in the field.",
        features: [
          "Lightweight design",
          "Multiple I/O ports",
          "Sunlight readable display",
          "Integrated 4G/5G connectivity",
          "Professional software compatibility"
        ],
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      },
      {
        title: "Data Collection Handhelds",
        description: "Specialized handhelds for inventory, maintenance records, and quality assurance with advanced scanning capabilities.",
        features: [
          "Advanced barcode scanning",
          "RFID/NFC reading",
          "Voice recording",
          "GPS location tagging",
          "Wireless data synchronization"
        ],
        image: "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      }
    ],
    products: ["m10j", "h68t", "n14a", "v80j"],
    caseStudy: {
      title: "Utility Company Improves Response Time by 40%",
      company: "PowerGrid Services",
      challenge: "Field technicians were spending excessive time on paperwork and had limited access to technical documentation during service calls.",
      solution: "Deployed rugged tablets with integrated work order management, technical documentation access, and real-time reporting capabilities.",
      results: [
        "40% faster emergency response",
        "70% reduction in paperwork time",
        "Real-time status updates to customers",
        "Improved first-call resolution rates"
      ],
      image: "https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      testimonial: {
        quote: "Our field teams now have instant access to all the information they need. The rugged tablets handle our demanding work environment perfectly and have dramatically improved our service delivery.",
        author: "Jennifer Walsh",
        position: "Field Operations Manager"
      }
    },
    certifications: ["IP65", "MIL-STD-810H", "CE Marking", "FCC", "ENERGY STAR"],
    supportFeatures: [
      "Field service management integration",
      "Remote device management",
      "Predictive maintenance alerts",
      "Custom app development",
      "Training and certification"
    ]
  },

  defence: {
    id: "defence",
    name: "Defence & Security",
    slug: "defence",
    heroTitle: "Mission-Critical Military Technology",
    heroSubtitle: "Battle-tested rugged devices meeting military standards for defence, security, and emergency response operations worldwide.",
    heroImage: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    description: "Defence and security operations demand the highest levels of reliability, security, and performance. Our devices are built to military specifications and tested under extreme conditions to ensure mission success.",
    challenges: [
      {
        title: "Mission-Critical Reliability", 
        description: "Device failure is not an option - systems must operate flawlessly under extreme stress and conditions.",
        icon: "shield-check"
      },
      {
        title: "Security Requirements",
        description: "Strict data security, encryption, and access control requirements for sensitive military information.",
        icon: "lock"
      },
      {
        title: "Extreme Environments",
        description: "Operations in arctic conditions, desert heat, high altitudes, and combat environments.",
        icon: "mountain"
      },
      {
        title: "EMI/RFI Resistance",
        description: "Must operate reliably in high electromagnetic interference environments without compromising communications.",
        icon: "radio"
      }
    ],
    solutions: [
      {
        title: "Military-Grade Laptops",
        description: "Fully rugged laptops meeting MIL-STD-810H specifications with advanced security features and encryption capabilities.",
        features: [
          "MIL-STD-810H certified",
          "Hardware encryption",
          "Secure boot process",
          "Night vision compatibility",
          "EMI/RFI shielding"
        ],
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      },
      {
        title: "Tactical Tablets",
        description: "Lightweight tactical tablets for field operations with secure communications and mapping capabilities.",
        features: [
          "Tactical case design",
          "FIPS 140-2 encryption",
          "GPS/GNSS integration",
          "Secure communications",
          "Low-light readable displays"
        ],
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      },
      {
        title: "Secure Handhelds",
        description: "Encrypted handhelds for secure communications and data collection in sensitive operations.",
        features: [
          "End-to-end encryption",
          "Biometric authentication",
          "Secure voice communications",
          "Stealth mode operation",
          "Self-destruct capabilities"
        ],
        image: "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      }
    ],
    products: ["n14m", "m20a", "h68t", "v12r"],
    caseStudy: {
      title: "Special Forces Unit Achieves 100% Mission Success Rate",
      company: "Defence Solutions Inc.",
      challenge: "Standard commercial devices were failing in combat conditions and lacked the security requirements for classified operations.",
      solution: "Provided military-grade rugged laptops and tablets with full encryption, secure communications, and tactical software integration.",
      results: [
        "100% mission-critical reliability",
        "Zero security breaches",
        "Improved situational awareness",
        "Enhanced communication capabilities"
      ],
      image: "https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      testimonial: {
        quote: "These devices deliver when it matters most. The reliability and security features have proven essential for our operations, and the support team understands our unique requirements.",
        author: "Colonel Jennifer Walsh",
        position: "Systems Procurement Officer"
      }
    },
    certifications: ["MIL-STD-810H", "MIL-STD-461", "FIPS 140-2", "Common Criteria", "TEMPEST"],
    supportFeatures: [
      "Security-cleared support staff",
      "Classified environment support",
      "Custom military configurations",
      "Expedited replacement programs",
      "Training and simulation support"
    ]
  },

  manufacturing: {
    id: "manufacturing",
    name: "Manufacturing",
    slug: "manufacturing",
    heroTitle: "Industrial Computing for Smart Manufacturing",
    heroSubtitle: "Rugged devices designed for factory floors, warehouses, and industrial environments with advanced connectivity and automation features.",
    heroImage: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    description: "Modern manufacturing requires technology that integrates seamlessly with automation systems while withstanding industrial environments including chemicals, temperature extremes, and 24/7 operation demands.",
    challenges: [
      {
        title: "Chemical Resistance",
        description: "Exposure to cleaning agents, oils, and industrial chemicals requires specialized protective coatings and sealing.",
        icon: "droplets"
      },
      {
        title: "24/7 Operation Requirements",
        description: "Manufacturing systems operate continuously, requiring devices with exceptional reliability and longevity.",
        icon: "clock"
      },
      {
        title: "Integration Complexity",
        description: "Must integrate with existing ERP, MES, and automation systems while maintaining real-time performance.",
        icon: "git-merge"
      },
      {
        title: "Precision and Accuracy",
        description: "Quality control and measurement applications require high accuracy and repeatable performance.",
        icon: "target"
      }
    ],
    solutions: [
      {
        title: "Factory Floor Tablets",
        description: "Industrial tablets with chemical-resistant coatings and integration capabilities for production monitoring and quality control.",
        features: [
          "Chemical-resistant coating",
          "ERP/MES integration",
          "Barcode/RFID scanning",
          "Quality control apps",
          "Real-time dashboards"
        ],
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      },
      {
        title: "Industrial Workstations",
        description: "Powerful rugged laptops for manufacturing engineering, automation programming, and system monitoring applications.",
        features: [
          "High-performance processors",
          "Multiple display support",
          "Industrial I/O connectivity", 
          "CAD/CAM software support",
          "Programmable function keys"
        ],
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      },
      {
        title: "Warehouse Handhelds",
        description: "Professional handhelds optimized for inventory management, picking operations, and logistics tracking.",
        features: [
          "Long-range barcode scanning",
          "Warehouse management integration",
          "Voice-directed picking",
          "Inventory tracking",
          "Batch processing capability"
        ],
        image: "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      }
    ],
    products: ["m20a", "m10j", "h68t", "n15a"],
    caseStudy: {
      title: "Automotive Manufacturer Increases Efficiency by 30%",
      company: "Global Automotive Corp",
      challenge: "Paper-based quality control processes were slow and error-prone, while standard tablets couldn't survive the factory environment.",
      solution: "Implemented rugged tablets with integrated quality management software and real-time production monitoring across all production lines.",
      results: [
        "30% increase in production efficiency",
        "95% reduction in quality control errors",
        "Real-time production visibility",
        "Improved regulatory compliance"
      ],
      image: "https://images.pexels.com/photos/159279/macro-focus-cogwheel-gear-159279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      testimonial: {
        quote: "The rugged tablets have transformed our quality processes. They integrate perfectly with our systems and can handle the demanding factory environment while providing real-time data that's essential for lean manufacturing.",
        author: "David Chen",
        position: "Manufacturing Systems Manager"
      }
    },
    certifications: ["IP65", "CE Marking", "ATEX", "UL Listed", "ISO 9001"],
    supportFeatures: [
      "Industrial system integration",
      "Custom software development",
      "Automation protocol support",
      "Preventive maintenance programs",
      "24/7 production support"
    ]
  },

  utilities: {
    id: "utilities",
    name: "Utilities & Energy",
    slug: "utilities",
    heroTitle: "Reliable Technology for Critical Infrastructure",
    heroSubtitle: "Purpose-built rugged devices for power generation, distribution, water treatment, and renewable energy operations.",
    heroImage: "https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    description: "Utility and energy operations are critical infrastructure that requires technology solutions with the highest reliability, safety standards, and performance in diverse environmental conditions.",
    challenges: [
      {
        title: "High Voltage Environments",
        description: "Operations near high-voltage equipment require specialized safety certifications and EMI resistance.",
        icon: "zap"
      },
      {
        title: "Remote Monitoring Needs",
        description: "Infrastructure often located in remote areas requiring reliable connectivity and autonomous operation.",
        icon: "satellite"
      },
      {
        title: "Safety Compliance",
        description: "Strict safety regulations and certification requirements for equipment used in utility environments.",
        icon: "shield-alert"
      },
      {
        title: "Weather Resistance",
        description: "Outdoor installations must withstand extreme weather including lightning, flooding, and temperature extremes.",
        icon: "cloud-lightning"
      }
    ],
    solutions: [
      {
        title: "ATEX Certified Tablets",
        description: "Explosion-proof tablets certified for use in hazardous environments including gas and chemical processing facilities.",
        features: [
          "ATEX Zone 1/2 certification",
          "Intrinsically safe design",
          "EMI/RFI immunity", 
          "SCADA system integration",
          "Long-range communication"
        ],
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      },
      {
        title: "Utility Field Laptops",
        description: "Rugged laptops designed for utility field operations with specialized software for power system analysis and maintenance.",
        features: [
          "High-voltage safety certified",
          "Power system analysis tools",
          "GIS mapping integration",
          "Digital multimeter connectivity",
          "Weather-sealed design"
        ],
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      },
      {
        title: "Infrastructure Monitoring",
        description: "Specialized computing solutions for remote monitoring of power generation, transmission, and distribution systems.",
        features: [
          "24/7 continuous operation",
          "SCADA integration",
          "Alarm management systems",
          "Predictive maintenance",
          "Cybersecurity features"
        ],
        image: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      }
    ],
    products: ["n14a", "m10t-mt6789", "v10j", "m20a"],
    caseStudy: {
      title: "Power Grid Modernization Improves Reliability by 45%",
      company: "National Power Grid",
      challenge: "Aging infrastructure monitoring systems were prone to failures and provided limited real-time visibility into grid operations.",
      solution: "Deployed rugged computing systems with advanced SCADA integration and real-time monitoring capabilities across 200+ substations.",
      results: [
        "45% improvement in grid reliability",
        "60% faster fault detection",
        "Reduced maintenance costs",
        "Enhanced cybersecurity posture"
      ],
      image: "https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      testimonial: {
        quote: "The rugged computing solutions have been instrumental in our grid modernization. They provide the reliability we need for critical infrastructure while supporting our advanced monitoring and control systems.",
        author: "Robert Martinez",
        position: "Chief Technology Officer"
      }
    },
    certifications: ["ATEX", "IECEx", "UL Listed", "IEEE Standards", "NERC CIP"],
    supportFeatures: [
      "Critical infrastructure support",
      "Cybersecurity consulting", 
      "Utility-specific certifications",
      "Emergency response programs",
      "Compliance documentation"
    ]
  }
};

export const getIndustryData = (slug: string): IndustryData | undefined => {
  return industriesData[slug];
};

export const getAllIndustries = (): IndustryData[] => {
  return Object.values(industriesData);
};