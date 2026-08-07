export const Footer = () => {
  return (
    <footer
      style={{
        background: 'var(--true-black)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '32px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo.png" alt="Forgate" style={{ width: 24, height: 24, borderRadius: 6 }} />
          <span style={{ fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>Forgate</span>
        </div>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '1.5px',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
          }}
        >
          100% offline &middot; zero telemetry
        </span>

        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};
