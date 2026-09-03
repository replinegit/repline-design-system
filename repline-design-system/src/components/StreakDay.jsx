import Icon from './Icon.jsx';

export const STREAK_STATES = ['done', 'partial', 'free', 'missed', 'today', 'future'];

const LABEL = {
  done: 'Выполнено',
  partial: 'Частично',
  free: 'Свободный день',
  missed: 'Пропущено',
  today: 'Сегодня',
  future: 'Будущий'
};

const CLS = { missed: 'miss', future: 'fut', partial: 'part' };

/**
 * Six states, distinguished by shape and symbol, never by opacity alone.
 * free = ring plus check, no fill: logically close to done but with less weight.
 */
export function StreakDay({ state = 'future', label }) {
  const cls = CLS[state] ?? state;
  let inner = null;
  if (state === 'done') inner = <Icon name="done" size={17} strokeWidth={2.6} />;
  else if (state === 'partial') inner = <i><Icon name="done" size={11} strokeWidth={3.4} /></i>;
  else if (state === 'free') inner = <Icon name="done" size={16} strokeWidth={2.5} />;
  else if (state === 'missed') inner = <Icon name="missedDay" size={15} strokeWidth={2.4} />;
  else if (state === 'today') inner = <Icon name="add" size={15} strokeWidth={2.4} />;

  return (
    <div className={['dcell', state === 'today' ? 'cur' : ''].filter(Boolean).join(' ')}>
      <span className={`dc ${cls}`} role="img" aria-label={LABEL[state]}>
        {inner}
      </span>
      {label && <span className="dl">{label}</span>}
    </div>
  );
}

export default StreakDay;
