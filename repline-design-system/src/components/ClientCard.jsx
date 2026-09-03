import Icon from './Icon.jsx';

/**
 * Trainer-side client card.
 * Avatar height matches the text group height; a smaller avatar is forbidden.
 */
export function ClientCard({
  initials = 'МК',
  name = 'Марина К.',
  goal = 'Цель: снижение веса',
  activity = 'Тренировка выполнена, 2 часа назад',
  attention = 2
}) {
  return (
    <section className="card cl">
      <div className="clav">{initials}</div>
      <div className="clb">
        <div className="cln">{name}</div>
        <div className="clg">{goal}</div>
        <div className="cla">
          <i className="clst">
            <Icon name="done" size={13} strokeWidth={3} />
          </i>
          {activity}
        </div>
      </div>
      {attention > 0 && <span className="clcnt">{attention}</span>}
    </section>
  );
}

export default ClientCard;
