export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductVariant {
  name: string;
  value: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  uiCategory: "shade-nets" | "agricultural" | "commercial" | "architectural";
  shortDescription: string;
  description: string;
  image: string;
  imageAlt?: string;
  gallery: string[];
  images?: string[];
  shadeFactor: string;
  applications: string[];
  specifications: ProductSpecification[];
  variants?: ProductVariant[];
  availability: string;
  isFeatured?: boolean;
  specificationNote?: string;
  enquiryNotes?: string;
  idealFor?: string;
  selectionTip?: string;
  keyBenefits?: string[];
  faqs?: ProductFAQ[];
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-01",
    slug: "agro-green-shade-net-50",
    name: "Agro Green Shade Net 50%",
    category: "Agricultural Shading",
    uiCategory: "agricultural",
    isFeatured: true,
    shortDescription:
      "Balanced 50% solar filtration engineered for nursery foliage, horticulture crops, and plant microclimate control.",
    description:
      "A knitted polyethylene protective netting engineered to soften direct radiant sunlight, reduce plant thermal stress, and retain consistent nursery humidity. The permeable lock-knit mesh allows uniform ambient airflow while protecting tender crops from heat scorching.",
    image: "/images/shade-net-macro.jpg",
    imageAlt: "Close-up of woven green shade net material with 50% solar density",
    gallery: [
      "/images/shade-net-macro.jpg",
      "/images/shade-net-greenhouse.jpg",
      "/images/shade-net-roll.jpg",
    ],
    images: [
      "/images/shade-net-macro.jpg",
      "/images/shade-net-greenhouse.jpg",
      "/images/shade-net-roll.jpg",
    ],
    shadeFactor: "Approx. 50% Shading",
    idealFor: "Plant nurseries, vegetable propagation, horticulture beds, and open-field row crop shading.",
    selectionTip:
      "Recommended when your crops need protection from intense midday sun without blocking the photosynthetically active radiation required for healthy vegetative growth.",
    keyBenefits: [
      "Filters direct solar radiation into gentle, diffuse canopy illumination",
      "Reduces plant thermal stress and conserves soil bed moisture",
      "Allows continuous natural airflow, preventing heat traps beneath the net",
      "Raschel lock-stitch knit prevents laddering if punctured",
    ],
    applications: [
      "Vegetable Nurseries & Seedling Beds",
      "Horticulture & Plant Propagation",
      "Orchard Canopy Sun Protection",
      "General Agricultural Crop Shading",
    ],
    specifications: [
      { label: "Material Composition", value: "High-Density Polyethylene Mesh" },
      { label: "Nominal Shade Factor", value: "50% Solar Filtration" },
      { label: "Knit Construction", value: "Permeable Lock-Stitch Mesh" },
      { label: "UV Formulation", value: "UV-Inhibited Polymer Compound" },
      { label: "Standard Roll Widths", value: "Available on request (Custom roll widths supported)" },
      { label: "Roll Lengths", value: "Available on request (Continuous commercial rolls)" },
      { label: "Primary Colors", value: "Dark Green / Emerald Green" },
      { label: "Supply Format", value: "Continuous Commercial Rolls" },
    ],
    variants: [
      { name: "Density", value: "50% Solar Reduction" },
      { name: "Format", value: "Continuous Roll / Custom Dimension" },
    ],
    availability: "Standard roll sizes and custom dimensions supplied upon direct enquiry.",
    specificationNote:
      "Standard category specifications shown. Exact GSM, tensile metrics, and custom dimensions are supplied upon project enquiry.",
    enquiryNotes: "Recommended for agricultural nursery beds and open-field foliage protection.",
    faqs: [
      {
        question: "Why is 50% shade recommended for plant nurseries?",
        answer:
          "Tender seedlings require substantial sunlight for photosynthesis but suffer leaf scorching under unfiltered midday solar peaks. A 50% shade net strikes an ideal balance, reducing thermal stress while allowing ample light and natural convective airflow to maintain steady bed humidity.",
      },
      {
        question: "Can this 50% shade net be used over greenhouse structures?",
        answer:
          "Yes. It is frequently deployed as an external seasonal shade over polyhouse roofs during peak summer months to lower interior temperatures, or as an internal retractable shade curtain in ventilated greenhouse bays.",
      },
      {
        question: "What roll dimensions can be supplied?",
        answer:
          "We supply standard commercial roll formats as well as custom-ordered widths and lengths tailored to specific bay dimensions upon direct inquiry.",
      },
    ],
  },
  {
    id: "prod-02",
    slug: "high-density-shade-net-75",
    name: "Heavy Agro Shade Net 75%",
    category: "Agricultural & Floriculture",
    uiCategory: "agricultural",
    shortDescription:
      "Dense 75% light reduction net ideal for shade-loving floriculture, polyhouse roofs, and livestock protection.",
    description:
      "High-density protective mesh providing 75% solar attenuation. Widely used for delicate floriculture, orchid houses, summer greenhouse heat relief, and cattle shed cooling where intensive heat dampening is required.",
    image: "/images/shade-net-greenhouse.jpg",
    imageAlt: "Green shade net covering a greenhouse structure with 75% light reduction",
    gallery: [
      "/images/shade-net-greenhouse.jpg",
      "/images/shade-net-macro.jpg",
      "/images/shade-net-roll.jpg",
    ],
    images: [
      "/images/shade-net-greenhouse.jpg",
      "/images/shade-net-macro.jpg",
      "/images/shade-net-roll.jpg",
    ],
    shadeFactor: "Approx. 75% Shading",
    idealFor: "Orchids, anthuriums, delicate floriculture, polyhouse summer heat moderation, and livestock housing.",
    selectionTip:
      "Select 75% when cultivating shade-loving floral varieties or managing severe summer ambient temperatures in enclosed polyhouse roofs and cattle shelters.",
    keyBenefits: [
      "Intensive 75% solar attenuation buffers extreme summer temperature spikes",
      "Protects sensitive flower blooms from petal bleaching and edge burn",
      "Helps reduce livestock thermal stress in open dairy and cattle sheds",
      "Dense knit construction offers high dimensional stability against wind uplift",
    ],
    applications: [
      "Greenhouse & Polyhouse Roofing",
      "Floriculture, Anthurium & Orchids",
      "Livestock Housing & Cattle Shed Cooling",
      "Open Storage Plot Solar Moderation",
    ],
    specifications: [
      { label: "Material Composition", value: "High-Density Polyethylene Mesh" },
      { label: "Nominal Shade Factor", value: "75% Solar Filtration" },
      { label: "Knit Construction", value: "Dense Tape & Monofilament Knit" },
      { label: "UV Formulation", value: "UV-Inhibited Polymer Compound" },
      { label: "Standard Roll Widths", value: "Available on request" },
      { label: "Roll Lengths", value: "Available on request" },
      { label: "Primary Colors", value: "Forest Green / Dark Green" },
      { label: "Supply Format", value: "Continuous Commercial Rolls" },
    ],
    variants: [
      { name: "Density", value: "75% Solar Reduction" },
      { name: "Format", value: "Continuous Roll / Custom Dimension" },
    ],
    availability: "Supplied in standard commercial roll formats; custom requirements on request.",
    specificationNote:
      "Standard category specifications shown. Custom roll dimensions and batch parameters are confirmed upon project enquiry.",
    enquiryNotes: "Ideal for polyhouse roofs, high-heat agricultural regions, and livestock shelter cooling.",
    faqs: [
      {
        question: "Is 75% shade too dark for general vegetable farming?",
        answer:
          "For sun-loving open-field vegetables (such as tomatoes or peppers), 75% shade is typically too dense for the entire growing cycle, as it reduces the light energy available for fruiting. It is specifically recommended for floriculture (orchids, anthuriums), delicate ferns, seedling acclimatization, or peak-heat polyhouse roofing.",
      },
      {
        question: "How does 75% netting help cattle sheds and dairy farms?",
        answer:
          "Radiant solar heat on open-sided tin sheds causes significant thermal distress in dairy cows, reducing feed intake and milk yield. Installing 75% shade netting along exposed perimeter orientations shields livestock from intense direct sun while maintaining cross-ventilation.",
      },
      {
        question: "How should this high-density net be secured to withstand wind?",
        answer:
          "Because 75% net has a tighter knit structure, it experiences higher wind resistance than 50% mesh. It should be securely fastened along reinforced selvedges every 0.5 to 1 metre using durable fasteners or profile channels.",
      },
    ],
  },
  {
    id: "prod-03",
    slug: "commercial-shade-cloth-90",
    name: "Commercial Shade Cloth 90%",
    category: "Commercial & Privacy",
    uiCategory: "commercial",
    shortDescription:
      "Maximum 90% opacity shade fabric for commercial yards, vehicle parking, privacy fencing, and pavilion shade.",
    description:
      "A heavy-duty protective fabric designed for high solar blockage and privacy screening. Built for parking lots, industrial holding areas, perimeter fencing, and open construction perimeters needing substantial shade and visual buffering.",
    image: "/images/shade-net-roll.jpg",
    imageAlt: "Rolls of green shade netting stored for commercial distribution",
    gallery: [
      "/images/shade-net-roll.jpg",
      "/images/shade-net-macro.jpg",
      "/images/shade-net-canopy.jpg",
    ],
    images: [
      "/images/shade-net-roll.jpg",
      "/images/shade-net-macro.jpg",
      "/images/shade-net-canopy.jpg",
    ],
    shadeFactor: "Approx. 90% Shading",
    idealFor: "Vehicle parking shelters, commercial equipment storage, site perimeter privacy fencing, and scaffolding.",
    selectionTip:
      "Choose 90% shade cloth when maximum solar shading, human comfort, and visual privacy screening are the primary objectives.",
    keyBenefits: [
      "Maximum 90% solar attenuation prevents vehicle interior solar heat buildup",
      "Provides effective visual barrier for private perimeters and site boundaries",
      "Heavy-duty knit resists environmental dust, wind buffeting, and outdoor wear",
      "Locks out intense glare while maintaining micro-porous air permeability",
    ],
    applications: [
      "Vehicle Parking Shelters & Car Ports",
      "Commercial Holding Yards & Staging Lots",
      "Perimeter Fencing & Privacy Screens",
      "Scaffolding Enclosure & Debris Buffer",
    ],
    specifications: [
      { label: "Material Composition", value: "Heavy-Duty Knitted Polymer Mesh" },
      { label: "Nominal Shade Factor", value: "90% Solar Attenuation" },
      { label: "Knit Construction", value: "Heavy Lock-Stitch Weave" },
      { label: "UV Formulation", value: "High Solar UV Resistance" },
      { label: "Standard Roll Widths", value: "Available on request" },
      { label: "Roll Lengths", value: "Available on request" },
      { label: "Primary Colors", value: "Dark Green / Neutral Tones" },
      { label: "Supply Format", value: "Commercial Bulk Rolls" },
    ],
    variants: [
      { name: "Density", value: "90% Solar Attenuation" },
      { name: "Format", value: "Commercial Bulk Roll" },
    ],
    availability: "Available in commercial quantities with nationwide dispatch options.",
    specificationNote:
      "Standard category specifications shown. Fabric weights and mechanical properties are supplied upon direct enquiry.",
    enquiryNotes: "Suitable for commercial car parks, building perimeters, and high-opacity screening.",
    faqs: [
      {
        question: "Can 90% shade cloth be used as a perimeter privacy screen?",
        answer:
          "Yes. 90% shade cloth is widely mounted against chain-link fences and boundary gates to create an effective visual screen while permitting enough air movement to prevent the fence from blowing over in strong winds.",
      },
      {
        question: "Does 90% shade cloth trap water when used for carports?",
        answer:
          "No. Because it is a knitted mesh rather than a solid waterproof tarpaulin, rainwater percolates through the tiny micro-pores, preventing dangerous water pooling that could collapse lightweight overhead frames.",
      },
    ],
  },
  {
    id: "prod-04",
    slug: "architectural-tensile-shade-fabric",
    name: "Architectural Tensile Netting",
    category: "Architectural Installations",
    uiCategory: "architectural",
    shortDescription:
      "Engineered shade netting tailored for tensioned geometric canopies, public spaces, and open-air pavilion structures.",
    description:
      "Formulated for dimensional stability under mechanical cable tension. Combines contemporary architectural styling with solar ultraviolet filtration for civic plazas, school playgrounds, courtyard pavilions, and commercial walkways.",
    image: "/images/shade-net-canopy.jpg",
    imageAlt: "Green shade canopy structure installed over an outdoor space",
    gallery: [
      "/images/shade-net-canopy.jpg",
      "/images/shade-net-macro.jpg",
      "/images/shade-net-roll.jpg",
    ],
    images: [
      "/images/shade-net-canopy.jpg",
      "/images/shade-net-macro.jpg",
      "/images/shade-net-roll.jpg",
    ],
    shadeFactor: "Approx. 85% Shading",
    idealFor: "Tensile canopy sails, architectural courtyards, school playgrounds, public plazas, and walkway coverings.",
    selectionTip:
      "Engineered specifically for structural tensioning across steel cable frames where fabric stability and aesthetic drape are paramount.",
    keyBenefits: [
      "Engineered for uniform dimensional stability under structural cable load",
      "Blocks harsh ultraviolet rays while creating comfortable ambient open-air shade",
      "Permeable knit allows hot rising air to escape freely through the canopy",
      "Available in continuous rolls tailored for professional fabrication and edging",
    ],
    applications: [
      "Tensile Canopy Pavilions",
      "School Playgrounds & Courtyards",
      "Civic Plazas & Pedestrian Walkways",
      "Outdoor Dining & Hospitality Canopies",
    ],
    specifications: [
      { label: "Material Composition", value: "Tension-Grade Knitted Mesh" },
      { label: "Nominal Shade Factor", value: "85% Solar Moderation" },
      { label: "Tension Stability", value: "High Dimensional Elasticity" },
      { label: "UV Formulation", value: "UV-Inhibited Polymer Compound" },
      { label: "Standard Roll Widths", value: "Available on request" },
      { label: "Roll Lengths", value: "Available on request" },
      { label: "Primary Colors", value: "Modern Green / Lime Green" },
      { label: "Supply Format", value: "Fabric Rolls for Fabrication" },
    ],
    variants: [
      { name: "Density", value: "85% Solar Attenuation" },
      { name: "Format", value: "Fabrication-Ready Fabric Rolls" },
    ],
    availability: "Fabrication-ready rolls provided for tensile contractors and installers.",
    specificationNote:
      "Standard category specifications shown. Tension metrics and elongation data are provided upon engineering enquiry.",
    enquiryNotes: "Designed for cable-tensioned shade sails, architectural structures, and outdoor venues.",
    faqs: [
      {
        question: "How does tensile shade netting handle strong winds?",
        answer:
          "Unlike solid PVC or canvas canopies that act like sails in high winds, the permeable knitted lock-stitch mesh allows air to filter through, significantly reducing aerodynamic wind uplift and tension load on support columns.",
      },
      {
        question: "Can contractors fabricate custom geometric shapes from these rolls?",
        answer:
          "Yes. The lock-stitch knit structure allows fabricators to cut panels to custom geometric patterns, hem perimeter edges with high-tenacity seatbelt webbing, and fit corner D-rings for cable attachment without the knit unravelling.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string, count: number = 3): Product[] {
  return PRODUCTS.filter((p) => p.slug !== currentSlug).slice(0, count);
}
