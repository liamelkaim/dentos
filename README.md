# DentOS

**An open-source, bilingual (French/English) study workspace for dental students, starting with dental schools in Quebec.**

> Independent student project. Not affiliated with or endorsed by any university.

[![CI](https://github.com/liamelkaim/dentos/actions/workflows/ci.yml/badge.svg)](https://github.com/liamelkaim/dentos/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Status: early](https://img.shields.io/badge/status-early%20(Phase%201)-orange)

## Why DentOS?

Dental students juggle dense, program-specific coursework, and most study tools are generic, English-only, or not built around how Quebec programs are organized. DentOS aims to be a free, open, community-improvable workspace where students organize their courses, trace every piece of information back to a source, and (in later phases) share resources, practise past-exam style questions, and study with Anki-style tools and AI tutors grounded in their own courses.

The long-term goal is to become the most widely used dental study app in Canada, and then beyond. It is at the very beginning today, and honest about it: **Phase 1 is a working local foundation with no users yet.** Contributors, testers and dental students with opinions are very welcome.

## What works today (Phase 1)

- Responsive interface with French/English UI and a persisted language preference
- Light/dark themes (follows system preference, persisted)
- Course catalog: create, view details, search (case-insensitive) and filter by program year
- SQLite persistence across restarts, source attribution per course, duplicate-code protection
- Dashboard counts computed from real catalog data, never mock statistics
- JSON catalog export
- Accessible by design: native dialog, labelled form fields, visible focus outlines, skip link
- An honest in-app roadmap for features that do not exist yet

All course data is user-entered and never presented as official or verified.

## Quick start

Requires **Node.js 24 or newer**. There are no npm dependencies, API keys, accounts or paid services.

```sh
git clone https://github.com/liamelkaim/dentos.git
cd dentos
npm start
```

Open <http://127.0.0.1:3000>.

```sh
npm test         # API and validation tests (in-memory database)
npm run check    # JavaScript syntax checks
```

Optional environment variables: `PORT` (default `3000`), `HOST` (default `127.0.0.1`), `DATABASE_PATH` (default `data/dentos.sqlite`).

## Architecture

Deliberately small: native browser JavaScript/CSS, Node's built-in HTTP server and `node:sqlite`. No build step, no framework, no TypeScript.

| Path | Purpose |
|---|---|
| `server.mjs` | Local HTTP server, validation, database API |
| `public/` | Interface (`index.html`, `app.js`, `style.css`), translations and theme tokens |
| `migrations/001_catalog.sql` | Additive schema for courses and offerings, plus a migration ledger |
| `test/catalog.test.mjs` | API and validation tests |

Courses and offerings are separate tables so historical professor materials are not mixed into the catalog when offerings arrive in Phase 2.

## Security and limitations

This release is for **personal, local use only**. The server binds to `127.0.0.1` by default. Do not expose it to a network or production: there is no login, session management, student verification, role authorization or moderation. The API uses parameterized SQL, input size limits, same-origin write checks and a restrictive Content Security Policy, but this is not a production security or legal-compliance claim. No student personal information or documents are collected. Do not store patient or sensitive student information. See [SECURITY.md](SECURITY.md).

Preferences live in browser `localStorage`. Back up `data/dentos.sqlite` while the app is stopped; the JSON export is a catalog copy, not a tested restore mechanism.

## Roadmap

See [ROADMAP.md](ROADMAP.md) for the seven planned phases, from the current catalog foundation to academic resources, past-exam questions, study tools, AI course tutors and more.

## Contributing

DentOS is looking for its first contributors: developers, dental students, translators and educators. Read [CONTRIBUTING.md](CONTRIBUTING.md) and look for issues labelled [`good first issue`](https://github.com/liamelkaim/dentos/labels/good%20first%20issue).

## License

[MIT](LICENSE) © 2026 Liam Elkaim
