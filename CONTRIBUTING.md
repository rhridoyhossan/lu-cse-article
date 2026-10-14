# Contributing to LU Article

Thank you for your interest in contributing to **LU Article**! We welcome contributions that help readers learn about technology, programming, web development, and other useful topics.

You can contribute by writing new articles, improving existing posts, correcting mistakes, or suggesting new ideas.

## Table of Contents

- [Getting Started](#getting-started)
- [How to Submit an Article](#how-to-submit-an-article)
- [Article Requirements](#article-requirements)
- [Writing Guidelines](#writing-guidelines)
- [Markdown Formatting](#markdown-formatting)
- [Images and Sources](#images-and-sources)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Publishing Process](#publishing-process)
- [Questions and Suggestions](#questions-and-suggestions)

## Getting Started

You do not need to know React or Next.js to contribute an article. Article posts are written in Markdown and stored in the `posts/` directory.

Before contributing:

1. Read the project's `README.md`.
2. Review `demo-article.md` for an example.
3. Choose a topic that will be useful to readers.
4. Follow the article format and guidelines below.

## How to Submit an Article

### Option 1: Using GitHub

1. Open the repository on GitHub.
2. Navigate to the `posts/` directory.
3. Create a new Markdown file or edit an existing article.
4. Write your article using the required frontmatter format.
5. Commit your changes.
6. If you do not have write access, fork the repository and open a pull request.

### Option 2: Using Git

Fork or clone the repository, create a branch, and add your article.

```bash
git clone https://github.com/rhridoyhossan/lu-cse-article.git
cd lu-cse-article

git checkout -b add-my-article
```

Create your article inside `posts/`, then run:

```bash
git add posts/my-article.md
git commit -m "Add my article"
git push origin add-my-article
```

Open a pull request on GitHub and wait for review.

## Article Requirements

Every article must:

- Be written in Markdown and saved with the `.md` extension.
- Have a clear and descriptive title.
- Include a short summary.
- Include the required metadata.
- Be original or properly attributed.
- Use a unique, lowercase filename with hyphens.
- Be easy to read and logically organized.
- Include reliable references when appropriate.

Examples of valid filenames:

- `getting-started-with-nextjs.md`
- `web-development-tips.md`
- `learn-javascript-basics.md`

The filename determines the article URL in the current website implementation. For example, `getting-started-with-nextjs.md` becomes `/blog/getting-started-with-nextjs`.

## Writing Guidelines

Write with clarity and purpose. Articles should be useful to readers, easy to scan, and logically organized.

A strong article usually includes:

- a clear title
- an introduction explaining the topic
- several well-organized sections
- practical examples or explanations
- a concise conclusion

Keep paragraphs focused, avoid unnecessary repetition, and make sure the content is readable on both desktop and mobile screens.

## Markdown Formatting

Use standard Markdown syntax.

**Headings**

```markdown
## Main Section

### Subsection
```

**Bold and italic text**

```markdown
**Important text**

*Emphasized text*
```

**Lists**

```markdown
- First item
- Second item
- Third item
```

**Links**

```markdown
[Official Next.js Website](https://nextjs.org)
```

**Code blocks**

````markdown
```javascript
console.log("Hello, world!");
```
````

**Images**

```markdown
![Descriptive alternative text](IMAGE_URL)
```

Use public image URLs that the website can access. Also you can add on ```/images``` directory.

## Images and Sources

- Use images that you own, have permission to use, or that are appropriately licensed.
- Include descriptive alternative text for meaningful images.
- Do not hotlink private or restricted images.
- Credit external sources when required by their licenses or terms.
- Use reputable references and link to the original source whenever possible.
- Never include passwords, API keys, access tokens, or other secrets in an article.

## Pull Request Guidelines

When submitting a pull request:

1. Use a clear title, such as `Add beginner JavaScript tutorial`.
2. Explain what the article covers.
3. Mention important references or sources.
4. Keep the changes focused on the intended contribution.
5. Verify that the frontmatter is valid YAML.
6. Check that the article's filename is appropriate.
7. Review the final changes before submitting.

Maintainers may request changes before approving a contribution.

## Publishing Process

The usual publishing workflow is:

1. An article is added or updated in the content repository.
2. The changes are committed or merged into the configured branch.
3. The Next.js website fetches the content from GitHub.
4. The website refreshes its cached content.
5. Published articles become available at their respective URLs.

The website is configured for approximately cache revalidation. This is not a guarantee that every update will appear exactly in few minutes after a commit.

Articles with `published: false` should remain hidden from the public blog, provided the website correctly filters unpublished content.

## Questions and Suggestions

If you find a problem, want to suggest an article topic, or need help with the contribution process, open an issue in the repository.

Thank you for contributing to LU Article and helping make it more useful for everyone!