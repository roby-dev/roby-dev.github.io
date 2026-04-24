# Skill Registry — portfolio

**Project**: portfolio
**Stack**: Astro + Tailwind CSS v4 (static site)
**Generated**: 2026-04-23

## User Skills

| Skill | Trigger Context |
|-------|----------------|
| `judgment-day` | "judgment day", "adversarial review", "dual review", "juzgar" |
| `go-testing` | Go tests, Bubbletea TUI testing |
| `skill-creator` | Creating new AI skills |
| `branch-pr` | Creating pull requests |
| `issue-creation` | Creating GitHub issues, bug reports |
| `skill-registry` | "update skills", "skill registry" |

## Compact Rules

### judgment-day
- Launch two independent blind judge sub-agents simultaneously
- Synthesize findings, apply fixes, re-judge until both pass (max 2 iterations)

### branch-pr
- Follow issue-first enforcement system
- Always create issue before PR

### issue-creation
- Follow issue-first enforcement system

## Project Conventions

- No CLAUDE.md at project level (user-level only)
- Astro components: src/components/
- Layouts: src/layouts/
- Pages: src/pages/
- Static assets: public/
- Dark mode exclusive — no light mode toggle
- No scroll animations (hover transitions only)
- Mobile-first responsive
