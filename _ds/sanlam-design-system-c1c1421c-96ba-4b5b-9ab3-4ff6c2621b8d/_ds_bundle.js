/* @ds-bundle: {"format":4,"namespace":"SanlamDesignSystem_c1c142","components":[{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"CardHeader","sourcePath":"components/data-display/Card.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"6209b5e1eefc","components/brand/Logo.jsx":"3ac412dcd1bf","components/data-display/Badge.jsx":"3fa004510a5f","components/data-display/Card.jsx":"41d2bb846e81","components/data-display/Tag.jsx":"77886e640aa9","components/feedback/Alert.jsx":"166f16d3a536","components/feedback/Dialog.jsx":"b7053fc9116d","components/feedback/Toast.jsx":"42dd81afbb49","components/feedback/Tooltip.jsx":"9a9efa621095","components/forms/Button.jsx":"3e99709f6988","components/forms/Checkbox.jsx":"1736d37c2a53","components/forms/IconButton.jsx":"a160915deed1","components/forms/Input.jsx":"f215c02824e9","components/forms/Radio.jsx":"c774790b89fe","components/forms/Select.jsx":"5a282b74fa48","components/forms/Switch.jsx":"4bffa28827ff","components/navigation/Tabs.jsx":"946176c81b08","ui_kits/portal/CoverDetailScreen.jsx":"9261b580241e","ui_kits/portal/DashboardScreen.jsx":"4e5288e05b3f","ui_kits/portal/LoginScreen.jsx":"0f253e6ca818","ui_kits/portal/Shell.jsx":"67e80e81d592"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SanlamDesignSystem_c1c142 = window.SanlamDesignSystem_c1c142 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Sanlam iconography follows the Lucide set (2px stroke, round caps/joins) —
   the closest open match to Sanlam's clean linear UI icons. Real Lucide art is
   fetched from the lucide-static CDN and inherits `currentColor`; nothing is
   hand-drawn. Cache keeps repeated icons cheap. */
const CDN = 'https://unpkg.com/lucide-static@0.460.0/icons/';
const cache = new Map();
function load(name) {
  if (cache.has(name)) return cache.get(name);
  const p = fetch(CDN + name + '.svg').then(r => r.ok ? r.text() : '').catch(() => '');
  cache.set(name, p);
  return p;
}
function Icon({
  name,
  size = 20,
  strokeWidth,
  color = 'currentColor',
  title,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let alive = true;
    load(name).then(svg => {
      if (!alive || !ref.current || !svg) return;
      let out = svg.replace('<svg', '<svg width="100%" height="100%"');
      if (strokeWidth) out = out.replace(/stroke-width="[^"]*"/, `stroke-width="${strokeWidth}"`);
      ref.current.innerHTML = out;
    });
    return () => {
      alive = false;
    };
  }, [name, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    role: "img",
    "aria-label": title || name,
    title: title,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      color,
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Resolves asset paths relative to the design-system root so the Logo works
   from any card / kit depth. */
function assetBase() {
  if (typeof window !== 'undefined' && window.__SL_ASSET_BASE__) return window.__SL_ASSET_BASE__;
  return '';
}
const files = {
  'full-blue': 'assets/logo-full-blue.svg',
  'full-white': 'assets/logo-full-white.svg',
  'full-congress': 'assets/logo-full-congress.svg',
  'mark-blue': 'assets/logo-mark-blue.svg',
  'mark-white': 'assets/logo-mark-white.svg'
};
function Logo({
  variant = 'full',
  tone = 'blue',
  height,
  base,
  style,
  ...rest
}) {
  const key = `${variant}-${tone}`;
  const src = (base ?? assetBase()) + (files[key] || files['full-blue']);
  const h = height ?? (variant === 'mark' ? 40 : 32);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "Sanlam",
    style: {
      height: h,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bg: 'var(--sl-grey-100)',
    fg: 'var(--sl-grey-700)'
  },
  brand: {
    bg: 'var(--sl-blue-100)',
    fg: 'var(--sl-blue-900)'
  },
  success: {
    bg: 'var(--sl-success-tint)',
    fg: 'var(--sl-success)'
  },
  warning: {
    bg: 'var(--sl-warning-tint)',
    fg: 'var(--sl-warning)'
  },
  error: {
    bg: 'var(--sl-error-tint)',
    fg: 'var(--sl-error)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  dot = false,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--role-overline)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      background: solid ? t.fg : t.bg,
      color: solid ? '#fff' : t.fg,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pads = {
  none: 0,
  sm: 'var(--space-4)',
  md: 'var(--space-6)',
  lg: 'var(--space-8)'
};
function Card({
  children,
  padding = 'md',
  elevation = 'sm',
  interactive = false,
  accent = false,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const shadows = {
    none: 'none',
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      padding: pads[padding],
      boxShadow: interactive && hover ? 'var(--shadow-md)' : shadows[elevation],
      borderTop: accent ? '3px solid var(--color-primary)' : undefined,
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      cursor: interactive || onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
function CardHeader({
  title,
  subtitle,
  action,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)',
      display: 'flex'
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-h4)',
      color: 'var(--text-strong)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, subtitle))), action);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  icon,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--role-body-sm)',
      fontWeight: 'var(--weight-medium)',
      background: selected ? 'var(--sl-blue-100)' : 'var(--sl-grey-100)',
      color: selected ? 'var(--sl-blue-900)' : 'var(--text-body)',
      border: `1px solid ${selected ? 'var(--sl-blue-300)' : 'var(--border-subtle)'}`,
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), icon, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'inherit',
      padding: 0,
      marginLeft: 2,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  info: {
    bg: 'var(--sl-info-tint)',
    bar: 'var(--sl-info)',
    fg: 'var(--sl-blue-900)',
    icon: 'info'
  },
  success: {
    bg: 'var(--sl-success-tint)',
    bar: 'var(--sl-success)',
    fg: '#155e35',
    icon: 'check-circle'
  },
  warning: {
    bg: 'var(--sl-warning-tint)',
    bar: 'var(--sl-warning)',
    fg: '#8a5300',
    icon: 'alert-triangle'
  },
  error: {
    bg: 'var(--sl-error-tint)',
    bar: 'var(--sl-error)',
    fg: '#8f1e1e',
    icon: 'alert-circle'
  }
};
const glyph = {
  info: 'M12 16v-4M12 8h.01',
  'check-circle': 'M9 12l2 2 4-4',
  'alert-triangle': 'M12 9v4M12 17h.01',
  'alert-circle': 'M12 8v4M12 16h.01'
};
function Alert({
  children,
  title,
  tone = 'info',
  onClose,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      background: t.bg,
      borderRadius: 'var(--radius-md)',
      borderLeft: `4px solid ${t.bar}`,
      color: t.fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: t.bar,
    strokeWidth: "2",
    style: {
      flex: '0 0 auto',
      marginTop: 1
    }
  }, tone === 'error' || tone === 'info' ? /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }) : tone === 'warning' ? /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.9L2 18a1.7 1.7 0 001.5 2.5h17A1.7 1.7 0 0022 18L13.7 3.9a1.7 1.7 0 00-3 0z",
    strokeLinejoin: "round"
  }) : /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: glyph[t.icon],
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-body)',
      fontWeight: 'var(--weight-bold)',
      marginBottom: title && children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-body-sm)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.6,
      padding: 0,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  width
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === 'Escape' && onClose && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  const maxW = width || {
    sm: 400,
    md: 520,
    lg: 680
  }[size] || 520;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'rgba(16,35,58,0.45)',
      backdropFilter: 'blur(2px)',
      animation: 'sl-fade 160ms ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: maxW,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      animation: 'sl-pop 200ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--space-6) var(--space-4)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-h3)',
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, description)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--sl-grey-500)',
      padding: 4,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12",
    strokeLinecap: "round"
  })))), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-6) var(--space-6)',
      font: 'var(--role-body)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-6)',
      background: 'var(--sl-grey-50)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, '@keyframes sl-fade{from{opacity:0}to{opacity:1}}@keyframes sl-pop{from{opacity:0;transform:translateY(8px) scale(0.98)}to{opacity:1;transform:none}}'));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  info: 'var(--sl-blue)',
  success: 'var(--sl-success)',
  warning: 'var(--sl-warning)',
  error: 'var(--sl-error)'
};

/** Presentational toast card. For a full queue, render a stack of these
 *  fixed to a corner; here it is self-contained for previewing and reuse. */
function Toast({
  title,
  children,
  tone = 'info',
  onClose,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      width: 340,
      maxWidth: '90vw',
      padding: 'var(--space-4)',
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      borderLeft: `4px solid ${tones[tone] || tones.info}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-body)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--sl-grey-500)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  content,
  placement = 'top'
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && content && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 900,
      ...pos,
      whiteSpace: 'nowrap',
      background: 'var(--sl-ink)',
      color: '#fff',
      font: 'var(--role-caption)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none',
      animation: 'sl-tip 120ms ease-out'
    }
  }, content, /*#__PURE__*/React.createElement("style", null, '@keyframes sl-tip{from{opacity:0}to{opacity:1}}')));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    fontSize: 'var(--text-sm)',
    padding: '0 var(--space-4)',
    height: 34,
    gap: 6
  },
  md: {
    fontSize: 'var(--text-md)',
    padding: '0 var(--space-5)',
    height: 42,
    gap: 8
  },
  lg: {
    fontSize: 'var(--text-lg)',
    padding: '0 var(--space-6)',
    height: 52,
    gap: 10
  }
};
const variants = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--color-primary-contrast)',
    border: '1px solid var(--color-primary)',
    '--hover-bg': 'var(--color-primary-hover)',
    '--active-bg': 'var(--color-primary-active)'
  },
  secondary: {
    background: 'var(--sl-white)',
    color: 'var(--color-primary)',
    border: '1px solid var(--border-default)',
    '--hover-bg': 'var(--sl-blue-50)',
    '--active-bg': 'var(--sl-blue-100)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--sl-blue-50)',
    '--active-bg': 'var(--sl-blue-100)'
  },
  danger: {
    background: 'var(--sl-error)',
    color: '#fff',
    border: '1px solid var(--sl-error)',
    '--hover-bg': '#a82424',
    '--active-bg': '#8f1e1e'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  type = 'button',
  onClick,
  ...rest
}) {
  const sz = sizes[size] || sizes.md;
  const vr = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const isOff = disabled || loading;
  const bg = isOff ? undefined : active ? vr['--active-bg'] : hover ? vr['--hover-bg'] : vr.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isOff,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sz.gap,
      height: sz.height,
      padding: sz.padding,
      width: fullWidth ? '100%' : 'auto',
      font: 'var(--role-body)',
      fontWeight: 'var(--weight-bold)',
      fontSize: sz.fontSize,
      letterSpacing: 'var(--tracking-snug)',
      lineHeight: 1,
      borderRadius: 'var(--radius-md)',
      cursor: isOff ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast)',
      transform: active && !isOff ? 'translateY(1px)' : 'none',
      opacity: isOff ? 0.5 : 1,
      whiteSpace: 'nowrap',
      userSelect: 'none',
      ...vr,
      background: bg
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && leftIcon, children, !loading && rightIcon);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: '1em',
      height: '1em',
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'sl-spin 0.6s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes sl-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      font: 'var(--role-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 20,
      height: 20,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement(Box, null)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 1
    }
  }, label));
}
function Box() {
  return /*#__PURE__*/React.createElement("span", {
    className: "sl-check-box",
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-xs)',
      border: '1.5px solid var(--border-strong)',
      background: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast), border-color var(--duration-fast)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("style", null, `
        input:checked + .sl-check-box{background:var(--color-primary);border-color:var(--color-primary)}
        input:focus-visible + .sl-check-box{box-shadow:var(--shadow-focus)}
      `));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 34,
  md: 42,
  lg: 52
};
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  ...rest
}) {
  const dim = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const vr = {
    primary: {
      background: hover ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: '#fff',
      border: '1px solid var(--color-primary)'
    },
    secondary: {
      background: hover ? 'var(--sl-blue-50)' : '#fff',
      color: 'var(--color-primary)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: hover ? 'var(--sl-blue-50)' : 'transparent',
      color: 'var(--sl-grey-700)',
      border: '1px solid transparent'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...vr
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  leftIcon,
  rightIcon,
  size = 'md',
  id,
  disabled = false,
  required = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const height = size === 'sm' ? 36 : size === 'lg' ? 52 : 44;
  const borderColor = error ? 'var(--sl-error)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      font: 'var(--role-caption)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sl-error)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height,
      padding: '0 var(--space-4)',
      background: disabled ? 'var(--sl-grey-100)' : '#fff',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)'
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--role-body)',
      fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-md)',
      color: 'var(--text-strong)'
    }
  }, rest)), rightIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, rightIcon)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--role-caption)',
      color: error ? 'var(--sl-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  defaultChecked,
  onChange,
  name,
  value,
  disabled = false,
  id,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      font: 'var(--role-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 20,
      height: 20,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "sl-radio-box",
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: '1.5px solid var(--border-strong)',
      background: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--duration-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sl-radio-dot",
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--color-primary)',
      transform: 'scale(0)',
      transition: 'transform var(--duration-fast) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("style", null, `
            input:checked + .sl-radio-box{border-color:var(--color-primary)}
            input:checked + .sl-radio-box .sl-radio-dot{transform:scale(1)}
            input:focus-visible + .sl-radio-box{box-shadow:var(--shadow-focus)}
          `))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 1
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  size = 'md',
  id,
  disabled = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const height = size === 'sm' ? 36 : size === 'lg' ? 52 : 44;
  const borderColor = error ? 'var(--sl-error)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      font: 'var(--role-caption)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      width: '100%',
      height,
      padding: '0 var(--space-8) 0 var(--space-4)',
      background: disabled ? 'var(--sl-grey-100)' : '#fff',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      font: 'var(--role-body)',
      color: 'var(--text-strong)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--sl-grey-600)",
    strokeWidth: "2.2",
    style: {
      position: 'absolute',
      right: 'var(--space-4)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--role-caption)',
      color: error ? 'var(--sl-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  ...rest
}) {
  const uid = id || React.useId();
  const controlled = checked !== undefined;
  const [on, setOn] = React.useState(!!defaultChecked);
  const isOn = controlled ? checked : on;
  const toggle = e => {
    if (!controlled) setOn(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      font: 'var(--role-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: isOn,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 44,
      height: 24,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: isOn ? 'var(--color-primary)' : 'var(--sl-grey-300)',
      transition: 'background var(--duration-base) var(--ease-standard)',
      display: 'inline-block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: 2,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: isOn ? 'translateX(20px)' : 'translateX(0)',
      transition: 'transform var(--duration-base) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline'
}) {
  const controlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].value));
  const active = controlled ? value : internal;
  const select = v => {
    if (!controlled) setInternal(v);
    onChange && onChange(v);
  };
  if (variant === 'pill') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        gap: 4,
        padding: 4,
        background: 'var(--sl-grey-100)',
        borderRadius: 'var(--radius-pill)'
      }
    }, tabs.map(t => {
      const on = t.value === active;
      return /*#__PURE__*/React.createElement("button", {
        key: t.value,
        type: "button",
        onClick: () => select(t.value),
        style: {
          border: 'none',
          cursor: 'pointer',
          padding: '8px 18px',
          borderRadius: 'var(--radius-pill)',
          font: 'var(--role-body-sm)',
          fontWeight: 'var(--weight-semibold)',
          background: on ? '#fff' : 'transparent',
          color: on ? 'var(--color-primary)' : 'var(--text-muted)',
          boxShadow: on ? 'var(--shadow-sm)' : 'none',
          transition: 'all var(--duration-fast) var(--ease-standard)'
        }
      }, t.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, tabs.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      type: "button",
      onClick: () => select(t.value),
      style: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '0 0 var(--space-3)',
        marginBottom: -1,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        font: 'var(--role-body)',
        fontWeight: on ? 'var(--weight-bold)' : 'var(--weight-medium)',
        color: on ? 'var(--color-primary)' : 'var(--text-muted)',
        borderBottom: `2px solid ${on ? 'var(--color-primary)' : 'transparent'}`,
        transition: 'color var(--duration-fast), border-color var(--duration-fast)'
      }
    }, t.icon, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--role-overline)',
        background: on ? 'var(--sl-blue-100)' : 'var(--sl-grey-100)',
        color: on ? 'var(--sl-blue-900)' : 'var(--text-muted)',
        padding: '2px 7px',
        borderRadius: 'var(--radius-pill)'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/CoverDetailScreen.jsx
try { (() => {
// Sanlam Online — policy / cover detail.
const {
  Card,
  CardHeader,
  Badge,
  Button,
  Icon,
  Tabs,
  Switch,
  Alert
} = window.SanlamDesignSystem_c1c142;
function Row({
  label,
  value,
  mono
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 'var(--space-3) 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--role-body-sm)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--role-body-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)',
      fontFamily: mono ? 'var(--font-mono)' : 'inherit'
    }
  }, value));
}
function CoverDetailScreen({
  onBack
}) {
  const [tab, setTab] = React.useState('overview');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      font: 'var(--role-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-link)',
      padding: 0,
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " Back to overview"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-lg)',
      background: 'linear-gradient(135deg,#0075C9,#003D88)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "umbrella",
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--role-h2)',
      color: 'var(--text-strong)'
    }
  }, "Life Cover"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Active")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-body-sm)',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)'
    }
  }, "Policy SL-4471-0092")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 16
    })
  }, "Policy schedule"), /*#__PURE__*/React.createElement(Button, {
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "file-text",
      size: 16
    })
  }, "Submit a claim")), /*#__PURE__*/React.createElement(Tabs, {
    variant: "underline",
    value: tab,
    onChange: setTab,
    tabs: [{
      value: 'overview',
      label: 'Overview'
    }, {
      value: 'beneficiaries',
      label: 'Beneficiaries',
      count: 2
    }, {
      value: 'documents',
      label: 'Documents'
    }]
  }), tab === 'overview' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Cover details"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Cover amount",
    value: "R 2,000,000",
    mono: true
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Monthly premium",
    value: "R 1,250.00",
    mono: true
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Premium pattern",
    value: "Level"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Start date",
    value: "01 Mar 2019"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Next payment",
    value: "25 Aug 2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-4)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--role-body-sm)',
      color: 'var(--text-body)'
    }
  }, "Paperless statements"), /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    accent: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-caption)',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, "You're covered for"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-h1)',
      fontSize: '2.2rem',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-mono)',
      margin: '4px 0 var(--space-3)'
    }
  }, "R 2.0m"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Death & disability benefit, paid to your beneficiaries.")), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Boost your cover"
  }, "You may qualify for R500,000 more cover at your current premium."))), tab !== 'overview' && /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'var(--text-muted)',
      font: 'var(--role-body)',
      padding: 'var(--space-8) 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder-open",
    size: 32,
    color: "var(--sl-grey-400)"
  }), /*#__PURE__*/React.createElement("br", null), tab === 'beneficiaries' ? 'Beneficiary management' : 'Your documents', " \u2014 not shown in this kit.")));
}
Object.assign(window, {
  CoverDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/CoverDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/DashboardScreen.jsx
try { (() => {
// Sanlam Online — dashboard overview.
const {
  Card,
  CardHeader,
  Badge,
  Tag,
  Button,
  Icon,
  Alert,
  Tabs
} = window.SanlamDesignSystem_c1c142;
function Stat({
  label,
  value,
  delta,
  deltaTone
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-caption)',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-h2)',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-mono)',
      marginTop: 6
    }
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-caption)',
      fontWeight: 'var(--weight-bold)',
      color: deltaTone === 'up' ? 'var(--sl-success)' : 'var(--text-muted)',
      marginTop: 4
    }
  }, delta));
}
const POLICIES = [{
  icon: 'umbrella',
  name: 'Life Cover',
  no: 'SL-4471-0092',
  status: ['success', 'Active'],
  amount: 'R 1,250 / mo'
}, {
  icon: 'trending-up',
  name: 'Retirement Annuity',
  no: 'SL-2210-8841',
  status: ['success', 'Active'],
  amount: 'R 2,000 / mo'
}, {
  icon: 'car',
  name: 'Car & Home',
  no: 'SL-8890-1123',
  status: ['warning', 'Renewal due'],
  amount: 'R 980 / mo'
}, {
  icon: 'heart',
  name: 'Funeral Cover',
  no: 'SL-5567-2201',
  status: ['success', 'Active'],
  amount: 'R 210 / mo'
}];
function DashboardScreen({
  onOpenPolicy
}) {
  const [tab, setTab] = React.useState('active');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    onClose: () => {},
    title: "Your Car & Home policy renews on 25 August"
  }, "Review your cover to keep your premium up to date."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Total cover",
    value: "R 3.2m"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Investments",
    value: "R 248,900",
    delta: "+8.4% YTD",
    deltaTone: "up"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Monthly premium",
    value: "R 4,440"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Loyalty tier",
    value: "Gold",
    delta: "Reality Health"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "My policies",
    subtitle: "4 active products",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 16
      })
    }, "Add cover")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: tab,
    onChange: setTab,
    tabs: [{
      value: 'active',
      label: 'Active'
    }, {
      value: 'lapsed',
      label: 'Lapsed'
    }, {
      value: 'all',
      label: 'All'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, POLICIES.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.no,
    onClick: onOpenPolicy,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) 0',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: 'var(--sl-blue-50)',
      color: 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-body)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-caption)',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)'
    }
  }, p.no)), /*#__PURE__*/React.createElement(Badge, {
    tone: p.status[0],
    dot: p.status[0] === 'success'
  }, p.status[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-body-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)',
      width: 100,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)'
    }
  }, p.amount), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--sl-grey-400)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    accent: true
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Portfolio value",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "pie-chart"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-h1)',
      fontSize: '2.4rem',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-mono)'
    }
  }, "R 248,900"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-body-sm)',
      color: 'var(--sl-success)',
      fontWeight: 'var(--weight-bold)',
      marginTop: 4
    }
  }, "\u25B2 R 19,240 (8.4%) this year"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 3,
      height: 8,
      borderRadius: 999,
      background: 'var(--sl-blue-600)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 2,
      height: 8,
      borderRadius: 999,
      background: 'var(--sl-blue-400)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 8,
      borderRadius: 999,
      background: 'var(--sl-blue-200)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 'var(--space-3)',
      font: 'var(--role-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Equity 50%"), /*#__PURE__*/React.createElement("span", null, "Bonds 33%"), /*#__PURE__*/React.createElement("span", null, "Cash 17%"))), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Quick actions"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "file-text",
      size: 14
    })
  }, "Submit a claim"), /*#__PURE__*/React.createElement(Tag, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "credit-card",
      size: 14
    })
  }, "Make a payment"), /*#__PURE__*/React.createElement(Tag, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    })
  }, "Tax certificate"), /*#__PURE__*/React.createElement(Tag, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 14
    })
  }, "Beneficiaries"))))));
}
Object.assign(window, {
  DashboardScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/LoginScreen.jsx
try { (() => {
// Sanlam Online — login screen.
const {
  Logo,
  Icon,
  Input,
  Button,
  Checkbox
} = window.SanlamDesignSystem_c1c142;
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 46%',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg,#0075C9,#003D88)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 'var(--space-12)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    tone: "white",
    height: 30
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-display)',
      fontSize: '2.6rem',
      lineHeight: 1.1
    }
  }, "Now is the time to plan."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--role-body)',
      opacity: 0.9,
      maxWidth: 380,
      marginTop: 'var(--space-4)'
    }
  }, "Manage your cover, investments and claims in one place. Live wealthily.")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-caption)',
      opacity: 0.8
    }
  }, "Sanlam Life Insurance Ltd is a licensed financial services provider."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -80,
      bottom: -80,
      opacity: 0.12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-white.svg",
    width: "360",
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 54%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin();
    },
    style: {
      width: 380,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-h2)',
      color: 'var(--text-strong)'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-body)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "Welcome back to Sanlam Online.")), /*#__PURE__*/React.createElement(Input, {
    label: "Username or ID number",
    placeholder: "8001015009087",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 18
    }),
    defaultValue: "8001015009087"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 18
    }),
    defaultValue: "password"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remember me",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: 'var(--role-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-link)',
      textDecoration: 'none'
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      font: 'var(--role-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "New to Sanlam? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-link)',
      textDecoration: 'none'
    }
  }, "Register")))));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Shell.jsx
try { (() => {
// Sanlam Online — shared app chrome (sidebar + top bar).
const {
  Logo,
  Icon,
  IconButton,
  Badge
} = window.SanlamDesignSystem_c1c142;
const NAV = [{
  id: 'dashboard',
  label: 'Overview',
  icon: 'layout-dashboard'
}, {
  id: 'cover',
  label: 'My cover',
  icon: 'shield'
}, {
  id: 'invest',
  label: 'Investments',
  icon: 'trending-up'
}, {
  id: 'claims',
  label: 'Claims',
  icon: 'file-text'
}, {
  id: 'payments',
  label: 'Payments',
  icon: 'credit-card'
}, {
  id: 'documents',
  label: 'Documents',
  icon: 'folder'
}];
function Sidebar({
  route,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 244,
      flex: '0 0 244px',
      background: '#fff',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--space-6) var(--space-4)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    tone: "blue",
    height: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, NAV.map(n => {
    const on = route === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNavigate(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: '10px var(--space-3)',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-md)',
        textAlign: 'left',
        font: 'var(--role-body)',
        fontWeight: on ? 'var(--weight-bold)' : 'var(--weight-medium)',
        background: on ? 'var(--sl-blue-50)' : 'transparent',
        color: on ? 'var(--color-primary)' : 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 19
    }), " ", n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 'var(--space-4)',
      background: 'var(--sl-blue-50)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-caption)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--sl-blue-900)'
    }
  }, "Need advice?"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-caption)',
      color: 'var(--text-muted)',
      margin: '4px 0 10px'
    }
  }, "Talk to a Sanlam adviser."), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('cover'),
    style: {
      font: 'var(--role-caption)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--color-primary)',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, "Book a call \u2192")));
}
function TopBar({
  title,
  onLogout
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 68,
      flex: '0 0 68px',
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-h3)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      right: 6,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--sl-error)',
      border: '2px solid #fff'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      paddingLeft: 'var(--space-4)',
      borderLeft: '1px solid var(--border-subtle)',
      cursor: 'pointer'
    },
    onClick: onLogout
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--sl-blue-600)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--role-body)',
      fontWeight: 'var(--weight-bold)'
    }
  }, "TM"), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-body-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)'
    }
  }, "Thandi Mokoena"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--role-caption)',
      color: 'var(--text-muted)'
    }
  }, "Sign out")))));
}
Object.assign(window, {
  Sidebar,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
