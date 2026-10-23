import { SITE_DESCRIPTION, SITE_URL } from "@/utils/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mariia Ganza",
  jobTitle: "Backend-leaning Fullstack Engineer",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  sameAs: [
    "https://github.com/marusyaganza",
    "https://www.linkedin.com/in/mariia-ganza",
  ],
  knowsAbout: [
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "PostgreSQL",
    "Redis",
    "SQL",
    "REST APIs",
    "GraphQL",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Docker",
    "Cypress",
    "API design",
  ],
  alumniOf: {
    "@type": "Organization",
    name: 'Saint Petersburg State Electrotechnical University "LETI"',
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
