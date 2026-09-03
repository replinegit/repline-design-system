import Icon from './Icon.jsx';
import StreakDay from './StreakDay.jsx';

export const DEFAULT_WEEK = [
  { label: 'Пн', state: 'done' },
  { label: 'Вт', state: 'done' },
  { label: 'Ср', state: 'partial' },
  { label: 'Чт', state: 'free' },
  { label: 'Пт', state: 'done' },
  { label: 'Сб', state: 'done' },
  { label: 'Вс', state: 'today' }
];

/** Primary current metric. Always seven days, always weekday labels, always a note. */
export function StreakCard({
  label = 'Серия тренировок',
  value = 14,
  unit = 'дней',
  delta = '+2 за неделю',
  week = DEFAULT_WEEK,
  note = 'Шесть дней недели закрыты. Сегодня ещё не отмечено.'
}) {
  return (
    <section className="card acc-or">
      <div className="chead">
        <span className="clabel">{label}</span>
        {delta && (
          <span className="delta">
            <Icon name="trend" size={13} strokeWidth={2.4} /> {delta}
          </span>
        )}
      </div>
      <div className="bigrow">
        <span className="num">{value}</span>
        <span className="unit">{unit}</span>
      </div>
      <div className="days">
        {week.map((d, i) => (
          <StreakDay key={i} state={d.state} label={d.label} />
        ))}
      </div>
      {note && <p className="cnote">{note}</p>}
    </section>
  );
}

export default StreakCard;
