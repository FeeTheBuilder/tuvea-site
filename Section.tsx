export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold text-brand-lightGold">{title}</h2>
        {subtitle ? (
          <p className="mt-3 text-white/75">{subtitle}</p>
        ) : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}