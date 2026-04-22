# Tools — Stack & Integrations

## Outbound to FSM prospects (~60-90 total prospects)

### LinkedIn (primary channel)
- **Method:** Manual LinkedIn outreach + Dripify for automation/sequencing
- **Why LinkedIn-first:** Target list is small (~29 companies, 2-3 buyers each). This is a relationship play, not a volume play. Direct messages with the live Phoenix report link are the move.
- **No cold email platform needed** at this scale. If the target list grows, revisit Instantly or Apollo sequences.

### CRM
- **Platform:** None / spreadsheet for now
- **Recommended next step:** A simple Google Sheet or Notion board tracking: Company | Contact | Title | LinkedIn sent | Replied | Call booked | Status
- **When to upgrade:** If pipeline grows past 100 active prospects or you start running outbound for clients, move to HubSpot free or Close

### Scheduling
- **Platform:** Calendly (free tier) — recommended over raw Google Calendar for clean booking links and automatic timezone handling
- **Booking link URL:** Via wintergtm.com / Calendly
- **Who takes the first call:** Shane (founder-led sales)

### Enrichment & prospecting
- **Apollo** — Active subscription. Used for company discovery, contact search, org enrichment. MCP integration available for automation.
- **Target company list:** 29 companies identified (see `target-companies.md`), with Apollo org IDs for direct lookup

## Signal pipeline (the product we deliver to clients)

### Core stack
- **Language:** Python
- **Architecture:** Custom scripts + API integrations
- **Output:** Hosted interactive web report (e.g. gtm-signals.shanewinter.dev)

### Data sources
- State contractor licensing records (AZ ROC, etc. — expandable per state)
- Google Business Profile (review count, rating, review text analysis)
- Google Jobs (hiring posts — dispatcher, scheduler, technician roles)
- Website technology fingerprinting (detecting FSM platform presence/absence)
- State bond filings
- Social profiles (LinkedIn, Facebook, Instagram)

### Delivery
- **Format:** Hosted web dashboard with per-lead dossier pages + exportable data
- **Cadence:** Weekly refresh per metro
- **Capacity:** Any US metro on request. Pipeline is parameterized by metro/state.

## Setup TODO

- [x] Set up Calendly free tier with booking link
- [x] Create prospect tracking — Built as Notion database "WinterGTM — Prospect Tracker" with 27 companies loaded, board view by status
- [x] ~~Decide on Dripify vs. manual LinkedIn~~ — Going manual. List is too small for automation, no API/MCP, LinkedIn risk not worth it.
- [ ] Prepare 2-3 LinkedIn message templates that lead with the Phoenix report link
