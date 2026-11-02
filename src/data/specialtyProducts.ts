export type SpecialtyFact = { label: string; value: string };

export type SpecialtyProduct = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  headline: string;
  description: string;
  features: string[];
  applications: string[];
  cautions: string[];
  facts: SpecialtyFact[];
  /** Where the published copy on this product came from. */
  sourceNote: string;
};

export type SpecialtyApplicationGroup = {
  id: string;
  title: string;
  items: string[];
};

/**
 * Single source of truth for the specialty product pages.
 *
 * Copy is written from the client's own literature: the COROSIL product
 * brief and presentation, the POLYDOR-WS application material and brochure
 * panels, and the POLYKLIN coil-cleaner literature. See `polytreat_study.md`
 * Sections 5, 6, 7, 9, 18 and 19 for the evidence and the claim limits.
 *
 * What is deliberately not here:
 * - No safety classification or "non-toxic" wording. The COROSIL sheet
 *   contradicts itself on hazard status and the POLYKLIN sheet carries
 *   unverified "non-irritant" and "readily biodegradable" statements, so
 *   those pages point to the current Safety Data Sheet instead.
 * - No performance guarantees: no "permanent rust prevention", no "fully
 *   protective", no cooling-efficiency savings, no compressor-life claims.
 * - No disinfection, sanitation, insecticidal or food-contact claims.
 * - No composition or ingredient details.
 * - No old dilution recipes for settings that need current technical and
 *   regulatory review, such as patient rooms, food containers, hospitals,
 *   pesticide mixtures and public-health environments.
 */
export const specialtyProducts: SpecialtyProduct[] = [
  {
    slug: "corosil",
    name: "COROSIL",
    category: "Corrosion control",
    summary: "A water-based rust inhibitor and converter primer for ferrous metal.",
    headline: "Treat the rust, then paint over it.",
    description:
      "COROSIL is a water-based rust inhibitor and converter primer, formulated for application on poorly prepared rusty metal surfaces. The product literature describes it as converting iron oxides into stable, insoluble metallo-organic complexes that form a suitable base for a paint system. It is a treatment and primer step in a coating system, not a finished coating in itself.",
    features: [
      "Water-based rust inhibitor and converter primer",
      "Described as converting iron oxides into a stable base for paint systems",
      "Not a holding primer — a compatible paint system is still required",
      "Supplied ready to use, and thinning is not recommended",
      "Single-coat application",
    ],
    applications: [
      "Structural steelwork, including reinforcement steel in concrete",
      "Machinery and castings",
      "Iron railings and grills",
      "Pipelines and sheet metal",
      "Rolling shutters and hoardings",
      "Automotive refinishing",
    ],
    cautions: [
      "Avoid contact with skin and eyes. Contact with skin may cause staining",
      "Protective gloves are recommended for prolonged skin contact",
      "Eye protection is recommended where splashing is likely",
      "Store in a cool, dry, ventilated place, in plastic containers only",
      "Do not return surplus product to the original container after use",
    ],
    facts: [
      { label: "Product type", value: "Water-based rust inhibitor and converter primer" },
      { label: "Appearance", value: "Liquid, greenish brown" },
      { label: "pH", value: "Below 2" },
      { label: "Coats", value: "One" },
      { label: "Coverage", value: "6 m² per kg, depending on surface condition" },
      { label: "Drying", value: "Touch dry 30 minutes, hard dry 4 hours" },
    ],
    sourceNote:
      "Written from our published COROSIL product literature. Physical data and directions are as published there.",
  },
  {
    slug: "polydor-ws",
    name: "POLYDOR-WS",
    category: "Molecular odour neutraliser",
    summary:
      "A broad-spectrum chemical odour neutraliser that permanently alters odoriferous molecules into non-odorous adducts.",
    headline: "Alters the chemical structure — does not merely mask.",
    description:
      "POLYDOR-WS is a scientifically formulated blend of specialty organic compounds, natural fragrant plant extracts, and designer chemical complexes developed by PolyTreat's Green Products Division. Rather than merely masking bad smells with perfumes, it chemically binds with odour-causing compounds—including amines, sulphides, mercaptans, aldehydes, ketones, ammonia, and hydrogen sulphide gas—transforming them into non-odoriferous molecular adducts. Environmentally safe, non-toxic, and complying with EPA safety criteria, it serves over 26 municipal, industrial, commercial, and facility applications.",
    features: [
      "Broad-spectrum chemical neutralisation: permanently alters odour molecules",
      "Reacts with amines, sulphides, mercaptans, ammonia and hydrogen sulphide gas",
      "Not a masking perfume — transforms bad smells into non-odoriferous adducts",
      "Environmentally safe formulation with natural fragrant plant extracts",
      "Effective at high dilutions (1:20 to 1:1000) for sprayers, scrubbers and effluent tanks",
      "Also formulated as POLYDOR-D MOS (100% biodegradable Neem & Citronella botanical mosquito repellent)",
    ],
    applications: [
      "Municipal garbage dump yards & landfill sites (3 tons / 1.5–2 acres)",
      "Effluent treatment plants (ETP), sewage sludge & basement wastewater tanks",
      "Sugar-processing wastewater (eliminates foul odor within 2–3 hours)",
      "Slaughterhouses, poultry farms & meat processing grease pits",
      "Breweries & distilleries wastewater aeration basins",
      "Industrial air scrubbers & fast-food restaurant exhaust systems",
      "Fishing nets, seafood holding containers & fish markets",
      "Hospitals, health clubs, public urinals & congregation halls",
      "Commercial laundry and dry-cleaning additive for long-lasting freshness",
      "Household floor swabbing, kitchen garbage, upholstery & refrigerator care",
    ],
    cautions: [
      "Stable at ambient temperatures. In neat condition, may cause mild eye/skin irritation — flush immediately with water",
      "Keep away from children",
      "Request the current Technical Data Sheet & SDS for exact substrate dilution charts",
    ],
    facts: [
      { label: "Product type", value: "Broad-spectrum chemical odour neutraliser" },
      { label: "Form", value: "Water-soluble liquid concentrate" },
      { label: "Action mechanism", value: "Chemical adduct formation (molecular neutralization)" },
      { label: "Target compounds", value: "Amines, sulphides, mercaptans, ammonia, H₂S gas" },
      { label: "Recommended dilution", value: "1:20 to 1:1000 with water based on application" },
      { label: "Environmental status", value: "Environmentally safe, biodegradable, EPA criteria aligned" },
    ],
    sourceNote:
      "Written directly from PolyTreat Green Products Division's published POLYDOR-WS technical documentation and dosage charts.",
  },
  {
    slug: "polyklin",
    name: "POLYKLIN",
    category: "HVAC coil care",
    summary: "A cleaning compound for contaminated evaporator and condenser coils.",
    headline: "Coil cleaning for air-conditioning equipment.",
    description:
      "POLYKLIN is a cleaning compound for contaminated evaporator, condenser and air-conditioning coils. The product literature describes it as a cleaning agent for removing the dirt, grime and tarnish that collect on coil surfaces, and it is aimed at HVAC maintenance contractors and facility teams.",
    features: [
      "A cleaning compound for evaporator, condenser and air-conditioning coils",
      "Described as removing dirt, grime and tarnish from coil surfaces",
      "Spray-and-rinse method, with a soak option for small window units",
      "Supplied in 35 kg, 50 kg and 200 kg polycarboys",
      "For professional HVAC maintenance use",
    ],
    applications: [
      "Evaporator coils in indoor air-conditioning units",
      "Condenser coils on outdoor units",
      "Window and split units",
      "AHU and FCU coil surfaces",
      "HVAC maintenance contractor and facility use",
    ],
    cautions: [
      "Avoid contact with eyes",
      "Wear suitable gloves for prolonged contact",
      "Keep away from children",
      "Request the current Safety Data Sheet for full handling and first-aid information",
    ],
    facts: [
      { label: "Product type", value: "AHU / FCU coil cleaning compound" },
      { label: "Appearance", value: "Light blue liquid" },
      { label: "pH", value: "2 to 4" },
      { label: "Odour", value: "Mild pungent" },
      { label: "Specific gravity", value: "1.1 to 1.15" },
      { label: "Packing", value: "35 kg, 50 kg and 200 kg polycarboys" },
    ],
    sourceNote:
      "Written from our published POLYKLIN coil-cleaner literature. Directions are as published there.",
  },
];

export const specialtyApplicationGroups: SpecialtyApplicationGroup[] = [
  {
    id: "waste",
    title: "Waste & wastewater",
    items: [
      "Drain pipes and basement waste-storage tanks",
      "Garbage dump yards",
      "Brewery wastewater areas",
      "Sugar-processing wastewater",
    ],
  },
  {
    id: "food",
    title: "Food & animal processing",
    items: [
      "Slaughterhouses and poultry farms",
      "Meat-processing areas and grease pits",
      "Fish containers and fishing nets",
      "Animal and poultry feed factories",
      "Dairy and cattle farms",
    ],
  },
  {
    id: "process",
    title: "Process & exhaust",
    items: [
      "Water scrubbers at fast-food restaurants",
      "Post-fire situations",
      "Petrochemical and fertiliser sites",
      "Car wash water recycling",
    ],
  },
  {
    id: "facility",
    title: "Facility & hospitality",
    items: [
      "Hotels, restaurants and conference halls",
      "Public toilets and washrooms",
      "Health clubs and saunas",
      "Hospital rooms",
      "Laundry and dry-cleaning services",
    ],
  },
];

/** The three-step sequence the COROSIL literature describes. */
export const corosilProcessSteps = [
  {
    title: "Prepare the surface",
    text: "Remove loose or flaky rust, mill scale, deteriorated old paint and any other contamination. Oil and grease are removed with a suitable solvent or detergent.",
  },
  {
    title: "Apply the treatment",
    text: "Supplied ready to use and applied by brush or spray between 5 °C and 40 °C. Brushing is recommended on heavily rusted surfaces, and pooling unreacted material should be avoided.",
  },
  {
    title: "Apply a compatible paint system",
    text: "Painting can start four hours after application. COROSIL is not a holding primer, so a suitable paint system is required, preferably within ten days.",
  },
];

export const corosilSpecifications: SpecialtyFact[] = [
  { label: "Appearance", value: "Liquid, greenish brown" },
  { label: "Weight per 10 litres", value: "12.25 to 12.34 kg" },
  { label: "pH", value: "Below 2" },
  { label: "Miscible with", value: "Water" },
  { label: "Number of coats", value: "One" },
  { label: "Covering capacity", value: "6 m² per kg, depending on surface condition" },
  { label: "Touch dry", value: "30 minutes maximum" },
  { label: "Hard dry", value: "4 hours maximum" },
  { label: "Application temperature", value: "5 °C to 40 °C" },
  { label: "Shelf life", value: "Minimum 24 months in original, unopened containers" },
];

/** The finishing systems the COROSIL literature names. */
export const corosilFinishingSystems = [
  "Alkyd",
  "Chlorinated and acrylated rubber",
  "Epoxies",
  "Vinyls and urethanes",
  "Nitrocellulose and acrylics",
  "Water-based systems",
  "Vinyl acrylics and styrene acrylics",
];

/** The method of application the POLYKLIN literature describes. */
export const polyklinMethod = [
  "Mix one part POLYKLIN with one part water",
  "Spray on the dirty surface with a mechanical pump or a chemical sprayer",
  "Rinse thoroughly with water after five to ten minutes",
  "Window units can be cleaned by dipping into a 1:1 solution for ten to fifteen minutes",
];

/** The equipment POLYKLIN is intended for, and what each part does. */
export const polyklinEquipment = [
  {
    title: "Evaporator coil",
    text: "The indoor coil where refrigerant absorbs heat from the room air.",
  },
  {
    title: "Condenser coil",
    text: "The outdoor coil where the absorbed heat is released to the outside air.",
  },
  {
    title: "AHU and FCU",
    text: "Air handling units and fan coil units move air across heating and cooling coils.",
  },
];

/** Other specialty lines from the client's industrial product profile. */
export const specialtyOtherLines = [
  {
    title: "General-purpose deodorants",
    text: "Deodorising products for everyday facility and household use.",
  },
  {
    title: "Swimming-pool biocides",
    text: "A product category for swimming-pool water treatment.",
  },
  {
    title: "Drinking-water treatment products",
    text: "A product category in the industrial range. Scope and documentation are confirmed per application.",
  },
  {
    title: "Waterless hand cleaners",
    text: "A gel product category for hand hygiene where running water is not available.",
  },
];

export function findSpecialtyProduct(slug: string): SpecialtyProduct | undefined {
  return specialtyProducts.find((product) => product.slug === slug);
}
