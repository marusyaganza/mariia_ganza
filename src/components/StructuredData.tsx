const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Your Name",
  jobTitle: "Senior Full-Stack Developer",
  description:
    "Digital Detective solving complex problems through code. Specialized in React, TypeScript, Node.js, and modern web technologies.",
  url: "https://yourname.dev", // Replace with your actual domain
  image: "https://yourname.dev/avatar.webp", // Replace with your actual domain
  sameAs: [
    "https://github.com/yourusername", // Replace with your GitHub
    "https://linkedin.com/in/yourusername", // Replace with your LinkedIn
    "https://twitter.com/yourusername", // Replace with your Twitter
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Figma",
    "Next.js",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Developer",
    description:
      "Developing web applications using modern technologies and frameworks",
    skills: [
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "Cloud Architecture",
      "DevOps",
      "UI/UX Design",
    ],
  },
  alumniOf: {
    "@type": "Organization",
    name: "TechCorp Industries",
  },
  worksFor: {
    "@type": "Organization",
    name: "TechCorp Industries",
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
