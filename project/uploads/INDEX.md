# ITUI Design System — Master Index

> **For AI design tools (Claude, Google Stitch, etc.)**
> 이 파일은 ITUI 디자인 시스템의 전체 구조를 요약한 인덱스입니다.
> 각 파일을 컨텍스트로 주입해 화면 개발 시 참조하세요.

---

## File Structure

| File | Contents |
|------|----------|
| `00_Overview.md` | 시스템 목적, 전체 구조, 레이아웃 그리드, 크레딧 |
| `01_Foundation_Colors.md` | Brand 컬러, Semantic 컬러, Palette (전체 hex + 토큰) |
| `01_Foundation_Grid.md` | 레이아웃 그리드 스펙 |
| `02_Atomic_Badge.md` | Badge — variants, size tokens |
| `02_Atomic_Button.md` | Button — variants, size tokens, state matrix |
| `02_Atomic_Others.md` | Checkbox, Chip, Divider, Input, Label, Radio, Slider, Tag, Toggle |
| `03_Composite.md` | Accordion, Bubble, Calendar, Card, Carousel, Date Picker, Modal, Pagination, Pop-up, Progress, Scroll Bar, Stepper, Tab, Tooltip |
| `04_DataDisplay.md` | Empty State, List, Profile, Rating, Table |
| `05_Feedback.md` | Backdrop, Skeleton, Snackbar, Spinner, Toast |
| `06_NavigationOverlay.md` | Bottom Sheet, Breadcrumb, Floating Button, GNB, Navigation, Overflow Menu, Popover, LNB |

---

## Global Design Token Reference

### Spacing
| Token | Usage |
|-------|-------|
| `spacing.xs` | 최소 간격 |
| `spacing.sm` | 소 간격 |
| `spacing.md` | 중 간격 |
| `spacing.lg` | 대 간격 |
| `spacing.xl` | 특대 간격 |
| `spacing.2xl` | 최대 간격 |

### Font Size
| Token | Usage |
|-------|-------|
| `font.size.3xs` | 최소 (Sm Profile 이니셜) |
| `font.size.xs` | 극소 (Table, Spinner) |
| `font.size.sm` | 소 (Badge, Profile Lg) |
| `font.size.md` | 기본 (Button Md/Sm, Input, List 등) |
| `font.size.lg` | 대 (Button Lg, Profile XL) |
| `font.size.xl` | 특대 (Profile 2XL) |
| `font.size.2xl` | 최대 (Profile 3XL) |

### Radius
| Token | Usage |
|-------|-------|
| `radius.2xs` | List |
| `radius.sm` | Button, Accordion, Card, Table |
| `radius.full` | Badge |

### Stroke
| Token | Usage |
|-------|-------|
| `stroke.xs` | Button (모든 사이즈), Accordion |

### Height — Button
| Token | Size |
|-------|------|
| `height.button.lg` | Large |
| `height.button.md` | Medium |
| `height.button.sm` | Small |

### Height — Icon
| Token | Size |
|-------|------|
| `height.icon.md` | Medium |
| `height.icon.lg` | Large |

### Height — Profile (Avatar)
| Token | Size |
|-------|------|
| `height.avt.sm` | Sm |
| `height.avt.md` | Md |
| `height.avt.lg` | Lg |
| `height.avt.xl` | XL |
| `height.avt.2xl` | 2XL |
| `height.avt.3xl` | 3XL |

### Layout
| Token | Usage |
|-------|-------|
| `layout.width.hug` | 콘텐츠에 맞게 너비 조정 |
| `layout.auto.horizontal.center` | 가로 자동 레이아웃, 중앙 정렬 |

---

## Brand Colors (Quick Reference)

| Name | Hex | Token |
|------|-----|-------|
| Echo Blue (Primary) | `#009CE0` | `Primary / 500` |
| Echo Neutral (Secondary) | `#595858` | `Neutral / 500` |
| Echo Black | `#0F0F0F` | `Neutral / 950` |
| Echo White | `#FFFFFF` | `White` |
| Success | `#4CAF50` | `Green / 500` |
| Error | `#F44336` | `Red / 500` |
| Warning | `#FFAD33` | `Orange / 500` |
| Information | `#1677FF` | `Blue / 500` |

---

## Common State Values

모든 인터랙티브 컴포넌트에 공통 적용되는 상태값:

| State | Description |
|-------|-------------|
| **Default** | 기본 상태 |
| **Hover** | 마우스 오버 상태 |
| **Pressed** | 클릭/탭 상태 |
| **Active / Selected** | 선택된 활성 상태 |
| **Disabled** | 비활성화 상태 |
| **Focus** | 키보드 포커스 상태 (Input 계열) |
| **Error** | 오류 상태 (Input, Progress 등) |
