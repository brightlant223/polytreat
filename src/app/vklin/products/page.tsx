import type { Metadata } from "next";
import VKlinProductsCatalogue from "@/components/VKlinProductsCatalogue";

export const metadata: Metadata = {
  title: "V-Klin Cleaning Products Range | PolyTreat Chemicals",
  description:
    "Browse the full V-Klin commercial and household cleaning range organised by task: floor & surface care, hand hygiene, dishwashing, glass care, washroom care, odour control and natural wellness.",
};

export default function VKlinProductsPage() {
  return (
    <main className="vklin-products-page">
      <VKlinProductsCatalogue />
    </main>
  );
}
