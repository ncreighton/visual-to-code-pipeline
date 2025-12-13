# Visual-to-Code Pipeline

Claude skill for converting design DNA → tokens → v0 prompts → code implementation. Enables Claude to "see" designs through code.

## The Problem

Claude cannot see images. This causes generic, similar-looking designs across all sites.

## The Solution

```
DNA File → Design Tokens → v0.app Prompts → User executes v0.dev → Export code → Claude implements from code reference
```

## What's Included

- **SKILL.md** - Complete skill documentation
- **templates/** - Token templates (CSS, Tailwind, CLAUDE.md)
- **examples/** - v0.app prompt templates for all component types
- **references/** - Niche-specific design guides with anti-patterns

## Usage

1. Install skill to `/mnt/skills/user/visual-to-code-pipeline/`
2. Generate design tokens from DNA file
3. Generate v0 prompts with exact specs
4. Execute prompts in v0.dev
5. Export code and save to project
6. Tell Claude Code to implement from v0 reference

## Related Repos

- [WitchcraftForBeginners-DesignPackage](https://github.com/ncreighton/WitchcraftForBeginners-DesignPackage) - Working example
- [creative-command-center](https://github.com/ncreighton/creative-command-center) - DNA files
- [site-build-orchestrator](https://github.com/ncreighton/site-build-orchestrator) - Build guides

## Key Features

- **Token-First**: CSS, Tailwind, and Figma JSON formats
- **Anti-Pattern Prevention**: Every prompt includes what NOT to do
- **Niche-Specific**: Guides for spiritual, tech, AI, mythology, family, productivity sites
- **Quality Gates**: Validation before implementation

---

*Built for the 17-site WordPress empire. Each site gets UNIQUE, Awwward-worthy designs.*
