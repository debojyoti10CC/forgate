import { Download } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        padding: '16px 0',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo.png" alt="Forgate" style={{ width: 30, height: 30, borderRadius: 8 }} />
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.3px' }}>Forgate</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {['Features', 'Demo', 'Widget', 'Download'].map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="label-md"
              style={{ color: 'var(--fg-muted)', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-muted)')}
            >
              {l}
            </a>
          ))}
        </div>

        <a href="/Forgate.apk" download="Forgate.apk" className="btn-dark">
          <Download size={14} />
          Download APK
        </a>
      </div>
    </nav>
  );
};
