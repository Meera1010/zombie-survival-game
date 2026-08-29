# TESTING.md — Zombie Survival Automated Test Suite

## Unit Test Architecture

The game features an in-engine automated assertion runner (`js/tests/testRunner.js`).

Test modules:
- `playerTests.js`: Player health, damage, armor absorption, level up XP math.
- `zombieTests.js`: Zombie creation, health, damage, and death drops.
- `weaponTests.js`: Magazine ammo consumption, reload timers.
- `inventoryTests.js`: 24-slot grid item stacking.
- `waveTests.js`: Wave 1-20 difficulty scaling formulas and boss placements.
- `saveTests.js`: LocalStorage serialization and recovery.

To run tests in browser console:
```js
runTests();
```
