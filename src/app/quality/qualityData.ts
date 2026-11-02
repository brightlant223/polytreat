export interface PrincipleItem {
  letter: "P" | "Q" | "R" | "S";
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  bullets: string[];
  focusLabel: string;
  operationalFocus: string;
  accentBadge: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  textColor: string;
}

export interface QualityPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  placeholderLabel: string;
  badgeMetric: string;
  corePoints: string[];
  deepPoints: string[];
}

export interface ProductDomain {
  id: string;
  category: string;
  eyebrow: string;
  description: string;
  applications: string[];
  products: string[];
}

export interface QualityMetric {
  value: string;
  numericTarget?: number;
  numericStart?: number;
  prefix?: string;
  suffix?: string;
  formatCommas?: boolean;
  label: string;
  detail: string;
}

export interface BatchJourneyStep {
  step: string;
  title: string;
  description: string;
  checkpoint: string;
}

export const qualityHeroData = {
  eyebrow: "QUALITY ASSURANCE & STANDARDS",
  titleLines: [
    "Precision engineering.",
    "Consistent purity.",
    "Zero-compromise quality.",
  ],
  lead: "Manufacturing specialty chemical formulations since 1987 across our Tarapur MIDC and Goregaon plants. PolyTreat pairs full-fledged R&D facilities and pilot-reactor validation with daily statistical process control to deliver certified quality in India and international industrial markets.",
  chips: [
    "ISO 9001:2015 certified",
    "Tarapur & Goregaon units",
    "In-house R&D & pilot reactor",
    "Daily statistical batch control",
    "Eco-friendly & biodegradable",
  ],
};

export const qualityMetrics: QualityMetric[] = [
  {
    value: "Since 1987",
    numericTarget: 1987,
    numericStart: 1950,
    prefix: "Since ",
    formatCommas: false,
    label: "Manufacturing Legacy",
    detail: "Over 35 years of specialized formulation and industrial water engineering expertise.",
  },
  {
    value: "100%",
    numericTarget: 100,
    numericStart: 0,
    suffix: "%",
    label: "Batch Inspection",
    detail: "Every batch verified for active content, pH, density, and physical stability before staging.",
  },
  {
    value: "2 Units",
    numericTarget: 2,
    numericStart: 0,
    suffix: " Units",
    label: "Maharashtra Production",
    detail: "Tarapur MIDC heavy chemical production and Goregaon specialty care facilities.",
  },
  {
    value: "ISO 9001:2015",
    label: "Certified Quality System",
    detail: "SMCS certified & AIAO-BAR USA accredited international management standard.",
  },
];

export const pqrsPrinciples: PrincipleItem[] = [
  {
    letter: "P",
    title: "Performance",
    subtitle: "Efficacy, Economical Price & Environmental Safety",
    tagline: "Formulations engineered for maximum operating efficiency at an economical price with environmental safety.",
    description:
      "Optimizing thermal and mechanical system yields while lowering chemical consumption. Continuous formulation development guarantees peak asset preservation under fluctuating industrial water conditions.",
    bullets: [
      "Continuous program of product development, diversity, and operational efficiency improvement.",
      "Optimized active concentrations delivering peak system yield at minimal treatment dosage.",
      "Field-validated in thermal boilers, cooling loops, and high-demand industrial systems.",
      "Advanced polymeric dispersants preventing scale crystallization, sludge, and corrosion.",
      "Low COD/BOD chemical profiles reducing industrial wastewater treatment loads.",
      "Proven thermodynamic stability under extreme operating pressures and thermal cycling.",
    ],
    focusLabel: "OPERATIONAL DELIVERABLE",
    operationalFocus: "Economical Pricing & Peak System Yield",
    accentBadge: "High-Yield Active Formulations",
    accentColor: "#10B981",
    accentBg: "rgba(16, 185, 129, 0.08)",
    accentBorder: "rgba(16, 185, 129, 0.35)",
    textColor: "#065F46",
  },
  {
    letter: "Q",
    title: "Quality",
    subtitle: "Daily Monitoring, Inspection & Statistical Process Control",
    tagline: "Monitored on a daily basis with statistical analysis across raw materials and finished products.",
    description:
      "Rigorous Quality Committee oversight across raw material qualification, stoichiometric reactor synthesis, and dispatch release. Every batch undergoes comprehensive analytical and statistical validation.",
    bullets: [
      "Daily inspection of finished products and incoming raw materials with statistical analysis.",
      "Strict quality standards set for labeling, packaging integrity, and customer delivery.",
      "Quality Committee governance with active employee awareness and total involvement.",
      "Sealed retention samples archived for 100% post-dispatch traceability and audit compliance.",
      "Daily Statistical Process Control (SPC) measuring pH, density, active %, and viscosity.",
      "Rigid vendor qualification audits ensuring raw ingredient purity matches certified assay specs.",
    ],
    focusLabel: "OPERATIONAL DELIVERABLE",
    operationalFocus: "100% Daily Inspection & SPC Analysis",
    accentBadge: "Zero-Defect Release Protocol",
    accentColor: "#0284C7",
    accentBg: "rgba(2, 132, 199, 0.08)",
    accentBorder: "rgba(2, 132, 199, 0.35)",
    textColor: "#075985",
  },
  {
    letter: "R",
    title: "Reliability",
    subtitle: "Prompt Customer Delivery & Formulation Consistency",
    tagline: "Over 35 years of unvarying formulation consistency, supply security, and rapid response.",
    description:
      "Guaranteed batch-to-batch chemical predictability from small trial samples to bulk consignments. Backed by dual-facility production redundancy and strict quality standards for timely customer delivery.",
    bullets: [
      "High standard of response for timely customer delivery and batch-to-batch consistency.",
      "Dual-plant manufacturing redundancy across Tarapur MIDC & Goregaon facilities.",
      "Certificate of Analysis (CoA) dispatched with every batch verifying specification conformity.",
      "Heavy-duty UN-rated containers and tamper-evident packaging for shipment safety.",
      "End-to-end reactor synthesis logs tracking batch charges, reaction kinetics, and operator sign-offs.",
      "Strategic buffer inventory safeguarding continuous client operations against supply disruptions.",
    ],
    focusLabel: "OPERATIONAL DELIVERABLE",
    operationalFocus: "On-Time Delivery & Retained Batch Purity",
    accentBadge: "Dual-Unit Supply Security",
    accentColor: "#8B5CF6",
    accentBg: "rgba(139, 92, 246, 0.08)",
    accentBorder: "rgba(139, 92, 246, 0.35)",
    textColor: "#5B21B6",
  },
  {
    letter: "S",
    title: "Service",
    subtitle: "Well-Equipped R&D Laboratory & Technical Support",
    tagline: "A well-equipped laboratory staffed by qualified specialists using modern technological tests.",
    description:
      "Direct technical partnership connecting plant engineers with experienced formulation specialists. Offering comprehensive laboratory water testing, system audits, and multipurpose pilot reactor trials.",
    bullets: [
      "Well-equipped testing laboratory providing advanced technical support and system audits.",
      "Dedicated to protecting the environment with ecofriendly, biodegradable formulations.",
      "Multipurpose pilot reactors formulating tailor-made solutions for customer requirements.",
      "Direct customer response protocols with fast turnaround times and continuous operator support.",
      "On-site plant water audits, deposit characterization, and metallurgical compatibility analysis.",
      "Custom tailor-made formulations scaled from pilot trial reactors to commercial consignments.",
    ],
    focusLabel: "OPERATIONAL DELIVERABLE",
    operationalFocus: "R&D Laboratory Support & Green Formulations",
    accentBadge: "In-House Pilot Reactor",
    accentColor: "#F97316",
    accentBg: "rgba(249, 115, 22, 0.08)",
    accentBorder: "rgba(249, 115, 22, 0.35)",
    textColor: "#C2410C",
  },
];

export const batchJourneySteps: BatchJourneyStep[] = [
  {
    step: "01",
    title: "Incoming Material Validation",
    description:
      "Physical and analytical testing of raw ingredients before batch staging and reactor charging. Full vendor qualification records.",
    checkpoint: "Purity & Assay Verification",
  },
  {
    step: "02",
    title: "Real-Time Reaction Control",
    description:
      "Tight monitoring of temperature, pH, viscosity, and stoichiometric parameters during blending in heavy production reactors.",
    checkpoint: "Kinetic & Temperature Audit",
  },
  {
    step: "03",
    title: "Statistical Data Analysis",
    description:
      "Every production lot benchmarked against historical variance curves, statistical control tolerances, and release limits.",
    checkpoint: "SPC Variance Benchmarking",
  },
  {
    step: "04",
    title: "CoA & Retention Archiving",
    description:
      "Certified Certificate of Analysis issued and sealed retention samples archived for guaranteed post-dispatch traceability.",
    checkpoint: "Traceability Archival",
  },
];

export const qualityPillars: QualityPillar[] = [
  {
    id: "monitoring",
    number: "01",
    title: "Daily Quality Monitoring & SPC",
    subtitle: "Statistical process control across every single production lot",
    description:
      "Product quality is monitored on a continuous daily basis. Our quality assurance team inspects incoming raw materials, tracks reaction parameters in real-time, and performs rigorous statistical analysis on control data before dispatch clearance.",
    image: "/images/quality/lab-titration.jpg",
    imageAlt: "Laboratory titration and analytical batch testing",
    placeholderLabel: "Lab Titration Analysis",
    badgeMetric: "Continuous Statistical Process Control",
    corePoints: [
      "Physical and chemical evaluation: pH, specific gravity, solids %, viscosity, and active content.",
      "Raw material verification against certified vendor specifications before staging.",
      "Retention sample archiving for complete post-dispatch traceability and customer audits.",
      "Dedicated Quality Committee setting benchmarks for labeling, customer response, and delivery.",
    ],
    deepPoints: [
      "Historical lot variance benchmarking ensuring minimal batch-to-batch standard deviation.",
      "Daily calibration schedules for analytical balances, pH meters, and refractometers.",
      "Systematic rejection protocols preventing out-of-spec materials from entering staging.",
    ],
  },
  {
    id: "laboratory",
    number: "02",
    title: "R&D Laboratory & Pilot Reactor",
    subtitle: "Advanced testing facilities and scaled process validation",
    description:
      "To evaluate customer difficulties and innovate eco-friendly formulations, PolyTreat operates a dedicated research and development laboratory staffed by experienced, highly qualified chemical specialists and formulation technologists.",
    image: "/images/quality/pilot-reactor.jpg",
    imageAlt: "Multipurpose pilot reactor for trial formulations",
    placeholderLabel: "Multipurpose Pilot Reactor",
    badgeMetric: "Pilot-Scale Reactor Testing",
    corePoints: [
      "State-of-the-art laboratory equipped with precision titration, spectrophotometry, and electrochemical gear.",
      "Multipurpose pilot reactor for determining exact process parameters before commercial production.",
      "Technical consulting backing from veteran formulation technologists in India and abroad.",
      "Rapid simulation of field conditions for deposit, corrosion, and biocidal efficiency studies.",
    ],
    deepPoints: [
      "Custom formulation tailoring to match specific client water formulations and metallurgy.",
      "Thermal stability testing across extreme operating temperatures and shear conditions.",
      "Accelerated compatibility testing with elastomers, gaskets, and system pipe alloys.",
    ],
  },
  {
    id: "environment",
    number: "03",
    title: "Environmental Stewardship & Green Formulations",
    subtitle: "Eco-friendly, biodegradable, and safer for operating personnel",
    description:
      "We are dedicated to protecting our precious environment by offering eco-friendly, biodegradable products across our formulation, production, and packaging. High industrial performance and environmental safety advance together.",
    image: "/images/quality/green-formulations.jpg",
    imageAlt: "Eco-friendly and biodegradable formulation testing",
    placeholderLabel: "Green Formulations Lab",
    badgeMetric: "100% Biodegradable Active Lines",
    corePoints: [
      "Biodegradable surfactant formulations across the V-Klin commercial and domestic care range.",
      "Heavy-metal-free, eco-conscious corrosion inhibitors and biocide formulations.",
      "Zero-discharge manufacturing philosophies and responsible effluent management in plants.",
      "Safe, recyclable packaging and clear safety guidance with GHS-compliant SDS documentation.",
    ],
    deepPoints: [
      "Reduced hazardous packaging footprint with concentrated dosing formats.",
      "Non-toxic, phosphate-free water conditioning agents reducing environmental runoff.",
      "Compliant with international green product guidelines and municipal discharge norms.",
    ],
  },
];

export const productCoverageDomains: ProductDomain[] = [
  {
    id: "water-treatment",
    category: "Industrial Water Treatment Solutions",
    eyebrow: "Utility & Process Systems",
    description:
      "Heavy industrial water conditioning programs engineered to prevent scale, corrosion, microbiological fouling, and sludge deposition across critical infrastructure.",
    applications: ["Thermal Boilers", "Cooling Towers", "RO Membranes", "Effluent & Sewage"],
    products: [
      "Cooling water scale, corrosion, and biological fouling inhibitors",
      "Boiler water oxygen scavengers, sludge conditioners, and condensate line treatments",
      "Reverse Osmosis (RO) antiscalants, membrane cleaning agents, and non-oxidizing biocides",
      "Effluent Treatment Plant (ETP) and Sewage Treatment (STP) flocculants and coagulants",
      "Sugar process chemicals, juice clarifiers, and viscosity reducers",
      "Paint detackification and paint booth water-wall treatment formulations",
      "Drinking water purification and swimming pool sanitization formulations",
    ],
  },
  {
    id: "construction",
    category: "Construction Chemicals & Structural Protection",
    eyebrow: "Built Asset Protection",
    description:
      "High-performance waterproofing coatings, structural repair mortars, protective elastomeric membranes, and joint sealants for long-lasting concrete durability.",
    applications: ["Residential Towers", "Commercial Complexes", "Hotels & Hospitals", "Industrial Floors"],
    products: [
      "Waterproofing coatings for residential buildings, commercial complexes, hotels & hospitals",
      "Polymer bonding agents (Polybond) and concrete-repair structural mortars",
      "Elastomeric exterior weatherproofing and roof coatings (Polyproof, Polyroof)",
      "High-build industrial epoxy and polyurethane floor protective coatings (Polygard)",
      "Structural expansion joint sealants and non-shrink precision grouts",
    ],
  },
  {
    id: "hvac",
    category: "HVAC & Industrial Maintenance",
    eyebrow: "Asset Life Extension",
    description:
      "Specialty maintenance formulations designed to restore thermal conductivity, clean heat exchange surfaces, and protect expensive air handling infrastructure.",
    applications: ["Central AC Units", "Copper Coils & Fins", "Plate Heat Exchangers", "Chillers"],
    products: [
      "Air conditioner coil cleaning solutions and heavy-duty fin degreasers",
      "Anti-corrosive protective coatings for A/C copper coils and aluminum fins",
      "Heavy-duty industrial online and offline descalers for heat exchangers",
      "Rust converters, surface passivation treatments, and metal brighteners",
    ],
  },
  {
    id: "hygiene",
    category: "Commercial & Domestic Hygiene (V-Klin)",
    eyebrow: "Facility & Institutional Care",
    description:
      "Hospital-grade, facility-tested cleaning and hygiene formulations developed for hospitality, healthcare, industrial workspaces, and household environments.",
    applications: ["Hotels & Resorts", "Hospitals & Clinics", "Corporate Offices", "Industrial Laundries"],
    products: [
      "Hand hygiene cleansers and perfumed liquid soaps (Aqua & Floral ranges)",
      "Concentrated floor cleaners (Golden, Herbal, and Floral disinfectant lines)",
      "Housekeeping, room care, and multipurpose hard-surface cleansers",
      "Power Plus heavy-duty toilet and washroom cleansers",
      "Streak-free glass cleaners and reflective surface polishers",
      "Industrial laundry cleaning detergents, stain removers, and fabric conditioners",
    ],
  },
  {
    id: "odor-control",
    category: "Odor Control & Specialty Programs",
    eyebrow: "Scientific Neutralization",
    description:
      "Molecular odor encapsulation and bespoke tailor-made chemical formulations designed to eliminate tough odors at the source rather than masking them.",
    applications: ["Offices & Schools", "Wastewater Plants", "Food Processing", "AC Ducts & Vehicles"],
    products: [
      "Targeted odor control programs for homes, offices, schools, and automotive interiors",
      "Heavy odor neutralization for wastewater treatment plants and food processing units",
      "Air conditioner duct sanitizers and air freshener odor eliminators",
      "Custom tailor-made specialty applications developed for unique customer operating difficulties",
    ],
  },
];

export const companyQualityProfile = {
  eyebrow: "COMPANY PROFILE & INFRASTRUCTURE",
  title: "Polytreat Chemical Industries — A Legacy of Technical Excellence",
  lead: "Polytreat Chemical Industries is a premier manufacturing organization established in 1987, operating with full-fledged R&D laboratories, modern synthesis units in Tarapur MIDC and Goregaon, and an experienced technical consulting network.",
  highlights: [
    {
      title: "Manufacturing in Tarapur & Goregaon",
      description:
        "Dual-unit manufacturing infrastructure equipped with multipurpose reaction vessels, pilot-scale synthesis units, and dedicated storage staging in Maharashtra.",
    },
    {
      title: "Active Quality Committee",
      description:
        "An active internal quality body that sets and audits strict standards for product purity, labeling precision, customer response speed, and delivery reliability.",
    },
    {
      title: "Technical Consulting Network",
      description:
        "Our clients benefit from direct consulting with veteran formulation technologists in India and abroad for online troubleshooting and custom development.",
    },
    {
      title: "Eco-Friendly & Biodegradable Dedication",
      description:
        "Dedicated to protecting our precious environment by developing biodegradable formulations, phosphate-free blends, and responsible production workflows.",
    },
  ],
};

export const qualityCertificationsOverview = {
  title: "Audited Compliance. Documented Certainty.",
  description:
    "Our manufacturing units operate under audited quality management systems. Customers can request full certification records, lot-specific Certificates of Analysis (CoA), Technical Data Sheets (TDS), and Safety Data Sheets (SDS).",
  items: [
    {
      title: "ISO 9001:2015",
      subtitle: "Certified Quality Management System",
      description: "Scope: Water treatment and home care chemicals manufacturing, blending, and distribution.",
    },
    {
      title: "SMCS Certified",
      subtitle: "Independent Quality Verification",
      description: "Accredited by AIAO-BAR USA for strict adherence to international quality protocols.",
    },
    {
      title: "GHS Compliant Documentation",
      subtitle: "Comprehensive SDS & TDS",
      description: "Standardized technical data sheets and safety documentation for all formulated product lines.",
    },
  ],
};

export const qualityDocRequestData = {
  title: "Request Technical Documentation",
  description:
    "Need verified product specifications, safety protocols, or application dosages for your plant or facility? Contact our technical team for immediate document dispatch:",
  bullets: [
    "Technical Data Sheets (TDS) with dosage curves",
    "GHS-Compliant Safety Data Sheets (SDS)",
    "Lot-specific Certificates of Analysis (CoA)",
    "On-site water testing and system compatibility audits",
  ],
  buttonText: "Contact our technical team",
  buttonHref: "/contact#contact-form",
};
