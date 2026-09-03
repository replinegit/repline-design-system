import Icon from './Icon.jsx';

/**
 * Fixed action zone: one dominant primary on the left, two compact secondaries on the right.
 * Three equal buttons are forbidden. Always sits directly under the League card.
 */
export function QuickActions({
  primaryLabel = 'Начать тренировку',
  primarySubtitle = 'День А, ноги и спина',
  onPrimary,
  onNutrition,
  onChronicle
}) {
  return (
    <div className="acts">
      <button className="apri" type="button" onClick={onPrimary}>
        <span className="api"><Icon name="workouts" size={22} strokeWidth={2} /></span>
        <span className="apt">{primaryLabel}</span>
        {primarySubtitle && <span className="aps">{primarySubtitle}</span>}
      </button>
      <div className="acol">
        <button className="asec" type="button" onClick={onNutrition}>
          <span className="asi m"><Icon name="nutrition" size={20} /></span>
          Питание
        </button>
        <button className="asec" type="button" onClick={onChronicle}>
          <span className="asi f"><Icon name="chronicle" size={20} /></span>
          Хроника
        </button>
      </div>
    </div>
  );
}

export default QuickActions;
