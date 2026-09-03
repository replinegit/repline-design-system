import { leagues } from '../tokens/leagues.js';
import ProgressBar from './ProgressBar.jsx';

/**
 * League card. All colours come from the league token, never from arbitrary values.
 * The emblem is always shown in full: object-fit contain, centred, ~6% safe area
 * baked into the asset, overflow visible. cover and cropping are forbidden.
 */
export function LeagueCard({
  league = 'olive',
  theme = 'light',
  label = 'Текущая лига',
  xp = 221,
  total = 1000
}) {
  const lg = leagues[league] ?? leagues.olive;
  const dark = theme === 'dark';
  const percent = Math.round((xp / total) * 100);

  const style = {
    background: dark ? lg.gradientDark : lg.gradientLight,
    color: dark ? lg.textDark : lg.textLight,
    '--lgBar': dark ? lg.progressDark : lg.progressLight,
    '--lgTrack': dark ? lg.trackDark : lg.trackLight
  };

  return (
    <section className="card acc-lg" style={style}>
      <span className="clabel">{label}</span>
      <div className="lgrow">
        <span className="embwrap">
          <img className="emb" src={lg.emblem} alt={`Знак лиги ${lg.nameRu}`} width="74" height="74" />
        </span>
        <div className="lgb">
          <div className="lgn">{lg.nameRu} лига</div>
          <div className="lgxp">{xp} XP</div>
          <ProgressBar percent={percent} />
        </div>
      </div>
      <p className="lgfoot">До следующей лиги {total - xp} XP</p>
    </section>
  );
}

export default LeagueCard;
