# Atomic — Button

> **Design by ITUI**
> 사용자의 동작을 실행하도록 유도하는 인터랙션 요소입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Style** | Primary, Secondary, Alternative, Link |
| **Size** | Lg, Md, Sm |
| **Type** | Label, LabelIcon, IconOnly |
| **State** | Default, Hover, Pressed, Disabled |

### Style 상세

- **Primary** — 주요 액션, 브랜드 컬러 적용
- **Secondary** — 보조 액션
- **Alternative** — 대안적 스타일 (아웃라인 계열)
- **Link** — 텍스트 링크형 (`Label`, `LabelIcon`, `Underline`)

---

## Size Tokens

### Large (Lg)

| Property | Token |
|----------|-------|
| Height | `{ height.button.lg }` |
| Padding | `{ spacing.2xl }` |
| Gap | `{ spacing.sm }` |
| Radius | `{ radius.sm }` |
| Icon | `{ height.icon.lg }` |
| Font Size | `{ font.size.lg }` |
| Stroke | `{ stroke.xs }` |
| Width | `{ layout.width.hug }` |
| Auto Layout | `{ layout.auto.horizontal.center }` |

### Medium (Md)

| Property | Token |
|----------|-------|
| Height | `{ height.button.md }` |
| Padding | `{ spacing.xl }` |
| Gap | `{ spacing.sm }` |
| Radius | `{ radius.sm }` |
| Icon | `{ height.icon.lg }` |
| Font Size | `{ font.size.md }` |
| Stroke | `{ stroke.xs }` |
| Width | `{ layout.width.hug }` |
| Auto Layout | `{ layout.auto.horizontal.center }` |

### Small (Sm)

| Property | Token |
|----------|-------|
| Height | `{ height.button.sm }` |
| Padding | `{ spacing.lg }` |
| Gap | `{ spacing.xs }` |
| Radius | `{ radius.sm }` |
| Icon | `{ height.icon.md }` |
| Font Size | `{ font.size.md }` |
| Stroke | `{ stroke.xs }` |
| Width | `{ layout.width.hug }` |
| Auto Layout | `{ layout.auto.horizontal.center }` |

---

## State Matrix

| Style | Size | Type | States |
|-------|------|------|--------|
| Primary | Lg / Md / Sm | Label, LabelIcon, IconOnly | Default, Hover, Pressed, Disabled |
| Secondary | Lg / Md / Sm | Label, LabelIcon, IconOnly | Default, Hover, Pressed, Disabled |
| Alternative | Lg / Md / Sm | Label, LabelIcon, IconOnly | Default, Hover, Pressed, Disabled |
| Link | — | Label, LabelIcon, Underline | Default, Hover, Pressed, Disabled |
