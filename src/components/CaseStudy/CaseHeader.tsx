interface CaseHeaderProps {
  caseId: string;
  title: string;
  summary: string;
  status: string;
}

const CaseHeader = ({ caseId, title, summary, status }: CaseHeaderProps) => {
  return (
    <header className="mb-14">
      <span className="mb-3.5 block font-accent text-[0.85rem] tracking-[2px] text-yellow">
        {caseId}
      </span>
      <h1 className="mb-4 font-heading text-[clamp(1.9rem,4vw,2.6rem)] font-bold leading-tight">
        {title}
      </h1>
      <p className="max-w-[640px] text-[1.05rem] text-text-dim">{summary}</p>
      <span className="mt-5 inline-block border border-green-light px-2.5 py-1 font-accent text-[0.75rem] tracking-[1px] text-green-light">
        {status}
      </span>
    </header>
  );
};

export default CaseHeader;
