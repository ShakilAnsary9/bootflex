# BootFlex

**BootFlex** is a lightweight, modern, component-based UI framework inspired by Bootstrap — built using modular SCSS and native Web Components. No dependencies, 100% customizable, and production-ready.

---

## 🚀 Features

- ✅ Modular SCSS architecture
- ✅ Built-in Web Components (`<boot-button>`, etc.)
- ✅ Easily extendable component system
- ✅ Works via CDN or NPM
- ✅ No frameworks or JS dependencies

---

## 📦 Installation

### Option 1: CDN

```html
<link rel="stylesheet" href="https://yourcdn.com/bootflex@1.0.0/style.css" />
<script
  type="module"
  src="https://yourcdn.com/bootflex@1.0.0/bootflex.js"
></script>
```

### Option 2: NPM

```bash
npm install bootflex
```

Then in your HTML or JS app:

```html
<link rel="stylesheet" href="node_modules/bootflex/dist/style.css" />
<script type="module" src="node_modules/bootflex/dist/bootflex.js"></script>
```

---

## 🧩 Components

### 🔘 Button

```html
<boot-button>Click Me</boot-button>
```

Attributes:

- `variant="primary"` (default)
- `variant="success"`, `danger`, `warning`, etc. _(customizable via SCSS)_

More components coming soon: Modal, Alert, Accordion, Card, etc.

---

## 📁 File Structure

```
bootflex/
├── src/
│   ├── styles/
│   │   ├── main.scss
│   │   └── components/
│   ├── components/
│   │   └── component-js/
│   └── index.js
├── dist/
│   ├── style.css
│   └── bootflex.js
├── vite.config.js
├── package.json
└── README.md
```

---

## ⚙️ Development

Build SCSS and JS:

```bash
npm run build
```

Run in development mode (with Vite):

```bash
npm run dev
```

---

## 🤝 Contributing

Pull requests are welcome! If you’d like to add new components or improvements, please open an issue to discuss the changes first.

---

## 📄 License

MIT License © 2025 [Shakil Ansary](https://github.com/shakilansary9)
