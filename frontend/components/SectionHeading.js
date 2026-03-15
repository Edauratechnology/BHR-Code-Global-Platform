export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
  eyebrowClassName = 'text-brand-700',
  titleClassName = 'text-brand-900',
  descriptionClassName = 'text-slate-600'
}) {
  return (
    <div className={`max-w-3xl ${className}`.trim()}>
      {eyebrow ? <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowClassName}`.trim()}>{eyebrow}</p> : null}
      <h2 className={`mt-2 text-3xl font-bold tracking-tight md:text-4xl ${titleClassName}`.trim()}>{title}</h2>
      {description ? <p className={`mt-4 text-base md:text-lg ${descriptionClassName}`.trim()}>{description}</p> : null}
    </div>
  );
}
