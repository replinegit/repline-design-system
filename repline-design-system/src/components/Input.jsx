import Icon from './Icon.jsx';

/**
 * state: 'default' | 'focus' | 'error' | 'disabled'
 * One outline on focus. A double ring is forbidden.
 * The label always sits above the field; a placeholder never replaces it.
 */
export function Input({ id, label, helper, state = 'default', value, onChange, ...rest }) {
  const cls = ['inp', state === 'focus' ? 'foc' : '', state === 'error' ? 'bad' : '']
    .filter(Boolean)
    .join(' ');
  return (
    <div className="fieldgroup">
      {label && (
        <label className={['fl', state === 'focus' ? 'act' : ''].filter(Boolean).join(' ')} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={cls}
        id={id}
        value={value}
        disabled={state === 'disabled'}
        onChange={onChange}
        {...rest}
      />
      {helper && (
        <p className={['fh', state === 'error' ? 'bad' : ''].filter(Boolean).join(' ')}>
          {state === 'error' && <Icon name="warning" size={14} strokeWidth={2} />}
          {helper}
        </p>
      )}
    </div>
  );
}

export default Input;
