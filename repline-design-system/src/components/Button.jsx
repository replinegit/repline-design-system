import Icon from './Icon.jsx';

/**
 * variant: 'primary' | 'secondary' | 'tertiary'
 * Primary always carries the CTA gradient; a flat fill is forbidden.
 * Minimum touch target is 44x44.
 */
export function Button({
  variant = 'primary',
  children,
  icon,
  className = '',
  type = 'button',
  ...rest
}) {
  const cls = { primary: 'btn pri', secondary: 'btn sec', tertiary: 'btn ter' }[variant];
  return (
    <button className={[cls, className].filter(Boolean).join(' ')} type={type} {...rest}>
      {icon && <Icon name={icon} size={18} strokeWidth={2} />}
      {children}
    </button>
  );
}

export default Button;
