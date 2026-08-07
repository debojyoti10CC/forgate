import { Download, ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      style={{
        background: 'var(--surface-white)',
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <div className="container">
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <div className="hero-copy" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            <span className="mono-label">MICRO-TASK NOTEBOOK</span>

            <h1 className="hero-display">
              The things you keep forgetting.
            </h1>

            <p className="body-text" style={{ maxWidth: 440, lineHeight: 1.7 }}>
              Forgate is a fast, private micro-task app for Android. Log the small things that slip your mind, flip a switch when done, and move on. No accounts, no cloud, no noise.
            </p>

            <div style={{ display: 'flex', gap: 12, alignItems: 'center', paddingTop: 8 }}>
              <a
                href="/Forgate.apk"
                download="Forgate.apk"
                className="btn-dark btn-dark-lg"
              >
                <Download size={16} />
                Download APK
              </a>
              <a href="#demo" className="btn-outline">
                See it in action
                <ArrowDown size={14} />
              </a>
            </div>

            <p className="body-sm" style={{ color: 'var(--fg-subtle)', fontSize: 13 }}>
              v1.0.4 &middot; 5 MB &middot; Android 7.0+
            </p>
          </div>

          {/* Right — Phone Mockup */}
          <div className="hero-phone" style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/NEX (13).png"
              alt="Forgate app running on Android"
              className="phone-mockup-img"
              style={{ maxWidth: 460 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
