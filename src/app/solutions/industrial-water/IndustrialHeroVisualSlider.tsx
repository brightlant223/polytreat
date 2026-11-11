"use client";

import { HeroVisualSlider, type HeroSlideItem } from "@/components/HeroVisualSlider";

const waterHeroSlides: HeroSlideItem[] = [
  {
    id: "ro-membrane",
    src: "/images/solutions/industrial-water-ro-facility.jpg",
    alt: "Industrial reverse osmosis water treatment facility with multi-tiered membrane pressure vessels, high-pressure pumps and stainless steel piping",
    badgeTitle: "RO & Membrane Plant",
    badgeSub: "Industrial Process Demineralisation",
  },
  {
    id: "boiler-cooling",
    src: "/images/solutions/boiler-cooling-hero-facility.jpg",
    alt: "Industrial boiler and cooling-water treatment systems operating inside a manufacturing plant",
    badgeTitle: "Boiler & Cooling Systems",
    badgeSub: "Scale, Corrosion & Thermal Efficiency",
  },
  {
    id: "ro-effluent",
    src: "/images/solutions/ro-effluent-hero-facility.jpg",
    alt: "Reverse osmosis membrane skid and effluent treatment clarification facility",
    badgeTitle: "RO & Effluent Treatment",
    badgeSub: "High Recovery & Discharge Compliance",
  },
];

export function IndustrialHeroVisualSlider() {
  return (
    <HeroVisualSlider
      slides={waterHeroSlides}
      wrapClassName="industrial-water-figure-wrap"
      imgClassName="industrial-water-hero-img"
      ariaLabel="Industrial water facility slide selection"
    />
  );
}
