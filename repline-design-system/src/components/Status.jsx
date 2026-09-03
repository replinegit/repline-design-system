import Icon from './Icon.jsx';

const MAP = {
  done: { cls: 'done', icon: 'done', label: 'Выполнена', stroke: 3 },
  inProgress: { cls: 'prog', icon: 'inProgress', label: 'В процессе', stroke: 2.2 },
  planned: { cls: 'plan', icon: 'chevron', label: 'Назначена', stroke: 2.6 },
  missed: { cls: 'miss', icon: 'skip', label: 'Пропущена', stroke: 2.8 },
  error: { cls: 'err', icon: 'warning', label: 'Ошибка', stroke: 2.2 }
};

/**
 * state: 'done' | 'inProgress' | 'planned' | 'missed' | 'error'
 * Every status carries an icon without exception.
 */
export function Status({ state = 'done', label }) {
  const s = MAP[state] ?? MAP.done;
  return (
    <span className={`st ${s.cls}`}>
      <i className="sti">
        <Icon name={s.icon} size={12} strokeWidth={s.stroke} />
      </i>
      {label ?? s.label}
    </span>
  );
}

export const STATUS_STATES = Object.keys(MAP);
export default Status;
