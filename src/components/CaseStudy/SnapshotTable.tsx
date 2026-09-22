import styles from "./CaseStudy.module.css";

interface SnapshotRow {
  label: string;
  value: string;
}

interface SnapshotTableProps {
  rows: readonly SnapshotRow[];
}

const SnapshotTable = ({ rows }: SnapshotTableProps) => {
  return (
    <table className={styles.snapshotTable}>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <th scope="row">{row.label}</th>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SnapshotTable;
