import type { ComparisonRow } from "@/lib/config/comparisons";

interface ComparisonTableProps {
  rows: ComparisonRow[];
  categoryLabel: string;
}

export function ComparisonTable({ rows, categoryLabel }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            <th scope="col" className="px-5 py-4 font-semibold text-white">
              Dimension
            </th>
            <th scope="col" className="px-5 py-4 font-semibold text-slate-300">
              {categoryLabel}
            </th>
            <th scope="col" className="px-5 py-4 font-semibold text-[#22D3EE]">
              RidgeHQ
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.dimension} className={i % 2 === 1 ? "bg-white/[0.02]" : undefined}>
              <th scope="row" className="px-5 py-4 font-medium text-white align-top">
                {row.dimension}
              </th>
              <td className="px-5 py-4 text-slate-400 align-top">{row.category}</td>
              <td className="px-5 py-4 text-slate-300 align-top">{row.ridgehq}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
