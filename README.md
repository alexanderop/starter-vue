# Vue.js Starter Template

A modern Vue.js starter template with TypeScript, Pinia, Vue Router, TailwindCSS, and comprehensive testing setup. This template provides a robust foundation for building scalable Vue.js applications using the latest best practices.

## Features

- 🚀 [Vue 3.5](https://vuejs.org/) with Composition API
- ⚡️ [Vite 5](https://vitejs.dev/) for fast development and building
- 🎯 [TypeScript 5.6](https://www.typescriptlang.org/) for type safety
- 📦 [Pinia](https://pinia.vuejs.org/) for state management
- 🛣️ [Vue Router](https://router.vuejs.org/) with automatic route generation
- 🎨 [TailwindCSS 3](https://tailwindcss.com/) for utility-first styling
- ✅ Testing Setup:
  - [Vitest](https://vitest.dev/) for unit testing
  - [Playwright](https://playwright.dev/) for end-to-end testing
- 📝 [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- 🔧 Vue DevTools integration

## Prerequisites

- Node.js (version 20.x or higher recommended)
- npm (comes with Node.js)

## Getting Started

1. Use this template by clicking the "Use this template" button above
2. Clone your new repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint and fix files
- `npm run test:unit` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run type-check` - Check TypeScript types

## Project Structure

```
├── .github/           # GitHub configuration files
├── e2e/              # End-to-end tests
├── public/           # Public static assets
├── src/
│   ├── assets/       # Project assets
│   ├── components/   # Vue components
│   ├── composables/  # Composable functions
│   ├── layouts/      # Layout components
│   ├── pages/        # Route pages
│   ├── stores/       # Pinia stores
│   ├── App.vue       # Root component
│   └── main.ts       # Application entry point
├── test/             # Test utilities and setup
└── vite.config.ts    # Vite configuration
```

## TypeScript Support

This template is fully typed with TypeScript. Configuration files can be found in:

- `tsconfig.json`
- `tsconfig.node.json`
- `tsconfig.app.json`

## Testing

### Unit Tests

Unit tests are powered by Vitest. Run them with:

```bash
npm run test:unit
```

### E2E Tests

End-to-end tests use Playwright. Run them with:

```bash
npm run test:e2e
```

## ESLint Configuration

This template uses [@antfu/eslint-config](https://github.com/antfu/eslint-config) for consistent code style. Customize the rules in `.eslintrc` if needed.

## Customization

### TailwindCSS

Customize your TailwindCSS configuration in `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      // Add your customizations here
    },
  },
  plugins: [],
}
```

### Vite Configuration

Modify the Vite configuration in `vite.config.ts` to add plugins or adjust build settings.

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

[MIT](./LICENSE)
