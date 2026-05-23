# ⚡ Kirchhoff 3D Virtual Lab

An interactive 3D educational electrical circuit simulator built with React Three Fiber.

## Tech Stack

| Layer       | Library                          |
|-------------|----------------------------------|
| Build       | Vite 5 + TypeScript              |
| UI          | React 18                         |
| 3D          | React Three Fiber + Drei + Three.js |
| State       | Zustand (devtools middleware)    |
| Styling     | Tailwind CSS v3                  |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type-check + build
npm run build
```

---

## Project Structure

```
src/
├── assets/            # Static assets (SVGs, textures)
├── components/
│   ├── hud/           # In-scene HUD overlays
│   ├── layout/        # Shell: TopBar, Sidebar, Panels
│   ├── scene/         # R3F scene components
│   └── ui/            # Reusable UI primitives (Button, Badge…)
├── constants/         # App-wide constants (colours, physics params)
├── hooks/             # Custom React hooks (useSimulation…)
├── store/
│   ├── circuitStore.ts  # Zustand: nodes, components, simulation results
│   └── uiStore.ts       # Zustand: tool mode, panels, notifications
├── types/             # Shared TypeScript interfaces
├── utils/             # Pure helper functions (formatSI, generateId…)
├── App.tsx
├── main.tsx
└── index.css
```

---

## Roadmap

- [ ] MNA (Modified Nodal Analysis) solver
- [ ] Wire drawing tool
- [ ] Animated current-flow particles
- [ ] Voltage / current colour mapping on meshes
- [ ] Oscilloscope HUD widget
- [ ] Save / load circuits (JSON)
- [ ] Component library expansion (switches, inductors, op-amps)
- [ ] Kirchhoff's laws breakdown panel

---

## Kirchhoff's Laws

**KCL** – The sum of all currents entering a node equals the sum leaving it.

**KVL** – The sum of all voltage drops around any closed loop equals zero.

The simulator will solve these simultaneously using Modified Nodal Analysis.
