# Repline Design System 1.0 — React component catalog

Каталог React-компонентов, собранный из утверждённого пакета
`REPLINE_DESIGN_SYSTEM_PACKAGE_v1.0`. Предназначен для импорта дизайн-системы
в **UX Pilot через GitHub**.

Дизайн, токены, Light/Dark, компоненты, иконки и лиги не изменялись.
Источник истины по значениям — `DESIGN_SYSTEM.md` в корне репозитория.

---

## Быстрый старт

```bash
npm install
npm run dev      # каталог на http://localhost:5173
npm run build    # production-сборка в dist/
```

Проверено: `npm install` и `npm run build` проходят без ошибок на Node 22, Vite 5, React 18.

---

## Структура

```
repline-design-system/
├── package.json
├── vite.config.js
├── index.html                    точка входа каталога
├── DESIGN_SYSTEM.md              спецификация, source of truth
├── COMPONENT_SPEC.md             спецификация сборки в Figma
└── src/
    ├── index.js                  публичные экспорты
    ├── tokens/
    │   ├── tokens.json           все токены, включая семь лиг
    │   ├── iconPaths.js          16 глифов, сетка 24, штрих 1.9
    │   └── leagues.js            палитры и эмблемы семи лиг
    ├── assets/
    │   ├── icons/                16 SVG
    │   └── leagues/              7 PNG эмблем
    ├── styles/repline.css        стили компонентов, Light и Dark
    ├── components/               20 компонентов
    └── catalog/                  демонстрационный каталог
```

---

## Использование

Любой компонент должен находиться внутри `ReplineRoot`: он задаёт тему.

```jsx
import { ReplineRoot, LeagueCard, Button, Status } from 'repline-design-system';

export default function Example() {
  return (
    <ReplineRoot theme="light">
      <LeagueCard league="olive" theme="light" xp={221} total={1000} />
      <Button variant="primary">Начать тренировку</Button>
      <Status state="inProgress" />
    </ReplineRoot>
  );
}
```

Стили подключаются автоматически при импорте из `src/index.js`.
Отдельно доступны как `repline-design-system/styles.css`.

---

## Компоненты

| Компонент | Назначение | Свойства |
|---|---|---|
| `ReplineRoot` | Корень темы | `theme: 'light' \| 'dark'` |
| `Icon` | Иконка системы | `name`, `size`, `strokeWidth` |
| `TopNavigation` | Верхняя панель | `logo`, `notificationCount`, `onSettings`, `onNotifications` |
| `BottomNavigation` | Нижняя навигация | `active`, `onChange`, `items` |
| `Button` | Кнопка | `variant: 'primary' \| 'secondary' \| 'tertiary'`, `icon` |
| `QuickActions` | Зона быстрых действий | `primaryLabel`, `primarySubtitle`, обработчики |
| `Input` | Поле ввода | `state: 'default' \| 'focus' \| 'error' \| 'disabled'`, `label`, `helper` |
| `Tag` | Метка упражнения | — |
| `Status` | Статус | `state: 'done' \| 'inProgress' \| 'planned' \| 'missed' \| 'error'` |
| `StreakDay` | День серии | `state: 'done' \| 'partial' \| 'free' \| 'missed' \| 'today' \| 'future'` |
| `StreakCard` | Карточка серии | `value`, `unit`, `delta`, `week`, `note` |
| `PersonalRecordCard` | Личный рекорд | `value`, `unit`, `exercise`, `delta` |
| `ProgressBar` | Полоса прогресса | `percent`, `showPercent` |
| `LeagueCard` | Карточка лиги | `league` (7 значений), `theme`, `xp`, `total` |
| `WorkoutSet` | Отметка подхода | `index`, `state: 'done' \| 'next' \| 'waiting'` |
| `ExerciseRow` | Строка упражнения | `name`, `tags`, `plan`, `done`, `total` |
| `WorkoutTodayCard` | Тренировка на сегодня | `title`, `exercises` |
| `ClientCard` | Карточка клиента | `initials`, `name`, `goal`, `activity`, `attention` |
| `SensitiveBlock` | Чувствительный блок | `kicker`, `title`, `text`, метки действий |
| `ClientScreen` | Клиентский экран целиком | `theme`, `league` |

Семь лиг: `thorn`, `marble`, `olive`, `porphyry`, `heroic`, `laurel`, `star`.

---

## Импорт в UX Pilot через GitHub

1. Создайте репозиторий и загрузите в его **корень** содержимое этого архива
   (`package.json` должен лежать в корне, не во вложенной папке).
2. В UX Pilot откройте раздел **Design System** и подключите GitHub-репозиторий.
3. Укажите каталог компонентов: `src/components`.
4. Сохраните набор как custom model с именем **`Repline DS 1.0`**.
5. При новой генерации выберите эту модель вместо Standard Model, screen type — Mobile app.

Компонентами импортируются файлы из `src/components`. Содержимое `src/catalog`
импортировать не нужно: это витрина, а не часть системы.

---

## Правила, обязательные при доработке

- Утверждённый компонент не заменяется решением из generic UI-kit.
- Light-градиент никогда не уходит в чёрный, графитовый или почти чёрный.
- Цвет лиги берётся только из `src/tokens/leagues.js`.
- Состояния полей и статусов не переизобретаются.
- Эмблема лиги выводится через `object-fit: contain`, без `cover` и кадрирования.
- Область нажатия отметки подхода не опускается ниже 44 × 44.
- Состояния дней серии не различаются только прозрачностью или только цветом.
- Композиция клиентского экрана и формат быстрых действий не меняются.

Полный список — раздел 29 файла `DESIGN_SYSTEM.md`.

---

## Шрифты

Tektur, Golos Text и JetBrains Mono подключаются из Google Fonts в `index.html`.
В приложении-потребителе подключите их самостоятельно.
