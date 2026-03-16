# CI/CD

## Pipeline de CI (GitHub Actions)

Executado em todo push e pull request para `main` e `develop`.

**Arquivo:** `.github/workflows/ci.yml`

**Etapas:**
1. Checkout do código
2. Configurar Node.js 20
3. Instalar dependências (`npm ci`)
4. Executar ESLint (`npm run lint`)
5. Executar Vitest (`npm run test`)

Um PR não pode ser mergeado se o lint ou os testes falharem.

## Pipeline de Docs (GitHub Actions)

Gera e publica a documentação VitePress no GitHub Pages a cada push para `main`.

**Arquivo:** `.github/workflows/docs.yml`

**Etapas:**
1. Build do VitePress (`npm run docs:build`)
2. Upload do artefato
3. Deploy no GitHub Pages

O site de documentação está disponível em:
```
https://daniellimapro.github.io/react-ai-first-boilerplate-spa/
```

## Hooks de Pre-commit (Husky)

Executados localmente antes de cada commit:

- **pre-commit**: ESLint + Prettier nos arquivos staged (via lint-staged)
- **commit-msg**: Valida o formato do commit convencional (via commitlint)

Tipos de commit válidos: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `style`, `ci`

## Conventional Commits

```
feat(auth): add Clerk provider integration
fix(form): correct email validation regex
chore(deps): update tanstack router to v1.80
docs(readme): add auth slot examples
refactor(api): simplify error handling
test(dashboard): add protected route redirect test
```
