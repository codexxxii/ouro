export default function StatCard({
  label,
  value,
  change,
  warning = false,
}: {
  label: string;
  value: string;
  change: string;
  warning?: boolean;
}) {
  return (
    <div className="rounded-xl border border-neutral-800 p-5">
      <p className="text-sm text-neutral-500"> {label} </p>
      <div className="mt-3 flex items-end justify-between">
        <span className="text-3xl font-semibold tracking-tight">{value}</span>
        <span
          className={`text-xs ${warning ? "text-amber-500" : "text-neutral-600"}`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}
