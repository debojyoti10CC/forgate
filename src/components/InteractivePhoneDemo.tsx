import { useState, type FormEvent } from 'react';
import { Plus, Trash2, Clock, LayoutGrid, Image as ImageIcon, Sparkles } from 'lucide-react';

interface Task {
  id: string;
  text: string;
  active: boolean;
  timeBadge: string;
}

export const InteractivePhoneDemo = () => {
  const [viewMode, setViewMode] = useState<'app' | 'screenshot' | 'widget'>('app');
  const [newTaskText, setNewTaskText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Cut fingernails', active: true, timeBadge: '15m ago' },
    { id: '2', text: 'Water balcony plants', active: true, timeBadge: '1h ago' },
    { id: '3', text: 'Return library book', active: true, timeBadge: '3h ago' },
    { id: '4', text: 'Charge headphones', active: false, timeBadge: 'Yesterday' },
  ]);

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    setTasks([{ id: Date.now().toString(), text: newTaskText.trim(), active: true, timeBadge: 'just now' }, ...tasks]);
    setNewTaskText('');
  };

  const toggleTask = (id: string) => setTasks(prev => prev.map(t => (t.id === id ? { ...t, active: !t.active } : t)));
  const deleteTask = (id: string) => setTasks(prev => prev.filter(t => t.id !== id));
  const clearCompleted = () => setTasks(prev => prev.filter(t => t.active));

  const active = tasks.filter(t => t.active);
  const done = tasks.filter(t => !t.active);

  const tabs = [
    { key: 'app', label: 'LIVE DEMO', Icon: LayoutGrid },
    { key: 'screenshot', label: 'REAL APP', Icon: ImageIcon },
    { key: 'widget', label: 'WIDGET', Icon: Sparkles },
  ] as const;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: 0, border: '1px solid #e5e5e5', borderRadius: 9999, overflow: 'hidden', marginBottom: 24 }}>
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setViewMode(key)}
            style={{
              padding: '8px 20px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '1.5px',
              transition: 'all 0.15s',
              background: viewMode === key ? 'var(--warm-near-black)' : 'transparent',
              color: viewMode === key ? '#fff' : 'var(--fg-muted)',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Phone Shell */}
      <div
        style={{
          width: 300,
          height: 616,
          background: '#1a1a1a',
          borderRadius: 44,
          padding: 10,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ width: 110, height: 24, background: '#000', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', zIndex: 40 }} />

        <div style={{ width: '100%', height: '100%', background: '#f7f5f2', borderRadius: 36, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          {/* Status bar */}
          <div style={{ padding: '32px 18px 8px', display: 'flex', justifyContent: 'space-between', fontSize: 11, fontFamily: 'Manrope, sans-serif', fontWeight: 600, color: '#333', borderBottom: '1px solid #eee' }}>
            <span>10:21</span>
            <span style={{ color: '#999', fontSize: 10 }}>5G 100%</span>
          </div>

          {viewMode === 'screenshot' ? (
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <img src="/demo.jpg" alt="Forgate" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ) : viewMode === 'app' ? (
            <div style={{ flex: 1, background: '#f7f5f2', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <img src="/logo.png" alt="" style={{ width: 24, height: 24, borderRadius: 7 }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, fontFamily: 'Manrope, sans-serif' }}>Forgate</div>
                    <div style={{ color: '#999', fontSize: 9, fontFamily: 'Manrope, sans-serif' }}>Tasks you shouldn't forget</div>
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '1px', color: '#E8364F' }}>
                  {active.length} ACTIVE
                </span>
              </div>

              {/* Add */}
              <form onSubmit={addTask} style={{ display: 'flex', gap: 6 }}>
                <input
                  type="text"
                  placeholder="Add a task..."
                  value={newTaskText}
                  onChange={e => setNewTaskText(e.target.value)}
                  style={{ flex: 1, background: '#fff', border: '1px solid #e5e5e5', borderRadius: 12, padding: '9px 12px', fontSize: 11, color: '#1a1a1a', fontFamily: 'Manrope, sans-serif', outline: 'none' }}
                />
                <button type="submit" style={{ background: '#1a1a1a', border: 'none', borderRadius: 12, padding: '9px 11px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  <Plus size={14} color="#fff" strokeWidth={2.5} />
                </button>
              </form>

              {/* Active */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {active.map(task => (
                  <div key={task.id} style={{ background: '#fff', border: '1px solid #eee', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <div style={{ width: 14, height: 14, borderRadius: '50%', border: '2px solid #E8364F', flexShrink: 0, marginTop: 3 }} />
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 600, fontFamily: 'Manrope, sans-serif' }}>{task.text}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                          <Clock size={8} color="#aaa" />
                          <span style={{ color: '#aaa', fontSize: 9, fontFamily: 'Manrope, sans-serif' }}>{task.timeBadge}</span>
                        </div>
                      </div>
                    </div>
                    <button className="tactile-switch on" onClick={() => toggleTask(task.id)}>
                      <div className="tactile-switch-thumb" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Done */}
              {done.length > 0 && (
                <div style={{ borderTop: '1px solid #eee', paddingTop: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 600, letterSpacing: '1px', color: '#bbb', textTransform: 'uppercase' }}>Moved Down ({done.length})</span>
                    <button onClick={clearCompleted} style={{ background: 'none', border: 'none', color: '#E8364F', fontSize: 9, cursor: 'pointer', fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>Clear All</button>
                  </div>
                  {done.map(task => (
                    <div key={task.id} style={{ background: '#fafafa', border: '1px solid #f0f0f0', borderRadius: 14, padding: '8px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4, opacity: 0.65 }}>
                      <span style={{ color: '#aaa', fontSize: 11, fontFamily: 'Manrope, sans-serif', textDecoration: 'line-through' }}>{task.text}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <button onClick={() => deleteTask(task.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2 }}>
                          <Trash2 size={11} color="#ccc" />
                        </button>
                        <button className="tactile-switch off" onClick={() => toggleTask(task.id)}>
                          <div className="tactile-switch-thumb" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ marginTop: 'auto', paddingTop: 8, borderTop: '1px solid #eee', textAlign: 'center' }}>
                <span style={{ color: '#ccc', fontSize: 9, fontFamily: 'Manrope, sans-serif' }}>Forgate &middot; Tap switch OFF when done</span>
              </div>
            </div>
          ) : (
            /* Widget */
            <div style={{ flex: 1, background: '#f0ece5', padding: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ textAlign: 'center', paddingTop: 6 }}>
                <div style={{ fontSize: 28, fontWeight: 300, color: '#333', fontFamily: 'Manrope, sans-serif' }}>10:21</div>
                <div style={{ fontSize: 10, color: '#999', fontFamily: 'Manrope, sans-serif' }}>Friday, August 7</div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid #e5e5e5', borderRadius: 20, padding: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid #eee' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <img src="/logo.png" alt="" style={{ width: 16, height: 16, borderRadius: 5 }} />
                    <span style={{ fontSize: 11, fontWeight: 700, fontFamily: 'Manrope, sans-serif' }}>Forgate</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 600, letterSpacing: '1px', color: '#E8364F' }}>{active.length} PENDING</span>
                </div>
                {active.slice(0, 3).map(task => (
                  <div key={task.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f9f7f4', borderRadius: 10, padding: '7px 10px', border: '1px solid #f0f0f0', marginBottom: 5 }}>
                    <span style={{ color: '#444', fontSize: 10, fontFamily: 'Manrope, sans-serif', fontWeight: 500 }}>{task.text}</span>
                    <button onClick={() => toggleTask(task.id)} style={{ width: 24, height: 14, background: '#E8364F', borderRadius: 9999, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: 2 }}>
                      <div style={{ width: 10, height: 10, background: '#fff', borderRadius: '50%' }} />
                    </button>
                  </div>
                ))}
                <div style={{ textAlign: 'center', marginTop: 6, fontSize: 9, color: '#bbb', fontFamily: 'Manrope, sans-serif' }}>Tap switch to complete</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, padding: '4px 8px' }}>
                {[['Phone', '#16a34a'], ['SMS', '#2563eb'], ['Camera', '#7c3aed'], ['Forgate', '#fff']].map(([name, bg]) => (
                  <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 40, height: 40, background: bg === '#fff' ? '#fff' : bg, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', border: bg === '#fff' ? '1px solid #e5e5e5' : 'none', overflow: 'hidden' }}>
                      {name === 'Forgate' ? <img src="/logo.png" alt="" style={{ width: 24, height: 24, borderRadius: 6 }} /> : <span style={{ fontSize: 14, color: '#fff' }}>{name[0]}</span>}
                    </div>
                    <span style={{ fontSize: 8, color: '#666', fontFamily: 'Manrope, sans-serif', fontWeight: 500 }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
