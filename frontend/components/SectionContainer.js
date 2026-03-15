export default function SectionContainer({ id, className = '', children }) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">{children}</div>
    </section>
  );
}
