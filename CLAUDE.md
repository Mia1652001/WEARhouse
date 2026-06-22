# CLAUDE.md — WEARhouse

This file tells Claude Code how this project works. Read it at the start of every session.

## Project Overview
A clothing store website built for a client. Built with Next.js 16, TypeScript, and Tailwind CSS.
Hosted on Vercel (auto-deploys on every push to GitHub).

## My Setup
- **GitHub:** Mia1652001/WEARhouse — push with plain `git push` (auth already configured)
- **Vercel project:** wear-house
- **Local folder:** ~/clothing-store
- I type commands — do not give me paste-heavy commands, they glitch in Claude Code
- Always specify: Mac Terminal vs Claude Code vs chat

## Commands

### Mac Terminal
```bash
cd ~/clothing-store      # go to this project
git add .
git commit -m "message"
git push                 # deploys automatically to Vercel
```

### Claude Code (run inside ~/clothing-store)
```bash
npm run dev              # start dev server at localhost:3000
npm run build            # check for build errors before pushing
npm run lint             # check for code errors
npm install <package>    # add a new package
```

## Brand Assets — WAITING ON CLIENT
The client is sending: logo, exact colors, fonts, designs, taglines, and copy.

**Do not invent or assume any brand details until assets arrive.**

Once received, update this section:
```
Primary color:     #______
Secondary color:   #______
Accent color:      #______
Font (display):    ______
Font (body):       ______
Logo file:         /public/logo.___
Tagline:           "______"
```

## Project Structure
```
/app
  /components       ← reusable UI components (Navbar, ProductCard, Footer, etc.)
  /lib              ← helper functions and mock product data
  /shop             ← product listing page
  /product/[id]     ← individual product page
  /cart             ← cart page
  layout.tsx        ← root layout (Navbar and Footer go here)
  page.tsx          ← homepage
/public             ← client brand files (logo, images, fonts)
CLAUDE.md           ← this file
```

## Code Conventions
- **Language:** TypeScript
- **Components:** functional, named exports only
- **Styling:** Tailwind classes only — no inline styles, no .css files
- **`'use client'`** at top of any file using hooks or event handlers
- **Comments:** short comment above every function explaining what it does
- Always handle **loading** and **error** states

## Progress Tracker
Update this as the project grows:

### Done
- [ ] Next.js 16 project created
- [ ] Tailwind configured
- [ ] Client brand assets received
- [ ] Brand identity set up in CLAUDE.md
- [ ] Homepage designed
- [ ] Product listing page built
- [ ] Product detail page built
- [ ] Cart built
- [ ] Checkout flow built
- [ ] Pushed to GitHub and live on Vercel

### Known Issues
_Add bugs or blockers here_

### Next Steps
_Add upcoming tasks here_
