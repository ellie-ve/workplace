/* Foundation page — populate swatches and token tables from data */

const PRIMARY = [
  ['50','#E6F5FC'], ['100','#B0E0F5'], ['200','#8AD1F1'], ['300','#54BDEA'],
  ['400','#33B0E6'], ['500','#009CE0'], ['600','#008ECC'], ['700','#006F9F'],
  ['800','#00567B'], ['900','#00425E'],
];
const NEUTRAL = [
  ['50','#F5F5F5'], ['100','#EDEDED'], ['200','#DADADA'], ['300','#C2C2C2'],
  ['400','#9E9E9E'], ['500','#595858'], ['600','#4A4A4A'], ['700','#3A3A3A'],
  ['800','#2A2A2A'], ['900','#1A1A1A'], ['950','#0F0F0F'],
];
const BLUEGREY = [
  ['50','#EFF2F3'],['100','#CED7DB'],['200','#B6C3CA'],['300','#94A8B1'],
  ['400','#8097A2'],['500','#607D8B'],['600','#57727E'],['700','#445963'],
  ['800','#35454C'],['900','#28353A'],
];
const INDIGO = [
  ['50','#ECEEF8'],['100','#C3C9E8'],['200','#A7AFDD'],['300','#7E8ACD'],
  ['400','#6574C4'],['500','#3F51B5'],['600','#394AA5'],['700','#2D3A81'],
  ['800','#232D64'],['900','#1A224C'],
];
const PURPLE = [
  ['50','#F0EBF8'],['100','#D0C2E9'],['200','#B9A4DE'],['300','#997BCF'],
  ['400','#8561C5'],['500','#673AB7'],['600','#5E35A7'],['700','#492982'],
  ['800','#392065'],['900','#2B184D'],
];
const TEAL = [
  ['50','#E6F5F3'],['100','#B0DEDA'],['200','#8ACFC8'],['300','#54B9AF'],
  ['400','#33ABA0'],['500','#009688'],['600','#00897C'],['700','#006B61'],
  ['800','#00534B'],['900','#003F39'],
];

const SEMANTIC = [
  { state: 'Success',     name: 'Green',  bg: '#EDF7EE', fg: '#4CAF50' },
  { state: 'Information', name: 'Blue',   bg: '#E8F1FF', fg: '#1677FF' },
  { state: 'Error',       name: 'Red',    bg: '#FEECEB', fg: '#F44336' },
  { state: 'Warning',     name: 'Orange', bg: '#FFF5E6', fg: '#FFAD33' },
];

/* ---- Brightness check for legible label color on swatches ---- */
function legibleOn(hex) {
  const h = hex.replace('#','');
  const r = parseInt(h.slice(0,2),16);
  const g = parseInt(h.slice(2,4),16);
  const b = parseInt(h.slice(4,6),16);
  const lum = (0.299*r + 0.587*g + 0.114*b) / 255;
  return lum > 0.62 ? '#0F0F0F' : '#FFFFFF';
}

function renderScale(targetId, scale, isDefault500 = true) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = scale.map(([step, hex]) => `
    <div class="swatch ${isDefault500 && step === '500' ? 'swatch--default' : ''}">
      <div class="swatch-color" style="background:${hex};color:${legibleOn(hex)}">${hex}</div>
      <div class="swatch-meta">
        <div class="swatch-step">${step}${isDefault500 && step === '500' ? ' · Default' : ''}</div>
        <div class="swatch-hex">${hex}</div>
      </div>
    </div>
  `).join('');
}

renderScale('primary-scale', PRIMARY);
renderScale('neutral-scale', NEUTRAL);
renderScale('palette-bluegrey', BLUEGREY, false);
renderScale('palette-indigo',   INDIGO, false);
renderScale('palette-purple',   PURPLE, false);
renderScale('palette-teal',     TEAL,   false);

/* ---- Semantic ---- */
const semGrid = document.getElementById('semantic-grid');
semGrid.innerHTML = SEMANTIC.map(s => `
  <article class="semantic-card">
    <div class="semantic-bar" style="background:${s.fg}"></div>
    <div class="semantic-body">
      <p class="semantic-state">${s.state}</p>
      <p class="semantic-name">${s.name}</p>
      <div class="semantic-pair">
        <div class="semantic-chip" style="background:${s.bg};color:${legibleOn(s.bg)}">
          50<br/>${s.bg}
        </div>
        <div class="semantic-chip" style="background:${s.fg};color:${legibleOn(s.fg)}">
          500<br/>${s.fg}
        </div>
      </div>
    </div>
  </article>
`).join('');

/* ---- Grid demo (12 columns) ---- */
const gridStage = document.getElementById('grid-stage');
gridStage.innerHTML = Array.from({ length: 12 }, (_, i) =>
  `<div class="grid-col">${i + 1}</div>`).join('');

/* ---- Spacing ---- */
const SPACING = [
  ['spacing.xs',   '4px',  '최소 간격'],
  ['spacing.sm',   '8px',  '소 간격'],
  ['spacing.md',   '12px', '중 간격'],
  ['spacing.lg',   '16px', '대 간격'],
  ['spacing.xl',   '20px', '특대 간격'],
  ['spacing.2xl',  '24px', '2XL'],
  ['spacing.3xl',  '32px', '3XL'],
  ['spacing.4xl',  '40px', '4XL'],
  ['spacing.5xl',  '48px', '5XL'],
  ['spacing.6xl',  '64px', '6XL · 최대 간격'],
];
document.getElementById('spacing-rows').innerHTML = SPACING.map(([token, value, usage]) => `
  <tr>
    <td class="mono">${token}</td>
    <td class="mono">${value}</td>
    <td><span class="token-bar" style="width:${value}"></span></td>
    <td>${usage}</td>
  </tr>
`).join('');

/* ---- Typography ----
   Each: token, size, line-height, letter-spacing, weight */
const TYPE_DISPLAY = [
  ['display.6xl', 48, 64, '-1.50px', 700],
  ['display.5xl', 40, 52, '-1.13px', 700],
];
const TYPE_HEADING = [
  ['heading.4xl', 32, 44, '-0.66px', 700],
  ['heading.3xl', 24, 32, '-0.50px', 600],
  ['heading.2xl', 20, 28, '-0.34px', 600],
  ['heading.xl',  18, 26, '-0.06px', 600],
  ['heading.lg',  16, 24, '0px',     600],
  ['heading.md',  14, 20, '0px',     600],
];
const TYPE_BODY = [
  ['body.lg', 18, 26, '0px',    400],
  ['body.md', 16, 24, '0.20px', 400],
];
const TYPE_CAPTION = [
  ['caption.sm', 12, 18, '0.30px', 400],
  ['caption.xs', 10, 16, '0.33px', 400],
];

function renderTypeList(targetId, rows) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = rows.map(([token, size, lh, ls, weight]) => `
    <div class="type-row">
      <div class="type-meta">
        <div class="type-token">${token}</div>
        <div class="type-size">${size}px / ${lh}px / ${ls}</div>
      </div>
      <div class="type-sample" style="font-size:${size}px;line-height:${lh}px;letter-spacing:${ls};font-weight:${weight}">
        EchoIT 디자인 시스템 · The quick brown fox
      </div>
    </div>
  `).join('');
}
renderTypeList('type-display', TYPE_DISPLAY);
renderTypeList('type-heading', TYPE_HEADING);
renderTypeList('type-body',    TYPE_BODY);
renderTypeList('type-caption', TYPE_CAPTION);

/* Weights */
const WEIGHTS = [
  ['Regular',  400],
  ['Medium',   500],
  ['Semibold', 600],
  ['Bold',     700],
];
document.getElementById('weight-grid').innerHTML = WEIGHTS.map(([name, w]) => `
  <div class="weight-card">
    <div class="weight-aa" style="font-weight:${w}">Aa</div>
    <div class="weight-name">${name.toLowerCase()} ${w}</div>
  </div>
`).join('');

/* ---- Radius (verified from Figma) ---- */
const RADIUS = [
  ['radius.none', '0',     '없음'],
  ['radius.xs',   '4px',   'List, Chip'],
  ['radius.sm',   '8px',   'Button, Card, Table'],
  ['radius.md',   '12px',  'Modal, Popover'],
  ['radius.lg',   '16px',  'Bottom Sheet'],
  ['radius.xl',   '20px',  'Large Card'],
  ['radius.2xl',  '28px',  'Hero card'],
  ['radius.full', '999px', 'Badge, Avatar'],
];

/* ---- Stroke (verified from Figma) ---- */
const STROKE = [
  ['stroke.none', '0',   '없음'],
  ['stroke.xs',   '1px', 'Button, Accordion (default)'],
  ['stroke.sm',   '2px', 'Focus ring'],
  ['stroke.md',   '4px', 'Selection emphasis'],
  ['stroke.lg',   '12px','Decorative bar'],
];

document.getElementById('radius-rows').innerHTML = RADIUS.map(([token, value, usage]) => {
  const v = value === '0' ? '0' : value;
  const preview = `<span style="display:inline-block;width:48px;height:48px;background:var(--color-primary-500);border-radius:${v}"></span>`;
  return `
    <tr>
      <td class="mono">${token}</td>
      <td class="mono">${value}</td>
      <td>${preview}</td>
      <td>${usage}</td>
    </tr>
  `;
}).join('');

document.getElementById('stroke-rows').innerHTML = STROKE.map(([token, value, usage]) => {
  const v = value === '0' ? '0' : value;
  const preview = `<span style="display:inline-block;width:64px;height:24px;border:${v} solid var(--color-neutral-700);border-radius:4px;background:#fff"></span>`;
  return `
    <tr>
      <td class="mono">${token}</td>
      <td class="mono">${value}</td>
      <td>${preview}</td>
      <td>${usage}</td>
    </tr>
  `;
}).join('');

/* ---- Heights (verified, grouped) ---- */
const HEIGHT_GROUPS = [
  ['Button', [
    ['height.button.sm', '32px'],
    ['height.button.md', '40px'],
    ['height.button.lg', '48px'],
  ]],
  ['Icon', [
    ['height.icon.sm',  '12px'],
    ['height.icon.md',  '16px'],
    ['height.icon.lg',  '20px'],
    ['height.icon.xl',  '32px'],
    ['height.icon.2xl', '40px'],
  ]],
  ['Avatar / Profile', [
    ['height.avt.sm',  '24px'],
    ['height.avt.md',  '32px'],
    ['height.avt.lg',  '40px'],
    ['height.avt.xl',  '48px'],
    ['height.avt.2xl', '60px'],
    ['height.avt.3xl', '72px'],
  ]],
  ['Form', [
    ['height.input',       '48px'],
    ['height.checkbox.sm', '16px'],
    ['height.checkbox.md', '18px'],
    ['height.radio.sm',    '16px'],
    ['height.radio.md',    '20px'],
    ['height.toggle.sm',   '24px'],
    ['height.toggle.md',   '32px'],
    ['height.slider.sm',   '6px'],
  ]],
  ['Atomic', [
    ['height.badge',     '20px'],
    ['height.chip.sm',   '24px'],
    ['height.chip.md',   '28px'],
    ['height.chip.lg',   '32px'],
    ['height.tag.sm',    '24px'],
    ['height.tag.md',    '28px'],
    ['height.tag.lg',    '32px'],
    ['height.label.sm',  '24px'],
    ['height.label.md',  '32px'],
    ['height.dot.xs',    '6px'],
    ['height.dot.sm',    '10px'],
    ['height.dot.md',    '12px'],
    ['height.dot.lg',    '20px'],
    ['height.dot.xl',    '28px'],
  ]],
  ['Composite & Navigation', [
    ['height.tab',          '32px'],
    ['height.pagination',   '32px'],
    ['height.overFlow',     '36px'],
    ['height.date-picker',  '36px'],
    ['height.accordion',    '48px'],
    ['height.table',        '48px'],
    ['height.list.sm',      '40px'],
    ['height.list.md',      '56px'],
    ['height.float.sm',     '40px'],
    ['height.float.md',     '56px'],
    ['height.navigation.sm','48px'],
    ['height.navigation.md','56px'],
    ['height.popover.sm',   '36px'],
    ['height.popover.md',   '56px'],
    ['height.lnb.sm',       '36px'],
    ['height.lnb.md',       '48px'],
    ['height.stepper.sm',   '24px'],
    ['height.stepper.md',   '28px'],
    ['height.spinner.sm',   '20px'],
    ['height.spinner.md',   '32px'],
    ['height.spinner.lg',   '48px'],
    ['height.progress.sm',  '40px'],
    ['height.progress.md',  '72px'],
    ['height.progress.lg',  '128px'],
  ]],
];

document.getElementById('height-rows').innerHTML = HEIGHT_GROUPS.map(([group, rows]) => {
  const groupRow = `<tr class="group-row"><td colspan="2">${group}</td></tr>`;
  const dataRows = rows.map(([token, value]) => `
    <tr>
      <td class="mono">${token}</td>
      <td class="mono">${value}</td>
    </tr>
  `).join('');
  return groupRow + dataRows;
}).join('');
