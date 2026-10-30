import type { StaticImageData } from "next/image";
import styles from "./CaseStudy.module.css";
import ZoomableImage from "./ZoomableImage";

interface ArchitectureDiagramProps {
  image: StaticImageData;
  alt: string;
  caption: string;
}

const ArchitectureDiagram = ({
  image,
  alt,
  caption,
}: ArchitectureDiagramProps) => {
  return (
    <div className={styles.diagramWrap}>
      {/* Enlarges in a modal so the small labels stay readable */}
      <ZoomableImage
        image={image}
        alt={alt}
        sizes="(max-width: 760px) 100vw, 696px"
        className={styles.diagramFrame}
      />
      <p className={styles.diagramCaption}>
        <span className="text-yellow">Current</span>
        {caption}
      </p>
    </div>
  );
};

export default ArchitectureDiagram;
