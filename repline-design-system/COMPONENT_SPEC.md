# Figma Component Spec v1.0

Точная спецификация сборки файла **Repline Design System v1.0** в Figma.

Этот пакет **не содержит** файла `.fig` и не содержит опубликованной Figma Library:
такой файл невозможно создать вне Figma, и фиктивный `.fig` сюда не положен.
Компоненты собираются в Figma один раз по этой спецификации — это обязательный шаг
перед импортом в UX Pilot.

## Подготовка файла

1. Новый Figma-файл, имя: `Repline Design System v1.0`.
2. Страницы: `01 Tokens`, `02 Icons`, `03 Components`, `04 Cards`, `05 Reference`.
3. Шрифты: Tektur, Golos Text, JetBrains Mono (Google Fonts).
4. Variables: коллекция `Repline`, режимы `Light` и `Dark`, значения — из
   `02_Repline_Tokens_v1.0.json` (`themes`, `color`, `league`).
5. Text styles — из раздела 7 файла `01_Repline_Design_System_v1.0.md`.
6. Effect styles: `shadow-1`, `shadow-2`, `shadow-3` (раздел 12).

## Общие правила

- Все компоненты — Auto Layout.
- Цвета задаются **только** переменными коллекции `Repline`, не хардкодом.
- Минимальная область нажатия интерактивного элемента — 44 × 44.
- Варианты задаются свойством `State`, а не отдельными компонентами.
- Не создавать декоративные варианты и дубли одной кнопки.

---

## Component inventory

### Navigation/Top
- **TYPE:** Component · **SIZE:** 360 × 58 (Fill × Fixed)
- **AUTO LAYOUT:** horizontal, align center · **PADDING:** 14 / 14 / 10 / 14 · **GAP:** 6
- **RADIUS:** 0 · нижняя граница 1 px `hairline`
- **COLORS:** fill `surface`, icon `textSecondary`, badge fill `action.bright`, badge text `action.ink`
- **TEXT STYLE:** Logo — Tektur 700 / 15 / tracking 0.14em
- **ICON:** `settings.svg`, `notifications.svg` @ 21
- **STATES:** default · **LIGHT/DARK:** через режимы переменных · **MIN TOUCH:** 44 × 44

### Navigation/Bottom
- **TYPE:** Component · **SIZE:** 360 × 66
- **AUTO LAYOUT:** horizontal, align center · **PADDING:** 9 / 10 / 13 / 10 · **GAP:** 2
- **RADIUS:** активная капсула 10 · верхняя граница 1 px `line`
- **COLORS:** fill `surface`, inactive icon `textSecondary`, active fill `action.bright`, active text `action.ink`
- **TEXT STYLE:** Golos Text 700 / 12
- **ICON:** `home`, `workouts`, `nutrition`, `chronicle`, `discovery`, `profile` @ 22
- **PROPERTIES:** `Active = Home | Workouts | Nutrition | Chronicle | Discovery | Profile`
- **MIN TOUCH:** 44 × 44 на пункт

### Button/Primary
- **TYPE:** Component · **SIZE:** Hug × 44 (в зоне действий — 1.42fr × 132)
- **AUTO LAYOUT:** vertical в зоне действий, horizontal в остальных местах
- **PADDING:** 15 / 15 / 16 / 15 · **GAP:** 0 · **RADIUS:** 14
- **COLORS:** fill `gradient.primaryCta`, text `action.ink`, effect `shadow-2`
- **TEXT STYLE:** Golos Text 700 / 16; подпись Golos Text 600 / 11.5, opacity 72 %
- **ICON:** `workouts` @ 22 в подложке 42 × 42, radius 10, fill `rgba(43,27,6,.14)`
- **STATES:** default / hover / pressed / focus / disabled

### Button/Secondary
- **TYPE:** Component · **SIZE:** Fill × 61 · **PADDING:** 0 / 13 · **GAP:** 11 · **RADIUS:** 14
- **COLORS:** fill `surface`, stroke `line` 1 px, text `text`, effect `shadow-1`
- **TEXT STYLE:** Golos Text 600 / 14.5
- **ICON:** подложка 34 × 34, radius 10; Nutrition — `league.olive.light` / `league.olive.dark`; Chronicle — `result.softLight` / `result.softDark`

### Button/Tertiary
- **TYPE:** Component · **SIZE:** Hug × 44 · **PADDING:** 0 / 16 · **RADIUS:** 14
- **COLORS:** fill transparent, text `textSecondary` · **TEXT STYLE:** Golos Text 600 / 14

### Input/Default · Input/Focus · Input/Error
- **TYPE:** один компонент `Input` со свойством `State = Default | Focus | Error | Disabled`
- **SIZE:** Fill × 50 · **PADDING:** 0 / 14 · **RADIUS:** 12 · **STROKE:** 1.5 px
- **COLORS:** Default fill `surface2` / stroke transparent · Focus fill `surface` / stroke `action.bright`
  · Error fill `danger.softLight` / stroke `danger.textLight` · Disabled fill `surface2`, opacity 55 %
- **TEXT STYLE:** значение JetBrains Mono 700 / 16; label Golos Text 600 / 12.5 над полем;
  helper Golos Text 400 / 12 под полем
- **ICON:** в helper ошибки — `warning` @ 14

### Tag
- **TYPE:** Component · **SIZE:** Hug × 26 · **PADDING:** 4 / 9 · **RADIUS:** 8
- **COLORS:** fill `surface2`, stroke `line` 1 px, text `textSecondary`
- **TEXT STYLE:** Golos Text 600 / 12 · **STATES:** default (не интерактивен)

### Status/Done · Status/InProgress · Status/Planned · Status/Missed · Status/Error
- **TYPE:** один компонент `Status` со свойством `State`
- **SIZE:** Hug × 34 · **PADDING:** 6 / 12 / 6 / 6 · **GAP:** 7 · **RADIUS:** 10
- **ICON:** круг 22 × 22, иконка @ 12: Done `done`, InProgress `in-progress`, Planned `chevron`,
  Missed `skip`, Error `warning`
- **COLORS:** см. раздел 18 файла 01
- **TEXT STYLE:** Golos Text 600 / 12.5, InProgress — 700

### Streak/Day/Done · Partial · Missed · Free · Today · Future
- **TYPE:** один компонент `Streak/Day` со свойством `State`
- **SIZE:** 36 × 36, круг · **AUTO LAYOUT:** center
- **COLORS:** контур и символ `action.ink` на карточке серии, `action.bright` вне её
- **STATES:** Done заливка + `done` @ 17 · Partial контур 1.6 + внутренний круг 19 с `done` @ 11
  · Free контур 1.8 + `done` @ 16, без заливки · Missed контур 1.6 + `missed-day` @ 15
  · Today контур 2.6 + `add` @ 15 · Future контур 1.2, пусто
- **ACCESSIBILITY:** имя слоя = название состояния

### Workout/Set/Done · Next · Waiting
- **TYPE:** один компонент `Workout/Set` со свойством `State`
- **SIZE:** 44 × 44 (область нажатия), видимый круг 34 × 34
- **COLORS:** Done fill `action.bright`, symbol `action.ink` · Next fill `action.softLight`,
  ring 2.5 `action.bright`, text `action.textLight` · Waiting fill `surface2`, ring 1.5 `line`
- **TEXT STYLE:** JetBrains Mono 700 / 13 · **MIN TOUCH:** 44 × 44

### Workout/Exercise
- **TYPE:** Component · **SIZE:** Fill × Hug · **AUTO LAYOUT:** vertical
- **PADDING:** 14 / 16 / 15 / 16 · **GAP:** 9
- **СТРУКТУРА:** строка 1 — название + счётчик; строка 2 — теги + значения (значения прижаты вправо);
  строка 3 — ряд `Workout/Set`, gap 4
- **TEXT STYLE:** название Golos Text 700 / 17; счётчик и значения JetBrains Mono 700 / 12 и 13.5
- **DO NOT:** строка «прошлый раз» отсутствует

### Card/WorkoutToday
- **TYPE:** Component · **SIZE:** Fill × Hug · **RADIUS:** 20 · **PADDING:** 0
- **COLORS:** fill `surface`, stroke `hairline` 1 px, effect `shadow-1`
- **СТРУКТУРА:** header 45 (подпись + счётчик) + инстансы `Workout/Exercise`, разделитель 1 px `hairline`

### Card/PersonalRecord
- **TYPE:** Component · **SIZE:** Fill × Hug · **RADIUS:** 20 · **PADDING:** 16 · **GAP:** 0
- **COLORS:** fill `gradient.personalRecord`, text `result.ink`, effect `shadow-2`
- **TEXT STYLE:** значение Tektur 700 / 46; название Golos Text 700 / 15; дельта JetBrains Mono 700 / 12
- **СТРУКТУРА:** подпись → значение + единица → разделитель 1 px → название + дельта

### Card/League
- **TYPE:** Component · **SIZE:** Fill × Hug · **RADIUS:** 20 · **PADDING:** 16 · **GAP:** 0
- **PROPERTIES:** `League = Thorn | Marble | Olive | Porphyry | Heroic | Laurel | Star`
- **COLORS:** fill `league.{slug}.gradientLight` / `gradientDark`, text `league.{slug}.textLight` /
  `textDark`, progress `league.{slug}.progressLight` / `progressDark`
- **ICON/IMAGE:** контейнер 74 × 74, Fill = Image, **Scale mode = Fit**, изображение из
  `assets/leagues/{slug}.png`. Clip content выключен
- **TEXT STYLE:** название Tektur 700 / 19; XP Tektur 700 / 17; процент JetBrains Mono 700 / 12
- **СТРУКТУРА:** подпись → эмблема + (название, XP, полоса 8/radius 5 + процент) → остаток

### Card/Client
- **TYPE:** Component · **SIZE:** Fill × Hug · **RADIUS:** 20 · **PADDING:** 16 · **GAP:** 16
- **COLORS:** fill `surface`, stroke `hairline`, avatar fill `surface2`, counter fill `action.bright`
- **SIZE (детали):** аватар 72 × 72 radius 20; счётчик 34 высотой radius 10; статус-круг 22
- **TEXT STYLE:** имя Golos Text 700 / 19; цель 13.5; состояние Golos Text 600 / 13.5;
  инициалы Tektur 700 / 21

### Card/Sensitive
- **TYPE:** Component · **SIZE:** Fill × Hug · **RADIUS:** 20 · **PADDING:** 14 / 16
- **COLORS:** fill `surface`, stroke `hairline`, надзаголовок `danger.textLight`
- **TEXT STYLE:** надзаголовок Golos Text 700 / 11 uppercase; заголовок Golos Text 700 / 17;
  текст Golos Text 400 / 13
- **СТРУКТУРА:** надзаголовок с `warning` @ 13 → заголовок → текст → действия справа
  (`Button/Tertiary` + `Button/Primary`)
- **DO NOT:** без левой цветной полосы

### Action/Nutrition · Action/Chronicle
- Инстансы `Button/Secondary` с зафиксированной иконкой и подписью.
- Nutrition: `nutrition.svg`, подложка `league.olive.light`. Chronicle: `chronicle.svg`,
  подложка `result.softLight`.

---

## Что делать компонентом, а что оставить ассетом

**COMPONENTS (обязательно):** все позиции инвентаря выше.

**ASSETS (не компоненты):** SVG-иконки как слои внутри компонентов; PNG-эмблемы лиг
как image fill внутри `Card/League`; отдельные текстовые и цветовые стили.

**НЕ импортировать как один объект:** целый экран, страницу `05 Reference`,
большую группу компонентов, декоративные группы.
