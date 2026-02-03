# DECISIONS.md — Portfolio Site Decision Log

Track all proposed, approved, and rejected changes here.

---

## 📋 Pending

<!-- Format:
### [DATE] Decision Title
- **Proposed by:** Agent/Human
- **Context:** Why this came up
- **Options:** What was considered
- **Recommendation:** What we suggest
- **Status:** Awaiting approval
-->

### [2025-07-27] Fix outdated content in data.ts
- **Proposed by:** PM Agent (initial audit)
- **Context:** Multiple fields are outdated — location says Chicago (should be Boston), AmFam listed as "upcoming internship" (already started), email is placeholder
- **Recommendation:** Update all outdated fields in one batch
- **Status:** Awaiting approval

### [2025-07-27] Remove dead code (profile-section.tsx, seo-head.tsx, button.tsx)
- **Proposed by:** PM Agent (initial audit)
- **Context:** These components are imported nowhere and add confusion
- **Recommendation:** Delete all three files
- **Status:** Awaiting approval

### [2025-07-27] Add analytics (Plausible or GA4)
- **Proposed by:** PM Agent (initial audit)
- **Context:** No way to measure traffic or understand visitors
- **Recommendation:** Plausible (privacy-friendly, simple) or GA4
- **Status:** Awaiting approval

---

## ✅ Approved

### [2026-02-01] Fix outdated content — APPROVED
### [2026-02-01] Remove dead code — APPROVED
### [2026-02-01] Add GA4 analytics — APPROVED

---

## ❌ Rejected

<!-- Move decisions here if rejected with reasoning -->
