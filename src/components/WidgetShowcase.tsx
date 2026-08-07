import { ArrowRight } from 'lucide-react';

export const WidgetShowcase = () => {
  return (
    <section
      id="widget"
      style={{
        background: 'var(--soft-blue-tint)',
        padding: '80px 0',
      }}
    >
      <div className="container">
        <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

          {/* Left — Image */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/widget_mockup.png"
              alt="Forgate home screen widget"
              style={{
                width: '100%',
                maxWidth: 440,
                borderRadius: 22,
                border: '1px solid var(--border-subtle)',
                display: 'block',
              }}
            />
          </div>

          {/* Right — Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span className="mono-label">ANDROID WIDGET</span>
            <h2 className="section-heading" style={{ fontSize: 40 }}>
              See your tasks without opening the app.
            </h2>
            <p className="body-text" style={{ maxWidth: 420, lineHeight: 1.7 }}>
              Place the Forgate widget on your home screen. Pending tasks stay visible every time you unlock your phone. Tap the switch directly on the widget to mark a task done.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                ['Always visible', 'Tasks show on your launcher without opening anything.'],
                ['One-tap completion', 'Toggle the switch right on the widget surface.'],
                ['Instant sync', 'Done items move to your history in real time.'],
              ].map(([title, desc]) => (
                <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--warm-near-black)', marginTop: 8, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>{title}</p>
                    <p className="body-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#download" className="btn-dark" style={{ alignSelf: 'flex-start' }}>
              Get the APK <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
