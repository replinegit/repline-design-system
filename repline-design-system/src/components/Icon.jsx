import { iconPaths } from '../tokens/iconPaths.js';

/**
 * Repline icon. 24x24 grid, stroke 1.9, round caps and joins.
 * The glyph never changes between states: only colour and background do.
 */
export function Icon({ name, size = 22, strokeWidth = 1.9, className = '', ...rest }) {
  const path = iconPaths[name];
  if (!path) return null;
  return (
    <svg
      className={['ic', className].filter(Boolean).join(' ')}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: path }}
      {...rest}
    />
  );
}

export default Icon;
