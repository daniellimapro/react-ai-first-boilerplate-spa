# Stack

Cada ferramenta neste stack foi escolhida deliberadamente. Veja o que está incluído e por quê.

## Core

| Ferramenta | Versão | Propósito |
|---|---|---|
| Vite | 6.x | Build tool — experiência de desenvolvimento mais rápida, ESM nativo |
| React | 19 | Biblioteca de UI — versão estável mais recente com recursos concorrentes |
| TypeScript | 5.x | Linguagem — modo strict, sem `any` |

## Roteamento

| Ferramenta | Propósito |
|---|---|
| TanStack Router | Roteamento baseado em arquivo com TypeScript ponta a ponta. Toda rota, parâmetro e query string é tipado. |

## Gerenciamento de Estado

| Ferramenta | Quando usar |
|---|---|
| TanStack Query | Estado do servidor — busca, cache, revalidação e sincronização |
| Zustand | Estado do cliente — estado de UI, auth, formulários que atravessam múltiplos componentes |
| useState | Estado local — específico do componente, não precisa ser compartilhado |

## Formulários e Validação

| Ferramenta | Propósito |
|---|---|
| React Hook Form | Formulários performáticos com mínimo de re-renders |
| Zod | Validação de esquemas para formulários e dados em runtime |
| @hookform/resolvers | Conecta esquemas Zod ao React Hook Form |

## Estilização

| Ferramenta | Propósito |
|---|---|
| Tailwind CSS 4 | CSS utilitário — sem runtime, tree-shaking completo |
| Shadcn/UI | Biblioteca de componentes que você possui — sem dependência de pacote |

## Internacionalização

| Ferramenta | Propósito |
|---|---|
| i18next | Framework de i18n principal |
| react-i18next | Integração com React |
| i18next-browser-languagedetector | Detecta automaticamente o idioma do navegador |

## Testes

| Ferramenta | Propósito |
|---|---|
| Vitest | Test runner — integração nativa com Vite, API compatível com Jest |
| Testing Library | Testes orientados a comportamento — testa o que o usuário vê, não internos |
| MSW | Mock de API — intercepta requisições de rede reais em testes e no desenvolvimento |

## Qualidade

| Ferramenta | Propósito |
|---|---|
| ESLint | Análise estática — detecta bugs antes do runtime |
| Prettier | Formatação de código — estilo consistente, sem debates |
| Husky | Git hooks — executa lint/testes antes dos commits |
| lint-staged | Executa ferramentas apenas nos arquivos staged — pre-commit rápido |
| Commitlint | Valida o formato da mensagem de commit (Conventional Commits) |

## CI/CD

| Ferramenta | Propósito |
|---|---|
| GitHub Actions | Pipeline de CI — lint + testes em cada PR |
| VitePress + GitHub Pages | Site de documentação |
