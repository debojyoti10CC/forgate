import { Download } from 'lucide-react';

export const DownloadSection = () => {
  return (
    <section
      id="download"
      style={{
        background: 'var(--true-black)',
        padding: '80px 0',
      }}
    >
      <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
        <span
          className="ticker-label-md"
          style={{ color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 24 }}
        >
          DOWNLOAD
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-manrope)',
            fontSize: 48,
            fontWeight: 600,
            letterSpacing: '-1.2px',
            lineHeight: 1.1,
            color: '#fff',
            marginBottom: 20,
          }}
        >
          Get Forgate.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-manrope)',
            fontSize: 16,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.55)',
            maxWidth: 440,
            margin: '0 auto 32px',
          }}
        >
          Download the APK directly to your Android device. No sign-up, no ads, no data collection.
        </p>

        <a
          href="/Forgate.apk"
          download="Forgate.apk"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            background: '#fff',
            color: 'var(--true-black)',
            fontFamily: 'var(--font-manrope)',
            fontSize: 15,
            fontWeight: 600,
            padding: '14px 36px',
            borderRadius: 9999,
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'opacity 0.15s',
          }}
        >
          <Download size={17} />
          Download APK
        </a>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '1.8px',
            color: 'rgba(255,255,255,0.3)',
            marginTop: 20,
            textTransform: 'uppercase',
          }}
        >
          V1.0.4 &middot; 5 MB &middot; ANDROID 7.0+
        </p>

        {/* Install steps */}
        <div
          className="steps-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            background: 'rgba(255,255,255,0.08)',
            marginTop: 56,
            textAlign: 'left',
          }}
        >
          {[
            ['01', 'Download', 'Tap the button above to save the APK to your device.'],
            ['02', 'Open file', 'Find it in your downloads or notification shade.'],
            ['03', 'Install', 'Allow from this source if prompted, then tap Install.'],
          ].map(([num, title, desc]) => (
            <div
              key={num}
              style={{
                background: 'var(--true-black)',
                padding: '32px 24px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '2px',
                  color: 'rgba(255,255,255,0.3)',
                  display: 'block',
                  marginBottom: 12,
                }}
              >
                {num}
              </span>
              <p style={{ color: '#fff', fontSize: 15, fontFamily: 'var(--font-manrope)', fontWeight: 600, marginBottom: 6 }}>
                {title}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, fontFamily: 'var(--font-manrope)', lineHeight: 1.5 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
