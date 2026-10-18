---
title: "JSON Validator: How to Find and Fix JSON Errors Fast"
description: "Invalid JSON breaks APIs and apps. Learn the most common JSON syntax errors, how to read error messages, and how to validate JSON free online."
date: 2026-10-14
tags: ["json", "validator", "developer tools"]
categories: ["text"]
draft: false
image: /images/json-validator-guide-fix-json-errors.svg
faq:
  - q: "What is a JSON validator?"
    a: "A JSON validator checks whether a JSON document follows the JSON syntax rules and reports the exact location of any error, so you can fix it instead of guessing."
  - q: "What is the most common JSON error?"
    a: "A trailing comma after the last item in an object or array. JavaScript allows it, JSON does not — and APIs reject the whole document because of it."
  - q: "Can comments be used in JSON?"
    a: "No. Standard JSON has no comment syntax. If you need notes, use JSONC or JSON5 formats in editors — but APIs and data files must be pure JSON."
  - q: "How do I fix 'Unexpected token' JSON errors?"
    a: "Paste the JSON into a validator and look at the reported line and column. The problem is almost always a missing quote, comma, or bracket right at that spot."
---

JSON runs the modern web. APIs speak it, configs are written in it, and data pipelines depend on it. And JSON is brutally unforgiving: one missing comma, one stray quote, one trailing comma — and the entire document is invalid. Your app throws "Unexpected token," your API returns a 400, and you are left staring at a wall of braces wondering where it broke. A JSON validator ends that guessing game. It parses your document, points at the exact line and character where the syntax fails, and tells you what it expected. This guide covers how validators work, the five errors that cause 95% of failures, and how to fix them in seconds.

## What a validator actually checks

JSON has a tiny, strict grammar: objects in curly braces, arrays in square brackets, double-quoted strings, numbers, `true`, `false`, and `null`. That is the whole language. A validator runs a parser over your text and verifies every character fits the grammar. The moment it finds something that does not fit — a single quote, a comment, a missing comma — it stops and reports the precise position and what it expected to find there.

Good validators go further: they pretty-print the structure so you can see nesting at a glance, highlight the exact error location, and sometimes auto-fix common mistakes like trailing commas.

## The five errors behind almost every failure

<!-- ADSENSE: in-article ad slot -->

### 1. Trailing commas
The undisputed champion. JavaScript allows a comma after the last array item; JSON does not.

```json
{ "name": "Ava", "role": "admin", }
```
That final comma before `}` invalidates the whole document. Delete it.

### 2. Single quotes instead of double quotes
JSON strings require double quotes — always. `'name'` is not a valid key; `"name"` is. This bites everyone who copies object literals out of JavaScript code.

### 3. Unquoted or malformed keys
Every object key must be a double-quoted string. `{ name: "Ava" }` is invalid; `{ "name": "Ava" }` is valid.

### 4. Comments
Standard JSON has no comment syntax. `//` and `/* */` are both illegal. Editors that support "JSON with comments" (JSONC) are showing you a superset — strip comments before sending data anywhere.

### 5. Mismatched brackets and braces
An extra `]` or a missing `}` somewhere in a 500-line file. The validator's line number is your lifeline here — the error is almost always exactly where it points, or one line above.

## How to fix JSON errors in seconds

Our [JSON validator](/tools/json-validator/) pinpoints errors instantly, free, in your browser:

1. **Paste your JSON** into the validator. It checks the syntax the moment you paste.
2. **Read the error.** It names the line, the column, and the offending character — "Unexpected token `}` at line 14, column 3."
3. **Look just before that spot.** The real mistake is usually a missing comma or quote one or two characters earlier, where the parser's expectations went off the rails.
4. **Fix and re-validate.** Correct it, and the validator confirms the whole document parses — or surfaces the next error, working top-down.

### Reading error messages like a pro
- *"Unexpected token"* — an illegal character at that position; check quotes and commas nearby.
- *"Unexpected end of JSON input"* — a missing closing brace or bracket; count your openers.
- *"Duplicate key"* — not a syntax error, but most validators flag it; the second value silently wins in most parsers.

<!-- AFFILIATE: code editors like VS Code with JSON extensions validate as you type, catching these errors before they ever reach production -->

## Validating large and nested JSON

Small snippets are easy; real-world JSON is not. For files with hundreds of lines, use the validator's pretty-print or tree view to collapse sections and scan the structure visually — a misplaced bracket usually reveals itself as an indentation break. When an API returns an error, validate the *response body* too, not just your request; truncated or HTML-wrapped responses (like a login page returned instead of JSON) are a classic source of "Unexpected token <" errors. And if you work with JSON daily, keep the validator bookmarked next to your API docs — pasting a response takes two seconds and beats reading raw minified text every time.

## Preventing JSON errors before they happen

Validation is the cure; these habits are the prevention. Generate JSON with a real serializer (`JSON.stringify`, Python's `json.dumps`) instead of hand-assembling strings. Keep a schema — even an informal one — so you know what shape the data should take. Lint config files in your editor with JSON language support turned on. And when an API hands you an error, validate the *response* too: sometimes the bug is in the data you received, not the data you sent.

One validator bookmarked, five error patterns memorized, and "Unexpected token" goes from a twenty-minute mystery to a twenty-second fix.

## Frequently asked questions

### What is a JSON validator?
A JSON validator checks whether a JSON document follows the JSON syntax rules and reports the exact location of any error, so you can fix it instead of guessing. Good ones also format the document for readability.

### What is the most common JSON error?
A trailing comma after the last item in an object or array. JavaScript allows it, JSON does not — and APIs reject the whole document because of it. Delete the comma and re-validate.

### Can comments be used in JSON?
No. Standard JSON has no comment syntax, so `//` and `/* */` both invalidate a document. If you need notes, use JSONC or JSON5 in your editor — but anything sent to an API must be pure JSON.

### How do I fix "Unexpected token" JSON errors?
Paste the JSON into a validator and look at the reported line and column. The problem is almost always a missing quote, comma, or bracket right at that spot — or one or two characters before it.
