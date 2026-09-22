import styles from "./CaseStudy.module.css";

interface EvidenceItem {
  placeholder: string;
  caption: string;
}

interface EvidenceGridProps {
  items: readonly EvidenceItem[];
}

const EvidenceGrid = ({ items }: EvidenceGridProps) => {
  return (
    <div className="grid max-w-[760px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
      {items.map((item) => (
        <div key={item.caption}>
          <figure className="m-0">
            <div className={styles.evidenceThumb}>{item.placeholder}</div>
            <figcaption className="mt-2 font-accent text-[0.78rem] text-text-dim">
              {item.caption}
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default EvidenceGrid;
