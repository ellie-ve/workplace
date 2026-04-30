# Data Display — Empty State

> **Design by ITUI**
> 표시할 데이터가 없을 때 현재 상태를 안내하는 화면 구성 요소입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Type** | NoContents, NoSearchResults |

- **NoContents** — 콘텐츠 없음 (데이터 자체가 없는 상태)
- **NoSearchResults** — 검색 결과 없음 (검색 후 결과가 없는 상태)

---

# Data Display — List

> **Design by ITUI**
> 텍스트, 아이콘, 아바타 등 다양한 정보를 항목 단위로 구성하는 목록 요소입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Type** | LabelIcon, Avatar |
| **State** | Default, Hover, Pressed, Active |
| **Group** | List, List Group |

## Size Tokens

### LabelIcon

| Property | Token |
|----------|-------|
| Height | `{ height.list.sm }` |
| Padding | `{ spacing.xs }` |
| Gap | `{ spacing.xs }` |
| Radius | `{ radius.2xs }` |
| Font Size | `{ font.size.md }` |
| Icon | `{ height.icon.lg }` |
| Width | `{ layout.width.hug }` |
| Auto Layout | `{ layout.auto.horizontal.center }` |

### Avatar

| Property | Token |
|----------|-------|
| Height | `{ height.list.md }` |
| Padding | `{ spacing.xs }` |
| Gap | `{ spacing.xs }` |
| Radius | `{ radius.2xs }` |
| Font Size | `{ font.size.md }` |
| Icon | `{ height.icon.lg }` |
| Avatar | `{ height.profile.md }` |
| Width | `{ layout.width.hug }` |
| Auto Layout | `{ layout.auto.horizontal.center }` |

---

# Data Display — Profile

> **Design by ITUI**
> 사용자 정보를 대표하는 이미지 또는 이니셜을 표시하는 요소입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Type** | Profile (이미지), Initial (이니셜 텍스트) |
| **Size** | 3XL, 2XL, XL, Lg, Md, Sm |
| **Group** | Profile, Avatar Group, Profile Group |

## Size Tokens

| Size | Height Token | Font Size Token |
|------|-------------|-----------------|
| 3XL | `{ height.avt.3xl }` | `{ font.size.2xl }` |
| 2XL | `{ height.avt.2xl }` | `{ font.size.xl }` |
| XL | `{ height.avt.xl }` | `{ font.size.lg }` |
| Lg | `{ height.avt.lg }` | `{ font.size.sm }` |
| Md | `{ height.avt.md }` | `{ font.size.xs }` |
| Sm | `{ height.avt.sm }` | `{ font.size.3xs }` |

### Group Overflow
- 최대 표시 초과 시 `+99` 형태로 표기

---

# Data Display — Rating

> **Design by ITUI**
> 항목에 대한 평가 수준을 직관적으로 표현하는 요소입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Fill State** | Filled, Half, Empty |
| **Group** | Rate Base (단일 별), Rate Group (별 그룹) |

## Size Tokens

| Property | Token |
|----------|-------|
| Height | `{ height.icon.lg }` |
| Gap | `{ spacing.xs }` |

---

# Data Display — Table

> **Design by ITUI**
> 데이터를 행과 열 구조로 정렬하여 목록 형태로 보여주는 구성 요소입니다.

---

## Variants

### Table Type
| Type | Description |
|------|-------------|
| Basic | 기본 테이블 |
| Checkbox | 행 선택 가능 |
| TextOnly | 텍스트만 표시 |
| TextIcon | 텍스트 + 아이콘 |
| TextLabel | 텍스트 + 레이블(Tag) |
| IconOnly | 아이콘만 표시 |
| Action | 액션 버튼 포함 |
| Avatar | 아바타 표시 |
| AvatarText | 아바타 + 텍스트 |
| FilterAndSorter | 필터 및 정렬 기능 포함 |

### Table Header States
`Default`, `Checkbox`, `TextOnly`, `Descending`, `Ascending`, `Selected`, `Disabled`

### Table Cell States
`Default`, `Selected`, `Disabled`

## Size Tokens

| Property | Token |
|----------|-------|
| Height | `{ height.table }` |
| Padding | `{ spacing.2xl }` |
| Gap | `{ spacing.md }` |
| Radius | `{ radius.sm }` |
| Font Size | `{ font.size.xs }` |
| Icon | `{ height.icon.lg }` |
| Avatar | `{ height.profile.md }` |
