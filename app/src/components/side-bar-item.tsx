export default function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${active ? "bg-neutral-900 text-white" : "text-neutral-500 hover:bg-neutral-900 hover:text-white"}`}
    >
      {icon} {label}
    </button>
  );
}
