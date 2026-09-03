import ExerciseRow from './ExerciseRow.jsx';

export const DEFAULT_EXERCISES = [
  { name: 'Жим лёжа', tags: ['грудь', 'штанга'], plan: '60 кг · 4 × 8', done: 2, total: 4 },
  { name: 'Приседания со штангой', tags: ['ноги', 'штанга'], plan: '80 кг · 5 × 5', done: 0, total: 5 },
  { name: 'Тяга верхнего блока', tags: ['спина', 'блок'], plan: '45 кг · 3 × 12', done: 0, total: 3 }
];

export function WorkoutTodayCard({
  title = 'Тренировка на сегодня',
  exercises = DEFAULT_EXERCISES,
  onToggleSet
}) {
  const done = exercises.reduce((a, e) => a + e.done, 0);
  const total = exercises.reduce((a, e) => a + e.total, 0);
  return (
    <section className="card wk">
      <div className="wkh">
        <span className="wkt">{title}</span>
        <span className="wkd">
          {done} / {total}
        </span>
      </div>
      {exercises.map((e, i) => (
        <ExerciseRow key={i} {...e} onToggleSet={(s) => onToggleSet?.(i, s)} />
      ))}
    </section>
  );
}

export default WorkoutTodayCard;
