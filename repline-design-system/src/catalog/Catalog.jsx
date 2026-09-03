import { useEffect, useState } from 'react';
import {
  ReplineRoot, Icon, TopNavigation, BottomNavigation, Button, QuickActions,
  Input, Tag, Status, STATUS_STATES, StreakDay, STREAK_STATES, StreakCard,
  PersonalRecordCard, LeagueCard, WorkoutSet, SET_STATES, WorkoutTodayCard,
  ClientCard, SensitiveBlock, ClientScreen, iconNames, leagueIds
} from '../index.js';

function Section({ title, lead, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </section>
  );
}

export default function Catalog() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.body.dataset.pageTheme = theme;
  }, [theme]);

  return (
    <div className="cat-wrap">
      <div className="cat-bar">
        <b>Repline Design System 1.0</b>
        <button type="button" aria-pressed={theme === 'light'} onClick={() => setTheme('light')}>
          Светлая
        </button>
        <button type="button" aria-pressed={theme === 'dark'} onClick={() => setTheme('dark')}>
          Тёмная
        </button>
      </div>

      <h1>Component catalog</h1>
      <p className="lead">
        Каждый компонент экспортируется из <code>src/index.js</code> и обёрнут в
        <code> ReplineRoot</code>, который задаёт тему. Значения токенов не редактируются здесь:
        источник истины — DESIGN_SYSTEM.md.
      </p>

      <Section title="Client screen" lead="Порядок зон зафиксирован и не меняется.">
        <ReplineRoot theme={theme}>
          <ClientScreen theme={theme} />
        </ReplineRoot>
      </Section>

      <Section title="Cards">
        <ReplineRoot theme={theme}>
          <div className="stack">
            <StreakCard />
            <PersonalRecordCard />
            <WorkoutTodayCard />
            <ClientCard />
            <SensitiveBlock />
          </div>
        </ReplineRoot>
      </Section>

      <Section title="League card" lead="Семь лиг. Цвет берётся только из токена лиги.">
        <ReplineRoot theme={theme}>
          <div className="row">
            {leagueIds.map((id) => (
              <div className="stack" key={id} style={{ width: 340 }}>
                <LeagueCard league={id} theme={theme} />
              </div>
            ))}
          </div>
        </ReplineRoot>
      </Section>

      <Section title="Actions">
        <ReplineRoot theme={theme}>
          <div className="stack">
            <QuickActions />
            <div className="row">
              <Button variant="primary">Начать тренировку</Button>
              <Button variant="secondary">Открыть программу</Button>
              <Button variant="tertiary">Оставить без оценки</Button>
            </div>
          </div>
        </ReplineRoot>
      </Section>

      <Section title="Inputs" lead="Один контур в фокусе. Двойная обводка запрещена.">
        <ReplineRoot theme={theme}>
          <div className="stack">
            <div className="card">
              <Input id="c-def" label="Фактический вес, кг" defaultValue="62,5" helper="Плановый вес 60 кг" />
              <div className="fsep" />
              <Input id="c-foc" label="Поле в фокусе" state="focus" defaultValue="8" helper="RPE от 1 до 10" />
              <div className="fsep" />
              <Input
                id="c-err"
                label="Поле с ошибкой"
                state="error"
                defaultValue="14"
                helper="Значение должно быть от 1 до 10"
              />
              <div className="fsep" />
              <Input id="c-dis" label="Недоступное поле" state="disabled" defaultValue="60,0" helper="Плановый вес задаёт тренер" />
            </div>
          </div>
        </ReplineRoot>
      </Section>

      <Section title="Statuses and tags">
        <ReplineRoot theme={theme}>
          <div className="stack">
            <div className="card sts">
              {STATUS_STATES.map((s) => (
                <Status key={s} state={s} />
              ))}
            </div>
            <div className="card" style={{ display: 'flex', gap: 6 }}>
              <Tag>грудь</Tag>
              <Tag>штанга</Tag>
              <Tag>блок</Tag>
            </div>
          </div>
        </ReplineRoot>
      </Section>

      <Section title="Streak states" lead="Шесть состояний, различаются формой и символом.">
        <ReplineRoot theme={theme}>
          <div className="row">
            {STREAK_STATES.map((s) => (
              <div className="tile" key={s}>
                <StreakDay state={s} />
                <small>{s}</small>
              </div>
            ))}
          </div>
        </ReplineRoot>
      </Section>

      <Section title="Set states" lead="Область нажатия 44 × 44, видимый круг 34.">
        <ReplineRoot theme={theme}>
          <div className="row">
            {SET_STATES.map((s, i) => (
              <div className="tile" key={s}>
                <WorkoutSet index={i + 1} state={s} />
                <small>{s}</small>
              </div>
            ))}
          </div>
        </ReplineRoot>
      </Section>

      <Section title="Navigation">
        <ReplineRoot theme={theme}>
          <div className="stack">
            <TopNavigation notificationCount={3} />
            <BottomNavigation active="home" />
          </div>
        </ReplineRoot>
      </Section>

      <Section title="Icon system" lead="Сетка 24, штрих 1.9, скруглённые окончания.">
        <ReplineRoot theme={theme}>
          <div className="row">
            {iconNames.map((n) => (
              <div className="tile" key={n}>
                <Icon name={n} size={24} />
                <small>{n}</small>
              </div>
            ))}
          </div>
        </ReplineRoot>
      </Section>
    </div>
  );
}
