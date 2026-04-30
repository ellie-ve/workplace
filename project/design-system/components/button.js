/* Button page — render matrices and replace icon placeholders. */

const ICON_PLUS = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 4.167v11.666M4.167 10h11.666" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`;
const ICON_PLUS_SM = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M8 3.333v9.334M3.333 8h9.334" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`;

/* Replace ${ICON_PLUS} / ${ICON_PLUS_SM} placeholders in the static HTML */
document.body.innerHTML = document.body.innerHTML
  .replaceAll('${ICON_PLUS_SM}', ICON_PLUS_SM)
  .replaceAll('${ICON_PLUS}', ICON_PLUS);

/* ---------- Style × State matrix (Medium / Label) ---------- */
const STYLES = [
  { key: 'primary',     name: 'Primary' },
  { key: 'alternative', name: 'Alternative' },
  { key: 'secondary',   name: 'Secondary' },
];
const STATES = [
  { key: 'default',  name: 'Default',  cls: '' },
  { key: 'hover',    name: 'Hover',    cls: '' /* visual hover via :hover impossible in static; use light variant */ },
  { key: 'pressed',  name: 'Pressed',  cls: 'is-pressed' },
  { key: 'disabled', name: 'Disabled', cls: 'is-disabled', disabled: true },
];

const matrix = document.getElementById('state-matrix');
if (matrix) {
  const head = `
    <div class="cell head"></div>
    ${STATES.map(s => `<div class="cell head">${s.name}</div>`).join('')}
  `;
  const rows = STYLES.map(style => {
    const cells = STATES.map(state => {
      // For "hover" we visually preview by adding the :hover background via inline class trick.
      const extra = state.key === 'hover' ? ' itui-btn--' + style.key + '-hover-preview' : '';
      const dis = state.disabled ? ' disabled' : '';
      return `<div class="cell">
        <button class="itui-btn itui-btn--${style.key} itui-btn--md ${state.cls}${extra}"${dis}>Button</button>
      </div>`;
    }).join('');
    return `<div class="cell head row-head">${style.name}</div>${cells}`;
  }).join('');
  matrix.innerHTML = head + rows;
}

/* Hover-preview helpers — match the :hover declarations in button.css */
const previewStyle = document.createElement('style');
previewStyle.textContent = `
  .itui-btn--primary-hover-preview {
    background: var(--surface-primary-hover) !important;
    color: var(--text-primary-inverse);
  }
  .itui-btn--alternative-hover-preview {
    background: var(--surface-primary-subtle) !important;
    color: var(--text-primary-hover) !important;
    border-color: var(--border-primary-hover) !important;
  }
  .itui-btn--secondary-hover-preview {
    background: var(--surface-subtle-hover) !important;
  }
`;
document.head.appendChild(previewStyle);

/* ---------- Style × Type ---------- */
const styleType = document.getElementById('style-type');
if (styleType) {
  styleType.innerHTML = STYLES.map(style => `
    <div class="demo-row">
      <span class="demo-label">${style.name}</span>
      <button class="itui-btn itui-btn--${style.key} itui-btn--md">Label</button>
      <button class="itui-btn itui-btn--${style.key} itui-btn--md">
        <span class="itui-btn-icon">${ICON_PLUS}</span>Label
      </button>
      <button class="itui-btn itui-btn--${style.key} itui-btn--md itui-btn--icon-only" aria-label="Add">
        <span class="itui-btn-icon">${ICON_PLUS}</span>
      </button>
    </div>
  `).join('');
}
