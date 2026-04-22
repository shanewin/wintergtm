// v1 — Dark/bold hero, signal-forward wireframe
// Full-bleed navy hero; typographic headline dominant; floating signal chips as atmosphere.
// Feedback loop gets oversized circular diagram treatment.

const ACCENT_V1 = "#5ee2b6"; // signal green-teal
const NAVY = "#0B1220";
const NAVY2 = "#131c30";
const INK = "#111";
const PAPER = "#FAFAF7";
const LINE = "#e6e6df";

const wireV1 = {
  page: {
    width: 1280,
    background: PAPER,
    fontFamily: "'Inter', system-ui, sans-serif",
    color: INK,
    overflow: "hidden",
  },
};

// --- HERO ---
const HeroV1 = () => {
  // Scatter of "signal" chips — wireframe atmosphere showing what kind of data lives behind the product
  const chips = [
    { t: "review complaint cluster", x: 60, y: 70, r: -4 },
    { t: "hiring: 3 CSRs posted", x: 780, y: 40, r: 3 },
    { t: "stack gap: no scheduling sw", x: 840, y: 540, r: -2 },
    { t: "license renewed Q1", x: 80, y: 520, r: 4 },
    { t: "switched away from competitor", x: 60, y: 610, r: -3 },
    { t: "domain age 14y · low site velocity", x: 870, y: 180, r: 2 },
  ];
  return (
    <section
      style={{
        position: "relative",
        background: NAVY,
        color: PAPER,
        padding: "120px 96px 140px",
        overflow: "hidden",
      }}
    >
      {/* Grid backdrop */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Floating signal chips */}
      {chips.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: c.x,
            top: c.y,
            transform: `rotate(${c.r}deg)`,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: 0.3,
            padding: "6px 10px",
            border: `1px dashed ${ACCENT_V1}66`,
            color: `${ACCENT_V1}`,
            background: "rgba(94,226,182,0.04)",
            borderRadius: 2,
            whiteSpace: "nowrap",
          }}
        >
          ◆ {c.t}
        </div>
      ))}

      <div style={{ position: "relative", maxWidth: 980, margin: "0 auto", textAlign: "left" }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: 3,
            color: ACCENT_V1,
            marginBottom: 28,
          }}
        >
          WINTER GTM — SIGNAL-SCORED CALL LISTS
        </div>
        <h1
          style={{
            fontSize: 68,
            lineHeight: 1.04,
            fontWeight: 600,
            letterSpacing: -1.5,
            margin: 0,
            marginBottom: 28,
            textWrap: "balance",
          }}
        >
          Your reps are dialing the same list
          <br />
          as everyone else.{" "}
          <span style={{ color: ACCENT_V1, fontStyle: "italic", fontWeight: 400 }}>
            That's the problem.
          </span>
        </h1>
        <p
          style={{
            fontSize: 21,
            lineHeight: 1.5,
            color: "#b8c0d0",
            maxWidth: 720,
            margin: "0 0 44px",
          }}
        >
          We build scored call lists using buying signals that don't exist in Apollo or ZoomInfo —
          review complaints, hiring moves, tech-stack gaps, license records, competitive
          switching. 25 ranked leads per metro, per segment, per week.
        </p>

        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a
            href="https://gtm-signals.shanewinter.dev/index.html"
            style={{
              background: ACCENT_V1,
              color: NAVY,
              padding: "18px 28px",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            See a Sample Report
            <span style={{ width: 18, height: 18 }}>{Ico.arrow}</span>
          </a>
          <a
            href="#"
            style={{
              color: PAPER,
              padding: "18px 24px",
              fontWeight: 500,
              fontSize: 16,
              textDecoration: "none",
              border: `1px solid ${PAPER}33`,
            }}
          >
            Book a Free Strategy Call →
          </a>
        </div>

        <div
          style={{
            marginTop: 56,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: "#6b7690",
            letterSpacing: 1,
          }}
        >
          BUILT BY A SALES OPERATOR · 15+ YRS B2B SAAS · INDUSTRY-AGNOSTIC
        </div>
      </div>

      <Annotation side="right" top={180} width={200} rotate={3}>
        headline carries everything — no hero image, no product mock
      </Annotation>
      <Annotation side="right" top={430} width={210} rotate={-2}>
        sample report is primary CTA (user request) — styled as the one thing to click
      </Annotation>
    </section>
  );
};

// --- PROBLEM ---
const ProblemV1 = () => (
  <section style={{ padding: "120px 96px", background: PAPER, position: "relative" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel n="02">The problem</SectionLabel>
      <h2
        style={{
          fontSize: 46,
          fontWeight: 600,
          letterSpacing: -0.8,
          margin: "0 0 64px",
          maxWidth: 820,
          lineHeight: 1.1,
        }}
      >
        Firmographics aren't buying signals. You already know this.
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px 80px" }}>
        {PROBLEMS.map((p, i) => (
          <div key={i} style={{ borderTop: `1px solid ${LINE}`, paddingTop: 20 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#9a9a92",
                letterSpacing: 1.5,
                marginBottom: 10,
              }}
            >
              0{i + 1}
            </div>
            <p style={{ fontSize: 20, lineHeight: 1.45, margin: 0, color: "#1a1a1a" }}>{p}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- HOW IT WORKS ---
const HowV1 = () => (
  <section style={{ padding: "100px 96px", background: "#f2f2ec", position: "relative" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel n="03">How it works</SectionLabel>
      <h2 style={{ fontSize: 40, fontWeight: 600, margin: "0 0 64px", letterSpacing: -0.6 }}>
        Three steps. First list is free.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
        {STEPS.map((s, i) => (
          <div key={i} style={{ background: PAPER, padding: "36px 32px", border: `1px solid ${LINE}` }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 40,
                color: ACCENT_V1,
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              {s.n}
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 600, margin: "0 0 12px" }}>{s.title}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.5, color: "#4a4a44", margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- FREE WEEK (4x2 GRID) ---
const FreeWeekV1 = () => (
  <section style={{ padding: "130px 96px", background: PAPER, position: "relative" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <SectionLabel n="04">The free week</SectionLabel>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, gap: 40 }}>
        <h2 style={{ fontSize: 46, fontWeight: 600, letterSpacing: -0.8, margin: 0, lineHeight: 1.1, maxWidth: 700 }}>
          Eight deliverables. <span style={{ color: "#9a9a92" }}>Before you pay a dime.</span>
        </h2>
        <p style={{ fontSize: 15, color: "#4a4a44", maxWidth: 340, margin: 0, lineHeight: 1.5 }}>
          If this is what gets shipped in week one for free, you can imagine what the paid service looks like.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 0, border: `1px solid ${LINE}` }}>
        {DELIVERABLES.map((d, i) => (
          <div
            key={i}
            style={{
              padding: "32px 28px 36px",
              borderRight: (i + 1) % 4 === 0 ? "none" : `1px solid ${LINE}`,
              borderBottom: i < 4 ? `1px solid ${LINE}` : "none",
              background: PAPER,
              minHeight: 200,
            }}
          >
            <div style={{ width: 28, height: 28, color: ACCENT_V1, marginBottom: 20 }}>{d.icon}</div>
            <h3 style={{ fontSize: 17, fontWeight: 600, margin: "0 0 8px", lineHeight: 1.25 }}>{d.title}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.5, color: "#55554e", margin: 0 }}>{d.desc}</p>
          </div>
        ))}
      </div>

      <Annotation side="right" top={280} width={200} rotate={2}>
        4×2 card grid — volume itself is the sell
      </Annotation>
    </div>
  </section>
);

// --- FEEDBACK LOOP (oversized circular diagram) ---
const LoopV1 = () => {
  const size = 520;
  return (
    <section style={{ padding: "140px 96px", background: NAVY, color: PAPER, position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <SectionLabel n="05">The feedback loop</SectionLabel>
          <h2 style={{ fontSize: 52, fontWeight: 600, letterSpacing: -1, lineHeight: 1.05, margin: "0 0 28px", color: PAPER }}>
            Every outcome tunes the model.
          </h2>
          <p style={{ fontSize: 20, lineHeight: 1.5, color: "#b8c0d0", maxWidth: 480, margin: "0 0 24px" }}>
            Conversations, bookings, rejections, ghosts — all of it flows back into the scoring
            weights. The signals that closed deals get amplified. The ones that didn't get dimmed.
          </p>
          <p style={{ fontSize: 20, lineHeight: 1.5, color: PAPER, maxWidth: 480, margin: 0, fontWeight: 500 }}>
            The longer we work together, the better your leads get. This is the whole differentiator.
          </p>
        </div>
        <div style={{ position: "relative", width: size, height: size, margin: "0 auto" }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <circle cx={size / 2} cy={size / 2} r={size / 2 - 40} fill="none" stroke={`${ACCENT_V1}`} strokeWidth="1.5" strokeDasharray="4 6" />
            {/* Arrow heads around circle */}
            {[0, 1, 2].map((i) => {
              const ang = (i * 2 * Math.PI) / 3 - Math.PI / 2;
              const cx = size / 2 + (size / 2 - 40) * Math.cos(ang);
              const cy = size / 2 + (size / 2 - 40) * Math.sin(ang);
              return <circle key={i} cx={cx} cy={cy} r="6" fill={ACCENT_V1} />;
            })}
          </svg>
          {[
            { label: "01 · We deliver", body: "25 scored leads, with signals", angle: -Math.PI / 2 },
            { label: "02 · You call", body: "Reps report outcomes", angle: -Math.PI / 2 + (2 * Math.PI) / 3 },
            { label: "03 · We tune", body: "Weights re-calibrate", angle: -Math.PI / 2 + (4 * Math.PI) / 3 },
          ].map((s, i) => {
            const r = size / 2 - 40;
            const cx = size / 2 + r * Math.cos(s.angle);
            const cy = size / 2 + r * Math.sin(s.angle);
            const boxW = 180;
            const boxH = 76;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: cx - boxW / 2,
                  top: cy - boxH / 2,
                  width: boxW,
                  height: boxH,
                  background: NAVY2,
                  border: `1px solid ${ACCENT_V1}`,
                  padding: "12px 14px",
                  textAlign: "left",
                }}
              >
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: ACCENT_V1, letterSpacing: 1, marginBottom: 6 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: 14, color: PAPER, lineHeight: 1.3 }}>{s.body}</div>
              </div>
            );
          })}
          <div
            style={{
              position: "absolute",
              left: size / 2 - 60,
              top: size / 2 - 30,
              width: 120,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "#8a97b0",
              letterSpacing: 1,
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            SCORING<br />MODEL
          </div>
        </div>
      </div>
      <Annotation side="left" top={180} width={200} rotate={-3}>
        the "aha" moment — full-bleed dark section, oversized diagram
      </Annotation>
    </section>
  );
};

// --- ROI CALCULATOR ---
const RoiV1 = () => (
  <section style={{ padding: "130px 96px", background: PAPER }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel n="06">ROI calculator</SectionLabel>
      <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: -0.6, margin: "0 0 48px" }}>
        How many deals to break even?
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, border: `1px solid ${LINE}` }}>
        <div style={{ padding: "40px 40px", borderRight: `1px solid ${LINE}` }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#9a9a92", letterSpacing: 1.5, marginBottom: 24 }}>
            INPUTS
          </div>
          {[
            { label: "Average deal size", val: "$12,000", unit: "USD" },
            { label: "Average customer lifetime", val: "24", unit: "months" },
            { label: "Number of signal lists needed", val: "3", unit: "lists" },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: 28 }}>
              <label style={{ fontSize: 13, color: "#55554e", display: "block", marginBottom: 8 }}>
                {f.label}
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: `1.5px solid ${INK}`,
                  padding: "14px 16px",
                  background: PAPER,
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: 22, fontWeight: 500 }}>{f.val}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#9a9a92", letterSpacing: 1 }}>
                  {f.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: "40px 40px", background: NAVY, color: PAPER }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: ACCENT_V1, letterSpacing: 1.5, marginBottom: 24 }}>
            OUTPUT · SAMPLE
          </div>
          {[
            { label: "Monthly cost", val: "$2,550", sub: "3 × $850/mo" },
            { label: "Deals to break even", val: "0.21", sub: "per month, on LTV" },
            { label: "Projected annual ROI", val: "11.3×", sub: "assuming 4 new deals/yr" },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: 26, paddingBottom: 24, borderBottom: i < 2 ? "1px solid #2a3452" : "none" }}>
              <div style={{ fontSize: 13, color: "#8a97b0", marginBottom: 6 }}>{f.label}</div>
              <div style={{ fontSize: 40, fontWeight: 500, letterSpacing: -0.5, marginBottom: 4 }}>{f.val}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#6b7690", letterSpacing: 0.5 }}>
                {f.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- PRICING ---
const PricingV1 = () => {
  const tiers = [
    { range: "1–2", price: "$1,000", note: "Getting started" },
    { range: "3–4", price: "$850", note: "Multi-metro or multi-segment", highlight: true },
    { range: "5+", price: "$750", note: "Team-wide rollout" },
  ];
  return (
    <section style={{ padding: "130px 96px", background: "#f2f2ec" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel n="07">Pricing</SectionLabel>
        <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: -0.6, margin: "0 0 16px" }}>
          Per list, per month. Month-to-month.
        </h2>
        <p style={{ fontSize: 16, color: "#55554e", margin: "0 0 48px" }}>
          1 signal list = 1 metro × 1 industry segment × 25 scored leads/week. Cancel anytime.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, border: `1px solid ${LINE}` }}>
          {tiers.map((t, i) => (
            <div
              key={i}
              style={{
                padding: "48px 36px",
                background: t.highlight ? NAVY : PAPER,
                color: t.highlight ? PAPER : INK,
                borderRight: i < 2 ? `1px solid ${t.highlight ? "#2a3452" : LINE}` : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: 1.5,
                  color: t.highlight ? ACCENT_V1 : "#9a9a92",
                  marginBottom: 14,
                }}
              >
                {t.range} LISTS
              </div>
              <div style={{ fontSize: 52, fontWeight: 500, letterSpacing: -1.5, marginBottom: 4 }}>
                {t.price}
                <span style={{ fontSize: 16, fontWeight: 400, color: t.highlight ? "#8a97b0" : "#9a9a92" }}>
                  &nbsp;/mo per list
                </span>
              </div>
              <div style={{ fontSize: 14, color: t.highlight ? "#b8c0d0" : "#55554e" }}>{t.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FINAL CTA ---
const FinalV1 = () => (
  <section style={{ padding: "140px 96px", background: NAVY, color: PAPER, position: "relative", overflow: "hidden" }}>
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
    <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", textAlign: "center" }}>
      <h2 style={{ fontSize: 68, fontWeight: 600, letterSpacing: -1.5, lineHeight: 1.05, margin: "0 0 28px" }}>
        Get your free signal list.
      </h2>
      <p style={{ fontSize: 20, color: "#b8c0d0", margin: "0 0 48px" }}>
        One metro, one segment, 25 scored leads. No cost. No contract.
      </p>
      <a
        href="#"
        style={{
          background: ACCENT_V1,
          color: NAVY,
          padding: "20px 32px",
          fontWeight: 600,
          fontSize: 17,
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        Book a Free Strategy Call →
      </a>
      <div style={{ marginTop: 64, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#6b7690", letterSpacing: 2 }}>
        WINTERGTM.COM · BUILT BY SHANE WINTER
      </div>
    </div>
  </section>
);

const WireframeV1 = () => (
  <div style={wireV1.page} data-screen-label="v1 Dark/Bold">
    <HeroV1 />
    <ProblemV1 />
    <HowV1 />
    <FreeWeekV1 />
    <LoopV1 />
    <RoiV1 />
    <PricingV1 />
    <FinalV1 />
  </div>
);

window.WireframeV1 = WireframeV1;
