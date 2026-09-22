import styles from "./CaseStudy.module.css";

interface ArchitectureDiagramProps {
  description: string;
  caption: string;
}

const ArchitectureDiagram = ({
  description,
  caption,
}: ArchitectureDiagramProps) => {
  return (
    <div className={styles.diagramWrap}>
      <div className={styles.diagramFrame}>{description}</div>
      <p className={styles.diagramCaption}>
        <span className="text-yellow">Current</span>
        {caption}
      </p>
    </div>
  );
};

export default ArchitectureDiagram;
