/**
 * Single source of truth for the industrial water treatment hub page.
 *
 * Category names are taken from the client-supplied industrial product profile
 * (`Client Assets/polytreat-industrial-water-treatment-general-product-profile.doc`)
 * and are published as roles only. Product codes are deliberately not published:
 * the profile is undated, and which products are currently active is still an
 * open client question. See `polytreat_study.md` Section 3 and Section 20.
 *
 * Do not publish the profile's "non-oxidizing / oxidizing" biocide split. The
 * source headings contradict the bases it lists (a hypochlorite base appears
 * under non-oxidizing), and the study records that a chemist must confirm the
 * classification before it is republished.
 */

export type IndustrialSystemId = "boiler" | "cooling" | "ro" | "effluent";

export type IndustrialSystem = {
  id: IndustrialSystemId;
  number: string;
  title: string;
  description: string;
  href: string;
  linkText: string;
};

export type IndustrialChallenge = {
  id: IndustrialSystemId;
  title: string;
  manages: string[];
};

export type IndustrialCategoryGroup = {
  id: IndustrialSystemId;
  title: string;
  summary: string;
  href: string;
  categories: string[];
};

export type IndustrialExtraFamily = {
  title: string;
  description: string;
  /** Page for this family, when it has one. */
  href?: string;
  categories: string[];
};

/** Anchor ids on the sibling system pages. Shared so links cannot drift. */
export const industrialAnchors: Record<IndustrialSystemId, string> = {
  boiler: "boiler-water",
  cooling: "cooling-water",
  ro: "reverse-osmosis",
  effluent: "effluent-treatment",
};

export const industrialSystems: IndustrialSystem[] = [
  {
    id: "boiler",
    number: "01",
    title: "Boiler water",
    description:
      "Treatment categories for industrial boiler and steam-generation systems, from feedwater through to the return line.",
    href: `/solutions/boiler-cooling-water#${industrialAnchors.boiler}`,
    linkText: "Boiler water overview",
  },
  {
    id: "cooling",
    number: "02",
    title: "Cooling water",
    description:
      "Categories for recirculating cooling-water systems used in plant operations, in both open and closed loops.",
    href: `/solutions/boiler-cooling-water#${industrialAnchors.cooling}`,
    linkText: "Cooling water overview",
  },
  {
    id: "ro",
    number: "03",
    title: "Reverse osmosis",
    description:
      "Product categories for membrane-based reverse-osmosis water systems, covering scale control and cleaning.",
    href: `/solutions/ro-effluent#${industrialAnchors.ro}`,
    linkText: "RO overview",
  },
  {
    id: "effluent",
    number: "04",
    title: "Effluent treatment",
    description:
      "Treatment categories for industrial wastewater processes, from particle separation through to sludge handling.",
    href: `/solutions/ro-effluent#${industrialAnchors.effluent}`,
    linkText: "Effluent overview",
  },
];

/** What each system has to manage, described as general engineering context. */
export const industrialChallenges: IndustrialChallenge[] = [
  {
    id: "boiler",
    title: "Boiler water",
    manages: [
      "Dissolved oxygen in the feedwater, which can contribute to internal corrosion",
      "Scale and deposits formed from dissolved minerals",
      "Sludge that can harden onto hot surfaces",
      "pH and alkalinity balance across the boiler",
      "Corrosion of boiler metal and return-line surfaces",
    ],
  },
  {
    id: "cooling",
    title: "Cooling water",
    manages: [
      "Mineral scale on heat-transfer surfaces",
      "Corrosion of metal within the loop",
      "Oil and other contamination carried by the circulating water",
      "Biological growth and slime inside the system",
    ],
  },
  {
    id: "ro",
    title: "Reverse osmosis",
    manages: [
      "Mineral scaling on membrane surfaces",
      "Fouling and biofilm build-up across the membrane stack",
      "Feedwater composition that is scaling or corrosive to the membrane",
      "Cleaning routines, whether the system stays running or is taken offline",
    ],
  },
  {
    id: "effluent",
    title: "Effluent treatment",
    manages: [
      "Suspended solids and fine particles in the wastewater",
      "Separating those particles so they can be settled and removed",
      "Sludge generated through the process",
      "Dewatering the sludge into a wet solid that can be handled",
    ],
  },
];

/** Treatment categories, published as roles rather than product codes. */
export const industrialCategoryGroups: IndustrialCategoryGroup[] = [
  {
    id: "cooling",
    title: "Cooling water",
    summary: "Categories for recirculating systems, in both open and closed loops.",
    href: `/solutions/boiler-cooling-water#${industrialAnchors.cooling}`,
    categories: [
      "Corrosion and scale inhibitors for open recirculating systems",
      "Corrosion and scale inhibitors for closed recirculating systems",
      "Oil dispersants",
      "Brine corrosion inhibitors",
      "Microbiocides",
      "Biodispersants",
    ],
  },
  {
    id: "boiler",
    title: "Boiler water",
    summary: "Role-based categories for steam-generation boilers and associated lines.",
    href: `/solutions/boiler-cooling-water#${industrialAnchors.boiler}`,
    categories: [
      "Alkalinity builders and pH boosters",
      "Anti-foaming agents",
      "Deposit and scale controllers",
      "Oxygen scavengers",
      "Corrosion and scale inhibitors",
      "Sludge conditioners",
      "Neutralising polyamines",
      "Filming amines",
      "Descaling chemicals",
      "Single-blend treatments",
    ],
  },
  {
    id: "ro",
    title: "Reverse osmosis",
    summary: "Membrane protection, cleaning, and microbiological control categories.",
    href: `/solutions/ro-effluent#${industrialAnchors.ro}`,
    categories: [
      "Acidic antiscalants",
      "Alkaline antiscalants",
      "Online descalers",
      "Offline descalers",
      "RO microbiocides",
    ],
  },
  {
    id: "effluent",
    title: "Effluent treatment",
    summary: "Categories for particle separation and sludge handling in wastewater processes.",
    href: `/solutions/ro-effluent#${industrialAnchors.effluent}`,
    categories: [
      "Polyelectrolytes",
      "Flocculating agents",
      "Coagulating agents",
      "Dewatering agents",
    ],
  },
];

/** Catalogue families from the same profile that do not have their own page. */
export const industrialExtraFamilies: IndustrialExtraFamily[] = [
  {
    title: "Fireside treatment",
    description: "Combustion-side products for the fuel and furnace side of a boiler.",
    href: "/solutions/fireside-treatment",
    categories: [
      "Pre-combustion catalysts",
      "Post-combustion catalysts",
      "Chromate-based fireside treatments",
      "Fuel-oil combustion catalysts",
    ],
  },
  {
    title: "Paint preservatives",
    description: "Preservation for paint in storage and for dried paint films.",
    href: "/solutions/paint-preservatives",
    categories: [
      "Wet-state paint preservatives",
      "Dry-state preservatives for exterior paints",
      "Dry-state preservatives for interior paints",
      "Preservatives for cement paints",
    ],
  },
  {
    title: "Sugar-process chemicals",
    description: "Process chemicals for sugar manufacturing applications.",
    href: "/solutions/sugar-process-chemicals",
    categories: [
      "Quaternary-ammonium compounds",
      "Carbamate-based compounds",
      "Antiscalants",
      "Viscosity reducers",
      "Scale softeners for evaporator bodies",
    ],
  },
  {
    title: "Automotive chemicals",
    description: "Cooling-system products for vehicles.",
    href: "/solutions/automotive-chemicals",
    categories: ["Engine cooling-system coolants"],
  },
  {
    title: "Specialty products",
    description: "Additional specialty lines carried in the same industrial profile.",
    href: "/specialty",
    categories: [
      "General-purpose deodorants",
      "Swimming-pool biocides",
      "Odour neutralisers",
      "Drinking-water treatment products",
      "Waterless hand cleaners",
      "AHU and FCU coil cleaners",
    ],
  },
];
