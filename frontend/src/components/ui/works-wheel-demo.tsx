"use client";

import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";

const ART = (name: string) => `https://images.unsplash.com/${name}?auto=format&fit=crop&w=1200&q=80`;

const WORKS: WorksWheelItem[] = [
  {
    title: "Prismatic Rift",
    image: ART("photo-1516321318423-f06f85e504b3"),
    href: "#prismatic-rift",
  },
  {
    title: "Ember Clouds",
    image: ART("photo-1497366754035-f200968a6e72"),
    href: "#ember-clouds",
  },
  {
    title: "Neon Portal",
    image: ART("photo-1522202176988-66273c2fd55f"),
    href: "#neon-portal",
  },
  {
    title: "Red Ribbon",
    image: ART("photo-1518770660439-4636190af475"),
    href: "#red-ribbon",
  },
  {
    title: "Celestial",
    image: ART("photo-1524758631624-e2822e304c36"),
    href: "#celestial",
  },
  { title: "Uplight", image: ART("photo-1504384308090-c894fdcc538d"), href: "#uplight" },
  {
    title: "Indigo Marble",
    image: ART("photo-1460925895917-afdab827c52f"),
    href: "#indigo-marble",
  },
  {
    title: "Launch Window",
    image: ART("photo-1522204523234-8729aa6e3a8f"),
    href: "#launch-window",
  },
  {
    title: "Cosmic Wave",
    image: ART("photo-1517248135467-4c7edcad34c4"),
    href: "#cosmic-wave",
  },
];

export default function WorksWheelDemo() {
  return (
    <div className="h-screen w-full bg-slate-50 text-slate-900">
      <WorksWheel items={WORKS} label="Works '26" action="View" />
    </div>
  );
}
