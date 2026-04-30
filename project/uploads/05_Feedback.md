# Feedback — Backdrop

> **Design by ITUI**
> 배경을 흐리거나 어둡게 처리해 전면 콘텐츠에 집중하도록 하는 오버레이 요소입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Style** | Dim (어둡게), Blur (흐리게) |

---

# Feedback — Skeleton

> **Design by ITUI**
> 콘텐츠 로딩 전 레이아웃을 미리 보여주어 대기 시간을 인지할 수 있도록 하는 표시 요소입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Animation** | Wave, Pulse |
| **Shape** | Text, Rectangle, Circle |

### Preset Templates

| Template | Description |
|----------|-------------|
| Text Skeleton | 텍스트 영역 로딩 표시 |
| Avatar Skeleton | 프로필 이미지 영역 로딩 표시 |
| Media Skeleton | 미디어(이미지/영상) 영역 로딩 표시 |

---

# Feedback — Snackbar

> **Design by ITUI**
> 화면 하단에 일시적으로 표시되어 간단한 상태나 결과를 안내하는 알림 요소입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Theme** | Light, Dark |
| **CTA** | 취소하기 버튼 포함 가능 |

### Content Structure
- 제목 (Title)
- 본문 메시지 (Body)
- 액션 버튼 (Optional): 취소하기

---

# Feedback — Spinner

> **Design by ITUI**
> 데이터 처리 또는 로딩 진행 상태를 시각적으로 안내하는 요소입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Size** | Lg, Md, Sm |
| **Type** | Icon (스피너만), Description (스피너 + 설명 텍스트) |

## Size Tokens

| Size | Height Token |
|------|-------------|
| Lg | `{ height.spinner.lg }` |
| Md | `{ height.spinner.md }` |
| Sm | `{ height.spinner.sm }` |

### Font Size (Description type)
`{ font.size.xs }`

### Progress Values
0% → 10% → 20% → 30% → 40% → 50% → 60% → 70% → 80% → 90% → 100%

---

# Feedback — Toast

> **Design by ITUI**
> 짧은 시간 동안 화면에 표시되어 상태를 안내하는 알림 요소입니다.

---

## Variants

| Property | Values |
|----------|--------|
| **Style** | Normal, Light, Dark |
| **Semantic** | Success, Error, Warning, Information |

### Content Structure
- 제목 (Title)
- 본문 메시지 (Body)

### Full Variant List
`Normal` / `Light` / `Dark` / `Success` / `Error` / `Warning` / `Information`
