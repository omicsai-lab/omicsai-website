function Section({ title, subtitle, children, className = '' }) {
  const headingId = title
    ? `section-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
    : undefined

  return (
    <section className={`section ${className}`.trim()} aria-labelledby={headingId}>
      <div className="container">
        {title && <h2 id={headingId}>{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}

export default Section
