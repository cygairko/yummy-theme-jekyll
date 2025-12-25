# Agent Context: yummy-theme-jekyll

## Project Identity
**Name:** yummy-theme-jekyll
**Type:** Jekyll Theme (Ruby Gem)
**Repository:** https://github.com/cygairko/yummy-theme-jekyll (Public)
**Purpose:** The design system and layout engine for recipe sites. It is distributed as a Ruby Gem.

## Architecture
- **Structure:** Standard Jekyll Theme structure.
- **Distribution:** git-based Ruby Gem.
- **Styling:** SCSS / Sass (located in `_sass/`).

## Critical Files
- `yummy-theme-jekyll.gemspec`: The source of truth for the gem. **Must be updated** if new directories are added to the `spec.files` list.
- `_layouts/`: HTML templates (e.g., `default.html`, `recipe.html`).
- `_includes/`: Reusable components (nav, footer, recipe-card).
- `_sass/`: Style definitions.

## Development Workflow
1. **Local Dev:** Consumers (like `yum-page`) can link locally via `Gemfile`:
   `gem "yummy-theme-jekyll", path: "../yummy-theme-jekyll"`
2. **Production:** Consumers link via GitHub:
   `gem "yummy-theme-jekyll", github: "cygairko/yummy-theme-jekyll", branch: "main"`

## Agent Directives
- **Styling:** Ensure all new styles are modular and placed in `_sass`.
- **Gem Config:** If adding a new root folder (e.g., `assets/`), ensure it is whitelisted in the `.gemspec` file `spec.files` regex.
- **Compatibility:** Avoid hardcoding site-specific titles or data; use `site.title`, `site.data`, or page front matter variables.