---
name: Headless video artifact export
description: How to export a video artifact to MP4 without the user's preview-pane exporter
---
Video artifacts are normally exported by the user from the preview pane; no agent-facing exporter exists.

**Workaround that worked:** install nix `chromium` + puppeteer-core (in /tmp), then use raw CDP `Page.startScreencast` (png frames) collecting `metadata.timestamp` per frame, write an ffmpeg concat file with real per-frame durations, and encode with `-fps_mode cfr -r 30`. Reload the page after starting the screencast to restart the video timeline; trim ~0.35s of reload lag from the start.

**Why:** puppeteer's `page.screencast()` writes frames at a fixed 25fps regardless of actual capture rate, producing slow-motion output (31s content → ~38s video). Real timestamps via CDP fix this.

**How to apply:** any time an MP4 export of a video artifact is needed and the user hasn't exported one. Mux `public/audio/bg_music.mp3` with `afade` out; poster frame via `-ss 3 -frames:v 1`.
