/**
 * Homepage image map for PolyTreat.
 * All images are hosted locally under `public/images/home`, so the homepage has no
 * third-party image dependency and no broken remote links.
 * Alt text describes the picture only — never assert that a stock image is a PolyTreat site.
 * Every slot is allocated a distinct photograph, because the hero, the range cards and
 * the applications section sit on one page; subjects are not reused across slots.
 */

export interface ImageOption {
  label: string;
  url: string;
}

export interface SectionImage {
  key: string;
  label: string;
  activeUrl: string;
  alt: string;
  options: ImageOption[];
}

export const homeStockImages = {
  // 1. Hero slides, one per business area
  heroWater: {
    key: "heroWater",
    label: "Industrial steam boiler plant room",
    activeUrl: "/images/home/solution-water-boiler-room.jpg",
    alt: "Industrial steam boiler plant room with combustion burner and pipework",
    options: [
      {
        label: "Industrial Steam Boiler Plant Room (Recommended)",
        url: "/images/home/solution-water-boiler-room.jpg",
      },
      {
        label: "Cooling Tower Piping and Recirculating Loop",
        url: "/images/home/solution-water-cooling-tower.jpg",
      },
      {
        label: "Effluent Treatment Clarifier Basins (ETP)",
        url: "/images/home/solution-water-effluent-clarifier.webp",
      },
    ],
  },

  heroConstruction: {
    key: "heroConstruction",
    label: "Liquid waterproofing membrane application",
    activeUrl: "/images/home/solution-construction-waterproofing.webp",
    alt: "Application of liquid elastomeric waterproofing membrane over a concrete surface",
    options: [
      {
        label: "Liquid Waterproofing Membrane Application (Recommended)",
        url: "/images/home/solution-construction-waterproofing.webp",
      },
      {
        label: "Terrace Liquid Waterproofing Roller Coating",
        url: "/images/home/portfolio-waterproofing.jpg",
      },
    ],
  },

  heroVklin: {
    key: "heroVklin",
    label: "Everyday facility cleaning",
    activeUrl: "/images/home/everyday-cleaning-facility-care.webp",
    alt: "Facility cleaning staff in a commercial building lobby with a cleaning trolley and supplies",
    options: [
      {
        label: "Professional Facility Housekeeping (Recommended)",
        url: "/images/home/everyday-cleaning-facility-care.webp",
      },
      {
        label: "V-Klin Original Product Lineup",
        url: "/images/home/vklin-og-fitted.webp",
      },
    ],
  },

  // 2. Range cards, one per range ("What we make")
  rangeWater: {
    key: "rangeWater",
    label: "Industrial Water Treatment",
    activeUrl: "/images/home/solution-water-cooling-tower.jpg",
    alt: "Industrial cooling tower water treatment and recirculating pipe manifold",
    options: [
      {
        label: "Cooling Tower Piping and Recirculating Loop (Recommended)",
        url: "/images/home/solution-water-cooling-tower.jpg",
      },
      {
        label: "Effluent Treatment Clarifier Basins (ETP)",
        url: "/images/home/solution-water-effluent-clarifier.webp",
      },
    ],
  },

  rangeConstruction: {
    key: "rangeConstruction",
    label: "Surface Protection and Waterproofing",
    activeUrl: "/images/home/portfolio-waterproofing.jpg",
    alt: "Application of elastomeric liquid roof waterproofing coating with roller on building terrace",
    options: [
      {
        label: "Terrace Liquid Waterproofing Roller Coating (Recommended)",
        url: "/images/home/portfolio-waterproofing.jpg",
      },
      {
        label: "Industrial Deck Waterproofing in Progress",
        url: "/images/home/solution-construction-waterproofing.webp",
      },
    ],
  },

  // The specialty range has no client photograph, so its card uses the
  // labelled icon panel treatment instead of a stock photo of someone else's plant.
  // rangeSpecialty is rendered as an icon panel in src/app/page.tsx.

  rangeVklin: {
    key: "rangeVklin",
    label: "V-Klin Everyday Facility Care",
    activeUrl: "/images/home/vklin-og-lineup.webp",
    alt: "V-Klin product lineup of floor-cleaning and care bottles",
    options: [
      {
        label: "V-Klin Original Product Lineup (Recommended)",
        url: "/images/home/vklin-og-lineup.webp",
      },
      {
        label: "V-Klin Golden Floor Cleaner Packaging",
        url: "/images/home/vklin-og-fitted.webp",
      },
    ],
  },

  // 3. Applications section
  applicationsImage: {
    key: "applicationsImage",
    label: "Effluent Treatment Plant",
    activeUrl: "/images/home/applications-effluent-clarifier-basin.jpg",
    alt: "Industrial effluent treatment plant with circular aeration clarifier basin and processing tanks",
    options: [
      {
        label: "Effluent Clarifier Basins and Aeration Plant (Recommended)",
        url: "/images/home/solution-water-effluent-clarifier.webp",
      },
      {
        label: "Industrial Cooling Tower Pipe Manifold",
        url: "/images/home/solution-water-cooling-tower.jpg",
      },
    ],
  },
};
