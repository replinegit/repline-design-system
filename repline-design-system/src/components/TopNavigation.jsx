import Icon from './Icon.jsx';

/** Top bar: logotype and exactly two system actions. Never add a third. */
export function TopNavigation({
  logo = 'REPLINE',
  notificationCount = 0,
  onSettings,
  onNotifications
}) {
  return (
    <div className="tb">
      <span className="lg">{logo}</span>
      <button className="tbb" type="button" aria-label="Настройки" onClick={onSettings}>
        <Icon name="settings" size={21} />
      </button>
      <button className="tbb" type="button" aria-label="Уведомления" onClick={onNotifications}>
        <Icon name="notifications" size={21} />
        {notificationCount > 0 && (
          <i className="tbc">{notificationCount > 99 ? '99+' : notificationCount}</i>
        )}
      </button>
    </div>
  );
}

export default TopNavigation;
