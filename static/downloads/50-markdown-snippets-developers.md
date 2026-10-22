# 50 Markdown Snippets Every Developer Should Save

Copy-paste ready. Rendering notes: GFM = GitHub Flavored Markdown. Most snippets
work in GitLab, Obsidian, Notion (import), and VS Code preview unless noted.

## Text formatting (8)

1. Bold, italic, strikethrough, inline code:
`**bold**` `*italic*` `~~strikethrough~~` `` `inline code` ``

2. Subscript and superscript (HTML, works on GitHub):
`H<sub>2</sub>O and E=mc<sup>2</sup>`

3. Forced line break — two trailing spaces:
```
First line··
Second line
```

4. Escaping special characters:
`\*not italic\*` `\# not a heading`

5. Horizontal rules (three or more):
`---` or `***` or `___`

6. Blockquote with nesting:
```
> Outer quote
>> Nested quote
```

7. Highlight (HTML, works on GitHub):
`<mark>highlighted text</mark>`

8. Small text (HTML):
`<small>fine print here</small>`

## Links and references (6)

9. Inline link with title:
`[link text](https://example.com "optional title")`

10. Reference-style link (cleaner for repeated URLs):
```
[link text][ref]
[ref]: https://example.com
```

11. Anchor link to a heading on the same page:
`[Jump to setup](#setup-and-installation)`

12. Badge (shields.io):
`[![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://example.com)`

13. Image with alt text and title:
`![alt text](image.png "hover title")`

14. Clickable image:
`[![alt](thumb.png)](https://example.com)`

## Code and diffs (8)

15. Fenced code block with language tag:
```` ```python
print("hello")
``` ````

16. Diff highlighting:
```` ```diff
- removed line
+ added line
``` ````

17. Inline code inside a sentence:
``Use the `fetch()` API, not `XMLHttpRequest`.``

18. Collapsible code block:
```
<details>
<summary>View full log</summary>

```text
log output here
```

</details>
```

19. Keyboard keys:
`<kbd>Ctrl</kbd> + <kbd>C</kbd>`

20. Terminal session:
```` ```bash
$ npm install
$ npm run dev
``` ````

21. Code with filename comment:
```` ```js
// config.js
export default { port: 3000 };
``` ````

22. Escaping backticks inside code: wrap with double backticks:
``` ``Use `code` here`` ```

## Tables and data (8)

23. Basic table:
```
| Name | Role |
|------|------|
| Ana  | Dev  |
```

24. Aligned columns:
```
| Left | Center | Right |
|:-----|:------:|------:|
| a    |   b    |     c |
```

25. Emoji as status icons:
`| ✅ Done | ⏳ In progress | ❌ Blocked |`

26. Inline code inside tables works:
`| \`npm install\` | Installs deps |`

27. Table inside a list: indent the table to the list level.

28. Simple key-value without a table:
```
- **Version:** 2.4.1
- **License:** MIT
```

29. Multi-line cell with `<br>`:
`| Line one<br>Line two |`

30. Table of contents (manual):
```
- [Setup](#setup)
- [Usage](#usage)
```

## Callouts and structure (10)

31. GitHub NOTE alert:
```
> [!NOTE]
> Useful information.
```

32. GitHub WARNING alert:
```
> [!WARNING]
> Urgent info needing attention.
```

33. GitHub TIP alert:
```
> [!TIP]
> Helpful advice.
```

34. GitHub IMPORTANT alert:
```
> [!IMPORTANT]
> Key information for success.
```

35. GitHub CAUTION alert:
```
> [!CAUTION]
> Advises about risks.
```

36. Details/summary dropdown:
```
<details>
<summary>Click to expand</summary>
Hidden content here.
</details>
```

37. Footnote:
```
Here is a claim.[^1]
[^1]: The source or explanation.
```

38. Definition list (some renderers):
```
Term
: Definition of the term
```

39. Comment (invisible in render):
`<!-- This is a hidden comment -->`

40. Centered content (HTML):
`<p align="center">Centered text</p>`

## Diagrams and docs (10)

41. Mermaid flowchart (GitHub renders natively):
```` ```mermaid
flowchart LR
    A[Start] --> B{Ready?}
    B -->|Yes| C[Go]
    B -->|No| D[Wait]
``` ````

42. Mermaid sequence diagram:
```` ```mermaid
sequenceDiagram
    User->>API: POST /login
    API-->>User: 200 token
``` ````

43. Task list:
```
- [x] Done item
- [ ] Todo item
```

44. Nested task list:
```
- [ ] Parent
  - [x] Child done
  - [ ] Child todo
```

45. README header template:
```
# Project Name
> One-line description.
[![License](badge-url)](link)
```

46. README section skeleton:
```
## Installation
## Usage
## Configuration
## Contributing
## License
```

47. Changelog entry:
```
## [1.2.0] - 2026-10-22
### Added
- New feature
### Fixed
- Bug fix
```

48. Issue template snippet:
```
**Expected:**
**Actual:**
**Steps to reproduce:**
1.
```

49. PR description snippet:
```
## What changed
## Why
## Testing
- [ ] Unit tests pass
```

50. License line:
`Licensed under the [MIT License](LICENSE).`

---
From DollarWise (https://dollarwise.xyz/) — free resources, tools, and guides. 100% free forever.
