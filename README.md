# Zombie Survival Game — Top-Down Apocalypse 50K+ LOC

Zombie Survival is a complete, playable, professional **2D top-down zombie survival browser game** built from scratch with pure HTML5, CSS3, Vanilla JavaScript, HTML5 Canvas, and Browser LocalStorage.

---

## Installation

To set up the project locally, clone the repository and install the dependencies:

```bash
git clone https://github.com/Meera1010/zombie-survival-game.git
cd zombie-survival-game
npm install
```

---

## Build

To build the static distribution artifacts or build the Docker container image:

### Build Static Bundle
```bash
npm run build
```

### Build Docker Container
```bash
docker build -t zombie-survival-game .
```

---

## Run

You can run Zombie Survival using the local HTTP server or by opening `index.html` directly in any modern web browser.

### Start HTTP Server
```bash
npm start
```
The application will be accessible at `http://localhost:3000`.

### Serve Static Directory
```bash
npm run serve
```

---

## Dependencies

The project uses minimal, lightweight dependencies:

- **Express** (`^4.19.2`): HTTP server static file delivery.
- **Serve** (`^14.2.3`): Static directory web server.
- **Jest** (`^29.7.0`): Unit testing framework.

---

## Usage

1. Open `index.html` directly in your browser or run `npm start` and visit `http://localhost:3000`.
2. **Main Menu**: Start a New Game, Continue a Saved Profile, Select Maps, Adjust Settings, or View Lifetime Statistics.
3. **Gameplay Controls**:
   - **W / A / S / D**: Player movement (Up, Left, Down, Right)
   - **SHIFT**: Sprint (consumes stamina)
   - **Mouse**: Aim direction
   - **Left Click**: Fire equipped weapon / Melee swing
   - **R**: Reload weapon
   - **1 / 2 / 3 / 4 / 5**: Hotbar weapon slot selection
   - **E**: Interact / Open doors
   - **I**: Toggle 24-slot Grid Inventory
   - **SPACE**: Activate Adrenaline Surge Special Ability
   - **ESC**: Pause Menu
4. **Merchant Shop & Armory**: Purchase 10 weapons (Knife, Pistol, Revolver, Shotgun, SMG, Assault Rifle, Sniper Rifle, Crossbow, Grenade, Molotov), buy ammo packs, medical kits, Kevlar armor plates, and upgrade weapon stats.
5. **Skill Tree & Missions**: Allocate skill points into Combat, Survival, and Mobility branches, complete story missions, and unlock 30 achievements.
6. **Boss Battles**: Survive 20+ scaling zombie waves and defeat major boss encounters: The Butcher, The Mutant, and The Overlord.
7. **Browser LocalStorage**: Zero-backend architecture persisting player stats, inventory, equipment, skill tree nodes, missions, achievements, and settings across sessions.

---

## 🚀 Features

* **20 Functional Screens**: Loading Screen, Main Menu, New Game, Continue, Game Screen HUD, Pause Menu, Inventory, Weapons, Shop, Character Upgrades, Skill Tree, Missions, Achievements, Map Selection, Settings, Statistics, Game Over, Victory, Help/Controls, Credits.
* **10 Weapon Types**: Combat Knife, 9mm Pistol, .44 Revolver, 12-Gauge Shotgun, SMG, Assault Rifle, .50 Cal Sniper Rifle, Tactical Crossbow, Frag Grenade, Molotov Cocktail.
* **10 Zombie Archetypes + 3 Bosses**: Normal Walker, Fast Runner, Crawler, Tank Brute, SWAT Armored, Acid Spitter, Boomer Exploder, Screamer, Shadow Stalker, and 3 Boss encounters (The Butcher, The Mutant, The Overlord).
* **7 Playable Maps**: Abandoned City, City General Hospital, Police Precinct 9, MegaMart Supermarket, Industrial Warehouse, Fort Hazard Military Outpost, and Sub-Level 4 Bio-Lab.
* **Procedural Web Audio API Sound & Music**: Standalone procedural sound effects (gunshots, explosions, zombie roars, reloads, UI clicks) and dark synthwave music generation without external asset dependencies.
* **Save System & Backup**: LocalStorage persistence with Base64 save import/export string support.
