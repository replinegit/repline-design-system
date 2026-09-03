import Tag from './Tag.jsx';
import WorkoutSet from './WorkoutSet.jsx';

/**
 * Order is fixed: title, tags, values, sets.
 * The "last time" row is absent from the main working view.
 */
export function ExerciseRow({ name, tags = [], plan, done = 0, total = 0, onToggleSet }) {
  return (
    <div className="ex">
      <div className="extop">
        <div className="exn">{name}</div>
        <span className="exc">
          <b>{done}</b>&nbsp;/&nbsp;{total}
        </span>
      </div>
      <div className="exm">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
        {plan && <span className="exp">{plan}</span>}
      </div>
      <div className="sets">
        {Array.from({ length: total }, (_, i) => (
          <WorkoutSet
            key={i}
            index={i + 1}
            state={i < done ? 'done' : i === done ? 'next' : 'waiting'}
            onClick={() => onToggleSet?.(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default ExerciseRow;
