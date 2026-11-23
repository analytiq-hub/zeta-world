# Brief: the interactive guide for Zeta World

Written Sunday 22 Nov 2026 by the session that set up the site, and revised about 3 PM after Alex read it. It is for an agent starting with no other context. Everything you need is in this file or in a file it names. Other agents read it cold and checked its claims against the repo, the teammate's page and the sources; their corrections are in.

**Deadlines.** The demo is at 8 PM tonight (Sundai Hack 150). Freeze features at 6:45 PM. `main` is the live site, so it must work at every moment between now and then.

## 1. The job

Turn the Zeta World home page from "a 3D scene with a text box" into a short guided climb that holds the visitor's hand:

1. It opens with an intro in the style of Alex's personal site: flowing ink lines on a white ground, an italic greeting, and a few choices.
2. The visitor picks one, for example "get started" or "what the paper actually proved".
3. A step-by-step guide follows. Each step is one idea, one thing to do, and one thing that visibly responds. It climbs from "what is a prime" to "what was released in November 2026".
4. The 3D world that already exists is the centre of it, not a separate page.
5. Its second half follows one line of reasoning: suppose a zero sat off the line, and watch what that would do to the primes.

It is light throughout. The paper ground and ink ticks of the personal site sit behind every step, including the 3D world. Keep it short: ten steps at most, about five minutes end to end. Interactive beats long. A visitor who only clicks Next should still get the story.

## 2. What Alex asked for

His words, lightly trimmed. First:

> Right now it's not really that strong, please make it more interactive and a bit easier to understand. I really want it to be like a build up. It should have a nice intro [like] https://alex-lop.github.io/Alex_Lopez_Website/ and then be a kind of step by step guide. Really try and keep [to] my personal website of flowing lines initially and have an option of things to choose between initially (ideally a couple of options like "Get started", "What the actual paper proved" etc.) and then keep going. Please try and make it on the shorter side and have it be interactive, and really try and hold your hand as it goes through all of the problems, keeping in mind three.js and trying to make it as interactive as possible.

Then, after reading the first version of this brief:

> Keep my background from my personal website, just make it a white background (maybe a slight grey), but overall try to make the colors appealing and very nice to follow. [...] Please look at the page that my teammate pushed, since I really want to go in that direction, where the real proof came from the fact that if you try to assume that you can take a prime outside of the bounds then that would imply ... you get the idea.

Earlier the same afternoon he also asked for the climb to "start off slow with basic understanding of number theory / group theory / abstract algebra and then build up to the actual proof".

How this brief reads that. These are assumptions; if one is wrong, Alex will say so, but do not stop to ask:

- "My personal website" means the look of https://alex-lop.github.io/Alex_Lopez_Website/ : its ground, its ticks, its type. The guide keeps that look from the first screen to the last. It does not mean hosting the guide on that site. The guide lives in this repo.
- "The page my teammate pushed" is `proof.html` in PR #6 (section 5.4). Its direction is a proof by contradiction: assume a zero off the line and show what would break. Alex wrote "prime"; that page and the sources make the assumed object a zero.
- "The actual paper" means the proof of the Riemann hypothesis released as Lean code on 20 Nov 2026.
- "Hold your hand through all of the problems" means every step tells the visitor exactly what to do and reacts when they do it. Small questions with instant answers are welcome.
- He is busy and multitasking at the hackathon. Make the decisions this brief leaves open, ship in slices, and report at the end.

## 3. Where things stand

**Live:** https://analytiqhub.com/zeta-world/ . **Repo:** `analytiq-hub/zeta-world`, public. GitHub Pages serves `main` from the repo root. A merge is live about 30 seconds later. There is no build step and no check between a push and the public page.

| File | What it is |
|---|---|
| `index.html` | The home page, about 225 lines. A dark full-screen three.js scene: the land of the zeta function from Re(s) = -0.5 to 1.5 and heights 0 to 237, a gold line at Re(s) = 1/2, pins on the first 100 zeros, a roll-call counter, and a text panel at the bottom left. The scene is one inline ES module, from line 62 to the end. |
| `PLAN.md` | The build plan for tonight, written and reviewed today. Steps 1 and 2 are done. Its appendix holds tested code you will need (section 6). |
| `docs/guide-content.json` | Checked text for a 28-step climb, plus sourced research on the 2026 results. Your fact base (section 6). |
| `learn.html` | The same climb as a plain long read, with an anchor for every step id. Dark today. Link to it as "the long version"; do not rebuild it. |
| `landscape.html`, `main.js`, `zeta.js`, `docs/riemann_graph_v1.md` | A teammate's free zeta/xi explorer. Live. Not yours to edit. |
| `README.md` | Project intro with the dated status sentence. |
| `og.jpg` | Link-preview image, 1200 x 630. |
| `.nojekyll` | Turns Jekyll off. Leave it. |

Everything in this table is on `main`. If `ls docs/guide-content.json learn.html` fails in your worktree, stop and say so: the handoff commit has not landed.

Inside `index.html`'s module, in order: layout constants (`WIDTH`, `LEN`, `RISE`, `T_MAX = 237`, fog, pins), the 100-entry `ZEROS`, `zetaGrid()` (Euler-Maclaurin, the terrain's numbers), a zeta self-check, `xOf` and `zOf` (math coordinates to world coordinates), the terrain fill loop, a mesh self-check, the pins, `rollCall()`, the camera and `OrbitControls`, `resize()`, and the render loop. DOM ids in use: `world` (canvas), `count`, `proof-status`, `status`.

**Other people and sessions.**

- A teammate (GitHub `andrei-radulescu-banu`) merged PR #2 at 2:10 PM. His explorer is on `main` and live, and `index.html` links to it just after the `</details>` in the text panel.
- He now has **PR #6 open** (branch `andrei-devel`): more explorer tabs (L-functions, primes) and `proof.html`, a page on how the announced proof works. It adds `dirichlet.js`, `primes.js`, `primesView.js`, `proof.html`, `proof.js` and `proofMath.js` at the repo root, and it changes `index.html`, `README.md`, `main.js`, `zeta.js` and his doc. GitHub reports it as conflicting with `main`. Resolving that is his job. Do not merge, edit or comment on it, and do not wait for it.
- **`proof.html` sets the direction for the guide's second half.** Read it before you design steps 7 to 9 (section 5.4). His Primes tab overlaps step 6: look at it too, with `gh pr diff 6 --repo Alex-lop/riemann-zeta-world`.
- The session that wrote `PLAN.md` is finished. The session that wrote this brief is finished too. `PLAN.md` describes a dark page with a gold line; where it differs from this brief on look or on order, this brief is right.

## 4. The look: Alex's personal site, kept all the way through

Open https://alex-lop.github.io/Alex_Lopez_Website/ and read its source. The repo is public, `Alex-lop/Alex_Lopez_Website`, and it is Alex's own, so reusing its code here is fine:

```sh
gh api repos/Alex-lop/Alex_Lopez_Website/contents/js/field.js -H "Accept: application/vnd.github.raw"
gh api repos/Alex-lop/Alex_Lopez_Website/contents/styles.css  -H "Accept: application/vnd.github.raw"
gh api repos/Alex-lop/Alex_Lopez_Website/contents/DESIGN.md   -H "Accept: application/vnd.github.raw" | sed -n '8,80p;256,293p'   # palette, type, motion
```

### 4.1 What that site is made of

- **The field of ticks** (`js/field.js`, 210 lines, a 2D canvas fixed behind the page). A grid of short vertical ink ticks, 26 px apart. Each tick springs toward a target angle: a slow idle wave, a lean while scrolling, and a turn toward the pointer and along its wake. Opacity runs from 0.08 to 0.35. It stops when idle and respects `prefers-reduced-motion`.
  - It needs `<canvas id="field">`, the `#field` rule from `styles.css`, and `--ink` on `:root`, which it reads once at load.
  - To pause it from a button, set `data-motion="off"` on `<html>` and dispatch `motion:change` on `document`. The site's own toggle is in `js/site.js`, lines 545 to 567.
  - `window.__field.comb(x, y, angle)` turns the ticks within 140 px of (x, y) to `angle` (radians from vertical) for 800 ms, one point at a time.
  - Ticks rest upright and are all one colour.
- **Type.** IBM Plex Serif for the greeting and the choices, IBM Plex Sans for body. That repo ships `assets/fonts/IBMPlexSerif-400.woff2` (upright only) and four Plex Sans files, with `OFL.txt`. The site's italic is the browser's slant of the upright serif. To match it, copy that file and its `@font-face` rule from `styles.css` as they are, and copy the licence with them. The files are Latin subsets with no Greek and no maths symbols: ζ, π, σ, χ, √, ≤ and → will come from the fallback. Put Georgia next in the stack and check that a ζ beside Plex text looks deliberate.
- **The hub** (`.hub`, `.lists`, `.hub-sec`, `.hub-label`, `.hub-list` in `styles.css`). A centred italic greeting ("Helloooo, I'm Alex"), then rows of a grey italic label on the left, one thin vertical rule, and italic links on the right. A blue underline draws in from the left on hover.

The vertical rule and the ticks are that site's signature. Here the same stroke has a meaning: the critical line is a vertical line, and the claim is that every zero stands on it. Use that.

### 4.2 Colour: one ground, a few inks, one meaning each

Alex wants that background kept through the whole guide: a white ground, perhaps very slightly grey, with the ticks behind everything, and colours that are pleasant and easy to follow. So there is no dark mode, and no moment where the page goes dark. The 3D world sits on the same paper.

A starting palette. The contrast figures are against the ground `#f5f5f0` and were computed, not estimated:

| Role | Colour | Contrast | Means |
|---|---|---|---|
| ground | `#f5f5f0` | | the page, and the fog colour of the 3D scene. The 3D canvas itself stays transparent (section 7) |
| ink | `#171613` | 16.5 | text, ticks, axes, and the pins on real zeros |
| second ink | `#55554f` | 6.9 | labels and captions |
| rule | `#d8d7ce` | 1.3 | hairlines only, never text |
| blue | `#1a5fff` | 4.7 | the primes: the spikes, the staircase, a prime being counted. Also the hover and focus accent, as on the personal site |
| amber | `#b45309` | 4.6 | the critical line, and the band the primes keep to if every zero is on it |
| red | `#c62828` | 5.1 | the hypothetical zero and everything it causes. Nothing real is ever red |
| teal | `#0f766e` | 5.0 | a check that passed, in the last step |
| slate | `#2f3b52` | 10.3 | the deep end of the land: the wells |

Today's gold line, `#f5c542`, has a contrast of 1.5 on this ground and cannot be seen. Amber replaces it.

The ground is the personal site's own, already the slight warm grey Alex asked for. A touch whiter is fine: every figure rises, and on `#ffffff` the lowest is amber at 5.0. Do not go greyer than `#f3f3ee` if amber or blue is ever used for a word: amber falls under 4.5:1 at `#f2f2ed` and blue at `#f1f1ec`. A tinted panel is a ground too: on the personal site's `--paper-2`, `#ebeae2`, amber is 4.2:1, so keep coloured words off tinted panels. Pick one value and use it everywhere.

Rules:

- **One colour, one meaning, the same in every step.** When a colour first appears, the step names it in a small legend.
- **At most four colours on screen at once,** not counting the two inks.
- **Never tell two things apart by colour alone.** Red and amber are close in lightness. The hypothetical zero is a hollow ring on a dashed stalk with the word "hypothetical" beside it; real zeros are solid ink pins. To a red-green colour-blind visitor amber and red are the same olive, and teal sinks into the grey of second ink. So in step 8 the band is a solid amber edge with a pale amber fill, and the hypothetical zero's wave is a dashed red line, the same dash as its stalk, labelled at its end. In step 10 a passed check is a tick and the word "passed", and a running one is the words "still running", never teal against grey alone.
- **No rainbow on the land.** Shade it by height, like an ink wash, from slate `#2f3b52` in the wells up to `#d2d2cc` on high ground (1.4:1 against the ground), so every zero reads as a dark well in a pale land. The land is lit, so sample high ground in a screenshot and keep the pixel at or darker than `#d2d2cc`. Phase colouring can stay as a switch in fly mode with its saturation turned well down. It is the first thing to cut.
- **Marks on the land are judged against the land, not the paper.** On slate, amber is 2.2:1 and ink 1.6:1, and every well is on the line with a pin in it. Draw the amber line unlit, with a ground-coloured casing on each side (the vertex columns either side of the line painted the ground colour, or a ribbon with a paper edge), so it is always amber against paper. In the roll call, unchecked pins are `#a9a8a0` and turn ink when checked.
- **Text is ink or second ink.** Coloured text is only for a word that names a coloured thing.
- **If you change a value, recompute.** Text needs 4.5:1 and lines and marks need 3:1 against the ground. Do not judge it by eye.

## 5. The experience to build

### 5.1 Intro and choices

The first screen is paper, ticks, a greeting in Alex's voice, and a rail of choices. It must appear at once, before any WebGL work starts.

Choices, at least these five. The labels are yours to word in the personal site's lowercase italic manner:

| Choice | Goes to |
|---|---|
| get started | step 1 of the climb |
| what the paper actually proved | step 7, where the hypothetical zero comes in |
| just let me fly | the 3D world with free controls |
| the explorer | `./landscape.html`, the teammate's page. It is live, and a link to it must survive on the home page |
| read / source | `learn.html` (the long version), `PLAN.md` on GitHub, the repo |

One suggestion for the hand-off from intro to guide, not a requirement: when a choice is made, the ticks swing upright and the centre column is drawn in amber. That column is the critical line, and the land fades in around it on the same paper. The amber needs new code; `comb` cannot colour a tick.

### 5.2 The climb

Every step has the same anatomy, so the visitor learns the rhythm once:

1. **A title and one sentence**, at most 25 words. The idea.
2. **One instruction at a time**, in the imperative: "drag the slider", "type a number", "press the pin". Steps 8 and 9 have a second action: show its instruction only after the first is done, in place of the first. Next works without it.
3. **One thing that responds** to that action, at once and visibly.
4. **A short payoff line**, at most 40 words, shown after the visitor has acted or after a few seconds if they have not.
5. **Next and Back**, a progress mark, and the step's name in the URL hash so a reload lands on the same step. Use names, not numbers, so cutting a step does not break a link.
6. **Keys.** The arrow keys and Space move between steps, but only when focus is not on a slider, text field or button. When one of those has focus, the keys belong to it.

At most 60 words per step, counting the sentence, the instruction and the payoff. Ten steps at most. If a step needs more words, it is two ideas: cut one. These do not count toward the 60: the colour legend, labels fixed to a figure (the "hypothetical" label, the metaphor label, how far the data goes), links, step 10's status sentence, and step 9's two notes (groups, and what is not yet explained), which go in a closed `<details>` under the payoff. A step may link to its long version at `./learn.html#<step id>`.

**The shell shows all ten steps as text from its first merge.** Each step starts life as its sentence, its payoff line and a small static figure. Each later slice replaces a figure with the real interaction. That way cutting a step's interaction never leaves a hole in the story.

### 5.3 The steps

Reorder, merge or reword, but keep the four marked **must**.

| # | Idea | The visitor does | Build from |
|---|---|---|---|
| 1 | Primes are the atoms of whole numbers | types or taps a number and sees it split into primes | content `primes` |
| 2 | Primes look random, but their count is smooth | scrubs along a number line; a blue staircase climbs next to the smooth guess x / ln x. This staircase is the plain count of primes, one step of 1 at each prime: compute it directly. `psiTrue` and `psiK` in `PLAN.md` are a different staircase | content `irregular`, `counting` |
| 3 | One function knows every prime | drags the height t at a fixed real part above 1 (say 2); arrows 1/n^s chain head to tail and spin, and the chain closes in on zeta. Do not draw this on the critical line: the sum does not settle there | content `complex`, `euler-product`, `continuation` |
| 4 | Zeta as a landscape, zeros as wells | the land fades in on the paper; drags to look around | the existing scene; content `landscape` |
| 5 | **must:** every well stands on one line | rides north up the amber line with a slider or the scroll wheel; a counter shows zeros passed | the existing scene; `PLAN.md` step 5 on moving the camera |
| 6 | **must:** the zeros build the primes | keeps riding; each zero passed adds a wave, and blue spikes rise at 2, 3, 5, 7, 11 | `spikes()` in the `PLAN.md` appendix; `PLAN.md` step 3; content `waves` |
| 7 | **must:** suppose one zero were off the line | drags a red, hypothetical zero off the amber line; its mirror twin appears on the other side. The walls of the strip stop it | `proof.html` picture 1; content `strip`; the "Ghost zero" rules in `PLAN.md` |
| 8 | **must:** the primes would show it | switches the hypothetical zero's wave on. The curve, quiet inside its amber band until now, swings out of the band. Then slides the zero back toward the line: the break moves later and never goes away. The payoff line says the announced proof needs less than the band: a ceiling from above only, on some windows | `proof.html` pictures 2 and 3; the formulas in `proofMath.js`; research `argument` |
| 9 | Where the ceiling comes from | toggles primes into a number and watches the least size it can have grow; then slides m and sees x/m + m bottom out at √x | `proof.html` picture 4; content `y2026-size`, `y2026-shape` |
| 10 | What was released, what was checked, what is still needed | opens each of the four checks to see what it rules out and what it does not | content `y2026-release`, `y2026-checks`, `y2026-needed` |

Notes on what is not a step of its own:

- **The walls.** Step 7 draws the edges of the strip: walls at Re(s) = 0 and 1, labelled with `PLAN.md` step 4's sentence ("Proved 1896: every nontrivial zero lies between these walls"), and the outer eighths hatched and labelled as a report, in the wording of content `y2026-october`: "A machine-written paper released on 6 Oct 2026 states that no zero lies in here. Its repository says this is formalized in Lean. Not peer reviewed." Do not use `PLAN.md` step 4's flat "No zeros in here". The hypothetical zero stops at the hatching. That is this guide's rule for the fiction (`PLAN.md`, "Ghost zero"), not a theorem.
- **The contradiction.** Step 9's payoff line is: "As the guides describe the announced proof: arithmetic caps the upward swings; an off-line zero would break the cap; so no zero lies to the right of the line, and by the mirror no nontrivial zero lies to the left."
- **Groups and characters.** Alex asked for the algebra, and it is real: one step of the 2026 argument averages over the characters of a finite abelian group. In the guide it is one sentence in step 9 with a link to `./learn.html#characters`, where the algebra stage teaches it properly in six steps. If there is time at the end, a clock-arithmetic detour from step 9 is the best extra to add.

### 5.4 The second half: one hypothetical zero

This is the direction Alex wants. His teammate's `proof.html` already tells it in four pictures. Read it, and the numbers behind it, before you design steps 7 to 9:

```sh
git fetch origin
git show origin/andrei-devel:proof.html
git show origin/andrei-devel:proofMath.js
git show origin/andrei-devel:proof.js
```

The story is a proof by contradiction, and one hypothetical zero, which the visitor moves, carries it through:

1. **The mirror.** A nontrivial zero at β + iγ has a twin at 1 − β + iγ. So a nontrivial zero left of the line forces one to its right, and it is enough to show that no zero lies to the right.
2. **The band.** The argument works with G(x), a weighted and centred count of prime powers. Each zero adds a wave to G whose size grows like x^β. If every zero is on the line, G(x) − log 2π stays within ±0.0462 · √x. A zero to the right of the line adds a wave that grows faster than √x. However small it starts, it eventually breaks out of that band.
3. **One side, some windows.** The announced proof does not need the band. It is enough to bound G from above, by a ceiling of about x^(1/2 + ε), on infinitely many long windows from Y to Y^(3/2). An off-line zero would have to push above that ceiling inside one of them.
4. **Where the ceiling comes from.** A whole number that is not zero and is divisible by many primes cannot be small: it is at least their product. The argument builds numbers that many primes divide, and also bounds their size from above. Between the two, only so many primes fit. The construction is repeated m times; one cost grows like x/m and the other like m, and their sum is least at m = √x. That is where the 1/2 comes from.

Put together: arithmetic caps the upward swings; an off-line zero would break the cap; so no zero lies to the right of the line, and by the mirror no nontrivial zero lies to the left.

Getting it right:

- **Two bounds, never one.** The band, ±0.0462 · √x (his picture 2), is what the primes would obey if every zero were on the line. It follows from the hypothesis. Nothing in the argument proves it, and leaving it contradicts nothing. Label it "if every zero is on the line". The ceiling the announced proof takes from arithmetic (his pictures 3 and 4, your step 9) is a different, looser bound: G(x) ≤ x^(1/2 + ε), from above only, on the windows only. Divided by √x that is x^ε, which is above 1: more than twenty times the band's height, and off his chart. His picture 3 draws it at the band's height over three windows as an illustration. If you reuse that drawing, label the level "illustration, not to scale" and print no crossing value for it. Never say or imply that the band is proved or comes from divisibility.
- **Formulas.** Take G, the band constant (`RH_BAND` = 2 + γ − log 4π ≈ 0.0462) and the wave one off-line pair adds (`rogueWave`) from his `proofMath.js`. They follow the riemann-rev guide cited in the research. Restate them in `./guide/` with a comment naming both as the source. Do not import from his files, which are still changing, and do not edit them. Your numbers must agree with his page. One exception: do not restate `breachPoint` as written. It overflows to Infinity close to the line (β = 0.505 with γ = 40, for example), which would show the break vanishing. Compute the exponent instead, log10 x = ln(RH_BAND · |ρ(ρ − 1)| / 2) / ((β − 1/2) · ln 10), and print the break as a power of ten ("near 10^313"), so it is finite for every β above 1/2.
- **Fiction is labelled.** Wherever the hypothetical zero is on screen, so are the words "hypothetical: no nontrivial zero off the line has ever been found". It is red, never ink. Real zeros never move. Keep its real part between 1/2 and 7/8 and its height between 10 and 60, as his page does.
- **Metaphor is labelled.** Picture 4 shows the shape of the argument, not the real objects, and his page says so. Say so too. The real objects (theta lifts between unitary groups) are named, not taught.
- **What nobody has explained yet.** Both published guides take the central inequality from the Lean code without proving it. Step 9 says that in one line. See `not_yet_explained` in the research.
- **Attribution.** Write "the announced proof" and "as the guides describe it", never "the proof shows". Section 6's wording rules apply to every sentence here.
- **Data.** His page computes the real prime curve from every prime up to 10 million, in the browser. On a phone a million is enough. Say on screen how far the real data goes, as he does. Past the last computed prime, draw the hypothetical wave alone and say so; never extend the prime curve, and never call what breaks out there "the prime curve". Start the hypothetical zero at β = 0.85, γ = 40, where the curve leaves the band near x = 2 × 10^4, inside the real data even on a phone. At his default (0.65, 40) the break is near 3 × 10^10, far past the data.
- **Link.** Steps 7 to 9 each link to `./proof.html` as "the full pictures", once that URL returns 200 on the live site.

Step 10 is the plain record. The content file has each fact with its source. In short:

- **Released:** 20 Nov 2026, by the mathematician Levent Alpöge, working with Claude, Anthropic's AI model, as Lean code only. About 17 million lines. No paper.
- **The statement** is Mathlib's own definition `RiemannHypothesis`.
- **Four separate checks**, each ruling out a different way of being wrong: the statement is the right one, the code compiles, the code proves that statement, and independent checkers accept the exported proof. Two long-running checks were still in progress on 22 Nov.
- **Certified:** 21 Nov, in a joint statement of the Lean and Mathlib communities.
- **Scope:** the generalized hypothesis is covered for Dirichlet L-functions only.
- **Not yet:** the author's paper, peer review, and a human account of the central inequality.

The site's status sentence is the paragraph with id `proof-status` in `index.html`. Copy it into step 10 word for word, link included. It does not count toward the 60-word cap, and in the guide it must be visible at 390 px wide (today's page hides it there). `learn.html` and `README.md` carry the same sentence, each with its own last line. If you change the wording, change all three and say so in your report.

### 5.5 Keep from the current page

- The 3D scene's geometry as it is: the land, the line, the 100 pins, the roll call, the start view. It was tuned today in a real browser, and the reasons are in `PLAN.md` under "The world". Its colours change (section 4.2); its shapes do not.
- Both `console.assert` self-checks. They must stay silent.
- The link-preview tags. Make a new 1200 x 630 `og.jpg` of the first screen in the last slice.
- A way to simply fly around with no guide.
- The link to the teammate's explorer.

## 6. Content: where every fact comes from

Do not write mathematics or news from memory. The events of October and November 2026 are after your training data.

**`docs/guide-content.json`** (168 KB: do not read it whole)

- `stages`: five stages, named by `key` (`numbers`, `zeta`, `hypothesis`, `algebra`, `proof`). Each has `steps`. Each step has `id`, `title`, `idea` (one sentence), `body` (paragraphs), and sometimes `formula`, `example`, `try_it`, `in_the_world` and `sources`.
- Every stage was written by one agent and checked by a second, who recomputed the examples and looked up the dates. `changes` and `unresolved` are lists on each stage, with most items prefixed by a step id. Read a stage's `unresolved` before using its steps.
- Strings contain inline HTML (`<sup>`, `<em>`, `<strong>`), so set them with `innerHTML`. Each `try_it` is a question and its answer separated by " — ".
- `research`: three reports, named by `key` (`argument`, `release`, `october`). Each has a `summary`, a list of `facts` with a `source_url` and a `basis` (`primary`, `third-party-exposition`, `press` or `unconfirmed`), `prerequisites`, and `not_yet_explained`.
- The `in_the_world` lines describe today's dark scene ("gold line", "white pin"). Reword them for the new colours when you use them.

```sh
jq -r '.stages[].steps[] | [.id, .idea] | @tsv' docs/guide-content.json      # every step in one line each
jq '.stages[].steps[] | select(.id=="waves")' docs/guide-content.json         # one step in full
jq -r '.stages[] | .key, (.unresolved[] | "  " + .)' docs/guide-content.json   # what the checkers could not verify
jq '.research[] | select(.key=="argument") | .summary, .not_yet_explained' docs/guide-content.json
```

The file holds about 7,900 words of step text for a guide that should show about 500. Your job with it is to **cut**, not to add. Take the `idea` lines and the examples; leave the paragraphs to `learn.html`.

**`PLAN.md`**

- **Appendix, "tested code":** `spikes(x, T, zeros)`, the prime spikes for step 6; `psiK` and `psiTrue`, the weighted staircase; and the `ZEROS` table. All were run against mpmath today.
- **Step 3, "Zeros to primes":** how to draw the panel, measured counts of how many primes show at each height, and why the axis starts at 1.5.
- **Step 5, "The tour":** how to move the camera.
- **"Ideas, ranked", the "Ghost zero" entry:** the rules for a fictional zero.
- **"Wording rules for captions".** Follow them.

**Wording rules that are not negotiable**

- Say "nontrivial zeros", or "zeros in this strip", wherever a sentence would be false for the zeros at -2, -4, -6.
- Never say flatly that the hypothesis is proved, or that it is unproved. Say what was released, what was checked, and what has not happened yet, with the date.
- A fact whose `basis` is `press` or `unconfirmed` is worded as a report, not as established.
- Do not explain anything the research lists under `not_yet_explained` as if it were understood.
- The page shows what the statement says. It proves nothing, and it says so.

## 7. Ground rules and traps

Each of these cost time today.

**Hosting**

- The site is served under `/zeta-world/`. Every local path is relative (`./guide/x.js`). A root-absolute path (`/guide/x.js`) is a 404. The Open Graph tags are the one exception: they need absolute URLs.
- No build step, no framework, no bundler, no package.json. Plain ES modules.
- three.js is pinned: `three@0.187.0` from jsDelivr through the import map in `index.html`. Add-ons come from `three/addons/`. Do not upgrade it today. `landscape.html` pins 0.160.0 for itself; leave that alone.
- Pages sends `cache-control: max-age=600`. After a merge, a browser that loaded the page in the last ten minutes can pair new HTML with an old module. When you change what a module exports, add or bump `?v=N` on its import URL in the same merge. Hard-reload on the demo machine before 8 PM.

**three.js 0.187**

- `OrbitControls.update()` ends by pointing the camera at `controls.target`, every frame, whether or not the controls are enabled. To move the camera under program control, ease `camera.position` and `controls.target` and keep calling `update()`. A rotation set by hand is overwritten.
- `PlaneGeometry(...).rotateX(-Math.PI / 2)` numbers its rows from the **north** end. The terrain is baked north to south for that reason. If you touch the bake, keep the mesh self-check.
- `THREE.Clock` is deprecated in this version. Use the timestamp the animation loop passes in.
- A second `const ZEROS` anywhere in the same module is a syntax error that blanks the page.

**The 3D world on paper**

- Create the renderer with `alpha: true`, delete the `scene.background` line, and never call `renderer.setClearColor(colour)`: in 0.187 its alpha argument defaults to 1, which makes the canvas opaque and hides the ticks. Set the fog to the ground colour so the far end of the road fades into the paper.
- The scene's lights and its lightness formula were tuned for a dark ground. On paper they will wash out. Retune them, and check a screenshot: wells dark, high ground pale but still distinct from the page.
- The pin material sets `fog: false` so pins glow through dark fog. On paper, pins are ink and should fade with distance like everything else.
- The roll-call counter and the text panel were light text on dark. They become ink on paper.

**The page**

- `<main>` has `pointer-events: none` so drags reach the canvas. Any button, slider or link inside it needs `pointer-events: auto`.
- In portrait, `resize()` frames the scene in the space above the text panel using `camera.setViewOffset`. If the panel's height changes, call `resize()` again.
- The road ends at height 237 on purpose: zeros 101 and 102 are at 237.77 and 239.56.
- `spikes` already returns 0 at T = 0. The hazard is x = 1, where ln x = 0 gives Infinity in `spikes`, `psiK` and x / ln x. Start every x axis at 1.5 or above.
- Start WebGL only when a step needs it, so the intro is instant and still works where WebGL does not.

**Motion and access**

- Honour `prefers-reduced-motion`, and give a visible "Pause motion" control as the personal site does.
- Everything reachable by keyboard. Visible focus. Contrast as in section 4.2.
- Check a phone in portrait (390 x 664) and in landscape (667 x 375).

**Staying out of the teammate's way**

Do not edit `landscape.html`, `main.js`, `zeta.js` or `docs/riemann_graph_v1.md`. Do not create `dirichlet.js`, `primes.js`, `primesView.js`, `proof.html`, `proof.js` or `proofMath.js`: PR #6 adds them. Put your modules in a folder of their own, `./guide/`. In `README.md`, edit only above `## Getting started`, plus the one `index.html` line under `## Running`. Before each merge:

```sh
git fetch origin && git diff --name-only origin/main...HEAD | grep -xE 'landscape\.html|main\.js|zeta\.js|dirichlet\.js|primes\.js|primesView\.js|proof\.html|proof\.js|proofMath\.js|docs/riemann_graph_v1\.md' && echo "TOUCHES TEAMMATE FILES" || echo clear
```

PR #6 also changes `index.html`, and so will you. You cannot avoid that conflict and should not try. Say in your report what you changed in `index.html` so he knows what to rebase onto.

## 8. How to work

**Shipping rule.** Work on a branch in a git worktree, so the main checkout stays on `main` and clean. Look at it locally with `python3 -m http.server 8000 --bind 127.0.0.1`. Open a PR with `gh pr create`. Merge from the main checkout, by number: `gh pr merge <number> --squash --delete-branch --repo analytiq-hub/zeta-world`, then `git pull --ff-only` there. (Run from inside the worktree, the merge command fails trying to switch branches.) Check the deploy with `gh run list --repo analytiq-hub/zeta-world --limit 1` and load the live URL once. If the live page is broken, revert first and debug after. Alex has asked for work to be pushed as it is done, so merging your own PRs is expected.

**Never break the front door.** Build the new experience at a new URL first, `guide.html`. Merge it early and often so Alex and his teammate can watch it grow. Make it the home page only at the end. The current `index.html` stays the home page until then, dark as it is.

**One scene, two pages.** The first merge of slice 1 is a refactor and nothing else: move the scene from `index.html`'s inline script into `./guide/scene.js`, exporting one function that takes the canvas and a small options object (colours, whether to start the roll call) and returns the camera, the controls and the zeros. `index.html` imports it and must look and behave exactly as before. Merge that alone and load the live page. `guide.html` then loads the same module with a dynamic `import()` when step 4 opens, passing the paper colours. Never keep two copies of `ZEROS` or `zetaGrid`.

**The swap.** The guide becomes `index.html`. "Just let me fly" is a state of that page at `#fly`, not a second HTML file. `guide.html` stays as a redirect to `./`. In `learn.html`, point the links to `./` at `./#fly`, since they are labelled "the 3D world", and move its colours to the paper palette: they are CSS variables in one `:root` rule, except the step-number badge (`.step .n`, `color: #1a1400`), which becomes the ground colour on amber. Reword its "gold line" to "amber line" and its "white pin" to "ink pin".

**Slices, in order of what the demo needs.** Check the clock when you start. These budgets assume a 3:15 PM start and end at 6:35 PM.

| Slice | Contains | Budget |
|---|---|---|
| 1 | The scene refactor; then the intro (paper, ticks, greeting, choices) and the step shell with all ten steps as text and static figures; then steps 4 and 5 driving the scene on paper | 60 min |
| 2 | Step 6, the zeros building the primes | 40 min |
| 3 | Steps 7 and 8, the hypothetical zero and the band it breaks. This is the direction Alex cares most about | 45 min |
| 4 | Steps 9 and 10 | 30 min |
| 5 | The swap, `learn.html` on paper, phone and reduced-motion passes, README, `PLAN.md`, a new `og.jpg` | 25 min |
| 6 | Steps 1 to 3 as real interactions, in that order. Only if slice 4 is merged before 6:10 PM: build them then, ahead of slice 5, and stop at 6:10 | time in hand before 6:10 PM |

**Cut rules.**

- If slice 1 is not merged by 4:20 PM, skip the hand-off animation and ship the shell and the paper scene as they are.
- If slice 2 is not merged by 5:05 PM, stop everything else until it is.
- If slice 3 is running late, build step 8 first and give step 7 a slider for the zero's real part in place of the drag.
- At 6:10 PM stop building steps and start slice 5 with what exists. A step whose interaction is not built keeps its text and static figure.
- The swap is the last merge and must be merged by 6:45 PM. If slices 1 and 2 are not both live by 6:15 PM, do not swap: leave `index.html` as it is and add one link to `./guide.html` in its text panel.
- After 6:45 PM, reverts only.

**Checking in a browser.** If the Claude in Chrome tools are available, use them: load the local URL, read the console with pattern `.`, and take screenshots. That Chrome window is maximized and will not resize, so check phone sizes by injecting an `<iframe>` of the page at 390 x 664 and 667 x 375 into a local tab. Do not trigger `alert` or `confirm` dialogs.

**If you run agents in parallel,** these stages have earned their cost today: three independent designs for the intro and the step shell with a judge, before any code; an independent check of every sentence against `docs/guide-content.json` before each merge; and a cold reader who clicks only Next and reports where they got lost.

## 9. Done when

- **One look:** the paper ground and the ticks are behind every screen, from the intro through the 3D world to the last step. Nothing is dark. Each colour in section 4.2 means the same thing wherever it appears.
- **First screen:** ticks that react to the pointer, an italic greeting, and at least five choices including "get started" and "what the paper actually proved". It is on screen within a second on a laptop and does not wait for WebGL.
- **The climb:** ten steps or fewer. Each has one sentence, one instruction and Next and Back, and each built step has one interaction that visibly changes something. The keys work as in 5.2. The hash holds the step. A cold visitor finishes in about five minutes.
- **The four must-haves:** riding the camera north up the line; spikes rising at the primes as zeros are passed, with no prime given to the sum; a hypothetical zero the visitor moves off the line, with its mirror twin; and that zero's wave breaking out of the band the primes keep to.
- **The contradiction is stated once, plainly,** as step 9's payoff line (the sentence is in the notes under 5.3). It is attributed to the announced proof, not asserted, and the band and the ceiling are never confused (5.4).
- **The last step** shows the four checks and what is still needed, and carries the status sentence word for word.
- **Clean:** no console errors or warnings, both self-checks silent, reduced motion honoured with a pause control, usable at 390 x 664 and 667 x 375, contrast as in 4.2.
- **Honest:** every mathematical and news sentence on screen traces to `docs/guide-content.json`, `PLAN.md` or `proof.html`, and the hypothetical zero is labelled wherever it shows.
- **Safe:** the teammate-file check prints `clear`, the live site was loaded after every merge, `#fly` still gives the plain 3D world, and the explorer link is still there.
- **Recorded:** `README.md` says what the home page now is, and `PLAN.md`'s "Where things stand" and "Two pages" are brought up to date.

## 10. Do not

- Add a build step, a framework or a dependency beyond three.js.
- Merge, edit or comment on PR #6, or touch the teammate's files listed in section 7.
- Change the status sentence or its date without saying so in your report.
- Post the project card on sundai.club, or anything else under Alex's name outside this repo.
- Put local file paths in committed files. The repo is public.
- Leave `main` broken to finish something.

## 11. Report back

When you stop, give Alex, in this order: the live URL and what a visitor now sees first; the PRs you merged, one line each; which steps of the climb have their interaction and which are text and a figure; what you did not test; and what you changed in `index.html` that the teammate must rebase PR #6 onto.
