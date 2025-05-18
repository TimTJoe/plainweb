
### ✅ `STYLEGUIDE.md` – *PlainWeb Code Style Guide*

```markdown
# PlainWeb – Code Style Guide

This guide outlines the conventions for writing clean, readable, and maintainable code in the PlainWeb project.

---

## 🧱 Folder and File Structure

```

plainweb/
├── index.html
├── components/         # Component files (.js and optional .html/.css)
├── scripts/            # Core logic, router, state
├── css/                # Global and modular stylesheets
├── assets/             # Images, icons, and fonts

````

- Use **kebab-case** for file and folder names: `nav-bar.js`, `user-profile.html`
- Keep component logic self-contained in `components/` (e.g. template + logic)

---

## 🧩 Components

- One file = One component (render + behavior)
- Each component should export a `render()` function
- Optionally include props/state if needed

```js
// components/nav-bar.js
export default function NavBar() {
  return `
    <nav class="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  `;
}
````

---

## 🧠 State Management

* Use a central store object
* Avoid direct DOM manipulation in state logic
* Trigger re-renders via custom `render()` methods or signals

---

## 🌐 Routing

* Route files live in `scripts/router.js`
* Match routes by pattern and dynamically load components
* Use hash-based routing for simplicity: `#/about`

---

## 🎨 CSS Guidelines

* Place shared styles in `css/global.css`
* Keep component styles in separate files (optional)
* Use CSS variables for themes/colors

```css
:root {
  --primary: #2e86de;
  --accent: #f1c40f;
}
```

---

## ✅ Code Formatting

* **Indentation**: 2 spaces
* **Semicolons**: Required
* **Quotes**: Prefer double `" "` for HTML, single `' '` for JS
* **Naming**:

  * Variables/functions: `camelCase`
  * Constants: `UPPER_SNAKE_CASE`
  * Components: `PascalCase`

---

## 📄 HTML

* Keep `index.html` clean: only mount point and base layout
* Scripts at the end of `body`
* Use `data-*` attributes to bind events

---

## 📌 Best Practices

* DRY (Don’t Repeat Yourself)
* KISS (Keep It Simple, Stupid)
* Avoid global variables
* Use `export/import` for all modular JS

---

Happy hacking 👨🏾‍💻 — Keep it lean and clean.

````

---
