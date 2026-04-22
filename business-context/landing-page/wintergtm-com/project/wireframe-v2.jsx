// v2 — Clean/lighter wireframe, document-feel
// Smaller navy hero band. Body reads like a well-designed sales brief.
// Free-week as inventory-sheet. Feedback loop as horizontal 3-step flow.

const ACCENT_V2 = "#5ee2b6";
const NAVY_V2 = "#0B1220";
const INK_V2 = "#111";
const PAPER_V2 = "#FFFFFF";
const OFF_V2 = "#F6F5EE";
const LINE_V2 = "#e6e6df";
const MUTED_V2 = "#6a6a63";

const wireV2 = {
  page: {
    width: 1280,
    background: PAPER_V2,
    fontFamily: "'Inter', system-ui, sans-serif",
    color: INK_V2,
    overflow: "hidden",
  },
};

// --- HERO (smaller, navy, more document-like) ---
const HeroV2 = () => (
  <section style={{ background: NAVY_V2, color: PAPER_V2, padding: "72px 96px 96px", position: "relative" }}>
    {/* Minimal masthead bar */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #1e2942",
        paddingBottom: 24,
        marginBottom: 80,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        letterSpacing: 2,
        color: "#8a97b0",
      }}
    >
      <span style={{ color: PAPER_V2, fontWeight: 600 }}>WINTER / GTM</span>
      <span>SIGNAL-SCORED CALL LISTS</span>
      <span>EST. 2026</span>
    </div>

    <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 80, alignItems: "start" }}>
      <div>
        <h1
          style={{
            fontSize: 56,
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: -1.2,
            margin: "0 0 24px",
            textWrap: "balance",
          }}
        >
          Stop calling the same list as everyone else.
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.55, color: "#b8c0d0", margin: "0 0 40px", maxWidth: 540 }}>
          We score call lists using buying signals no one else can see — review complaint patterns,
          hiring moves, tech-stack gaps, licensing records, competitive switching. 25 ranked leads
          per metro, per segment, per week.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="https://gtm-signals.shanewinter.dev/index.html"
            style={{
              background: ACCENT_V2,
              color: NAVY_V2,
              padding: "16px 24px",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            See a Sample Report →
          </a>
          <a
            href="#"
            style={{
              color: PAPER_V2,
              padding: "16px 20px",
              fontWeight: 500,
              fontSize: 15,
              textDecoration: "none",
              border: `1px solid ${PAPER_V2}33`,
            }}
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>

      {/* Small "fact sheet" block — still typographic, no hero image */}
      <div style={{ border: `1px solid #1e2942`, padding: "28px 28px" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: ACCENT_V2, letterSpacing: 2, marginBottom: 20 }}>
          WHAT'S IN A SIGNAL LIST
        </div>
        {[
          ["Coverage", "1 metro × 1 industry segment"],
          ["Volume", "25 scored leads / week"],
          ["Signals", "Review, hiring, stack, licensing, switching"],
          ["Delivery", "Google Sheet + hosted dossier report"],
          ["Tuning", "Weekly, based on your rep feedback"],
          ["Terms", "Month-to-month. Cancel anytime."],
        ].map(([k, v], i, a) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "110px 1fr",
              gap: 16,
              padding: "12px 0",
              borderBottom: i < a.length - 1 ? "1px solid #1e2942" : "none",
              fontSize: 13,
            }}
          >
            <span style={{ color: "#6b7690", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 1 }}>
              {k.toUpperCase()}
            </span>
            <span style={{ color: PAPER_V2, lineHeight: 1.4 }}>{v}</span>
          </div>
        ))}
      </div>
    </div>

    <Annotation side="right" top={240} width={200} rotate={3}>
      fact-sheet panel replaces a hero image — still no pictorial visual
    </Annotation>
  </section>
);

// --- PROBLEM (calmer, list style) ---
const ProblemV2 = () => (
  <section style={{ padding: "110px 96px", background: PAPER_V2 }}>
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <SectionLabel n="02">The problem</SectionLabel>
      <h2 style={{ fontSize: 38, fontWeight: 600, letterSpacing: -0.6, margin: "0 0 48px", maxWidth: 780, lineHeight: 1.15 }}>
        Apollo and ZoomInfo give you firmographics. That's not a buying signal.
      </h2>
      <div style={{ borderTop: `1px solid ${LINE_V2}` }}>
        {PROBLEMS.map((p, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr",
              gap: 32,
              padding: "24px 0",
              borderBottom: `1px solid ${LINE_V2}`,
              alignItems: "baseline",
            }}
          >
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: MUTED_V2, letterSpacing: 1 }}>
              0{i + 1}
            </span>
            <p style={{ fontSize: 19, lineHeight: 1.5, margin: 0, color: "#1a1a1a" }}>{p}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- HOW IT WORKS (horizontal, restrained) ---
const HowV2 = () => (
  <section style={{ padding: "100px 96px", background: OFF_V2 }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel n="03">How it works</SectionLabel>
      <h2 style={{ fontSize: 36, fontWeight: 600, margin: "0 0 56px", letterSpacing: -0.5 }}>
        Three steps. Your first list is free.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 32px 1fr 32px 1fr", gap: 0, alignItems: "start" }}>
        {STEPS.map((s, i) => (
          <React.Fragment key={i}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: ACCENT_V2, letterSpacing: 1.5, marginBottom: 12 }}>
                STEP {s.n}
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 600, margin: "0 0 10px", lineHeight: 1.25 }}>{s.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: MUTED_V2, margin: 0 }}>{s.body}</p>
            </div>
            {i < 2 && (
              <div style={{ color: "#c0c0b7", alignSelf: "center", display: "flex", justifyContent: "center" }}>
                <span style={{ width: 18, height: 18 }}>{Ico.arrow}</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

// --- FREE WEEK (inventory-sheet grid, 2x4 tall cards) ---
const FreeWeekV2 = () => (
  <section style={{ padding: "120px 96px", background: PAPER_V2, position: "relative" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <SectionLabel n="04">The free week</SectionLabel>
      <h2 style={{ fontSize: 38, fontWeight: 600, letterSpacing: -0.6, margin: "0 0 14px", lineHeight: 1.1 }}>
        Here's what ships in week one. <span style={{ color: MUTED_V2 }}>Before invoice.</span>
      </h2>
      <p style={{ fontSize: 16, color: MUTED_V2, margin: "0 0 48px", maxWidth: 640 }}>
        Eight deliverables. The volume is the sell — if this is what shows up for free, the paid
        service is where it really earns its keep.
      </p>

      {/* Inventory-sheet header bar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50px 1fr 1.6fr 130px",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          letterSpacing: 1.5,
          color: MUTED_V2,
          padding: "10px 0",
          borderBottom: `1.5px solid ${INK_V2}`,
        }}
      >
        <span>#</span>
        <span>DELIVERABLE</span>
        <span>WHAT IT IS</span>
        <span style={{ textAlign: "right" }}>FORMAT</span>
      </div>

      {DELIVERABLES.map((d, i) => {
        const formats = ["DATA", "TEXT", "SHEET", "WEB", "DOC", "VIDEO", "DOC", "DOC"];
        return (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "50px 1fr 1.6fr 130px",
              padding: "22px 0",
              borderBottom: `1px solid ${LINE_V2}`,
              alignItems: "center",
              gap: 12,
            }}
          >
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: MUTED_V2 }}>
              0{i + 1}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 22, height: 22, color: ACCENT_V2 }}>{d.icon}</div>
              <span style={{ fontSize: 17, fontWeight: 600 }}>{d.title}</span>
            </div>
            <div style={{ fontSize: 15, color: "#333", lineHeight: 1.4 }}>{d.desc}</div>
            <div
              style={{
                textAlign: "right",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: 1.5,
                color: MUTED_V2,
              }}
            >
              {formats[i]}
            </div>
          </div>
        );
      })}

      <Annotation side="right" top={340} width={210} rotate={-2}>
        treated as an inventory sheet — reads dense & legible, volume is tangible
      </Annotation>
    </div>
  </section>
);

// --- FEEDBACK LOOP (horizontal 3-step flow, quieter) ---
const LoopV2 = () => (
  <section style={{ padding: "120px 96px", background: OFF_V2, position: "relative" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel n="05">The feedback loop</SectionLabel>
      <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: -0.6, margin: "0 0 16px", lineHeight: 1.1, maxWidth: 820 }}>
        Every call outcome tunes the model. That's the whole differentiator.
      </h2>
      <p style={{ fontSize: 17, color: MUTED_V2, maxWidth: 680, margin: "0 0 56px", lineHeight: 1.55 }}>
        Conversations, bookings, rejections, ghosts — all of it flows back into the scoring
        weights. The longer we work together, the better your leads get.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 56px 1fr 56px 1fr", gap: 0, alignItems: "stretch" }}>
        {[
          { n: "01", title: "You call", body: "Your reps work the scored list we delivered Monday." },
          { n: "02", title: "You report outcomes", body: "Conversations, bookings, rejections. One click per lead." },
          { n: "03", title: "We tune weights", body: "Signals that closed get amplified. Signals that didn't get dimmed." },
        ].map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ background: PAPER_V2, border: `1px solid ${LINE_V2}`, padding: "32px 28px" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: ACCENT_V2, letterSpacing: 1.5, marginBottom: 12 }}>
                {s.n}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 10px" }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: MUTED_V2, margin: 0, lineHeight: 1.55 }}>{s.body}</p>
            </div>
            {i < 2 && (
              <div style={{ color: "#c0c0b7", alignSelf: "center", display: "flex", justifyContent: "center" }}>
                <span style={{ width: 20, height: 20 }}>{Ico.arrow}</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Loop-back indicator */}
      <div style={{ position: "relative", marginTop: 24, height: 40 }}>
        <svg width="100%" height="40" viewBox="0 0 1100 40" preserveAspectRatio="none">
          <path d="M 1040 4 Q 1070 20, 1040 36 L 60 36 Q 30 20, 60 4" fill="none" stroke={ACCENT_V2} strokeWidth="1.5" strokeDasharray="4 4" />
          <polygon points="66,0 54,4 66,8" fill={ACCENT_V2} />
        </svg>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 10,
            transform: "translateX(-50%)",
            background: OFF_V2,
            padding: "0 16px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: MUTED_V2,
            letterSpacing: 1.5,
          }}
        >
          ↺ NEXT WEEK'S LIST IS SMARTER
        </div>
      </div>
      <Annotation side="left" top={200} width={190} rotate={2}>
        horizontal flow w/ loop-back line instead of a circle — quieter, still makes the point
      </Annotation>
    </div>
  </section>
);

// --- ROI CALCULATOR (inline, lighter) ---
const RoiV2 = () => (
  <section style={{ padding: "120px 96px", background: PAPER_V2 }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel n="06">ROI calculator</SectionLabel>
      <h2 style={{ fontSize: 38, fontWeight: 600, letterSpacing: -0.6, margin: "0 0 48px" }}>
        What's it worth?
      </h2>

      <div style={{ border: `1px solid ${LINE_V2}`, padding: 0 }}>
        <div style={{ padding: "32px 40px", borderBottom: `1px solid ${LINE_V2}` }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: MUTED_V2, letterSpacing: 1.5, marginBottom: 20 }}>
            INPUTS
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }}>
            {[
              { label: "Average deal size", val: "$12,000", unit: "USD" },
              { label: "Avg. customer lifetime", val: "24", unit: "months" },
              { label: "Signal lists needed", val: "3", unit: "lists" },
            ].map((f, i) => (
              <div key={i}>
                <label style={{ fontSize: 13, color: MUTED_V2, display: "block", marginBottom: 10 }}>
                  {f.label}
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    borderBottom: `1.5px solid ${INK_V2}`,
                    paddingBottom: 10,
                  }}
                >
                  <span style={{ fontSize: 28, fontWeight: 500 }}>{f.val}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: MUTED_V2, letterSpacing: 1 }}>
                    {f.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "32px 40px", background: OFF_V2 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: MUTED_V2, letterSpacing: 1.5, marginBottom: 20 }}>
            OUTPUT · SAMPLE
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }}>
            {[
              { label: "Monthly cost", val: "$2,550", sub: "3 × $850/mo" },
              { label: "Deals to break even", val: "0.21", sub: "per month, on LTV" },
              { label: "Projected annual ROI", val: "11.3×", sub: "assuming 4 new deals/yr" },
            ].map((f, i) => (
              <div key={i}>
                <div style={{ fontSize: 13, color: MUTED_V2, marginBottom: 8 }}>{f.label}</div>
                <div style={{ fontSize: 36, fontWeight: 500, letterSpacing: -0.5, marginBottom: 4, color: INK_V2 }}>
                  {f.val}
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: MUTED_V2, letterSpacing: 0.5 }}>
                  {f.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- PRICING ---
const PricingV2 = () => {
  const tiers = [
    { range: "1–2 lists", price: "$1,000", note: "Getting started" },
    { range: "3–4 lists", price: "$850", note: "Multi-metro or multi-segment" },
    { range: "5+ lists", price: "$750", note: "Team-wide rollout" },
  ];
  return (
    <section style={{ padding: "120px 96px", background: OFF_V2 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel n="07">Pricing</SectionLabel>
        <h2 style={{ fontSize: 38, fontWeight: 600, letterSpacing: -0.6, margin: "0 0 14px" }}>
          Per list, per month.
        </h2>
        <p style={{ fontSize: 16, color: MUTED_V2, margin: "0 0 48px" }}>
          1 signal list = 1 metro × 1 industry segment × 25 scored leads/week. Month-to-month,
          cancel anytime.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, background: PAPER_V2, border: `1px solid ${LINE_V2}` }}>
          {tiers.map((t, i) => (
            <div
              key={i}
              style={{
                padding: "40px 32px",
                borderRight: i < 2 ? `1px solid ${LINE_V2}` : "none",
              }}
            >
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 1.5, color: MUTED_V2, marginBottom: 14 }}>
                {t.range.toUpperCase()}
              </div>
              <div style={{ fontSize: 44, fontWeight: 500, letterSpacing: -1, marginBottom: 4 }}>
                {t.price}
                <span style={{ fontSize: 14, fontWeight: 400, color: MUTED_V2 }}>&nbsp;/mo per list</span>
              </div>
              <div style={{ fontSize: 14, color: MUTED_V2 }}>{t.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FINAL CTA (restrained) ---
const FinalV2 = () => (
  <section style={{ padding: "120px 96px", background: NAVY_V2, color: PAPER_V2 }}>
    <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "left", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 60, alignItems: "center" }}>
      <div>
        <h2 style={{ fontSize: 52, fontWeight: 600, letterSpacing: -1.2, lineHeight: 1.05, margin: "0 0 20px" }}>
          Get your free signal list.
        </h2>
        <p style={{ fontSize: 18, color: "#b8c0d0", margin: 0, lineHeight: 1.5 }}>
          Tell us one metro and one segment. We'll deliver 25 scored leads next week. No invoice.
          No contract.
        </p>
      </div>
      <div>
        <a
          href="#"
          style={{
            background: ACCENT_V2,
            color: NAVY_V2,
            padding: "18px 28px",
            fontWeight: 600,
            fontSize: 16,
            textDecoration: "none",
            display: "inline-block",
            marginBottom: 20,
          }}
        >
          Book a Free Strategy Call →
        </a>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#6b7690", letterSpacing: 1.5 }}>
          WINTERGTM.COM
        </div>
      </div>
    </div>
  </section>
);

const WireframeV2 = () => (
  <div style={wireV2.page} data-screen-label="v2 Clean/Light">
    <HeroV2 />
    <ProblemV2 />
    <HowV2 />
    <FreeWeekV2 />
    <LoopV2 />
    <RoiV2 />
    <PricingV2 />
    <FinalV2 />
  </div>
);

window.WireframeV2 = WireframeV2;
