import type { Metadata } from "next";
import QualityPageClient from "./QualityPageClient";
import "./quality.css";

export const metadata: Metadata = {
  title: "Quality Assurance & Standards | PolyTreat Chemicals Pvt. Ltd.",
  description:
    "Explore PolyTreat's P.Q.R.S quality framework, in-house R&D laboratory, pilot reactor testing, daily statistical process control, and ISO 9001:2015 certifications.",
};

export default function QualityPage() {
  return <QualityPageClient />;
}
