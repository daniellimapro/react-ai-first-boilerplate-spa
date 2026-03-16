# Filosofia AI-First

## O problema dos boilerplates tradicionais

Boilerplates tradicionais resolvem o problema errado. Eles economizam 2 horas de configuração. Só isso.

Quando você clona um boilerplate, ainda precisa:
- Decidir onde cada arquivo vai
- Escolher convenções de nomenclatura
- Descobrir como os componentes devem ser estruturados
- Repetir suas decisões de arquitetura em cada sessão com a IA

O custo real não é a configuração. É o **contexto**.

## O que AI-First significa

Um boilerplate AI-First trata o contexto de desenvolvimento como um artefato de primeira classe.

O arquivo `CLAUDE.md` neste projeto não é documentação para humanos. É um briefing estruturado para a IA. Quando você abre este projeto no seu assistente de IA, ela sabe:

- Seu stack completo e por que cada ferramenta foi escolhida
- Onde features, componentes, hooks, stores e serviços ficam
- Como estruturar um componente, um hook, uma store Zustand, uma chamada de API
- Como adicionar uma nova rota
- Como tratar erros de API (e quando perguntar a você)
- Quais padrões seguir, quais evitar

A IA se torna uma colaboradora consistente, não uma geradora aleatória de código.

## O CLAUDE.md como um contrato

Pense no `CLAUDE.md` como um contrato entre você e a IA. Você define as regras uma vez. A IA as segue consistentemente em cada sessão, cada feature, cada PR.

Isso significa:
- Sem mais "a IA usou Context API aqui, mas Zustand em todo o resto"
- Sem mais "por que esse componente tem 300 linhas quando todo o resto tem 50?"
- Sem mais repetir suas convenções em cada conversa

## Comandos de IA Integrados

Dois comandos vêm pré-configurados neste boilerplate:

- **`/figma`** — lê um design do Figma e o implementa pixel-perfect usando os componentes e convenções do seu projeto
- **`/commit`** — gera uma mensagem de commit convencional baseada nas suas alterações e cria o commit

Não são scripts. São instruções para a IA que vivem no `CLAUDE.md` e funcionam com qualquer assistente que suporte arquivos de contexto de projeto.
