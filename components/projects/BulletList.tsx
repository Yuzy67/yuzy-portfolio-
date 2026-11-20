export default function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-zinc-600"
          />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}
