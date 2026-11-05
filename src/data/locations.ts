/**
 * Single source of truth for PolyTreat's locations.
 *
 * Three sites, each from the client's own material:
 * - Goregaon (West) is the corporate and sales office.
 * - Goregaon (East) is the green products facility.
 * - Tarapur MIDC is the heavy manufacturing plant.
 */

export type LocationSite = {
  id: "goregaon-west" | "goregaon-east" | "tarapur";
  /** Short label for the site in a list. */
  kind: string;
  /** Place name with the area in brackets, e.g. "Goregaon (West), Mumbai". */
  title: string;
  /** Place name for maps and anchors, e.g. "Goregaon West, Mumbai". */
  area: string;
  /** Address as separate lines, for a card. */
  addressLines: string[];
  /** Address as one line, for a list. */
  address: string;
  /** What this site is for. */
  note: string;
  /** Short role label, e.g. "Corporate office". */
  role: string;
};

export const locationSites: LocationSite[] = [
  {
    id: "goregaon-west",
    kind: "Corporate & administrative office",
    title: "Goregaon West",
    area: "Goregaon West, Mumbai",
    addressLines: [
      "7-A, Topiwala Building, 'C' Wing, Opp.",
      "Pramila Cinema, Goregaon (West),",
      "Mumbai – 400104, Maharashtra, India.",
    ],
    address:
      "7-A, Topiwala Building, 'C' Wing, Opp. Pramila Cinema, Goregaon (West), Mumbai – 400104, Maharashtra, India.",
    note: "Sales, administration, and technical coordination.",
    role: "Head Office",
  },
  {
    id: "goregaon-east",
    kind: "Manufacturing - green products",
    title: "Goregaon East",
    area: "Goregaon East, Mumbai",
    addressLines: [
      "506, Shantilal Industrial Premises",
      "Co-op Society Ltd, Veer Gunjwala,",
      "Goregaon(E), Mumbai – 400063.",
    ],
    address:
      "506, Shantilal Industrial Premises Co-op Society Ltd, Veer Gunjwala, Goregaon(E), Mumbai – 400063.",
    note: "The V-Klin cleaning and institutional care range, and the site named on our certificates.",
    role: "Goregaon East, Mumbai",
  },
  {
    id: "tarapur",
    kind: "Manufacturing - heavy chemicals",
    title: "Tarapur MIDC",
    area: "Tarapur MIDC, Palghar",
    addressLines: [
      "Tarapur Industrial Area (MIDC),",
      "Palghar district, Maharashtra,",
      "India.",
    ],
    address: "Tarapur Industrial Area (MIDC), Palghar district, Maharashtra, India.",
    note: "Heavy manufacturing for the industrial water and process chemical ranges.",
    role: "Tarapur MIDC, Palghar",
  },
];

/** The site enquiries are directed to. */
export const primaryContactSite = locationSites[0];
