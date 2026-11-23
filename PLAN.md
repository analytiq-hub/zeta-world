# Zeta World: the plan

Written Sunday 22 Nov 2026 for a demo at 8 PM tonight (Sundai Hack 150, the "3D Worlds Hack"). Last revised 1:30 PM, after two independent reviews of this document and a test build of step 2.

**The pitch.** A 3D world with one straight road running north. Each of the first 100 nontrivial zeros of the Riemann zeta function is a well in that road. As you fly up it, each well you pass adds one wave to a panel beside you, and the waves pile up into spikes at 2, 3, 5, 7, 11: the prime numbers, with no prime given to the sum.

Zeta landscapes and "zeros build the primes" sliders have been made many times, mostly as separate 2D plots, videos or notebooks. Two projects come close. A Unity and Quest app (last entry under Sources) already joins the zeros to the primes in 3D, with a narrated tour and a wall at 7/8, but it has no web build. A three.js page (github.com/sandipchitale/zeta-interferometer) turns the zeros into prime fringes in 3D but has no zeta landscape. No browser project was found that puts the landscape and the primes in one world you can fly through. That is the gap to own, and "nobody has done this" is too strong to say on stage.

## Where things stand

- **Live page:** https://analytiqhub.com/zeta-world/ (GitHub Pages, served from `main` at the repo root). It is one `index.html`, no build step, with three.js 0.187.0 loaded from jsDelivr through an import map.
- **What it shows:** the land from Re(s) = -0.5 to 1.5 for heights 0 to 237, coloured by phase, the gold line Re(s) = 1/2 with pins on the first 100 zeros, a roll-call counter, and the dated status line.
- **What it lacks:** anything about primes, the walls and slabs, and a guided path.
- **Build steps 1 and 2 are done and on `main`** (22 Nov, mid-afternoon). The work left starts at step 0, the card, and step 3, the primes panel.
- **A second page is live:** `landscape.html`, a teammate's free explorer (PR #2, merged 22 Nov at 2:10 PM). See "Two pages" below.

How the README's five steps map onto this plan:

| README step | State now | In this plan |
|---|---|---|
| 1. Understand it first | not written down | "The math in plain words" below |
| 2. First picture (terrain) | done to height 237 | build step 2, done |
| 3. Mark the zeros | 100 of 100 | build step 2, done |
| 4. Zeros build the primes | not started | build step 3, the centre of the demo |
| 5. Stretch: quasi-RH marker | not started | promoted to build step 4: it is cheap and now verified |
| 5. Stretch: sound | not started | stretch idea 3 |
| 5. Stretch: AI camera guide | not started | replaced today by a scripted tour, build step 5 |

One change to the README's wording: step 2 says "computed in a shader". This plan computes the story page's terrain once on the CPU instead. It takes under 0.1 seconds, is more accurate, and works with three.js built-in materials. The measurements are under "What was tested".

## Two pages

PR #2 merged on 22 Nov at 2:10 PM, after this section was written. It added `landscape.html` with `main.js` and `zeta.js`. The teammate has since opened PR #6, with more explorer tabs and a `proof.html`.

| | `index.html` (on `main`) | `landscape.html` (PR #2) |
|---|---|---|
| Terrain | size of zeta, Re(s) from 0 to 1, heights 0 to 60, computed once on the CPU | log(1 + size of zeta), Re(s) from -1 to 2, a window 40 long that slides up to height 110, computed in a shader every frame |
| Zeros | 13, typed in | found at load by scanning for sign changes |
| Extras | none yet | a ξ tab (a version of zeta that is mirror-symmetric across the road), a probe that rides the critical line, a panel plotting zeta along that line, labels in the scene |
| three.js | 0.187.0 | 0.160.0 |

Recommended split, for you and your teammate to confirm:

- **`index.html` is the story.** It is what gets demoed: the road, the primes panel, the walls and the tour. Build steps 1 to 6 below are about this page.
- **`landscape.html` is the explorer.** The tour's last stop links to it for anyone who wants to roam, and the story can point at its ξ tab when it says the zeros mirror across the road. That link works now that PR #2 is on `main`. The PR also adds one line to `index.html` (a link to the explorer) and merged cleanly onto `main` when checked at 1 PM.
- **Why the story page still needs its own long terrain.** The primes panel needs all 100 zeros, which means a road to height 237. The explorer stops at 110. With only the zeros below height 100, 11 of the 15 primes up to 50 get a spike. It takes the zeros up to about 150 to get all 15.
- **Already built in the explorer, so off this plan's list:** the symmetric height (its ξ tab), zeros found live by root-finding, and half of the "Thread the needle" idea (its probe and curve panel show zeta along Re(s) = 1/2).
- **Shared later, not today.** The explorer has no sentence about proof and finds its own zeros, so nothing in it has to change tonight. If it shows the status later, move `STATUS` into a `status.js` that both pages import.

Notes for the explorer:

- Its own doc measures a shader error of 0.006 up to height 110. The tests run for this plan agree, and found the same method fails past about 110 in 32-bit floats. To go higher, the shader function at the end of the appendix was measured to height 240 in real WebGL and needs no table of weights.
- The two pages pin different three.js versions. Leave that alone unless something breaks. An untested upgrade tonight costs more than a second download.

## Decide first: the status line

The README says the Riemann hypothesis is "not proven". Two days ago that stopped being a safe sentence.

- **6 Oct 2026, the quasi-Riemann hypothesis.** OpenAI released several hundred manuscripts written by an internal model. Two of them are about zeta. The first (dated 30 Sept) proves that zeta has no zeros with Re(s) > 7/8, which by symmetry puts every nontrivial zero in 1/8 ≤ Re(s) ≤ 7/8. That statement is formalized in Lean. The second (dated 5 Oct, edited by a person) proves the weaker bound 11/12 by a shorter route and is not formalized. Neither is peer reviewed.
- **20 Nov 2026, the full hypothesis.** Levent Alpöge (Anthropic), working with Claude, released a proof of the Riemann hypothesis as Lean source only. His note says he decided to present only Lean.
- **21 Nov 2026.** A joint statement of the Lean and Mathlib communities, endorsed by the Lean FRO and the Mathlib Initiative, said: "We hereby certify that both the statement and the proof of the Riemann Hypothesis are correct." The same day Michael Rubinstein (Waterloo) posted a 164-page working draft that explains the proof for humans. It is partial.
- **Still true today.** There is no peer review and the Clay Mathematics Institute page still lists the problem as unsolved. Clay's rules need publication and a two-year wait, so that label says nothing about doubt. Kevin Buzzard, quoted on 21 Nov: "nobody understands the proof of it."
- **A second claim.** The same day, 20 Nov, Ravi Vakil announced a separate, human-written proof of the generalized hypothesis by Alessandro Masullo. Nobody has verified it, and within hours Vakil added that several people had reported problems in it. Keep it off the screen, but expect the question.

At an AI hack two days later, a flat "unproven" will look stale and a flat "proven" overclaims. The wording is your call. My recommendation is one dated, attributed sentence held in a single constant, so it can change in one place:

> Status, 22 Nov 2026: a computer-checked proof of the Riemann hypothesis was released on 20 Nov and certified correct on 21 Nov in a joint statement of the Lean and Mathlib communities. Its author has published it only as Lean code, with no paper yet, and it has not been peer reviewed. This page shows what the statement says. It proves nothing.

Where the text stands today:

- **`index.html`** now carries the dated sentence above, in the paragraph with id `proof-status`. That paragraph is the one place the page says anything about proof.
- **`README.md`** carries the same sentence under "Status of the math".
- **Decided 22 Nov:** the dated sentence is on screen. To change the wording, edit that paragraph and the README together.

This news also hands the demo its story. The walls that fence in the zeros have stood at 0 and 1 since 1896. Last month a proof ruled out everything outside 1/8 to 7/8. Two days ago a computer-checked proof was released that closes the gap all the way to the line.

## The math in plain words

- **The zeta function** takes a complex number s and returns a complex number. For Re(s) > 1 it is the sum 1 + 1/2^s + 1/3^s + ... Euler showed the same quantity is a product with one factor per prime, which is how the primes get in. It extends to the whole plane except for one infinite spike at s = 1, called the pole.
- **A zero** is a point where zeta equals 0. There are easy ones at -2, -4, -6, ..., called trivial. All the others, the nontrivial zeros, lie in the critical strip 0 < Re(s) < 1. That has been proved since 1896.
- **The Riemann hypothesis** (1859) says every nontrivial zero has real part exactly 1/2.
- **Why the primes care.** A theorem from 1895, the explicit formula, writes the staircase that counts primes as a smooth ramp minus one wave per zero. A zero at height γ gives a wave with frequency γ, and a zero with real part β gives a wave that grows like x^β. Zeros come in mirrored pairs across the line 1/2, so the loudest wave can never grow slower than √x. The hypothesis says no wave grows faster than that, which means the primes are spread as evenly as they possibly can be.

## The world

Looking north along the road, from west to east:

```
  west plateau  | wall | slab |   road   | slab | wall |  east plain
   Re(s) < 0    0     1/8     1/2       7/8     1      Re(s) > 1

  south end: height 0, with the pole at s = 1 on the edge
  north end: height 237, between the 100th zero (236.52) and the 101st (237.77), in fog
```

- **Ground:** the size of zeta, squashed so the pole fits: height = RISE × (2/π) × atan`|ζ(s)|`. A zero is a pit that reaches the floor. The west is a high plateau from about height 20 northwards, and the east rolls around half height. Colour is the phase, as now.
- **The pole** sits on the south edge of the land, so only its north half exists and it reads as half a mound, not a spire. If the tour wants a spire, start the land a few units south of height 0.
- **Road:** the gold line Re(s) = 1/2, with a pin on each of the first 100 zeros. The road stops at 237 because the 101st and 102nd zeros are at 237.77 and 239.56. A road to 240 would end with two wells that have no pin.
- **Walls:** translucent, at Re(s) = 0 and 1. Proved 1896.
- **Slabs:** shaded floor for 0 < Re(s) < 1/8 and 7/8 < Re(s) < 1. No zeros in there, per the paper OpenAI released on 6 Oct 2026.
- **Primes panel:** a labelled chart docked at the edge of the screen, so it is beside you for the whole road. Its input is your position: the zeros south of the camera are the zeros in the sum. Draw it on a 2D canvas over the page, the way the explorer draws its curve panel. A chart standing inside the scene would be lost in the fog for most of the road. The in-world version is the "Prime ridges" stretch idea.

**Layout, tested in Chrome.** This plan first guessed 12 world units per unit of Re(s) and a relief 6 high. Built that way, the ridges hide every pit from a low camera. What works:

| Constant | Value | Why |
|---|---|---|
| `WIDTH`, world units per unit of Re(s) | 4 | at 12 a zero is a ditch right across the land. At 1 the land is a ribbon |
| `LEN`, world units per unit of height along the road | 1 | unchanged |
| `RISE`, height of the land | 1 | the ratio RISE / LEN decides whether a pit is visible along the road. Keep it near 1 |
| Pins | 1.5 tall, head radius 0.1 | scaled to the new relief |
| Start camera | 3.5 west of the road, 6.5 up, at road height 7, looking at the road at height 22 | off the axis so pins do not stack, 23 degrees down so pits show |
| Fog | 45 to 130 while the camera is 6.5 high or lower, both scaled by height / 6.5 above that | with fixed fog, any view from high up is mostly black |
| Camera limits | `maxDistance` 300, far plane 1000, `minDistance` 2, auto-rotate removed | the old limit of 110 cannot see a road 237 long, and auto-rotate swings the start view off the road |

Two limits to design around. A view of the whole road is a thin band 8 wide and 237 long, so keep tour shots low and close. No single view shows every pit: from the start pose you see the first 5 or 6 pits and then a straight row of pin heads.

## Build order for today

| # | Step | Estimate | After it you can show |
|---|---|---|---|
| 0 | The project card | 10 min | a card in the vote |
| 1 | One status line | done | |
| 2 | The whole road | done | the hero screenshot |
| 3 | Zeros to primes panel | 1 h 30 | the part that teaches |
| 4 | Walls and slabs | 30 min | what is proved and what is claimed |
| 5 | The tour | 1 h | the whole story, hands off |
| 6 | Rehearse, record, ship | 45 min | |

That is about 4 h 35 min. Starting at 1:30 PM it ends near 6:05 PM, so the stretch list only opens if steps come in early or two people work at once. Steps 3 and 4 do not depend on each other. If they are built in parallel, put the panel in its own module file so the edits do not collide. The estimates for steps 3 to 6 are a judge's.

The panel comes before the walls because it is the part that teaches. If the day runs short, the walls are what to lose.

**Cut rules.** If spikes are not on screen by 3:15 PM, skip the staircase toggle in step 3. Start the tour by 5:00 PM whatever state the walls are in. Freeze features at 6:45 PM. Confirm the real vote cutoff in the room: figures from earlier hacks range from 7:45 to 8:30 PM, and no public source gives tonight's.

**Shipping rule.** `main` deploys to the live link on every push, and that link is on the card. Build on a branch and look at it locally with `python3 -m http.server`. Merge only when a step's "Done when" passes. If the live page breaks, revert the merge first and debug on the branch after. Make the last merge at the freeze. Agree with your teammate who is editing `index.html` at any moment, since PR #2 touches it too.

### 0. The project card

- Log in to sundai.club, open the card form, and note its fields, the vote cutoff, and whether a posted card can be edited.
- If it can be edited, post now with the live link, `og.jpg` and one of the lines under "The demo". Swap in the new start-view screenshot after step 2.
- If it cannot, post right after step 2.

### 1. One status line

**Done 22 Nov.** The status is plain HTML, the paragraph with id `proof-status` in `index.html`, not a script constant: one sentence in one place needs no constant. When the tour needs it, read that paragraph's text. What the step asked for:

- Add a `STATUS` constant and a `CAPTIONS` array at the top of the script in `index.html`. Every sentence about proof on that page reads from `STATUS`.
- `STATUS` is separate from the page's existing `#status` paragraph and `status` variable, which hold the loading message and the controls hint.
- Update the two README sentences listed above, and its line "This project visualizes the conjecture".
- **Done when** a search of `index.html` and `README.md` for "unsolved", "not proven" and "conjecture" finds nothing outside `STATUS`. Leave this file out of the search, since it quotes them.

### 2. The whole road

**Done 22 Nov.** The test build of this step is now `index.html` on `main`, with its test switches removed, `T_MAX` = 237 and the page's words updated. Screenshots from the test build are not in the repo.

What it does, for anyone building it fresh:

- It replaces the page's `zeta()` and its 13-entry `ZEROS` with `zetaGrid` and the 100-entry `ZEROS` from the appendix. Replace them, do not add beside them: a second `const ZEROS` is a syntax error that blanks the page. The current method loses accuracy as height grows (it is off by 1.8 at the 100th zero) and divides 0 by 0 at 26 points on the Re(s) = 1 edge.
- It bakes Re(s) from -0.5 to 1.5 in 64 segments and the road in 4096 segments, in under 0.1 seconds. With 64 segments, the lines at 0, 1/8, 1/2, 7/8 and 1 all fall exactly on vertex columns. 2048 rows is the fewest that keeps every pit.
- **The vertex order is the trap.** `PlaneGeometry(...).rotateX(-Math.PI / 2)` numbers its rows north to south, and `zetaGrid` numbers them in the order you ask for. So bake from north to south, `zetaGrid(-0.5, 1.5, 64, T_MAX, 0, 4096)`, and vertex v reads `re[v]` and `im[v]` directly. Baked the other way, the land lies backwards under the pins and a check that never reads the mesh still passes.
- It checks the mesh by world position: the vertex at Re(s) = 1/2, height 14.134725 is below 0.05 × RISE, and the vertex at Re(s) = 1, height 0 is exactly RISE and is the highest in the mesh.
- Pins light one by one from south to north on load, 40 ms each, and a counter fixed at the top right ends at "100 / 100 zeros checked". A pin lights and counts only if its own zero passed the self-check.

**Done when:**

- Orbiting close, about 5 units away and 30 degrees down, every pin stands in a pit. Check zeros 2 and 3, the twins at 111.03 and 111.87, and the last five.
- The start view shows the first 5 or 6 pits and then a straight row of pin heads into fog.
- Both self-checks pass with nothing in the console.

### 3. Zeros to primes

One table of waves, two curves on a shared axis, x from 1.5 to 50, about 2000 samples spaced evenly in ln x. The axis starts at 1.5 because a spike at 2 is cut in half on an axis that starts at 2. Draw it on a 2D `<canvas>` fixed to the right or bottom of the screen.

- **First, the spikes.** `spikes(x, T, ZEROS)` from the appendix, where T is the camera's height along the road. Measured: at T = 60 (13 zeros) 7 of the 15 primes up to 50 have a spike, at T = 100 (29 zeros) 11 of 15, at T = 150 (52 zeros) all 15, and at T = 237 (100 zeros) all 25 primes up to 100 with no false peaks. Over the whole flight the curve stays between -0.8 and 0.95, so fix the vertical axis at -1 to 1.1.
- **The reveal.** Hide the number labels until the R key or an on-screen Reveal button is pressed. Space and the number keys belong to the tour, and a phone has no keys. Compute the prime highlights separately from the sum, so "no prime was given to the sum" stays true. When shown, also label the small bumps at 4, 8 and 9 as prime powers. They read about 0.4, 0.2 and 0.4, against 0.7 to 0.9 at primes.
- **Second, the staircase,** as a toggle on the same axis: `psiK` against `psiTrue`, with K the number of zeros south of the camera. This is README step 4. Its steps are ln p high and happen at prime powers (4, 8, 9, 16, ... as well as primes), so label the axis "steps of ln p at each prime power". With 100 zeros the steps are crisp up to about x = 37.
- **Input.** T is the camera's height along the road, kept between 0 and 237. A DOM range slider, for the tour and for phones, moves the camera along the road and does not set T itself, so the two inputs cannot disagree. If the slider goes inside `<main>`, give it `pointer-events: auto`, because `<main>` has `pointer-events: none`. The Next button in step 5 needs the same.
- **Done when** flying north turns a wobble into spikes at 2, 3, 5, 7, 11.

### 4. Walls and slabs

- **Slabs, with no new mesh.** In the loop that colours the terrain, tint vertex columns 17 to 19 and 45 to 47. Those are the columns strictly inside 0 < Re(s) < 1/8 and 7/8 < Re(s) < 1, so the boundary lines stay unshaded, which is right because the theorem is about Re(s) > 7/8 strictly. Nothing slides today.
- **Walls.** Two translucent planes at Re(s) = 0 and 1, with `depthWrite` off. Height and opacity have not been tried in a scene. Start near 1.5 × RISE and tune by eye.
- **Words.** The tour captions and a legend line carry the labels. Wall: "Proved 1896: every nontrivial zero lies between these walls." Slab: "No zeros in here. OpenAI, released 6 Oct 2026. Checked in Lean, not peer reviewed." Road: from `STATUS`.
- **Only if you want labels standing in the scene:** `CSS2DRenderer` from the three.js addons draws into an element of its own. Append it, give it `position: fixed; inset: 0; pointer-events: none`, call its `setSize` in `resize()` and its `render` after the WebGL render. The explorer's `main.js` has these lines already.
- **Only if you want thick lines:** a plain `THREE.Line` is always 1 pixel wide in WebGL. `Line2` (`three/addons/lines/Line2.js`, with `LineGeometry.js` and `LineMaterial.js` beside it) takes `linewidth` in CSS pixels and ignores the scene fog unless created with `fog: true`. The painted gold line already reads through the first 7 pits from the start pose, which is enough for today.
- **Done when** a screenshot of the corridor with its caption tells the three-date story.

### 5. The tour

- A `STOPS` array of camera position, look-at point, caption (an entry of `CAPTIONS`) and an action to run on entering.
- Move between stops by interpolating `camera.position` and `controls.target`, and keep calling `controls.update()` every frame. OrbitControls turns the camera to its target on each update, so an interpolated rotation is thrown away. Done this way, a drag simply takes over from wherever the tour is.
- It starts by itself on load. Space, number keys and an on-screen Next button advance it. The URL hash holds the stop number, so a reload on stage recovers.
- The "100 / 100 zeros checked" roll call from step 2 runs once on load, during stop 1. The counter in stop 2 is K, the number of zeros south of the camera, the same K that feeds the panel.
- Captions at 24 px or larger.
- **Done when** someone who opens the link cold on a phone gets the story by tapping Next.

### 6. Rehearse, record, ship

- Run the tour inside a real Zoom screen share on the demo machine. Check frame rate while sharing, caption size, and that lines survive compression.
- Open the live link on a second device.
- Record a 60 to 90 second screen capture as a fallback and as card media.

## The demo

**Format found for tonight** (from the organisers' Hack 150 deck and public listing; confirm in the room): the hack runs 10 AM to 10 PM at MIT, with demos at 8 PM. You add a project card on sundai.club and the room votes on cards. More votes means more time to present. The top 5 get 5 minutes each, live over a Zoom screen share with no slides. So the card gets judged before the world does.

**The card.** One screenshot (the start view) and one line. Two candidates:

- "Fly up the road where the first 100 zeros of the zeta function all sit, and watch the primes appear beside you."
- "The Riemann hypothesis as a place: 100 wells in a dead-straight row, and the primes they encode."

**The tour, five stops.**

1. **Primes.** The start view. "2, 3, 5, 7, 11, 13. No simple rule says where the next prime falls. This landscape encodes all of them."
2. **The road.** A low ride north with a counter of zeros passed. "The land is the size of the zeta function. Where it touches the floor, zeta is zero. Here are the first 100 zeros in this strip, and every one is on the same straight line."
3. **The primes.** Ride again with the panel up. "Each zero is a wave. Add the waves of the zeros you have passed, and spikes rise at 2, 3, 5, 7, 11. No prime was given to the sum." Toggle: "The same waves bend a smooth ramp into the primes' staircase."
4. **The walls.** Stop low in the corridor and look along it. "Proved in 1896: every zero that matters, the nontrivial ones, lies between these two walls. October 2026: a proof written by an AI and checked by computer rules out the shaded slabs, so none lies outside 1/8 to 7/8. The Riemann hypothesis says every one of them is on the gold line." Then `STATUS`.
5. **Close.** "If every zero is on the line, every wave stays as small as it can, and the primes are spread as evenly as they can be." Then the live link and a link to the explorer (`./landscape.html`).

## Ideas, ranked

Four people brainstormed independently (teaching, spectacle, world-building, wildcard), giving 32 ideas. Three judges scored each from 0 to 10 for buildability today, mathematical honesty and demo impact. The score shown is the mean.

**In the build**

| Score | Idea | What it is | Where |
|---|---|---|---|
| 8.2 | The road is the slider | The zeros you have flown past are the zeros in the sum, so flying north builds the primes | step 3 |
| 8.0 | Autopilot tour | Keys fly the camera to preset shots with one caption each | step 5 |
| 7.8 | Fences and the line | Walls for what is proved, a line for what is claimed | step 4 |
| 7.8 | Dive the critical line | A low flight over wells in a straight row, vanishing into fog | step 2, tour stop 2 |
| 7.7 | Prime spikes | One cosine per zero, and spikes grow at the primes | step 3 |
| 7.5 | Zeros build the staircase | The README's step 4 | step 3 |
| 7.2 | Roll call | Pins light up in order as each zero is checked | step 2 |
| 7.0 | The proven wall | Shaded slabs from each wall in to 1/8 and 7/8, with their date. Static today, no sliding | step 4 |
| 6.8 | Ride the critical line | A one-key guided flight with an odometer | tour stop 2 |

**Stretch: pick one, in this order**

1. **Prime ridges (7.7).** The spikes extruded along the road into a second landscape: across is the number line, along is the road, so ridges rise at the primes as you fly. It is a static mesh with no slider to wire up, and the demo judge's top pick at 9 out of 10. Build each row with `spikes` at that row's height along the road. The scaling in the original proposal (dividing by the number of zeros) draws it backwards, with the tallest waves at the start.
2. **Thread the needle (7.7).** Draw zeta's value along a vertical line Re(s) = σ as a spiral around an axis, with a flash wherever it hits the axis, and a slider for σ. At σ = 1/2 there are 29 flashes below height 100. Slide away and they all die: the closest approach is 0.008 at σ = 0.51, 0.076 at 0.6 and 0.18 at 0.75. Label the readout "closest approach below height 100", because higher up the curve comes arbitrarily close to zero on any line with 1/2 < Re(s) ≤ 1 (Bohr and Courant, 1914). Right of 1 it cannot: there the size never drops below 0.46 at σ = 1.5. The explorer in PR #2 already draws this curve at σ = 1/2, so the cheapest route is a σ slider there.
3. **Zero chimes (6.5).** A chime as you pass each zero, about 20 lines of WebAudio. The rhythm is data and the pitch is decoration, and the screen should say so. Zoom only carries it if "Share sound" is ticked.
4. **Marble drop (6.8).** Click and a marble rolls downhill into a well. A real theorem stands behind it: the land has no low points other than the zeros. Caption it "every well you can reach here is on the road", because some marbles roll off the map.

**Later**

- **Three countries, one road (6.5).** Extend west far enough to show the trivial zeros at -2 and -4.
- **Signposts (6.0).** Plaques at the famous addresses: ζ(2) = π²/6, ζ(0) = -1/2, ζ(-1) = -1/12, the pole. Two of those lie outside the land as baked.
- **Ghost zero (5.3 to 5.8, proposed three times).** Add a fictional zero off the line and watch its wave outgrow the rest. It needs a permanent "fiction" banner. Add a ghost in mirrored pairs and never move a real zero. Keep its real part at or below 7/8.
- **Prime harp, the Euler product terrain, a spiral compass, spot-the-zeros, Lehmer's near miss (4.2 to 5.8).** Each is a separate scene with its own explanation.
- **Ask the guide (3.8).** The README's AI camera guide. The scripted tour does its job today.

**From the judges, not in any proposal**

- **Speiser's theorem as a plaque.** The hypothesis is equivalent to the land having no saddle points in the western half of the strip, 0 < Re(s) < 1/2. It is a way to state the hypothesis in terms of the terrain alone.
- **Real prime data from a sieve.** A sieve to a million runs in milliseconds and gives the true staircase for any error plot.
- **A symmetric height option.** The zeros mirror across the road but the land does not: at height 236 the size of zeta is about six times larger at Re(s) = 0 than at Re(s) = 1, which the squashed height draws as 0.94 against 0.64 of full height. The ξ tab in PR #2 is exactly this, already built.

## Wording rules for captions

- Say "nontrivial zeros", or "zeros in this strip", whenever a sentence would be false for the zeros at -2, -4, -6.
- Say "the first 100 zeros" or "in this window" for anything computed. Keep "all" and "never" for what is proved, and route those sentences through `STATUS`.
- The staircase steps at prime powers, by ln p. The spikes also show small bumps at prime powers. Label both.
- Zeros and primes encode each other. Neither causes or generates the other.
- The road is the mirror line for the zeros, not for the land.
- The slabs carry one date, the release on 6 Oct 2026, and "checked in Lean, not peer reviewed".
- State on screen that height is squashed and colour is phase.

## What was tested, and what was not

Tested today, by running it:

- **`zetaGrid`** (Euler–Maclaurin sum, 128 terms, 3 correction terms) against mpmath over Re(s) from -0.5 to 1.5 and heights 0 to 240: worst error 8e-4, and below 1e-5 at the 100 zeros. Three independent re-runs got the same figures.
- **Step 2 in Chrome** (headless, Apple M3 Pro), built to height 240: the bake takes 75 to 94 ms, the whole script reaches its first frame in about 0.2 seconds, a frame costs 3 to 5 ms, and both self-checks pass. Every pin stands in a pit: the land under the 100 pins is at most 0.06 of full height.
- **The road at 237** was checked in Node, not in the browser: exactly 100 wells, the land under the pins at most 0.09 of full height, and the shallowest pit 0.14 of full height below its lower rim.
- **Twin pits.** Six close pairs, near heights 111, 150, 170, 185, 221 and 231, read as twin pits, which is one reason to keep the pins.
- **A shader version** of the same sum compiled and ran in WebGL 2 in headless Chrome with worst error 8.5e-3. It is not needed for a static terrain.
- **`psiK`** against the true staircase on x from 2 to 50: RMS error 1.09 with no zeros, 0.68 with 10, 0.54 with 30, 0.35 with 100.
- **`spikes`**: the counts in step 3.
- **The 100 zeros**: generated with mpmath, and matched against Odlyzko's public table. There are exactly 100 zeros in the strip below height 237, so none is missing and all 100 are on the line.
- **three.js setup**: version 0.187.0 with the import map on the live page, and every addon path named in this plan exists at that version.
- **The appendix code** runs in Node exactly as pasted.

Not tested:

- Build steps 3 to 5. No one has seen the panel, the walls or the tour on the page.
- Any browser other than Chrome, any GPU other than an Apple M3 Pro, any real phone, and a Zoom screen share.
- The pi(x) staircase with unit steps. Computing it exactly from zeros took 359 seconds on 11 cores, so it would have to ship as a precomputed table. Dividing the waves by ln x as a shortcut is wrong: it puts a false step at every prime power that is not a prime, such as half-steps at 4, 9, 25 and 49.

Notes on three.js 0.187 that differ from older tutorials: the package has no `.min.js` builds, `THREE.Clock` is deprecated in favour of `THREE.Timer`, and the official FlyControls example now uses the WebGPU renderer, so do not copy its setup. Stay on `WebGLRenderer`.

## Open questions

1. **The status wording.** Settled 22 Nov: the recommended sentence is on the page and in the README.
2. **The two-page split, and when PR #2 merges.** That is between you and your teammate.
3. **The card:** its fields, the vote cutoff, and whether it can be edited after posting. Step 0 answers this.
4. **The demo machine and browser.** Only Chrome on one Mac has been tested.
5. **The staircase.** Are steps of ln p at prime powers acceptable for today? I recommend yes, with the label.
6. **Choices the test build made that are yours to confirm:** the start view from the west side, removing auto-rotate, `WIDTH` 4 against 6, and the 40 ms roll-call pace.

## Appendix: tested code

Everything in the first block was run in Node today with the checks listed above.

```js
// Heights (imaginary parts) of the first 100 nontrivial zeros, from mpmath.zetazero.
const ZEROS = [
  14.134725, 21.022040, 25.010858, 30.424876, 32.935062, 37.586178, 40.918719, 43.327073, 48.005151, 49.773832,
  52.970321, 56.446248, 59.347044, 60.831779, 65.112544, 67.079811, 69.546402, 72.067158, 75.704691, 77.144840,
  79.337375, 82.910381, 84.735493, 87.425275, 88.809111, 92.491899, 94.651344, 95.870634, 98.831194, 101.317851,
  103.725538, 105.446623, 107.168611, 111.029536, 111.874659, 114.320221, 116.226680, 118.790783, 121.370125, 122.946829,
  124.256819, 127.516684, 129.578704, 131.087689, 133.497737, 134.756510, 138.116042, 139.736209, 141.123707, 143.111846,
  146.000982, 147.422765, 150.053520, 150.925258, 153.024694, 156.112909, 157.597592, 158.849988, 161.188964, 163.030710,
  165.537069, 167.184440, 169.094515, 169.911976, 173.411537, 174.754192, 176.441434, 178.377408, 179.916484, 182.207078,
  184.874468, 185.598784, 187.228923, 189.416159, 192.026656, 193.079727, 195.265397, 196.876482, 198.015310, 201.264752,
  202.493595, 204.189672, 205.394697, 207.906259, 209.576510, 211.690863, 213.347919, 214.547045, 216.169539, 219.067596,
  220.714919, 221.430706, 224.007000, 224.983325, 227.421444, 229.337413, 231.250189, 231.987235, 233.693404, 236.524230,
];

// zeta(sigma + i t) on a (ns+1) x (nt+1) vertex grid by Euler-Maclaurin summation: N terms plus 3 Bernoulli corrections.
// Returns { re, im } as Float32Arrays, index j * (ns + 1) + i, with i along sigma and j along t.
// cos and sin depend only on (t, n) and n^-sigma only on (sigma, n), so the inner loop is two multiply-adds.
// N = 128 is good to t of about 400. Keep t below about 3 N.
function zetaGrid(sig0, sig1, ns, t0, t1, nt, N = 128) {
  const W = ns + 1, H = nt + 1, re = new Float32Array(W * H), im = new Float32Array(W * H);
  const ln = new Float64Array(N + 1), pw = new Float64Array(N * W), sr = new Float64Array(W), si = new Float64Array(W);
  for (let n = 1; n <= N; n++) {
    ln[n] = Math.log(n);
    for (let i = 0; i < W; i++) pw[(n - 1) * W + i] = Math.exp(-(sig0 + (sig1 - sig0) * i / ns) * ln[n]);
  }
  for (let j = 0; j < H; j++) {
    const t = t0 + (t1 - t0) * j / nt;
    sr.fill(0); si.fill(0);
    for (let n = 1; n < N; n++) {                                   // sum of n^-s for n < N
      const c = Math.cos(t * ln[n]), s = -Math.sin(t * ln[n]), row = (n - 1) * W;
      for (let i = 0; i < W; i++) { const m = pw[row + i]; sr[i] += m * c; si[i] += m * s; }
    }
    const c = Math.cos(t * ln[N]), s = -Math.sin(t * ln[N]), N2 = N * N;
    for (let i = 0; i < W; i++) {
      const sg = sig0 + (sig1 - sig0) * i / ns, m = pw[(N - 1) * W + i], pr = m * c, pi = m * s;   // p = N^-s
      const a = sg - 1, d = a * a + t * t, k0 = j * W + i;
      if (d < 1e-20) { re[k0] = Infinity; im[k0] = 0; continue; }   // the pole at s = 1
      let zr = sr[i] + 0.5 * pr + N * (pr * a + pi * t) / d, zi = si[i] + 0.5 * pi + N * (pi * a - pr * t) / d;   // + N^-s / 2 + N^(1-s) / (s-1)
      let wr = sg, wi = t, ur = pr / N, ui = pi / N, x;             // w = s (s+1) ..., u = N^(-s-2k+1)
      zr += (wr * ur - wi * ui) / 12; zi += (wr * ui + wi * ur) / 12;
      for (const [k, cf] of [[1, -1 / 720], [3, 1 / 30240]]) {
        x = wr * (sg + k) - wi * t; wi = wr * t + wi * (sg + k); wr = x;
        x = wr * (sg + k + 1) - wi * t; wi = wr * t + wi * (sg + k + 1); wr = x;
        ur /= N2; ui /= N2;
        zr += cf * (wr * ur - wi * ui); zi += cf * (wr * ui + wi * ur);
      }
      re[k0] = zr; im[k0] = zi;
    }
  }
  return { re, im };
}

// The terrain, baked from north (height 237) to south (height 0): that is the row order of
// PlaneGeometry after rotateX(-Math.PI / 2), so plane vertex v reads re[v] and im[v] directly.
// Its height is RISE * (2 / Math.PI) * Math.atan(Math.hypot(re[v], im[v])) and its phase is Math.atan2(im[v], re[v]).
// The pole vertex is Infinity, which atan turns into the full height RISE.
const { re, im } = zetaGrid(-0.5, 1.5, 64, 237, 0, 4096);

// Self-check: every listed zero is a zero, and zeta(2) = pi^2 / 6.
const size = (sigma, t) => { const z = zetaGrid(sigma, sigma, 1, t, t, 1); return Math.hypot(z.re[0], z.im[0]); };
console.assert(ZEROS.every(t => size(0.5, t) < 1e-4) && Math.abs(size(2, 0) - Math.PI ** 2 / 6) < 1e-6, 'zeta self-check failed');

// Prime spikes. T is the camera's height along the road: zeros south of the camera are in the sum,
// each fading in as it is passed. As T grows a prime tends to 1, a prime power p^m to 1/m and everything else to 0.
// At T = 237 and x up to 50: primes read 0.71 to 0.94, and 4, 8, 9 read 0.43, 0.23, 0.40.
function spikes(x, T, zeros) {
  if (!(T > 0)) return 0;   // camera at the south end: no zero passed yet, and 0 * (4 pi / 0) is NaN
  let s = 0;
  for (const g of zeros) { if (g >= T) break; s -= (1 - g / T) * Math.cos(g * Math.log(x)); }
  return s * (4 * Math.PI / T) * Math.sqrt(x) / Math.log(x);
}

// The staircase rebuilt from the first K zeros (the explicit formula): a ramp minus one wave per zero.
function psiK(x, K, zeros) {
  const L = Math.log(x), r = Math.sqrt(x);
  let y = x - Math.log(2 * Math.PI) - 0.5 * Math.log(1 - 1 / (x * x));
  for (let k = 0; k < K; k++) {
    const g = zeros[k];
    y -= 2 * r * Math.cos(g * L - Math.atan2(g, 0.5)) / Math.hypot(0.5, g);
  }
  return y;
}

// The true staircase: adds ln p at every prime power p^m <= x, and half of it exactly at the jump.
function psiTrue(x) {
  let y = 0;
  for (let p = 2; p <= x; p++) {
    let prime = true;
    for (let d = 2; d * d <= p; d++) if (p % d === 0) { prime = false; break; }
    if (prime) for (let q = p; q <= x; q *= p) y += Math.log(p) * (q === x ? 0.5 : 1);
  }
  return y;
}
```

To regenerate the zeros with more digits:

```sh
uv run --with mpmath python -c "import mpmath as m; m.mp.dps=30; print([float(m.nstr(m.zetazero(n).imag,15)) for n in range(1,101)])"
```

The same sum as a shader function, for the explorer if it needs to go past height 110. This exact text compiled and ran in WebGL 2 (headless Chrome, Apple M3 Pro) with worst error 8.5e-3 up to height 240. It was not run inside a three.js `ShaderMaterial`.

```glsl
const int N = 128;
vec2 cmul(vec2 a, vec2 b) { return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x); }
vec2 zeta(float sigma, float t) {                       // zeta(sigma + i t) as (re, im)
  vec2 s = vec2(sigma, t), sm1 = vec2(sigma - 1.0, t), z = vec2(0.0);
  if (dot(sm1, sm1) < 1e-10) return vec2(1e9, 0.0);     // the pole at s = 1
  for (int n = 1; n < N; n++) {                         // sum of n^-s for n < N
    float ln = log(float(n)), ph = t * ln;
    z += exp(-sigma * ln) * vec2(cos(ph), -sin(ph));
  }
  float fN = float(N), lnN = log(fN), ph = t * lnN;
  vec2 p = exp(-sigma * lnN) * vec2(cos(ph), -sin(ph)); // N^-s
  z += 0.5 * p + fN * cmul(p, vec2(sm1.x, -sm1.y)) / dot(sm1, sm1);   // N^-s / 2 + N^(1-s) / (s-1)
  vec2 u = p / fN, w = s;                               // three Bernoulli corrections
  z += cmul(w, u) / 12.0;
  w = cmul(cmul(w, s + vec2(1.0, 0.0)), s + vec2(2.0, 0.0)); u /= fN * fN;
  z -= cmul(w, u) / 720.0;
  w = cmul(cmul(w, s + vec2(3.0, 0.0)), s + vec2(4.0, 0.0)); u /= fN * fN;
  z += cmul(w, u) / 30240.0;
  return z;
}
```

## Sources

- **The hack:** the organisers' guide at https://www.sundai.club/guide, which links the Hack 150 deck.
- **Quasi-Riemann hypothesis:** https://github.com/openai/math (both papers and the Lean statement), and Quanta's report at https://quantamagazine.org/ai-proved-the-quasi-riemann-hypothesis-what-happens-now-20261019
- **The 20 Nov proof:** the joint statement at https://leanprover-community.github.io/blog/posts/riemann-hypothesis/, the author's note at https://alpo.ge/remark.pdf, an independent verification log at https://math.mit.edu/~drew/grh/, Scientific American at https://www.scientificamerican.com/article/anthropic-mathematician-claims-to-prove-riemann-hypothesis-most-famous-problem-in-all-of-math/, and Al Jazeera (the Buzzard quote) at https://www.aljazeera.com/news/2026/11/21/riemann-hypothesis-has-the-worlds-most-famous-maths-problem-been-cracked
- **The third-party exposition draft:** https://www.math.uwaterloo.ca/~mrubinst/alpoge_claude_grh/
- **The second claim:** Ravi Vakil's post at https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/ and Scientific American at https://www.scientificamerican.com/article/dueling-claims-of-riemann-hypothesis-proofs-emerge/
- **Clay Mathematics Institute status page:** https://www.claymath.org/millennium/riemann-hypothesis/
- **A public table of 100,000 zeros** (Odlyzko): https://www-users.cse.umn.edu/~odlyzko/zeta_tables/zeros1
- **three.js without a build step:** https://threejs.org/manual/pages/installation.html
- **Closest existing project** (Unity and Quest, no web build): https://github.com/atonalfreerider/riemann-zeta-visualization
