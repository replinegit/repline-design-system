import '../styles/repline.css';

/**
 * Theme root. Every Repline component must live inside it.
 * theme: 'light' | 'dark' — two adaptations of one system.
 */
export function ReplineRoot({ theme = 'light', className = '', style, children }) {
  return (
    <div className={['rp', className].filter(Boolean).join(' ')} data-theme={theme} style={style}>
      {children}
    </div>
  );
}

export default ReplineRoot;
