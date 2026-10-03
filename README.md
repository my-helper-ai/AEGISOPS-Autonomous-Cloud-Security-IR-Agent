# AEGISOPS — Autonomous Cloud Security & Incident Response Agent

> "AegisOps is an agentic AI-powered cloud security and incident response platform that autonomously investigates simulated cloud and security incidents by coordinating specialized analysis agents. It combines cloud telemetry analysis, security-event correlation, identity and device risk assessment, and Zero Trust policy evaluation to produce explainable incident decisions and response recommendations. The platform demonstrates how agentic AI can assist security and cloud operations teams while maintaining human oversight for high-impact actions."

**All telemetry is SIMULATED. No AWS/Azure credentials, no API keys, no backend required.**

## Two ways to view the project

### 1. Instant preview (zero setup — recommended)
Just double-click **`AegisOps.html`** at the top of this folder.
This is a pre-built single-file bundle (~850 KB) with React and all CSS inlined — it works offline and even from a USB stick.

If your browser blocks scripts under `file://`, run a tiny static server (one command, no install needed):
```bash
cd AegisOps-v1.0.0
python3 -m http.server 8080
# then open http://localhost:8080/AegisOps.html
```

### 2. Developer mode (editable source)
```bash
cd AegisOps-v1.0.0
npm install        # install React, Vite, Tailwind, Recharts, Vitest (~2 min, Node 18+)
npm run dev        # open http://localhost:5173
npm test           # 11-test Vitest suite (TC001–TC008 + engine integrity)
npm run build      # rebuild the single-file bundle → dist/index.html
python3 scripts/make_pptx.py    # regenerate the .pptx into deliverables/
```

## Folder Structure

```
AegisOps-v1.0.0/
├── AegisOps.html          # ⭐ DOUBLE-CLICK THIS for instant preview
├── README.md
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
├── index.html             # Vite dev-server entry (needs `npm run dev`)
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── src/                   # 30 source files (App.tsx, pages/, lib/, components/)
├── tests/                 # riskEngine.test.ts (Vitest, 11/11 passing)
├── docs/                  # README, ARCHITECTURE, ZERO_TRUST, HOW_IT_WORKS,
│                          # DEMO, TESTING, VIVA
└── scripts/               # make_pptx.py — regenerates the .pptx
```

## The 30-Second Tour

1. **Overview** — SOC dashboard: 6 KPI cards, 5 charts, recent incidents, one-click DEMO scenarios.
2. **Incidents** — 18 simulated incidents with severity/status/type/risk filters.
3. **Investigate with AegisOps** — streams an 11-step agentic trace (Orchestrator → Cloud/Security Analyst → Zero Trust → IR → Reporting).
4. **Zero Trust** — the weighted risk formula, factor radar, decision bands and full access-decision table.
5. **Cloud Infrastructure** — 9 AWS-style services with live-jitter metrics and the degraded-incident state.
6. **Reports** — download the generated incident report as Markdown / HTML / TXT.
7. **Audit Logs** — append-only record of every agent action with risk scores.
8. **How It Works / Architecture / Documentation / Presentation** — the full academic write-up, in-app.

## What Makes It Agentic (not a chatbot, not a static dashboard)

- The **Orchestrator Agent** plans each investigation, selects the agent chain, correlates evidence and decides the probable root cause.
- Five **specialized agents** (Cloud Analyst, Security Analyst, Zero Trust Agent, Incident Response Agent, Reporting Agent) each call a **typed tool system** (`get_cloud_metrics`, `get_authentication_events`, `calculate_risk`, …).
- Every step **streams live** to the Agent Activity panel and is appended to the **audit log**.
- All reasoning has a **deterministic core** — the demo can never fail because an AI API key is missing.

## Honest Labelling

- All data is simulated and labelled as such in the UI, reports and documentation.
- The risk engine is a transparent weighted formula, not a claimed ML model.
- Response actions are **advisory only** — nothing destructive is ever executed automatically.

See `docs/` for the complete MCA-level documentation set.
