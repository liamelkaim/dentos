# Contributing to DentOS

Thanks for helping build a free, open study workspace for dental students. DentOS is early-stage, so there is plenty of room to make a real difference, and no contribution is too small.

## Ways to help

- **Developers:** pick an issue labelled [`good first issue`](https://github.com/liamelkaim/dentos/labels/good%20first%20issue) or [`help wanted`](https://github.com/liamelkaim/dentos/labels/help%20wanted)
- **Dental students and educators:** tell us what a study tool should do, test the app, and report what confuses you
- **Translators and French speakers:** review and improve wording in the French and English interface
- **Accessibility reviewers:** test with a keyboard and screen reader and report findings

## Getting set up

Requires Node.js 24 or newer. There are no dependencies to install.

```sh
git clone https://github.com/<your-username>/dentos.git
cd dentos
npm test
npm start      # http://127.0.0.1:3000
```

## Making a change

1. Open or comment on an issue first for anything larger than a small fix
2. Create a branch from `main`
3. Keep the change focused: one concern per pull request
4. Run `npm test` and `npm run check`; both must pass
5. Add or update tests for behavior changes (see `test/catalog.test.mjs`)
6. Open a pull request and fill in the template

## Project principles

- **Honesty first.** The UI and docs must never claim a feature, source or verification that does not exist. Course data is user-entered and not verified.
- **Small and dependency-free.** Prefer built-in Node and browser APIs. Adding a dependency needs a clear justification in the issue.
- **Bilingual.** Every user-facing string needs both French and English in `public/app.js`.
- **Accessible.** Use labelled controls, visible focus, and semantic elements.
- **Privacy.** Do not collect student personal information, and never add real patient data to the repository, tests or examples.
- **Local-only until auth exists.** Do not add features that assume a network-exposed deployment before the Phase 2 prerequisites in [ROADMAP.md](ROADMAP.md) are met.

## Code style

The existing code is compact and framework-free. Match the surrounding style, keep functions small, and prefer clarity in new code. There is no formatter or linter configured yet; proposing one is a welcome issue.

## Reporting security issues

Please do not open public issues for vulnerabilities. See [SECURITY.md](SECURITY.md).

## Code of conduct

Participation is governed by the [Code of Conduct](CODE_OF_CONDUCT.md).
