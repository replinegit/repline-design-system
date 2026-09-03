import Icon from './Icon.jsx';

export const NAV_ITEMS = [
  { id: 'home', icon: 'home', label: 'Главная' },
  { id: 'workouts', icon: 'workouts', label: 'Тренировки' },
  { id: 'nutrition', icon: 'nutrition', label: 'Питание' },
  { id: 'chronicle', icon: 'chronicle', label: 'Хроника' },
  { id: 'discovery', icon: 'discovery', label: 'Подбор' },
  { id: 'profile', icon: 'profile', label: 'Профиль' }
];

/**
 * Bottom navigation. Exactly one active item, shown as a filled chip with a label.
 * Inactive items are icon-only with an aria-label. Underline highlighting is forbidden.
 */
export function BottomNavigation({ active = 'home', onChange, items = NAV_ITEMS }) {
  return (
    <nav className="nav">
      {items.map((it) =>
        it.id === active ? (
          <button key={it.id} className="nb on" type="button" onClick={() => onChange?.(it.id)}>
            <Icon name={it.icon} size={21} strokeWidth={1.9} />
            <span>{it.label}</span>
          </button>
        ) : (
          <button
            key={it.id}
            className="nb"
            type="button"
            aria-label={it.label}
            onClick={() => onChange?.(it.id)}
          >
            <Icon name={it.icon} size={22} strokeWidth={1.9} />
          </button>
        )
      )}
    </nav>
  );
}

export default BottomNavigation;
