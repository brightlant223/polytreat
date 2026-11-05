export type IndustrialFamilyId =
  | "paint-preservatives"
  | "sugar-process-chemicals"
  | "fireside-treatment"
  | "automotive-chemicals";

export type IndustrialFamilyCategory = {
  id: string;
  title: string;
  description: string;
  contexts: string[];
};

export type IndustrialFamily = {
  id: IndustrialFamilyId;
  /** Short name used in links and cards. */
  name: string;
  eyebrow: string;
  /** Hero heading. */
  title: string;
  /** Hero paragraph. */
  summary: string;
  productForm: string;
  appliesTo: string;
  documentation: string;
  sectionTitle: string;
  sectionIntro: string;
  categories: IndustrialFamilyCategory[];
  note: string;
};

/**
 * Single source of truth for the industrial product families that do not have
 * a system page of their own.
 *
 * Content is taken from the client's industrial product profile, which lists
 * nine sections. The four families here are the remaining ones: paint
 * preservatives, sugar-process chemicals, fireside treatment and automotive
 * chemicals. The drinking-water and swimming-pool lines sit on `/specialty`
 * because they come from the same profile but belong with the specialty range.
 *
 * Categories and roles only, never product codes. The profile is undated and
 * which products are currently active is still an open client question, so a
 * published code could point at something discontinued. The physical form
 * shown here is the profile's own product-state key.
 */
export const industrialFamilies: IndustrialFamily[] = [
  {
    id: "paint-preservatives",
    name: "Paint preservatives",
    eyebrow: "Industrial water & process · Paint industry",
    title: "Paint preservatives for the wet state and the dry film.",
    summary:
      "Paint sits in storage before it is applied, and the cured film then faces whatever the surface faces. The industrial catalogue lists a paint family for both stages: preservatives for paint while it is still in the can, and preservatives for the film once it has formed.",
    productForm: "Liquid, dispersant and powder grades",
    appliesTo: "Paint in storage and cured films",
    documentation: "Current product documents on enquiry",
    sectionTitle: "Two states, two sets of categories.",
    sectionIntro:
      "Wet-state preservatives protect the paint before application. Dry-state preservatives protect the film after it has cured.",
    categories: [
      {
        id: "wet-state",
        title: "Wet-state preservatives",
        description:
          "For paint that is still in the can. The catalogue lists this as a separate group from the cured-film products.",
        contexts: ["Paint in storage", "Water-based paints", "Primers"],
      },
      {
        id: "dry-state-exterior",
        title: "Dry-state preservatives for exterior paints",
        description:
          "For the cured film on an exterior surface, where the coating is exposed to weather.",
        contexts: ["Exterior walls", "Weather-exposed surfaces"],
      },
      {
        id: "dry-state-interior",
        title: "Dry-state preservatives for interior paints",
        description:
          "For the cured film on an interior surface, where the coating is not exposed to weather.",
        contexts: ["Interior walls", "Ceilings"],
      },
      {
        id: "cement-paints",
        title: "Preservatives for cement paints",
        description: "A separate catalogue group for cement-based paints.",
        contexts: ["Cement paints", "Cement-based surfaces"],
      },
    ],
    note:
      "The categories above follow PolyTreat's published industrial product profile. Which products are currently supplied is confirmed for each enquiry.",
  },
  {
    id: "sugar-process-chemicals",
    name: "Sugar-process chemicals",
    eyebrow: "Industrial water & process · Sugar mills",
    title: "Process chemicals for sugar manufacturing.",
    summary:
      "Sugar mills run on evaporation, scale control and mill hygiene. The industrial catalogue lists a sugar-process family covering mill-hygiene compounds, antiscalants, viscosity reducers and a scale softener for evaporator bodies.",
    productForm: "Liquid grades",
    appliesTo: "Sugar mills and evaporator bodies",
    documentation: "Current product documents on enquiry",
    sectionTitle: "Mill hygiene, scale and viscosity.",
    sectionIntro:
      "Each category addresses a different part of the process, from mill hygiene through to the evaporator.",
    categories: [
      {
        id: "quaternary-ammonium",
        title: "Quaternary-ammonium compounds",
        description: "A mill-hygiene category in the sugar-process family.",
        contexts: ["Mill and process areas"],
      },
      {
        id: "carbamate",
        title: "Carbamate-based compounds",
        description: "A second mill-hygiene category, listed separately in the profile.",
        contexts: ["Mill and process areas"],
      },
      {
        id: "antiscalants",
        title: "Antiscalants",
        description: "For scale control across the process.",
        contexts: ["Evaporator bodies", "Process equipment"],
      },
      {
        id: "viscosity-reducers",
        title: "Viscosity reducers",
        description: "For viscosity control in the process streams.",
        contexts: ["Process streams", "Evaporation stages"],
      },
      {
        id: "evaporator-scale-softeners",
        title: "Scale softeners for evaporator bodies",
        description:
          "A scale-softening category listed specifically for evaporator bodies.",
        contexts: ["Evaporator bodies", "Heat-transfer surfaces"],
      },
    ],
    note:
      "The categories above follow PolyTreat's published industrial product profile. Which products are currently supplied is confirmed for each enquiry.",
  },
  {
    id: "fireside-treatment",
    name: "Fireside treatment",
    eyebrow: "Industrial water & process · Combustion side",
    title: "Fireside treatment for the combustion side of a boiler.",
    summary:
      "The combustion side of a boiler is a different environment from its water side. The industrial catalogue lists a fireside family built around combustion catalysts and one chromate-based treatment.",
    productForm: "Solid and liquid grades",
    appliesTo: "LDO and fuel-oil firing",
    documentation: "Current product documents on enquiry",
    sectionTitle: "Where the treatment sits in the combustion.",
    sectionIntro:
      "The catalogue separates treatment applied before the combustion chamber from treatment applied after it.",
    categories: [
      {
        id: "pre-combustion",
        title: "Pre-combustion catalysts",
        description: "Applied before the combustion chamber, on the fuel and air side.",
        contexts: ["Before the combustion chamber", "Fuel and air side"],
      },
      {
        id: "post-combustion",
        title: "Post-combustion catalysts",
        description: "Applied after the combustion chamber.",
        contexts: ["After the combustion chamber", "Flue side"],
      },
      {
        id: "chromate-based",
        title: "Chromate-based fireside treatments",
        description: "A fireside category listed on a chromate base.",
        contexts: ["Fireside surfaces", "Combustion chambers"],
      },
      {
        id: "combined-catalysts",
        title: "Combined pre- and post-combustion catalysts",
        description:
          "A single entry listed for both positions, and for LDO and fuel-oil firing.",
        contexts: ["LDO firing", "Fuel-oil firing"],
      },
    ],
    note:
      "The categories above follow PolyTreat's published industrial product profile. Which products are currently supplied is confirmed for each enquiry.",
  },
  {
    id: "automotive-chemicals",
    name: "Automotive chemicals",
    eyebrow: "Industrial water & process · Automotive",
    title: "Cooling-system formulations for vehicles.",
    summary:
      "The industrial catalogue lists an automotive line alongside the water-treatment and process families. It is a small family, and this page says so rather than padding it out.",
    productForm: "Liquid grade",
    appliesTo: "Vehicle cooling systems",
    documentation: "Current product documents on enquiry",
    sectionTitle: "What the family covers.",
    sectionIntro: "The catalogue lists a single entry in this family.",
    categories: [
      {
        id: "engine-coolants",
        title: "Engine cooling-system coolants",
        description:
          "A coolant for automotive cooling systems, listed in the industrial catalogue as a new-generation coolant.",
        contexts: ["Vehicle cooling systems"],
      },
    ],
    note:
      "The industrial profile lists one product in the automotive family. Share your requirement and we will confirm current availability.",
  },
];

export function findIndustrialFamily(id: string): IndustrialFamily | undefined {
  return industrialFamilies.find((family) => family.id === id);
}
