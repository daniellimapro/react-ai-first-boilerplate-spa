# AI-First Philosophy

## The problem with traditional boilerplates

Traditional boilerplates solve the wrong problem. They save you 2 hours of setup. That's it.

When you clone a boilerplate, you still have to:
- Decide where each file goes
- Choose naming conventions
- Figure out how components should be structured
- Repeat your architecture decisions to every AI session

The real cost isn't setup. It's **context**.

## What AI-First means

An AI-First boilerplate treats the development context as a first-class artifact.

The `CLAUDE.md` file in this project is not documentation for humans. It's a structured brief for the AI. When you open this project in your AI assistant, it knows:

- Your complete stack and why each tool was chosen
- Where features, components, hooks, stores, and services live
- How to structure a component, a hook, a Zustand store, an API call
- How to add a new route
- How to handle API errors (and when to ask you about it)
- Which patterns to follow, which to avoid

The AI becomes a consistent collaborator, not a random code generator.

## The CLAUDE.md as a contract

Think of `CLAUDE.md` as a contract between you and the AI. You define the rules once. The AI follows them consistently across every session, every feature, every PR.

This means:
- No more "the AI used Context API here but Zustand everywhere else"
- No more "why is this component 300 lines when everything else is 50?"
- No more repeating your conventions in every chat

## Built-in AI Commands

Two commands come pre-configured in this boilerplate:

- **`/figma`** — reads a Figma design and implements it pixel-perfect using your project's components and conventions
- **`/commit`** — generates a conventional commit message based on your changes and creates the commit

These aren't scripts. They're AI instructions that live in the `CLAUDE.md` and work with any AI assistant that supports project context files.
