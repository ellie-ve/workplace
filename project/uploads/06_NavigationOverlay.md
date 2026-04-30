# Navigation & Overlay — Bottom Sheet

> **Design by ITUI**
> 화면 하단에서 위로 올라오는 형태의 사용자 인터페이스 패널입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Height (Max)** | Regular (30%), Tall (50%), Full (90%) |
| **Title** | On / Off |
| **CTA** | None / SingleButton / DoubleButton |

### Height Spec
- **Regular** → max-height 30%
- **Tall** → max-height 50%
- **Full** → max-height 90%
- 높이는 콘텐츠에 따라 유동적, max-height만 고정

### CTA Buttons
- SingleButton: 저장
- DoubleButton: 확인 / 취소

---

# Navigation & Overlay — Breadcrumb

> **Design by ITUI**
> 현재 위치의 계층 구조를 보여주는 네비게이션입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Separator** | Slash (`/`), Arrow (`>`) |
| **State** | Default, Hover, Selected |
| **Icon** | Yes, No |

## Size Tokens

| Property | Token |
|----------|-------|
| Gap | `{ spacing.sm }` |
| Font Size | `{ font.size.md }` |
| Icon | `{ height.icon.md }` |
| Width | `{ layout.width.hug }` |
| Auto Layout | `{ layout.auto.horizontal.center }` |

---

# Navigation & Overlay — Floating Button

> **Design by ITUI**
> 화면 위에 고정되어 노출되며, 사용자가 즉시 수행해야 하는 주요 액션을 빠르게 실행할 수 있도록 제공되는 UI 요소입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Size** | Md, Sm |
| **State** | Default, Hover, Pressed |

## Size Tokens

### Medium (Md)

| Property | Token |
|----------|-------|
| Height | `{ height.float.md }` |
| Padding | `{ spacing.sm }` |
| Gap | `{ spacing.sm }` |
| Icon | `{ exception.icon.legal }` |

### Small (Sm)

| Property | Token |
|----------|-------|
| Height | `{ height.float.sm }` |
| Padding | `{ spacing.sm }` |
| Gap | `{ spacing.sm }` |
| Icon | `{ height.icon.lg }` |

---

# Navigation & Overlay — GNB

> **Design by ITUI**
> 전체 사이트 또는 앱의 상단 네비게이션입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Mode** | Default, Search, Login, Logout |

### Menu Structure
- Menu Items: Item 01 ~ Item 05 (최대 5개)
- 인증 CTA: 로그인 / 회원가입 버튼

### Login 모드
- Email Input Field 포함
- "Forgot your password?" 링크 포함
- 로그인 / 회원가입 CTA

---

# Navigation & Overlay — Navigation

> **Design by ITUI**
> 페이지 간 이동을 도와주는 전반적인 UI 구조입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Type** | Bottom Navigation, Top Navigation, Base Navigation |
| **State** | Default, Selected |

### Top Navigation Types
`BackIcon`, `BackButton`, `MenuAvatar`, `Logo`, `LogoBack`

---

# Navigation & Overlay — Overflow Menu

> **Design by ITUI**
> 제한된 공간에서 추가 옵션을 제공하는 드롭다운 메뉴 요소입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **State** | Default, Hover, Pressed, Disabled |
| **Type** | Icon, LabelIcon |

---

# Navigation & Overlay — Popover

> **Design by ITUI**
> 클릭한 요소 주변에 추가 정보나 옵션을 보여주는 컴포넌트입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Content Type** | Label, LabelDescription, IconDescription, Avatar, DescriptionIcon, IconLabel, SubmenuIcon, Description |
| **State** | Default, Hover, Pressed |

## Size Tokens

| Property | Token |
|----------|-------|
| Height/Sm | `{ height.popover.sm }` |
| Height/Md | `{ height.popover.md }` |
| Padding | `{ spacing.sm }` |
| Gap | `{ spacing.sm }` |
| Font Size | `{ font.size.md }` |
| Icon | `{ height.icon.lg }` |
| Width | `{ layout.width.hug }` |
| Auto Layout | `{ layout.auto.horizontal.center }` |

---

# Navigation & Overlay — LNB

> **Design by ITUI**
> 좌측 사이드에 배치되는 서브 네비게이션(Local Navigation Bar)입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **State** | Default, Hover, Active, Disabled |
| **Depth** | 1depth, 2depth |
| **Collapse** | Expanded, Collapsed |
