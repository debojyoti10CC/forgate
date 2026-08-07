import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { WidgetShowcase } from './components/WidgetShowcase';
import { DownloadSection } from './components/DownloadSection';
import { InteractivePhoneDemo } from './components/InteractivePhoneDemo';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface-white)', fontFamily: 'Manrope, system-ui, sans-serif' }}>
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />

        {/* Live Demo */}
        <section
          id="demo"
          style={{
            background: 'var(--surface-white)',
            padding: '80px 0',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div className="container">
            <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
              <div className="demo-copy" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <span className="mono-label">TRY IT</span>
                <h2 className="section-heading" style={{ fontSize: 40 }}>
                  Working demo, right here.
                </h2>
                <p className="body-text" style={{ maxWidth: 400, lineHeight: 1.7 }}>
                  Add tasks, flip switches, watch them move. This is a functional replica of the app running in your browser. Switch tabs to see the real app screenshot or the Android widget.
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InteractivePhoneDemo />
              </div>
            </div>
          </div>
        </section>

        <WidgetShowcase />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
