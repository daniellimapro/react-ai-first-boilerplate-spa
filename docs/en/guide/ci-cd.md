# CI/CD

## CI Pipeline (GitHub Actions)

Runs on every push and pull request to `main` and `develop`.

**File:** `.github/workflows/ci.yml`

**Steps:**
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (`npm ci`)
4. Run ESLint (`npm run lint`)
5. Run Vitest (`npm run test`)

A PR cannot be merged if lint or tests fail.

## Docs Pipeline (GitHub Actions)

Builds and deploys VitePress docs to GitHub Pages on every push to `main`.

**File:** `.github/workflows/docs.yml`

**Steps:**
1. Build VitePress (`npm run docs:build`)
2. Upload artifact
3. Deploy to GitHub Pages

The docs site is available at:
```
https://daniellimapro.github.io/react-ai-first-boilerplate-spa/
```

## Pre-commit Hooks (Husky)

Runs locally before every commit:

- **pre-commit**: ESLint + Prettier on staged files (via lint-staged)
- **commit-msg**: Validates conventional commit format (via commitlint)

Valid commit types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `style`, `ci`

## Conventional Commits

```
feat(auth): add Clerk provider integration
fix(form): correct email validation regex
chore(deps): update tanstack router to v1.80
docs(readme): add auth slot examples
refactor(api): simplify error handling
test(dashboard): add protected route redirect test
```
