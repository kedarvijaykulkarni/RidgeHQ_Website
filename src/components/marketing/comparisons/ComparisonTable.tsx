import type { ComparisonRow } from "@/lib/config/comparisons";

interface ComparisonTableProps {
  rows: ComparisonRow[];
  categoryLabel: string;
}

export function ComparisonTable({ rows, categoryLabel }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-bg-elevated">
            <th scope="col" className="px-5 py-4 font-semibold text-ink">
              Dimension
            </th>
            <th scope="col" className="px-5 py-4 font-semibold text-ink-secondary">
              {categoryLabel}
            </th>
            <th scope="col" className="px-5 py-4 font-semibold text-accent">
              RidgeHQ
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.dimension} className={i % 2 === 1 ? "bg-bg-alt" : undefined}>
              <th scope="row" className="px-5 py-4 font-medium text-ink align-top">
                {row.dimension}
              </th>
              <td className="px-5 py-4 text-ink-secondary align-top">{row.category}</td>
              <td className="px-5 py-4 text-ink-secondary align-top">{row.ridgehq}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
