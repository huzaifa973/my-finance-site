---
title: "Markdown Cheat Sheet (Printable): Every Syntax You'll Ever Need"
description: "A complete printable Markdown cheat sheet: headings, lists, links, tables, code, and task lists with copy-paste examples. Free download."
date: 2026-10-21
tags: ["markdown", "cheat-sheet", "writing"]
categories: ["text"]
draft: false
image: /images/markdown-cheat-sheet.svg
slug: markdown-cheat-sheet
post_type: resource
faq:
  - q: "What is Markdown used for?"
    a: "Markdown is a lightweight way to format plain text that converts to HTML. It's the default formatting language for GitHub READMEs, Notion, Obsidian, Hugo and Jekyll blogs, Reddit, Discord, and most developer documentation."
  - q: "How do I learn Markdown quickly?"
    a: "Learn six things and you know 90% of daily Markdown: headings (#), bold/italic, unordered lists (-), ordered lists (1.), links [text](url), and fenced code blocks. Everything else in this cheat sheet is reference material for the remaining 10%."
  - q: "Why isn't my Markdown rendering?"
    a: "The most common cause is missing blank lines — block elements like lists, code blocks, and tables need an empty line before and after them. The second most common cause is inconsistent spacing in nested lists."
---

Markdown runs the writing world quietly: GitHub READMEs, Notion pages, Hugo blogs like this one, Obsidian notes, Reddit posts, and Discord messages all speak it. The syntax is tiny — you can learn the daily-use half in twenty minutes — but nobody memorizes the rest, which is why everyone keeps a cheat sheet open in another tab. This is that cheat sheet: every syntax element you'll ever need, each with a copy-paste example, organized from the everyday basics to the rarely-used extras. Writers, developers, students, and note-takers can print it, bookmark it, or download the plain-text version below.

## What's inside this cheat sheet

Twelve sections cover the complete practical syntax. Headings and emphasis handle document structure and inline formatting. Lists cover unordered, ordered, nested, and task lists. Links and images include titled links and clickable images. Code covers inline code, indented blocks, and fenced blocks with language highlighting. Blockquotes, tables (with column alignment), horizontal rules, and line breaks round out the layout tools. The final sections handle escaping special characters, footnotes, and definition lists — plus the four rendering rules that prevent 90% of "why isn't this working" moments.

## The complete cheat sheet

<ul class="res-list">
<li><strong>Headings</strong><pre class="res-text"># Heading 1
## Heading 2
### Heading 3
#### Heading 4</pre><button class="copy-btn" type="button">Copy</button></li>
<li><strong>Emphasis</strong><pre class="res-text">*italic* or _italic_
**bold** or __bold__
***bold and italic***
~~strikethrough~~</pre><button class="copy-btn" type="button">Copy</button></li>
<li><strong>Lists</strong><pre class="res-text">- Unordered item
- Another item
  - Nested item (2 spaces)

1. Ordered item
2. Second item

- [ ] Unfinished task
- [x] Finished task</pre><button class="copy-btn" type="button">Copy</button></li>
<li><strong>Links and images</strong><pre class="res-text">[Link text](https://example.com)
[Link with title](https://example.com "Hover title")

![Alt text](image.jpg)
[![Alt text](thumb.jpg)](full.jpg)</pre><button class="copy-btn" type="button">Copy</button></li>
<li><strong>Code</strong><pre class="res-text">`inline code`

```python
fenced block with language
print("hello")
```</pre><button class="copy-btn" type="button">Copy</button></li>
<li><strong>Blockquotes</strong><pre class="res-text">&gt; A quoted paragraph.
&gt;
&gt; &gt; A nested quote.</pre><button class="copy-btn" type="button">Copy</button></li>
<li><strong>Tables</strong><pre class="res-text">| Name   | Age | City    |
|--------|-----|---------|
| Ayesha | 28  | Karachi |
| Bilal  | 34  | Lahore  |

| Left | Center | Right |
|:-----|:------:|------:|
| a    | b      | c     |</pre><button class="copy-btn" type="button">Copy</button></li>
<li><strong>Horizontal rules and line breaks</strong><pre class="res-text">---

***

Two trailing spaces
creates a line break.</pre><button class="copy-btn" type="button">Copy</button></li>
<li><strong>Escaping special characters</strong><pre class="res-text">\*not italic\*
\# not a heading
\[not a link\]
\\ backslash</pre><button class="copy-btn" type="button">Copy</button></li>
<li><strong>Footnotes</strong><pre class="res-text">Here is a statement.[^1]

[^1]: The footnote text goes here.</pre><button class="copy-btn" type="button">Copy</button></li>
</ul>

## How to use this cheat sheet

1. Learn the big six first: headings, bold/italic, unordered lists, ordered lists, links, and fenced code blocks — that covers 90% of daily writing.
2. Copy any block above and replace the example content with yours; the syntax around it stays the same.
3. When something doesn't render, check the two classic causes: missing blank lines around block elements, and inconsistent nesting indentation.
4. For tables, remember the alignment row (`|:---|`) must sit directly under the header row or the table breaks.
5. Keep the downloadable text version in your notes app — it's plain text, so it works offline anywhere.

Print it, pin the tab, or save the download — whichever you choose, you'll stop googling "markdown table syntax" for the tenth time. The free download below has the full reference plus the quick-rules section in plain text.

<!-- ADSENSE: in-article ad slot -->

## Frequently asked questions

**What is Markdown used for?**
Markdown is a lightweight way to format plain text that converts to HTML. It's the default formatting language for GitHub READMEs, Notion, Obsidian, Hugo and Jekyll blogs, Reddit, Discord, and most developer documentation.

**How do I learn Markdown quickly?**
Learn six things and you know 90% of daily Markdown: headings (#), bold/italic, unordered lists (-), ordered lists (1.), links [text](url), and fenced code blocks. Everything else in this cheat sheet is reference material for the remaining 10%.

**Why isn't my Markdown rendering?**
The most common cause is missing blank lines — block elements like lists, code blocks, and tables need an empty line before and after them. The second most common cause is inconsistent spacing in nested lists.

<a class="btn-pro" href="/downloads/markdown-cheat-sheet.md" download>Download the cheat sheet</a>

<script>
(function(){document.querySelectorAll('.copy-btn').forEach(function(b){b.addEventListener('click',function(){var li=b.closest('li'),el=li?li.querySelector('.res-text'):null,t=el?el.textContent.trim():'';if(!t)return;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){var o=b.textContent;b.textContent='Copied';setTimeout(function(){b.textContent=o;},1500);});}});});})();
</script>
