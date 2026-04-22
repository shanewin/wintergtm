// Shared primitives for both wireframe versions

const Annotation = ({ children, side = "left", top = 0, width = 180, rotate = -2 }) => (
  <div
    className="annotation"
    style={{
      position: "absolute",
      [side]: -width - 16,
      top,
      width,
      transform: `rotate(${rotate}deg)`,
      fontFamily: "'Caveat', cursive",
      fontSize: 17,
      lineHeight: 1.15,
      color: "#6b6b6b",
      pointerEvents: "none",
    }}
  >
    <svg
      width={width}
      height="18"
      viewBox={`0 0 ${width} 18`}
      style={{ display: "block", marginBottom: 2, opacity: 0.6 }}
    >
      <path
        d={
          side === "left"
            ? `M ${width - 8} 9 Q ${width / 2} 2, 2 14`
            : `M 8 9 Q ${width / 2} 2, ${width - 2} 14`
        }
        fill="none"
        stroke="#9a9a9a"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      {side === "left" ? (
        <polygon points={`${width - 2},6 ${width - 2},14 ${width - 10},10`} fill="#9a9a9a" />
      ) : (
        <polygon points="2,6 2,14 10,10" fill="#9a9a9a" />
      )}
    </svg>
    {children}
  </div>
);

const Placeholder = ({ label, w = "100%", h = 120, dark = false }) => (
  <div
    style={{
      width: w,
      height: h,
      border: `1.5px dashed ${dark ? "#3a4458" : "#c7c7c0"}`,
      background: dark
        ? "repeating-linear-gradient(135deg, rgba(255,255,255,0.02) 0 8px, rgba(255,255,255,0) 8px 16px)"
        : "repeating-linear-gradient(135deg, #f4f4ee 0 8px, #fafaf7 8px 16px)",
      color: dark ? "#6b7690" : "#a0a098",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      letterSpacing: 0.3,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textTransform: "uppercase",
    }}
  >
    {label}
  </div>
);

const SectionLabel = ({ n, children }) => (
  <div
    style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      letterSpacing: 2,
      color: "#8a8a82",
      textTransform: "uppercase",
      marginBottom: 14,
    }}
  >
    <span style={{ color: "#b9b9b0" }}>{n}</span>
    &nbsp;&nbsp;{children}
  </div>
);

// Minimal line icons for deliverables (not decorative — purely structural glyphs)
const Ico = {
  list: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M7 9h10M7 13h10M7 17h6" />
      <circle cx="4.5" cy="9" r="0.6" fill="currentColor" />
      <circle cx="4.5" cy="13" r="0.6" fill="currentColor" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 5h16v11H9l-5 4V5z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  ),
  sheet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="16" />
      <path d="M3 9h18M3 14h18M9 4v16M15 4v16" />
    </svg>
  ),
  report: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 3h10l4 4v14H5z" />
      <path d="M15 3v4h4" />
      <path d="M8 12h8M8 15h5M8 18h7" />
    </svg>
  ),
  script: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M9 9h6M9 12h6M9 15h4" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="6" width="13" height="12" rx="1" />
      <path d="M16 10l5-3v10l-5-3z" />
    </svg>
  ),
  beaker: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 3v6l-5 10a2 2 0 002 3h12a2 2 0 002-3l-5-10V3" />
      <path d="M8 3h8" />
      <path d="M6 15h12" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="16" rx="1" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <rect x="7" y="13" width="3" height="3" />
    </svg>
  ),
  loop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12a8 8 0 0114-5l2-2v6h-6l2-2a6 6 0 00-10 3" />
      <path d="M20 12a8 8 0 01-14 5l-2 2v-6h6l-2 2a6 6 0 0010-3" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
};

// Free-week deliverables content (shared)
const DELIVERABLES = [
  { icon: Ico.list, title: "Scored list with dossiers", desc: "25+ leads, ranked by acquisition readiness" },
  { icon: Ico.chat, title: "Opening lines per lead", desc: "Referencing the actual signal that fired" },
  { icon: Ico.sheet, title: "Clean Google Sheet", desc: "Dated, filtered, ready to work" },
  { icon: Ico.report, title: "Interactive hosted report", desc: "Per-lead dossier pages" },
  { icon: Ico.script, title: "Sample call script", desc: "Using a real lead from your list" },
  { icon: Ico.video, title: "Video walkthrough", desc: "Methodology and how to use the list" },
  { icon: Ico.beaker, title: "Full methodology", desc: "Formula, weights, signals, data sources" },
  { icon: Ico.calendar, title: "Refresh cadence doc", desc: "What the ongoing service looks like" },
];

const PROBLEMS = [
  "Everyone's calling the same Apollo/ZoomInfo lists. Your reps are in line behind 50 other reps.",
  "Those lists have firmographics, not signals. Title, size, industry — nothing about whether they're ready to buy.",
  "Reps spend 80% of their day dialing accounts that aren't in-market. The pipeline pays for that waste.",
  "No one on your team can tell you, today, which 25 accounts are worth calling first.",
];

const STEPS = [
  { n: "01", title: "Book a call", body: "Tell us your metros, segments, and what your reps actually care about." },
  { n: "02", title: "Get your first list free", body: "We build a custom scored list for your ICP. No cost, no commitment." },
  { n: "03", title: "Weekly delivery starts", body: "New list every Monday, tuned by your team's feedback from the week before." },
];

Object.assign(window, {
  Annotation,
  Placeholder,
  SectionLabel,
  Ico,
  DELIVERABLES,
  PROBLEMS,
  STEPS,
});
