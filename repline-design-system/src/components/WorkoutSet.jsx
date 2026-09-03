import Icon from './Icon.jsx';

export const SET_STATES = ['done', 'next', 'waiting'];

/**
 * Set control. Touch target 44x44, visible circle 34.
 * Reducing the touch target for compactness is forbidden.
 */
export function WorkoutSet({ index, state = 'waiting', onClick }) {
  const cls = { done: 'set on', next: 'set next', waiting: 'set' }[state];
  const label = {
    done: `Подход ${index} выполнен`,
    next: `Подход ${index}, следующий`,
    waiting: `Подход ${index}`
  }[state];
  return (
    <button className={cls} type="button" aria-label={label} onClick={onClick}>
      {state === 'done' ? <Icon name="done" size={18} strokeWidth={2.8} /> : <span>{index}</span>}
    </button>
  );
}

export default WorkoutSet;
