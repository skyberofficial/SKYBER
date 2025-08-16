export function Progress({ value, className }: { value: number; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-full bg-secondary ${className ?? ''}`}>
      <div
        className="h-full rounded-full bg-[#17D492] transition-all"
        style={{ width: `${Math.max(0, Math.min(100, value))}%`, height: '100%' }}
      />
    </div>
  );
}


