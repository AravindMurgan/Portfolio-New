
import inthemarket from "../assets/inthemarket.png"
import resourcemonitor from "../assets/resource-monitor.png"

export const ARAVIND = 'Aravind Murugan'
export const ARAVIND_EMAIL = 'mi.arvindmurugan@gmail.com'
export const ARAVIND_ADDRESS = 'Coventry, United Kingdom'
export const ARAVIND_PHONE_NO = '+44 - 7769578382'
export const PROJECTS = [
  {
    title: "In The Market",
    description:
      "Full-stack luxury marketplace for high-end cars and properties with advanced search and seamless authentication.",
    longDescription:
      "In-The-Market is a full-stack luxury marketplace built with Next.js, React, and MongoDB, enabling users to browse, list, and manage high-end cars and properties. It features advanced search with a custom priority-scoring algorithm, seamless authentication, image-rich listings, and a clean, responsive UI designed for a premium browsing experience.",
    image: inthemarket,
    github:
      "https://github.com/AravindMurgan/in-the-market",
    live: "https://in-the-market.vercel.app/",
    tags: ["Next JS", "React JS", "Javascript", "TypeScript", "Mongo DB"],
    features: [
      "User authentication with Google & Next Auth",
      "User authorization",
      "Route protection",
      "User profile with user listings",
      "Property Listing CRUD",
      "Property image upload (Multiple)",
      "Property search",
      "Internal messages with 'unread' notifications",
      "Photoswipe image gallery",
      "Mapbox maps",
      "Toast notifications",
      "Property bookmarking / saved properties",
      "Property sharing to social media",
      "Loading spinners",
      "Responsive design (Tailwind)",
      "Custom 404 page",
    ],
    startDate: "June 2024",
    endDate: "Sep 2024",
  },
  {
    title: "AAA Game Performance & Resource Dashboard",
    description:
      "Real-time dashboard that visualizes FPS and hardware usage for AAA PC games, helping quickly spot performance bottlenecks.",
    longDescription:
      "A AAA game performance analytics dashboard that streams FPS and hardware metrics (CPU, GPU, RAM, VRAM) into a clean, responsive UI, designed to help players and game teams quickly understand resource usage and make data-driven optimization decisions.",
    image: resourcemonitor,
    github:
      "https://github.com/AravindMurgan/resource-monitor",
    live: "https://resource-monitor-ps.netlify.app/",
    tags: ["Next JS", "React JS", "Javascript", "TypeScript"],
    features: [
      "Real-time monitoring of FPS, CPU, GPU, RAM and VRAM usage",
      "Responsive dashboard optimized for desktop and high‑resolution displays",
      "Clear visual cues for performance spikes and hardware bottlenecks",
      "Configurable thresholds to highlight critical resource usage",
      "Session-based view to compare performance across different games or settings",
      "Lightweight UI designed to run alongside demanding AAA titles",
      "Built with Next.js, React and TypeScript for maintainable front-end architecture",
    ],
    startDate: "Oct 2025",
    endDate: "Nov 2025",
  },
];