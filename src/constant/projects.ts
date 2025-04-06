export type Project = {
  title: string;
  src: string;
  year: number;
  text: string;
  url: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Odunsi",
    src: "/images/odunsi.webp",
    year: 2024,
    text: "Photography",
    url: "https://www.odunsi.xyz/", // You can update this URL later
  },
  {
    title: "synthetix",
    src: "/images/synthetix.webp",
    year: 2024,
    text: "Visual Arts",
    url: "https://synthetix-iota.vercel.app/", // You can update this URL later
  },
  {
    title: "flixify",
    src: "/images/flixify.webp",
    year: 2025,
    text: "Graphic Design",
    url: "#", // You can update this URL later
  },
  {
    title: "interlock",
    src: "/images/interlock.webp",
    year: 2024,
    text: "Photography",
    url: "https://interlock-teal.vercel.app/", // You can update this URL later
  },
  {
    title: "propellent",
    src: "/images/propellent.webp",
    year: 2025,
    text: "Photography",
    url: "https://propellent.vercel.app/", // You can update this URL later
  },
];
