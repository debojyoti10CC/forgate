export const FeatureGrid = () => {
  const cards = [
    {
      title: 'Tactile ON / OFF switches.',
      monoTag: 'CORE UX',
      body: 'Every task gets a physical toggle switch. Flip it OFF when finished — it slides down into completed. Flip it back ON anytime to restore.',
      image: null,
    },
    {
      title: 'Tasks you shouldn\'t forget.',
      monoTag: 'QUICK MEMORY',
      body: 'Cut your nails, water plants, return library books. Forgate acts as your quick daily notebook before micro-tasks slip your mind.',
      image: '/demo.jpg',
    },
    {
      title: 'Your launcher has a widget.',
      monoTag: 'ANDROID WIDGET',
      body: 'See pending micro-tasks right on your home screen. Toggle switches directly on the widget surface without ever launching the app.',
      image: null,
    },
  ];

  return (
    <section
      id="features"
      style={{
        background: 'var(--surface-white)',
        padding: '100px 0',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: 640, marginBottom: 64 }}>
          <span className="mono-label" style={{ marginBottom: 16, display: 'block' }}>THE PROTOCOL</span>
          <h2 className="section-heading" style={{ fontSize: 56, letterSpacing: '-1.4px' }}>
            Simple, fast, and<br />completely offline.
          </h2>
        </div>

        {/* Outer Bounded Box with Curved Corners and 1px Divider Lines Between Columns */}
        <div
          style={{
            border: '1px solid #e5e5e5',
            borderRadius: 24,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            background: 'var(--surface-white)',
          }}
        >
          {cards.map((card, idx) => (
            <div
              key={card.title}
              style={{
                padding: '48px 36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRight: idx < 2 ? '1px solid #e5e5e5' : 'none',
                minHeight: 440,
                background: 'transparent',
              }}
            >
              {/* Top Title */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-manrope)',
                    fontSize: 28,
                    fontWeight: 600,
                    letterSpacing: '-0.7px',
                    lineHeight: 1.25,
                    color: 'var(--fg-primary)',
                    marginBottom: 24,
                  }}
                >
                  {card.title}
                </h3>
              </div>

              {/* Bottom Tag + Description */}
              <div style={{ marginTop: 'auto' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '2px',
                    color: 'var(--fg-subtle)',
                    display: 'block',
                    marginBottom: 12,
                    textTransform: 'uppercase',
                  }}
                >
                  {card.monoTag}
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-manrope)',
                    fontSize: 15,
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: 'var(--fg-muted)',
                  }}
                >
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
