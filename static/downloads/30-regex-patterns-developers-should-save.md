# 30 Regex Patterns Every Developer Should Save (Full Collection)

Free from DollarWise — all 30 essential regex patterns with plain-English explanations. Written in widely compatible syntax for JavaScript, Python, PHP, Java, and most other languages. Drop the / delimiters when your language does not use them.

## Validation patterns

### 1. Email address

```regex
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

Practical email check: text, an @, text, a dot, text, no spaces. Not RFC-perfect, but catches every real-world mistake.

### 2. URL

```regex
/https?:\/\/[^\s/$.?#].[^\s]*/
```

Matches http and https URLs. Good for auto-linking URLs in comments and bios.

### 3. International phone number

```regex
/^\+?[1-9]\d{7,14}$/
```

Optional leading plus with 7 to 15 digits, matching the international E.164 range. Tighten the range for single-country apps.

### 4. Date in YYYY-MM-DD format

```regex
/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
```

Rejects impossible months and days like month 13. Still allows February 31, so pair with a real date parser for strict checks.

### 5. Time in 24-hour HH:MM format

```regex
/^([01]\d|2[0-3]):[0-5]\d$/
```

Matches times like 09:30 and 23:59 while rejecting 25:00 and 12:75.

### 6. IPv4 address

```regex
/^(?:\d{1,3}\.){3}\d{1,3}$/
```

Matches the four-group dotted shape. Does not verify each group is 255 or below, so add a numeric check when it matters.

### 7. Hex color code

```regex
/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
```

Matches CSS hex colors like #fff and #1a2b3c. Ideal for theme pickers and design tools.

### 8. URL slug

```regex
/^[a-z0-9]+(?:-[a-z0-9]+)*$/
```

Clean lowercase slugs like my-blog-post. No leading, trailing, or double dashes.

### 9. Strong password

```regex
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
```

Requires 8+ characters with lowercase, uppercase, digit, and special character. The lookaheads check each rule without consuming input.

### 10. Username (3-16 chars, letters, numbers, underscore)

```regex
/^[a-zA-Z0-9_]{3,16}$/
```

Simple, safe username rule used by countless apps.

### 11. US ZIP code

```regex
/^\d{5}(?:-\d{4})?$/
```

Matches 12345 and 12345-6789.

### 12. Positive integer

```regex
/^\d+$/
```

Whole numbers only, no signs, no decimals.

### 13. Decimal number

```regex
/^-?\d+(?:\.\d+)?$/
```

Optional negative sign with optional decimal part. Matches 42, -3.14, and 0.5.

### 14. Percentage

```regex
/^\d+(?:\.\d+)?%$/
```

Matches 50% and 99.9%. Strip the % before doing math.

### 15. Domain name

```regex
/^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/
```

Matches example.com and sub.example.co.uk. Does not validate that the domain actually exists.

### 16. UUID

```regex
/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
```

Matches standard UUIDs like 550e8400-e29b-41d4-a716-446655440000.

### 17. MAC address

```regex
/^(?:[0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/
```

Matches colon-separated MAC addresses like 01:23:45:67:89:AB.

### 18. Credit card number (loose, digits only)

```regex
/^\d{13,19}$/
```

Checks digit count only. Always run the Luhn algorithm for real validation, and never log full card numbers.

### 19. Base64 string

```regex
/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
```

Validates Base64 shape including padding. Does not guarantee the content decodes to anything meaningful.

### 20. ISO 8601 datetime

```regex
/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:?\d{2})?$/
```

Matches 2026-10-20T12:00:00Z and offsets like +05:00. Use a date library for real parsing.

## Extraction patterns

### 21. Strip HTML tags

```regex
/<[^>]*>/g
```

Removes tags from HTML strings. Fine for display cleanup; never rely on it for security sanitization.

### 22. Extract markdown links

```regex
/\[([^\]]+)\]\(([^)]+)\)/
```

Captures the link text in group 1 and the URL in group 2 from [text](url).

### 23. Hashtag

```regex
/#[A-Za-z0-9_]+/
```

Matches hashtags like #regex. Add the g flag to find all of them in a post.

### 24. File extension

```regex
/\.[a-zA-Z0-9]+$/
```

Grabs the extension from a filename, including the dot. Returns .pdf from report.pdf.

### 25. Duplicate words

```regex
/\b(\w+)\s+\1\b/
```

Finds repeated words like "the the" for proofreading cleanup.

## Cleanup patterns

### 26. Trim leading and trailing whitespace

```regex
/^\s+|\s+$/g
```

What String.trim() does under the hood. Replace matches with an empty string.

### 27. No leading or trailing spaces

```regex
/^\S(?:.*\S)?$/
```

Validates that input has no surrounding whitespace. Useful alongside the trim pattern.

### 28. Repeated character (3 or more in a row)

```regex
/(.)\1{2,}/
```

Catches "soooo" and "!!!!" in user input. Replace with "$1" to collapse them.

### 29. Number with thousand separators

```regex
/^\d{1,3}(?:,\d{3})*(?:\.\d+)?$/
```

Matches 1,234,567.89. Strip commas before converting to a number.

### 30. Letters only (single word)

```regex
/^[A-Za-z]+$/
```

Simple name or word check. Extend the character class for accented or non-Latin alphabets.

Free resource from DollarWise (dollarwise.xyz) — test every pattern against your edge cases before shipping.
