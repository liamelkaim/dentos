# DentOS Roadmap

One phase at a time. Each phase should ship a complete, usable capability, and nothing is claimed as available until it is.

Status legend: ✅ available locally · 🚧 next · 🗓️ planned

| # | Phase | Status | Summary |
|---|---|---|---|
| 1 | Foundation and catalog | ✅ | Bilingual UI, themes, course catalog with sources, search/filter, JSON export, SQLite storage |
| 2 | Academic resources | 🚧 | Authentication via a maintained provider, authorization tests, course-offering management, private document uploads, version history |
| 3 | Past exams and questions | 🗓️ | Question bank with corrections and sources |
| 4 | Study tools and Anki | 🗓️ | Flashcards, spaced repetition, Anki import/export |
| 5 | AI course tutors | 🗓️ | Study support grounded in a student's own course material |
| 6 | Audio and transcription | 🗓️ | Lecture audio, transcripts |
| 7 | Personalized learning | 🗓️ | Adaptive study plans from the student's own progress |

## Before collaborative use (Phase 2 prerequisites)

DentOS must not be exposed to a network until these exist:

- A maintained authentication approach (managed OpenID Connect provider or a maintained self-hosted library), decided with a clear student-verification policy
- Authorization and role tests
- A full incremental migration runner (before migration 002)
- Moderation and reporting for shared content
- A documented backup and restore procedure

## Geographic expansion

1. **Quebec dental schools** (current focus), French and English
2. **Other Canadian dental programs**
3. **International programs**, with additional languages

## Near-term ideas (good places to help)

- Edit and delete courses (currently add and export only)
- Catalog import from the JSON export
- Mobile and full keyboard-navigation verification
- Browser-based automated accessibility checks
- PWA installation and offline mode

Have an idea? Open an issue using the feature template.
