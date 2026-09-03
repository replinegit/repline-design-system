import Icon from './Icon.jsx';
import Button from './Button.jsx';

/**
 * Compact failure message without drama. No left colour bar, never a hero card.
 * Actions use the global button system: tertiary on the left, primary on the right.
 */
export function SensitiveBlock({
  kicker = 'Оценка не выполнена',
  title = 'ИИ не оценил фотографию',
  text = 'ИИ не удалось оценить ваш приём пищи. Загрузите другую фотографию. Проверьте резкость, свет и угол съёмки.',
  primaryLabel = 'Загрузить другое фото',
  tertiaryLabel = 'Оставить без оценки',
  onPrimary,
  onTertiary
}) {
  return (
    <section className="card sens">
      <span className="skick">
        <Icon name="warning" size={13} strokeWidth={2.1} /> {kicker}
      </span>
      <div className="stt">{title}</div>
      <p className="std">{text}</p>
      <div className="sacts">
        <Button variant="tertiary" onClick={onTertiary}>
          {tertiaryLabel}
        </Button>
        <Button variant="primary" className="sm" onClick={onPrimary}>
          {primaryLabel}
        </Button>
      </div>
    </section>
  );
}

export default SensitiveBlock;
