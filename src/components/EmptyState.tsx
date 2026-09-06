/** An empty screen is an invitation to act, not an apology. */
export default function EmptyState({
  title,
  action,
}: {
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="border border-dashed border-rule px-6 py-14 text-center">
      <p className="text-[15px] text-muted">{title}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
