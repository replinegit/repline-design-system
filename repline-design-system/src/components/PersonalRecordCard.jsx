import Icon from './Icon.jsx';

/**
 * Full width always. Secondary data stays grouped under the divider
 * and is never glued to the number.
 */
export function PersonalRecordCard({
  label = 'Личный рекорд',
  value = '62,5',
  unit = 'кг',
  exercise = 'Жим лёжа',
  delta = '+2,5 кг за месяц'
}) {
  return (
    <section className="card acc-bl">
      <span className="clabel">{label}</span>
      <div className="bigrow">
        <span className="num">{value}</span>
        <span className="unit">{unit}</span>
      </div>
      <div className="recmeta">
        <span className="recname">{exercise}</span>
        {delta && (
          <span className="recdelta">
            <Icon name="trend" size={12} strokeWidth={2.4} /> {delta}
          </span>
        )}
      </div>
    </section>
  );
}

export default PersonalRecordCard;
