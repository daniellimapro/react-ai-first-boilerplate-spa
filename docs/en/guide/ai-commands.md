# AI Commands

This boilerplate ships with two AI commands built into the `CLAUDE.md`. These are instructions for your AI assistant — not shell scripts.

## /figma

Implement a Figma design pixel-perfect in the project.

**Usage:**
```
/figma https://figma.com/design/... Implement the checkout form component
```

**What the AI does:**
1. Reads the Figma design via the Figma MCP tool
2. Identifies which Shadcn/UI components map to the design elements
3. Implements using Tailwind CSS 4 following the project's conventions
4. Creates the component in the correct folder (feature or shared)
5. Types everything strictly — no `any`, proper interfaces

**Requirements:**
- AI assistant with Figma MCP configured
- Figma file access

## /commit

Generate a conventional commit and create it.

**Usage:**
```
/commit
```

**What the AI does:**
1. Runs `git status` and `git diff` to understand what changed
2. Classifies the change type: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `style`, `ci`
3. Writes a descriptive commit message following Conventional Commits
4. Creates the commit
5. Never uses `--no-verify`

**Commit format:**
```
feat(auth): add Keycloak provider integration
```

## Setting up your AI assistant

The `CLAUDE.md` file is automatically loaded by AI assistants that support project context files (Claude Code, Cursor, etc.). Open the project root in your AI assistant and the commands become available.
