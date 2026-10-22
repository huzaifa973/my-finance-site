# PDF Naming Conventions for Teams: A Practical Checklist

Adopt one convention, write it down, enforce it gently. Here are the 30 rules.

## Core filename structure (10 rules)

The standard order: `YYYY-MM-DD-project-documenttype-version-status.pdf`

1. Always follow the same element order: date, project, document type, version, status.
2. Use lowercase for everything — mixed case creates duplicates on case-sensitive systems.
3. Separate words with hyphens, not spaces or underscores: `client-proposal.pdf`.
4. Include the document type in every filename: `-proposal`, `-invoice`, `-report`, `-contract`, `-brief`, `-summary`.
5. Use one project code per file, always in the same position (second element).
6. Mark status explicitly: `-draft` for work in progress, `-approved` when signed off.
7. Omit elements you don't need, but never reorder the ones you keep.
8. Cap filenames at ~60 characters — drop the date or project code first if needed.
9. Keep the extension visible and consistent: always `.pdf`, never `.PDF` or `.Pdf`.
10. Never rename a file someone else is actively editing — coordinate first.

Example: `2026-10-22-acme-client-proposal-v3-draft.pdf`

## Dates and versions (6 rules)

11. Use YYYY-MM-DD format: `2026-10-22`. It sorts chronologically everywhere.
12. Put the date at the START for time-sensitive documents (invoices, reports).
13. Version with v1, v2, v3 — never "final", "final2", "real-final".
14. Reset versioning to v1 only when the document is fundamentally rewritten.
15. Keep the date of the version's creation, not the project's start date.
16. Move superseded versions to an `/archive` subfolder instead of deleting them.

## Searchability (5 rules)

17. Include the keywords someone would search for: client name, document type, topic.
18. Avoid abbreviations only your team knows — future you won't remember them either.
19. Don't stuff: one mention of each key term is enough.
20. Keep related files adjacent by sharing the project code prefix.
21. Add the year at minimum even for evergreen files, so age is always visible.

## Client-facing files (4 rules)

22. Strip internal project codes before sending: `2026-10-22-client-proposal-v3.pdf`.
23. Remove `-draft` from anything leaving the company — or better, don't send drafts.
24. Check the filename reads professionally out loud — it appears in inboxes and downloads.
25. For contracts, include both parties: `2026-10-22-acme-dollarwise-contract-v1.pdf`.

## Rolling it out (5 rules)

26. Write the convention in a README at the top of your shared drive.
27. Send the one-paragraph version to the team chat — link to the full README.
28. Rename current active files first; archive the historical mess gradually.
29. Run a five-minute monthly audit: search for "final", "copy", "(1)", "untitled".
30. Add naming to onboarding: new hires see the README on day one.

## Quick filename examples

- `2026-10-22-acme-client-proposal-v3-draft.pdf`
- `2026-10-15-q3-marketing-report-v2-approved.pdf`
- `2026-10-22-invoice-1042-acme.pdf`
- `2026-09-30-employee-handbook-v5.pdf`
- `2026-10-22-acme-dollarwise-contract-v1.pdf`

## README template for your shared drive

```
# File Naming Convention

Order: YYYY-MM-DD-project-documenttype-version-status.pdf
- lowercase, hyphens, no spaces
- dates: YYYY-MM-DD at the start
- versions: v1, v2, v3 (never "final")
- status: -draft or -approved
- archive old versions to /archive

Examples:
2026-10-22-acme-client-proposal-v3-draft.pdf
2026-10-15-q3-marketing-report-v2-approved.pdf
```

---
From DollarWise (https://dollarwise.xyz/) — free resources, tools, and guides. 100% free forever.
