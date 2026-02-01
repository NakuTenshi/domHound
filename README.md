# LinkHound

<div align="center">
  <img src="icons/domHound.png" alt="domHound Logo" width="200" height="250"/>
  <p>linkHound: A Chrome extension that extracts, filters, and exports useful links from web pages for fast recon.</p>
</div>

---

LinkHound is a lightweight Chrome extension for security researchers and recon-hunters that extracts and collects links from web pages with speed and precision. It filters out noise (non-URL strings), captures useful link contexts, supports saving and exporting, and features a compact hacker-style UI with a custom icon.

This repository contains the LinkHound extension source — a frontend-focused Chromium extension designed to run locally in your browser (manifest v3 compatible).

---

## Key features

* Fast link extraction from the current tab and selected page elements.
* Filters out non-URL strings and deduplicates results automatically.
* Lightweight popup UI and an options panel for custom filters and presets.

---

## Quick start

### Install locally (developer mode)

1. Clone the repo:

```bash
git clone https://github.com/NakuTenshi/linkHound.git
cd linkHound
```

2. Open Chrome/Edge (Chromium) and go to `chrome://extensions/`.
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked** and select the `linkHound` folder (the repo root or `dist/` if you build first).
5. The LinkHound icon should appear in the toolbar — pin it for quick access.


---

## Permissions

LinkHound requests only the permissions it needs to work:

* `activeTab` — to read the current tab's DOM when extracting links.
* `scripting` — to run js script on page for extacting attributes's data

No external servers are contacted by default. All processing happens locally in the browser.

---

created by: **NakuTenshi**

