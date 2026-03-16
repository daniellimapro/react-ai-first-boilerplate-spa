# Comandos de IA

Este boilerplate vem com dois comandos de IA integrados ao `CLAUDE.md`. São instruções para o seu assistente de IA — não scripts de shell.

## /figma

Implementa um design do Figma pixel-perfect no projeto.

**Uso:**
```
/figma https://figma.com/design/... Implementar o componente de formulário de checkout
```

**O que a IA faz:**
1. Lê o design do Figma via a ferramenta Figma MCP
2. Identifica quais componentes do Shadcn/UI se mapeiam aos elementos do design
3. Implementa usando Tailwind CSS 4 seguindo as convenções do projeto
4. Cria o componente na pasta correta (feature ou shared)
5. Tipa tudo de forma estrita — sem `any`, interfaces adequadas

**Requisitos:**
- Assistente de IA com Figma MCP configurado
- Acesso ao arquivo Figma

## /commit

Gera um commit convencional e o cria.

**Uso:**
```
/commit
```

**O que a IA faz:**
1. Executa `git status` e `git diff` para entender o que mudou
2. Classifica o tipo da mudança: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `style`, `ci`
3. Escreve uma mensagem de commit descritiva seguindo o Conventional Commits
4. Cria o commit
5. Nunca usa `--no-verify`

**Formato do commit:**
```
feat(auth): add Keycloak provider integration
```

## Configurando seu assistente de IA

O arquivo `CLAUDE.md` é carregado automaticamente por assistentes de IA que suportam arquivos de contexto de projeto (Claude Code, Cursor, etc.). Abra a raiz do projeto no seu assistente e os comandos estarão disponíveis.
