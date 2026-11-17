# Security Policy

## Supported versions

DentOS is early-stage. Only the latest commit on `main` is supported.

## Scope and current posture

DentOS 0.1 is a **local, single-user** application bound to `127.0.0.1`. It has no authentication, sessions, or roles, and must not be exposed to a network or production. It collects no student personal information or documents. Reports are most useful when they concern:

- Injection or cross-site scripting in the API or interface
- Bypasses of the same-origin write check or Content Security Policy
- Path traversal when serving static files
- Anything that could expose data beyond the local machine

## Reporting a vulnerability

Please **do not open a public issue**. Use GitHub's private vulnerability reporting for this repository (Security tab → "Report a vulnerability"). Include steps to reproduce and the impact you observed.

You can expect an acknowledgement within a few days. As this is a small student-led project, fixes are best-effort, but security reports are prioritized above feature work.

## Sensitive data

Never put patient information or sensitive student data into issues, pull requests, tests, or screenshots.
