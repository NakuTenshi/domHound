# domHound

<div align="center">
  <img src="icons/domHound.png" alt="domHound Logo" width="200" height="250"/>
  <p>domHound: A Chrome extension that extracts, parameters, js urls, links from web pages for fast recon</p>
</div>

---

domHound is a lightweight Chrome extension for security researchers and recon-hunters that extracts and collects links and parameters from web pages with speed and precision. It filters out noise (non-URL strings)

>This repository contains the domHound extension source — a frontend-focused Chromium extension designed to run locally in your browser (manifest v3 compatible).



## Key features

* Fast extraction from the current tab and selected page elements.
* Filters out non-URL strings and deduplicates results automatically.
* Lightweight popup UI and an options panel for custom filters and presets.

---

## Quick start

### Install locally (developer mode)

1. Clone the repo:

```bash
git clone https://github.com/NakuTenshi/domHound.git
cd domHound
```

2. Open Chrome/Edge (Chromium) and go to `chrome://extensions/`.
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked** and select the `domHound` folder (the repo root or `dist/` if you build first).
5. The domHound icon should appear in the toolbar — pin it for quick access.


---

## Permissions

domHound requests only the permissions it needs to work:

* `activeTab` — to read the current tab's DOM when extracting links.
* `scripting` — to run js script on page for extacting attributes's data

No external servers are contacted by default. All processing happens locally in the browser.

---

created by: **NakuTenshi**

