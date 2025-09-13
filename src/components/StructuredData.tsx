const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mariia  Ganza",
  jobTitle: "Senior Full-Stack Developer",
  description:
    "Digital Detective solving complex problems through code. Specialized in React, TypeScript, Node.js, and modern web technologies.",
  url: "https://yourname.dev",
  image: "https://yourname.dev/avatar.webp",
  sameAs: [
    "https://github.com/marusyaganza",
    "https://linkedin.com/in/mariia-ganza",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "Storybook",
    "MongoDB",
    "Docker",
    "Cypress",
    "Jest",
    "Figma",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Developer",
    description:
      "Developing web applications using modern technologies and frameworks",
    skills: [
      "Frontend Development",
      "JavaScript Development",
      "TypeScript Development",
      "Docker",
      "DevOps",
      "Design Systems",
    ],
  },
  alumniOf: {
    "@type": "Organization",
    name: 'Saint Petersburg State Electrotechnical University "LETI"​',
  },
  worksFor: {
    "@type": "Organization",
    name: "Epam Systems",
    description:
      "Leading complex digital investigations across multiple platforms",
  },
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
