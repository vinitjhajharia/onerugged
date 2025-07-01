export interface Product {
  id: string;
  slug: string;
  category: 'laptops' | 'tablets' | 'phones' | 'vehicle';
  title: string;
  shortDescription: string;
  fullDescription: string;
  badge?: string;
  rating: number;
  reviews: number;
  mainImage: string;
  images: string[];
  featureImages?: Array<{
    image: string;
    title: string;
    description: string;
  }>;
  specifications: {
    [key: string]: string | string[];
  };
  features: string[];
  industries: string[];
  certifications: string[];
  accessories: string[];
  inStock: boolean;
  featured: boolean;
}

// Helper function to convert category names
const mapCategory = (category: string): 'laptops' | 'tablets' | 'phones' | 'vehicle' => {
  switch (category.toLowerCase()) {
    case 'notebook':
      return 'laptops';
    case 'tablet':
      return 'tablets';
    case 'pda':
      return 'phones';
    case 'in-vehicle tablet':
    case 'panel pc':
      return 'vehicle';
    default:
      return 'tablets';
  }
};

// Helper function to extract features from specifications
const extractFeatures = (specs: Array<{key: string, value: string}>): string[] => {
  const features: string[] = [];
  
  specs.forEach(spec => {
    if (spec.key.toLowerCase().includes('certification') && spec.value.trim()) {
      features.push(spec.value.trim());
    }
    if (spec.key.toLowerCase().includes('rugged') && spec.value.trim()) {
      features.push(spec.value.trim());
    }
    if (spec.key.toLowerCase().includes('operating system') && spec.value.trim()) {
      features.push(spec.value.trim());
    }
    if (spec.key.toLowerCase().includes('display') && spec.value.trim()) {
      const lines = spec.value.split('\n').filter(line => line.trim());
      if (lines.length > 0) {
        features.push(`${lines[0]}`);
      }
    }
    if (spec.key.toLowerCase().includes('battery') && spec.value.trim()) {
      features.push(spec.value.split('\n')[0].trim());
    }
  });
  
  return features.slice(0, 8); // Limit to 8 features
};

// Helper function to extract certifications
const extractCertifications = (specs: Array<{key: string, value: string}>): string[] => {
  const certs = new Set<string>();
  
  specs.forEach(spec => {
    const key = spec.key.toLowerCase();
    if (key.includes('ip') && spec.value.trim()) {
      certs.add('IP65/IP67');
    }
    if (key.includes('mil-std') || key.includes('810h')) {
      certs.add('MIL-STD-810H');
    }
    if (key.includes('ce') && spec.value.trim() === '') {
      certs.add('CE Marking');
    }
    if (key.includes('fcc') && spec.value.trim() === '') {
      certs.add('FCC');
    }
    if (key.includes('ccc') && spec.value.trim() === '') {
      certs.add('CCC');
    }
  });
  
  return Array.from(certs);
};

// Helper function to extract industries
const extractIndustries = (category: string): string[] => {
  switch (category) {
    case 'laptops':
      return ['Field Services', 'Construction', 'Manufacturing', 'Defence'];
    case 'vehicle':
      return ['Transportation', 'Logistics', 'Mining', 'Construction'];
    case 'tablets':
      return ['Manufacturing', 'Healthcare', 'Field Services', 'Logistics'];
    case 'phones':
      return ['Emergency Services', 'Security', 'Field Services', 'Construction'];
    default:
      return ['Manufacturing', 'Construction', 'Field Services'];
  }
};

export const products: Product[] = [
  // V10J - In-Vehicle Tablet
  {
    id: "v10j",
    slug: "v10j",
    category: "vehicle",
    title: "V10J Vehicle PC",
    shortDescription: "10.1 inch vehicle computer with Intel N5100 processor, perfect for transportation and logistics applications.",
    fullDescription: "The V10J is a robust 10.1-inch vehicle computer designed for demanding transportation environments. Featuring an Intel JASPER LAKE N5100 processor and Windows 11, it delivers reliable performance for fleet management and mobile operations.",
    badge: "Fleet Ready",
    rating: 4.7,
    reviews: 89,
    mainImage: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    images: [
      "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    specifications: {
      "Model": "V10J",
      "Display": "10.1 inch 16:10, 800*1280 IPS, 1000cd/㎡",
      "Processor": "Intel JASPER LAKE N5100 Max 2.8GHz",
      "Memory": "8GB LPDDR3, 128GB EMMC",
      "Operating System": "Windows 11 Home",
      "Connectivity": ["WIFI 802.11(a/b/g/n/ac)", "Bluetooth 5.0", "4G Optional", "GPS"],
      "Rugged Rating": "IP65",
      "Operating Temperature": "-20°C to 60°C",
      "Certifications": ["IP65", "CE", "CCC", "FCC"]
    },
    features: [
      "Intel N5100 Processor",
      "IP65 Water Resistant",
      "1000cd/㎡ Bright Display", 
      "Vehicle Power 11-24V",
      "GPS Navigation Ready",
      "MIL-STD-810H Tested",
      "Windows 11 Compatible",
      "Fleet Management Ready"
    ],
    industries: ["Transportation", "Logistics", "Construction", "Mining"],
    certifications: ["IP65", "CE Marking", "CCC", "FCC"],
    accessories: [
      "Vehicle Docking Station",
      "GPS Antenna",
      "Power Adapter Cables",
      "Mounting Hardware"
    ],
    inStock: true,
    featured: false
  },

  // V10T - In-Vehicle Tablet
  {
    id: "v10t",
    slug: "v10t", 
    category: "vehicle",
    title: "V10T Vehicle PC",
    shortDescription: "Android-powered 10.1 inch vehicle computer with MT6789 processor for modern fleet applications.",
    fullDescription: "The V10T vehicle computer combines Android 12 flexibility with rugged durability. Powered by MT6789 processor, it's ideal for modern fleet management and transportation applications requiring Android compatibility.",
    badge: "Android Ready",
    rating: 4.6,
    reviews: 67,
    mainImage: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    images: [
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    specifications: {
      "Model": "V10T",
      "Display": "10.1 inch 16:10, 800*1280 IPS, 1000cd/㎡",
      "Processor": "MT6789, 2.2GHz + 2.0GHz",
      "Memory": "4GB LPDDR4X, 64GB UFS",
      "Operating System": "Android 12",
      "Connectivity": ["WIFI 802.11(a/b/g/n/ac)", "Bluetooth 5.2", "4G LTE", "GPS"],
      "Rugged Rating": "IP65",
      "Operating Temperature": "-20°C to 60°C",
      "Certifications": ["IP65", "CE", "CCC", "MIL-STD-810H", "FCC"]
    },
    features: [
      "MT6789 Octa-Core",
      "Android 12 OS",
      "IP65 Protection",
      "4G LTE Connectivity",
      "GPS Navigation",
      "Hot-Swappable Battery",
      "Vehicle Integration",
      "MIL-STD-810H Certified"
    ],
    industries: ["Transportation", "Logistics", "Field Services", "Construction"],
    certifications: ["IP65", "CE Marking", "CCC", "MIL-STD-810H", "FCC"],
    accessories: [
      "Vehicle Mount",
      "4G Antenna",
      "Power Cables",
      "GPS Antenna"
    ],
    inStock: true,
    featured: false
  },

  // V12R - In-Vehicle Tablet
  {
    id: "v12r",
    slug: "v12r",
    category: "vehicle", 
    title: "V12R Agricultural Vehicle PC",
    shortDescription: "Advanced 10.1-inch vehicle computer with RTK precision GPS and CAN bus support for agricultural applications.",
    fullDescription: "The V12R is specifically designed for agricultural and heavy machinery applications. Features RTK high-precision positioning, CAN bus support, and multi-channel camera inputs for comprehensive vehicle integration.",
    badge: "Agriculture Ready",
    rating: 4.8,
    reviews: 45,
    mainImage: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    images: [
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    specifications: {
      "Model": "V12R",
      "Display": "10.1-inch 16:10, 1280*800 IPS, 700cd/㎡",
      "Processor": "RK3568 Quad-Core ARM Cortex-A55, 2.0GHz",
      "Memory": "4GB RAM (Optional 8GB), 64GB (Optional 128/256GB)",
      "Operating System": "Android 12 + Linux Dual-System",
      "Special Features": ["RTK High Precision GPS", "CAN Bus Support", "4-Channel AHD Cameras"],
      "Power": "6-36V Wide Voltage",
      "Connectivity": ["Wi-Fi 802.11ac", "Bluetooth 5.0", "4G Optional"],
      "Certifications": ["IP65", "CE", "CCC", "MIL-STD-810H", "ISO7637", "ISO16750"]
    },
    features: [
      "RTK Precision GPS",
      "CAN Bus Integration",
      "4-Channel AHD Cameras",
      "Wide Voltage 6-36V",
      "Dual System Support",
      "Agricultural Protocols",
      "IP67 Camera Rating",
      "J1939 Protocol Support"
    ],
    industries: ["Agriculture", "Construction", "Mining", "Heavy Machinery"],
    certifications: ["IP65", "CE Marking", "CCC", "MIL-STD-810H", "ISO7637", "ISO16750"],
    accessories: [
      "RTK Antenna Kit",
      "CAN Bus Cables",
      "Camera System",
      "Power Harness"
    ],
    inStock: true,
    featured: true
  },

  // V80J - In-Vehicle Tablet
  {
    id: "v80j",
    slug: "v80j",
    category: "vehicle",
    title: "V80J Compact Vehicle PC",
    shortDescription: "Compact 8-inch vehicle computer with Intel N5100 processor, ideal for space-constrained vehicle installations.",
    fullDescription: "The V80J delivers full computing power in a compact 8-inch form factor. Perfect for vehicles with limited dashboard space while maintaining full Windows functionality and vehicle integration capabilities.",
    badge: "Compact Design",
    rating: 4.5,
    reviews: 78,
    mainImage: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    images: [
      "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    specifications: {
      "Model": "V80J",
      "Display": "8 inch 16:10, 800*1280 IPS, 1000cd/㎡",
      "Processor": "Intel JASPER LAKE N5100 Max 2.8GHz",
      "Memory": "8GB LPDDR3, 128GB EMMC",
      "Operating System": "Windows 10 Home",
      "Connectivity": ["WIFI 802.11(a/b/g/n/ac)", "Bluetooth 5.0", "4G Optional", "GPS"],
      "Dimensions": "218.1*154.5*23.0 mm",
      "Weight": "631g",
      "Certifications": ["IP65", "CE", "CCC", "FCC"]
    },
    features: [
      "Compact 8-inch Design",
      "Intel N5100 Performance",
      "Windows 10 Compatible",
      "High Brightness Display",
      "Vehicle Power Support",
      "GPS Ready",
      "Multiple I/O Options",
      "Lightweight Design"
    ],
    industries: ["Transportation", "Field Services", "Emergency Services", "Utilities"],
    certifications: ["IP65", "CE Marking", "CCC", "FCC"],
    accessories: [
      "Compact Mount",
      "Power Adapter",
      "I/O Cables",
      "GPS Antenna"
    ],
    inStock: true,
    featured: false
  },

  // V80T - In-Vehicle Tablet
  {
    id: "v80t",
    slug: "v80t",
    category: "vehicle",
    title: "V80T Compact Android Vehicle PC",
    shortDescription: "8-inch Android vehicle computer with MT6789 processor, combining compact size with modern connectivity.",
    fullDescription: "The V80T offers Android flexibility in a compact vehicle computer. With MT6789 processor and comprehensive connectivity options, it's perfect for modern fleet applications requiring Android compatibility.",
    badge: "Compact Android",
    rating: 4.4,
    reviews: 56,
    mainImage: "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    images: [
      "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    specifications: {
      "Model": "V80T",
      "Display": "8 inch 16:10, 800*1280 IPS, 700cd/㎡",
      "Processor": "MT6789, 2.2GHz + 2.0GHz",
      "Memory": "4GB LPDDR4X, 64GB UFS",
      "Operating System": "Android 12",
      "Battery": "Optional 2000mAh/3.7V",
      "Connectivity": ["WIFI 802.11(a/b/g/n/ac)", "Bluetooth 5.2", "4G LTE", "GPS"],
      "Certifications": ["IP65", "CE", "CCC", "MIL-STD-810H", "FCC"]
    },
    features: [
      "8-inch Compact Size",
      "Android 12 OS",
      "MT6789 Performance",
      "4G LTE Ready",
      "Optional Battery",
      "Vehicle Integration",
      "GPS Navigation",
      "MIL-STD-810H Tested"
    ],
    industries: ["Transportation", "Delivery", "Field Services", "Emergency"],
    certifications: ["IP65", "CE Marking", "CCC", "MIL-STD-810H", "FCC"],
    accessories: [
      "Vehicle Mount",
      "Battery Pack",
      "Power Cables",
      "Function Adapters"
    ],
    inStock: true,
    featured: false
  },

  // N14A - Notebook
  {
    id: "n14a",
    slug: "n14a",
    category: "laptops",
    title: "N14A Rugged Notebook",
    shortDescription: "14-inch rugged laptop with Intel i5-1235U processor, designed for field professionals who need Windows computing power.",
    fullDescription: "The N14A rugged notebook combines powerful Intel processing with military-grade durability. Featuring a bright 1000cd/m² display and comprehensive I/O options, it's built for professionals working in challenging environments.",
    badge: "Professional Grade",
    rating: 4.8,
    reviews: 142,
    mainImage: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    images: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    featureImages: [
      {
        image: "/chan-pin-xiang-qing-ye-en-01.webp",
        title: "Smart Design & Performance",
        description: "Optimized for both power and efficiency with 12 threads, high frequency processing, and ample storage"
      },
      {
        image: "/chan-pin-xiang-qing-ye-en-02.webp", 
        title: "Durable Body Construction",
        description: "Built with ABS+PC materials and reinforced with high-strength metal for all-scenario use"
      },
      {
        image: "/chan-pin-xiang-qing-ye-en-03.webp",
        title: "HD & HB Display",
        description: "14-inch fully laminated display with high resolution, brightness, and anti-glare properties"
      },
      {
        image: "/chan-pin-xiang-qing-ye-en-04.webp",
        title: "Rugged Notebook Excellence", 
        description: "N14A rugged notebook upgraded for superior performance in extreme environments"
      },
      {
        image: "/chan-pin-xiang-qing-ye-en-05.webp",
        title: "Power Meets Efficiency",
        description: "Intel Core i5-1235U processor with cutting-edge hybrid architecture and Iris Xe graphics"
      }
    ],
    specifications: {
      "Model": "N14A",
      "Display": "14-inch 16:9, 1920*1080, 1000cd/㎡",
      "Processor": "Intel i5-1235U (Optional i7-1255U)",
      "Memory": "16GB DDR5, 256GB SSD",
      "Operating System": "Windows 11 Pro",
      "Battery": "Built-in 1300mAh + Hot-swappable 4850mAh",
      "Connectivity": ["Wi-Fi 6", "Bluetooth 5.1", "4G/5G Optional"],
      "I/O Ports": ["USB 3.2", "USB 3.0", "USB 2.0", "Type-C Thunderbolt 4", "HDMI 2.0a", "RJ45", "RS232"],
      "Certifications": ["IP65", "MIL-STD-810H", "CE", "FCC", "CCC"]
    },
    features: [
      "Intel i5-1235U Processor",
      "1000cd/m² Bright Display",
      "Hot-Swappable Battery",
      "Thunderbolt 4 Support",
      "MIL-STD-810H Certified",
      "IP65 Protection",
      "Fingerprint Security",
      "Backlit Keyboard"
    ],
    industries: ["Field Services", "Construction", "Manufacturing", "Defence"],
    certifications: ["IP65", "MIL-STD-810H", "CE Marking", "FCC", "CCC"],
    accessories: [
      "Removable Battery",
      "Quad Charging Dock",
      "Power Adapter",
      "Carry Case"
    ],
    inStock: true,
    featured: true
  },

  // N14M - Notebook  
  {
    id: "n14m",
    slug: "n14m",
    category: "laptops",
    title: "N14M AI-Ready Rugged Notebook",
    shortDescription: "Advanced 14-inch rugged laptop with Intel Meteor Lake processor, optimized for AI workloads and intensive computing tasks.",
    fullDescription: "The N14M represents the next generation of rugged computing with Intel Meteor Lake architecture. Designed for AI applications and intensive processing, it delivers exceptional performance in extreme environments.",
    badge: "AI Ready",
    rating: 4.9,
    reviews: 98,
    mainImage: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    images: [
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    specifications: {
      "Model": "N14M",
      "Display": "14-inch 16:9, 1920*1080, 1000cd/㎡",
      "Processor": "Intel Meteor Lake i5-125H (Optional i7-155H)",
      "GPU": "Intel Xe LPG Graphics",
      "Memory": "32GB DDR5 (Optional 16GB), 256GB SSD",
      "Operating System": "Windows 11 Pro",
      "AI Features": "NPU for AI Acceleration",
      "Connectivity": ["Wi-Fi 6", "Bluetooth 5.1", "4G/5G Optional"],
      "Certifications": ["IP65", "MIL-STD-810H", "CE", "FCC", "CCC"]
    },
    features: [
      "Intel Meteor Lake AI",
      "NPU Acceleration",
      "32GB DDR5 Memory",
      "1000cd/m² Display",
      "Advanced Graphics",
      "8+ Hour Battery",
      "AI Workload Ready",
      "Enhanced Security"
    ],
    industries: ["AI Research", "Engineering", "Defence", "Field Services"],
    certifications: ["IP65", "MIL-STD-810H", "CE Marking", "FCC", "CCC"],
    accessories: [
      "Quad Charging Dock",
      "High-Power Adapter",
      "AI Development Kit",
      "Rugged Case"
    ],
    inStock: true,
    featured: true
  },

  // N15A - Notebook
  {
    id: "n15a", 
    slug: "n15a",
    category: "laptops",
    title: "N15A Large Screen Rugged Notebook",
    shortDescription: "15.6-inch rugged laptop providing maximum screen real estate for detailed work and complex applications.",
    fullDescription: "The N15A offers the largest screen in our rugged notebook lineup. With 15.6-inch display and full-size keyboard, it's perfect for professionals who need maximum productivity in field environments.",
    badge: "Large Screen",
    rating: 4.7,
    reviews: 87,
    mainImage: "https://images.pexels.com/photos/331684/pexels-photo-331684.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    images: [
      "https://images.pexels.com/photos/331684/pexels-photo-331684.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    specifications: {
      "Model": "N15A",
      "Display": "15.6-inch 16:9, 1920*1080, 1000cd/㎡",
      "Processor": "Intel i5-1235U (Optional i7-1255U)",
      "Memory": "16GB DDR5, 256GB SSD",
      "Operating System": "Windows 11 Pro",
      "Dimensions": "407*305.8*45.5mm",
      "Weight": "3.52kg",
      "Connectivity": ["Wi-Fi 6", "Bluetooth 5.1", "4G/5G Optional"],
      "Certifications": ["IP65", "MIL-STD-810H", "CE", "FCC", "CCC"]
    },
    features: [
      "15.6-inch Large Display",
      "Full-Size Keyboard",
      "Intel i5 Performance",
      "Hot-Swappable Battery",
      "Comprehensive I/O",
      "Bright Outdoor Display",
      "Rugged Construction",
      "Professional Grade"
    ],
    industries: ["Engineering", "Field Services", "Construction", "Manufacturing"],
    certifications: ["IP65", "MIL-STD-810H", "CE Marking", "FCC", "CCC"],
    accessories: [
      "Extended Battery",
      "Docking Station",
      "Large Carry Case",
      "External Monitor Cable"
    ],
    inStock: true,
    featured: false
  },

  // N15M - Notebook
  {
    id: "n15m",
    slug: "n15m", 
    category: "laptops",
    title: "N15M Large AI Rugged Notebook",
    shortDescription: "15.6-inch AI-optimized rugged laptop with Intel Meteor Lake processor for demanding computational tasks.",
    fullDescription: "The N15M combines the largest screen size with cutting-edge AI processing capabilities. Perfect for professionals who need both screen real estate and AI processing power in rugged environments.",
    badge: "AI + Large Screen",
    rating: 4.8,
    reviews: 73,
    mainImage: "https://images.pexels.com/photos/159279/macro-focus-cogwheel-gear-159279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    images: [
      "https://images.pexels.com/photos/159279/macro-focus-cogwheel-gear-159279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    specifications: {
      "Model": "N15M",
      "Display": "15.6-inch 16:9, 1920*1080, 1000cd/㎡",
      "Processor": "Intel Meteor Lake i5-125H (Optional i7-155H)",
      "Memory": "32GB DDR5, 256GB SSD",
      "Operating System": "Windows 11 Pro",
      "GPU": "Intel Xe LPG Graphics",
      "Power": "19V/4.73A 90W",
      "Certifications": ["IP65", "MIL-STD-810H", "CE", "FCC", "CCC"]
    },
    features: [
      "15.6-inch AI Display",
      "Meteor Lake Performance",
      "32GB DDR5 Memory",
      "AI Acceleration",
      "Enhanced Graphics",
      "Large Screen Productivity",
      "Professional Build",
      "Advanced Cooling"
    ],
    industries: ["AI Development", "Engineering", "Research", "Defence"],
    certifications: ["IP65", "MIL-STD-810H", "CE Marking", "FCC", "CCC"],
    accessories: [
      "High-Power Adapter",
      "AI Development Kit",
      "Large Docking Station",
      "Professional Case"
    ],
    inStock: true,
    featured: false
  },

  // H68T - PDA
  {
    id: "h68t",
    slug: "h68t",
    category: "phones",
    title: "H68T Rugged Handheld PDA",
    shortDescription: "Professional handheld terminal with 6.56-inch display, ideal for data collection and mobile workforce applications.",
    fullDescription: "The H68T combines smartphone functionality with professional data collection capabilities. Featuring a large 6.56-inch display, barcode scanning, and rugged construction for demanding field applications.",
    badge: "Data Collection",
    rating: 4.6,
    reviews: 156,
    mainImage: "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    images: [
      "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    specifications: {
      "Model": "H68T",
      "Display": "6.56-inch 20:9, 720*1612, 670 Nit",
      "Processor": "MT6789 Octa-core, 2.2GHz + 2.0GHz",
      "Memory": "8GB LPDDR4X, 128GB UFS2.2",
      "Operating System": "Android 14/GMS",
      "Camera": "Front 32MP, Rear 48MP + 8MP Wide-angle",
      "Battery": "5800mAh, 33W Fast Charge",
      "Data Collection": ["Barcode Scanner", "NFC", "Fingerprint"],
      "Certifications": ["IP68", "MIL-STD-810H", "ATEX Zone 2/22"]
    },
    features: [
      "6.56-inch Large Display",
      "Professional Barcode Scanner",
      "5800mAh Long Battery",
      "33W Fast Charging",
      "IP68 Waterproof",
      "Dual Camera System",
      "NFC Support",
      "Glove Touch Compatible"
    ],
    industries: ["Logistics", "Warehousing", "Retail", "Field Services"],
    certifications: ["IP68", "MIL-STD-810H", "ATEX Zone 2/22", "CE", "FCC", "CCC"],
    accessories: [
      "Hand Strap",
      "Docking Charger",
      "Tempered Glass",
      "Bicycle Holder"
    ],
    inStock: true,
    featured: true
  },

  // M10J - Tablet
  {
    id: "m10j",
    slug: "m10j",
    category: "tablets",
    title: "M10J Windows Rugged Tablet",
    shortDescription: "10.1-inch Windows tablet with Intel N5100 processor, perfect for field applications requiring full Windows compatibility.",
    fullDescription: "The M10J delivers full Windows computing power in a rugged tablet form factor. With Intel N5100 processor and comprehensive I/O options, it's ideal for professionals who need Windows applications in the field.",
    badge: "Windows Tablet",
    rating: 4.5,
    reviews: 134,
    mainImage: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    images: [
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/159279/macro-focus-cogwheel-gear-159279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    specifications: {
      "Model": "M10J",
      "Display": "10.1 inch 16:10, 1200*1920 FHD, 1000cd/㎡",
      "Processor": "Intel JASPER LAKE N5100",
      "Memory": "8GB LPDDR4x, 128GB EMMC",
      "Operating System": "Windows 11 home",
      "Battery": "Removable 7.6V/5000mAh",
      "Connectivity": ["Wi-Fi 6", "Bluetooth 5.0", "4G Optional", "GPS"],
      "Data Collection": "Optional Honeywell N3680, NFC",
      "Certifications": ["IP65", "MIL-STD-810H", "CE", "FCC", "CCC"]
    },
    features: [
      "Windows 11 Compatible",
      "Intel N5100 Performance", 
      "FHD Bright Display",
      "Removable Battery",
      "Optional Barcode Scanner",
      "Multiple I/O Options",
      "Rugged Construction",
      "Professional Grade"
    ],
    industries: ["Field Services", "Manufacturing", "Logistics", "Healthcare"],
    certifications: ["IP65", "MIL-STD-810H", "CE Marking", "FCC", "CCC"],
    accessories: [
      "Charging Base",
      "Vehicle Mount",
      "Removable Battery",
      "Quad Charger"
    ],
    inStock: true,
    featured: false
  },

  // M10T - Tablet
  {
    id: "m10t-mt6789",
    slug: "m10t-mt6789",
    category: "tablets",
    title: "M10T Android Rugged Tablet",
    shortDescription: "10.1-inch Android tablet with MT6789 processor, optimized for modern mobile applications and data collection.",
    fullDescription: "The M10T combines Android flexibility with rugged durability. Powered by MT6789 processor and featuring comprehensive connectivity, it's perfect for modern mobile workforce applications.",
    badge: "Android Performance",
    rating: 4.7,
    reviews: 167,
    mainImage: "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    images: [
      "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    specifications: {
      "Model": "M10T",
      "Display": "10.1 inch 16:10, 1200*1920 FHD, 1000cd/㎡",
      "Processor": "MT6789 octa-core, 2x A76 2.2GHz",
      "Memory": "8GB LPDDR4x, 128GB EMMC",
      "Operating System": "Android 14/GMS",
      "Battery": "Removable 3.8V/10000mAh",
      "Camera": "Front 5.0MP, Rear 13.0MP with autofocus",
      "Connectivity": ["WIFI 802.11ac", "Bluetooth 5.1", "4G LTE", "GPS"],
      "Certifications": ["IP65", "MIL-STD-810H", "CE", "FCC", "CCC"]
    },
    features: [
      "Android 14 Latest OS",
      "MT6789 Performance",
      "10000mAh Large Battery",
      "13MP Auto-Focus Camera",
      "Dual Speakers",
      "NFC Support",
      "GPS Navigation",
      "Rugged Design"
    ],
    industries: ["Field Services", "Logistics", "Healthcare", "Education"],
    certifications: ["IP65", "MIL-STD-810H", "CE Marking", "FCC", "CCC"],
    accessories: [
      "Charging Base",
      "Vehicle Mount",
      "Spare Battery",
      "Quad Charger"
    ],
    inStock: true,
    featured: true
  },

  // M20A - Tablet
  {
    id: "m20a",
    slug: "m20a",
    category: "tablets",
    title: "M20A Professional Rugged Tablet",
    shortDescription: "12.2-inch professional tablet with Intel i5 processor, designed for demanding applications requiring maximum performance.",
    fullDescription: "The M20A represents the pinnacle of rugged tablet computing. With 12.2-inch high-resolution display and Intel i5 processor, it delivers workstation-class performance in extreme environments.",
    badge: "Professional",
    rating: 4.9,
    reviews: 89,
    mainImage: "https://images.pexels.com/photos/159279/macro-focus-cogwheel-gear-159279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    images: [
      "https://images.pexels.com/photos/159279/macro-focus-cogwheel-gear-159279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    specifications: {
      "Model": "M20A",
      "Display": "12.2 inch 16:10, 1920*1200, 650cd/㎡",
      "Processor": "Intel i5-1235U (Optional i7-1255U)",
      "Memory": "16GB DDR4L, 128GB SSD",
      "Operating System": "Windows 11 PRO",
      "Battery": "Built-in 860mAh + Removable 6300mAh",
      "Connectivity": ["Wi-Fi 6", "Bluetooth 5.1", "4G/5G Optional"],
      "Expansion": "Modular I/O (RJ45/DB9/USB2.0/QR Scanner)",
      "Certifications": ["IP65", "MIL-STD-810H", "CE", "FCC", "CCC"]
    },
    features: [
      "12.2-inch Professional Display",
      "Intel i5 Performance",
      "Modular Expansion",
      "Dual Battery System",
      "Professional Build",
      "High-Resolution Screen",
      "Workstation Power",
      "Field-Ready Design"
    ],
    industries: ["Engineering", "Field Services", "Manufacturing", "Research"],
    certifications: ["IP65", "MIL-STD-810H", "CE Marking", "FCC", "CCC"],
    accessories: [
      "Docking Station",
      "Vehicle Mount", 
      "Expansion Modules",
      "Professional Case"
    ],
    inStock: true,
    featured: true
  }
];

export const categories = [
  {
    id: "laptops",
    name: "Rugged Laptops", 
    description: "Military-grade laptops engineered for extreme environments",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    count: products.filter(p => p.category === "laptops").length
  },
  {
    id: "tablets",
    name: "Rugged Tablets",
    description: "Lightweight, durable tablets for field operations", 
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    count: products.filter(p => p.category === "tablets").length
  },
  {
    id: "phones", 
    name: "Rugged Handhelds",
    description: "Professional handhelds and PDAs built for harsh conditions",
    image: "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    count: products.filter(p => p.category === "phones").length
  },
  {
    id: "vehicle",
    name: "Vehicle Computers", 
    description: "Mobile workstations for trucks and field vehicles",
    image: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    count: products.filter(p => p.category === "vehicle").length
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductBySlug = (slug: string) => {
  return products.find(product => product.slug === slug);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getRelatedProducts = (currentProduct: Product, limit = 3) => {
  return products
    .filter(product => 
      product.category === currentProduct.category && 
      product.id !== currentProduct.id
    )
    .slice(0, limit);
};