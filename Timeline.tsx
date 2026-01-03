export default function Timeline() {
  const milestones = [
    {
      heading: 'Launch',
      desc: 'Initial groundwork established',
    },
    {
      heading: 'Growth',
      desc: 'Expanded support programs and outreach',
    },
    {
      heading: 'Outreach',
      desc: 'Community engagement initiatives',
    },
    {
      heading: 'Partnership',
      desc: 'Collaborations with agencies and organizations',
    },
    {
      heading: 'Impact',
      desc: 'Successful veteran assistance and advocacy',
    },
  ];
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-6">
      {milestones.map((item, idx) => (
        <div
          key={item.heading}
          className="relative flex-1 rounded-2xl border border-brand-gold/10 bg-brand-gold/5 p-6 text-center"
        >
          {/* connector */}
          {idx < milestones.length - 1 && (
            <span className="hidden md:block absolute right-0 top-1/2 h-px w-8 -translate-y-1/2 bg-brand-gold"></span>
          )}
          <div className="font-semibold text-brand-lightGold">{item.heading.toUpperCase()}</div>
          <p className="mt-2 text-sm text-white/75">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}