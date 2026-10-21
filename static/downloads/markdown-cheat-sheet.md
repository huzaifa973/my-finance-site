# Markdown Cheat Sheet (Printable Reference)

Everything below is standard Markdown that works in GitHub, Notion, Hugo, Obsidian, and most editors. Copy any block and adapt it.

## Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

## Emphasis

```markdown
*italic* or _italic_
**bold** or __bold__
***bold and italic***
~~strikethrough~~
```

## Lists

```markdown
- Unordered item
- Another item
  - Nested item (2 spaces)

1. Ordered item
2. Second item
   1. Nested ordered item

- [ ] Unfinished task
- [x] Finished task
```

## Links and images

```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Hover title")
<https://example.com> (bare URL)

![Alt text](image.jpg)
![Alt text](image.jpg "Image title")
[![Alt text](thumb.jpg)](full.jpg) (clickable image)
```

## Code

~~~markdown
`inline code`

    indented code block (4 spaces)

```python
fenced code block with language
print("hello")
```
~~~

## Blockquotes

```markdown
> A quoted paragraph.
>
> Second paragraph of the quote.
>
> > A nested quote.
```

## Tables

```markdown
| Name  | Age | City    |
|-------|-----|---------|
| Ayesha| 28  | Karachi |
| Bilal | 34  | Lahore  |

| Left-aligned | Centered | Right-aligned |
|:-------------|:--------:|--------------:|
| a            | b        | c             |
```

## Horizontal rules and line breaks

```markdown
---  (three dashes)
***  (three asterisks)
___  (three underscores)

Two trailing spaces
creates a line break.
```

## Escaping special characters

```markdown
\*not italic\*  -> renders literally as *not italic*
\# not a heading
\[not a link\]
\\ backslash
```

## Footnotes (GitHub / Hugo)

```markdown
Here is a statement.[^1]

[^1]: The footnote text goes here.
```

## Definition lists (some flavors)

```markdown
Term
: Definition of the term
```

---

## Quick rules

- Leave a blank line before and after block elements (headings, lists, code blocks, tables) or they may not render.
- One `#` per heading level — never skip from `#` to `###`.
- In tables, the alignment row (`|:---|`) must come immediately after the header row.
- Reference-style links keep long documents readable: define `[id]: url` once, use `[text][id]` everywhere.
