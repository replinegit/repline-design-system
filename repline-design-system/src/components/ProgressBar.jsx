/** Linear progress. Always duplicated by a numeric percent. Radius 5, never a capsule. */
export function ProgressBar({ percent = 0, showPercent = true }) {
  const p = Math.max(0, Math.min(100, percent));
  return (
    <div className="lgprog">
      <span className="bar" role="progressbar" aria-valuenow={p} aria-valuemin={0} aria-valuemax={100}>
        <i style={{ width: `${p}%` }} />
      </span>
      {showPercent && <span className="lgpct">{p} %</span>}
    </div>
  );
}

export default ProgressBar;
