import type { LucideIcon } from "lucide-react";
import { Building2, Factory, Layers3 } from "lucide-react";

export type EnvironmentId =
  | "process-manufacturing"
  | "utilities-infrastructure"
  | "facilities-institutions";

export type OperatingEnvironment = {
  id: EnvironmentId;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  contexts: string[];
  link: string;
  linkLabel: string;
};

export type ProductMapGroup = {
  id: string;
  title: string;
  summary: string;
  items: { label: string; href: string }[];
};

export type IndustrySector = {
  id: string;
  title: string;
  description: string;
  areas: { label: string; href: string }[];
};

/**
 * Single source of truth for the industries page.
 *
 * The three operating environments are the top-level split and keep their
 * anchor ids, because the homepage links straight to them.
 *
 * The product map is the client's own range, taken from the industrial
 * product profile, the construction profile, the V-Klin catalogue and the
 * specialty products. Every entry points at a real page: the families that do
 * not have a page of their own point at the section of the industrial water
 * hub that lists them, so nothing on this page is a dead link.
 *
 * The sectors are the settings the ranges are documented for. They are
 * sector names only. The 2022 website published a list of around eighty-five
 * customer organisations, and those names are deliberately not republished:
 * most of those relationships are decades old and each name would need
 * current written approval. The sectors describe where the formulations
 * applies, not who buys it.
 */
export const operatingEnvironments: OperatingEnvironment[] = [
  {
    id: "process-manufacturing",
    number: "01",
    eyebrow: "Process & manufacturing",
    title: "Water systems within plant operations.",
    description:
      "Industrial water-treatment categories cover boiler, cooling-water, reverse-osmosis, and effluent systems used across process operations.",
    contexts: ["Boiler system", "Cooling water", "RO system", "Effluent treatment"],
    link: "/solutions/industrial-water",
    linkLabel: "Browse industrial water",
  },
  {
    id: "utilities-infrastructure",
    number: "02",
    eyebrow: "Utilities & infrastructure",
    title: "Water services and built environments.",
    description:
      "Water and building services sit alongside construction applications such as waterproofing, concrete repair, protective coatings, flooring, and joints.",
    contexts: ["Building water services", "Waterproofing", "Protective surface", "Concrete repair"],
    link: "/solutions/construction-chemistry",
    linkLabel: "Browse construction solutions",
  },
  {
    id: "facilities-institutions",
    number: "03",
    eyebrow: "Facilities & institutions",
    title: "Cleaning for shared and everyday spaces.",
    description:
      "The V-Klin range brings home and facility-care cleaning categories together for workplaces, institutions, and other shared spaces.",
    contexts: ["Workplaces", "Institutions", "Shared facilities", "Floors", "F&S"],
    link: "/vklin/products",
    linkLabel: "Browse the V-Klin range",
  },
];

export const environmentIcons: Record<EnvironmentId, LucideIcon> = {
  "process-manufacturing": Factory,
  "utilities-infrastructure": Layers3,
  "facilities-institutions": Building2,
};

export const productMapGroups: ProductMapGroup[] = [
  {
    id: "industrial-water",
    title: "Industrial water & process",
    summary: "Water treatment solutions for the systems that run a plant.",
    items: [
      { label: "Cooling water", href: "/solutions/boiler-cooling-water#cooling-water" },
      { label: "Boiler water", href: "/solutions/boiler-cooling-water#boiler-water" },
      { label: "Reverse osmosis", href: "/solutions/ro-effluent#reverse-osmosis" },
      { label: "Effluent & sewage", href: "/solutions/ro-effluent#effluent-treatment" },
      { label: "Sugar-process chemicals", href: "/solutions/sugar-process-chemicals" },
      { label: "Paint preservatives", href: "/solutions/paint-preservatives" },
      { label: "Fireside & fuel treatment", href: "/solutions/fireside-treatment" },
      { label: "Automotive coolant", href: "/solutions/automotive-chemicals" },
    ],
  },
  {
    id: "construction",
    title: "Construction & protection",
    summary: "Waterproofing, repair and coating systems for buildings and plant.",
    items: [
      { label: "Waterproofing & coatings", href: "/solutions/waterproofing-repair-coatings" },
      { label: "Concrete repair & bonding", href: "/solutions/waterproofing-repair-coatings" },
      { label: "Industrial flooring & mortars", href: "/solutions/flooring-joint-sealing" },
      { label: "Sealants & crack repair", href: "/solutions/flooring-joint-sealing" },
      { label: "External building coatings", href: "/solutions/construction-chemistry" },
      { label: "Rust conversion (COROSIL)", href: "/specialty/corosil" },
    ],
  },
  {
    id: "specialty",
    title: "Specialty products",
    summary: "Single-purpose products aimed at one problem each.",
    items: [
      { label: "Odour control (POLYDOR-WS)", href: "/specialty/polydor-ws" },
      { label: "HVAC coil cleaning (POLYKLIN)", href: "/specialty/polyklin" },
      { label: "Corrosion control (COROSIL)", href: "/specialty/corosil" },
      { label: "Drinking-water treatment", href: "/specialty" },
      { label: "Swimming-pool treatment", href: "/specialty" },
      { label: "Waterless hand cleaners", href: "/specialty" },
      { label: "General-purpose deodorants", href: "/specialty" },
    ],
  },
  {
    id: "vklin",
    title: "V-Klin cleaning range",
    summary: "Home and facility-care cleaning, organised by task.",
    items: [
      { label: "Floor & surface care", href: "/vklin/products#floor-surface" },
      { label: "Hand care & hygiene", href: "/vklin/products#hand-hygiene" },
      { label: "Dishwashing", href: "/vklin/products#dishwashing" },
      { label: "Glass & window care", href: "/vklin/products#glass-care" },
      { label: "Bathroom & toilet care", href: "/vklin/products#toilet-care" },
      { label: "Odour & air care", href: "/vklin/products#odour-care" },
      { label: "Natural wellness", href: "/vklin/products#natural-wellness" },
    ],
  },
];

export const industrySectors: IndustrySector[] = [
  {
    id: "pharmaceuticals",
    title: "Pharmaceuticals & capsule plants",
    description:
      "Process water, steam and effluent control in a regulated plant.",
    areas: [
      { label: "Boiler & cooling water", href: "/solutions/boiler-cooling-water" },
      { label: "Reverse osmosis", href: "/solutions/ro-effluent#reverse-osmosis" },
      { label: "Effluent treatment", href: "/solutions/ro-effluent#effluent-treatment" },
    ],
  },
  {
    id: "chemicals",
    title: "Chemicals, synthetics & paints",
    description:
      "Process formulations, paint preservation and corrosion control on steel and equipment.",
    areas: [
      { label: "Paint preservatives", href: "/solutions/industrial-water#other-categories" },
      { label: "Rust conversion (COROSIL)", href: "/specialty/corosil" },
      { label: "Boiler & cooling water", href: "/solutions/boiler-cooling-water" },
    ],
  },
  {
    id: "beverage",
    title: "Breweries, distilleries & beverage",
    description:
      "Wastewater odour control, process water treatment and steam for continuous plants.",
    areas: [
      { label: "Odour control (POLYDOR-WS)", href: "/specialty/polydor-ws" },
      { label: "Effluent treatment", href: "/solutions/ro-effluent#effluent-treatment" },
      { label: "Boiler water", href: "/solutions/boiler-cooling-water#boiler-water" },
    ],
  },
  {
    id: "food",
    title: "Dairy, poultry & food processing",
    description:
      "Hygiene formulations for shared spaces, plus odour control where waste is handled.",
    areas: [
      { label: "V-Klin cleaning range", href: "/vklin/products" },
      { label: "Odour control (POLYDOR-WS)", href: "/specialty/polydor-ws" },
      { label: "Effluent treatment", href: "/solutions/ro-effluent#effluent-treatment" },
    ],
  },
  {
    id: "hospitality",
    title: "Hotels, hospitality & restaurants",
    description:
      "Odour control, kitchen and washroom cleaning, and building protection.",
    areas: [
      { label: "V-Klin cleaning range", href: "/vklin/products" },
      { label: "Odour control (POLYDOR-WS)", href: "/specialty/polydor-ws" },
      { label: "Waterproofing & coatings", href: "/solutions/waterproofing-repair-coatings" },
    ],
  },
  {
    id: "healthcare",
    title: "Hospitals, laboratories & institutions",
    description:
      "Cleaning ranges for shared rooms, and protective coating systems for the building.",
    areas: [
      { label: "V-Klin cleaning range", href: "/vklin/products" },
      { label: "Construction & surface protection", href: "/solutions/construction-chemistry" },
    ],
  },
  {
    id: "textiles",
    title: "Textiles, spinning mills & garments",
    description:
      "Process water, cooling and effluent for continuous production.",
    areas: [
      { label: "Boiler & cooling water", href: "/solutions/boiler-cooling-water" },
      { label: "Effluent treatment", href: "/solutions/ro-effluent#effluent-treatment" },
    ],
  },
  {
    id: "agro",
    title: "Fertiliser, sugar mills & agro",
    description:
      "Mill sanitation, evaporator scale control and continuous-plant water systems.",
    areas: [
      { label: "Sugar-process chemicals", href: "/solutions/industrial-water#other-categories" },
      { label: "Cooling water", href: "/solutions/boiler-cooling-water#cooling-water" },
      { label: "Effluent treatment", href: "/solutions/ro-effluent#effluent-treatment" },
    ],
  },
  {
    id: "utilities",
    title: "Power, utilities & public sector",
    description:
      "Steam, cooling and effluent for sites that run continuously.",
    areas: [
      { label: "Boiler & cooling water", href: "/solutions/boiler-cooling-water" },
      { label: "Reverse osmosis", href: "/solutions/ro-effluent#reverse-osmosis" },
      { label: "Effluent treatment", href: "/solutions/ro-effluent#effluent-treatment" },
    ],
  },
  {
    id: "transport",
    title: "Railways, aviation & transport",
    description:
      "Water systems for depots and terminals, and waterproofing for buildings and structures.",
    areas: [
      { label: "Boiler & cooling water", href: "/solutions/boiler-cooling-water" },
      { label: "Waterproofing & coatings", href: "/solutions/waterproofing-repair-coatings" },
      { label: "Effluent treatment", href: "/solutions/ro-effluent#effluent-treatment" },
    ],
  },
  {
    id: "engineering",
    title: "Cables, steel, glass & engineering",
    description:
      "Corrosion protection for steel, and process water for continuous manufacturing.",
    areas: [
      { label: "Rust conversion (COROSIL)", href: "/specialty/corosil" },
      { label: "Boiler & cooling water", href: "/solutions/boiler-cooling-water" },
      { label: "Construction & surface protection", href: "/solutions/construction-chemistry" },
    ],
  },
  {
    id: "shared-spaces",
    title: "Retail, offices, schools & shared spaces",
    description:
      "Everyday cleaning ranges for buildings where a lot of people pass through.",
    areas: [
      { label: "V-Klin cleaning range", href: "/vklin/products" },
      { label: "HVAC coil care (POLYKLIN)", href: "/specialty/polyklin" },
    ],
  },
];
