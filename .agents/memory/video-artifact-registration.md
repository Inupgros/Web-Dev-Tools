---
name: Video artifact registration recovery
description: How to recover when a subagent builds a video under artifacts/<slug> without registering it, plus scaffold tsconfig quirk
---

- If a design subagent creates `artifacts/<slug>/` directly (no artifact.toml / workflow), recover by moving the dir aside, running `createArtifact` with the same slug, then overlaying the built `src/`, `public/`, and `index.html` onto the fresh scaffold. Keep the scaffold's package.json/vite.config/tsconfig.
- **Why:** `createArtifact` refuses to run on an existing dir, and manual artifact.toml edits are disallowed.
- The video-js scaffold's tsconfig (extends `tsconfig.base.json`) lacks the DOM lib, so `pnpm run typecheck` fails on `window`/`document`. Fix: add `"lib": ["ES2022", "DOM", "DOM.Iterable"]` to the artifact tsconfig compilerOptions.
