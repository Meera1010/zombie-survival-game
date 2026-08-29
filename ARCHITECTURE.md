# ARCHITECTURE.md — Zombie Survival Engine Technical Blueprint

## System Overview

Zombie Survival is architected using modular Vanilla ES6 Classes organized into clean namespaces under global window `window.ZS`.

```
window.ZS
├── Core (Engine, StateManager, EventBus, InputManager, DifficultyManager, TimeManager)
├── Player (Player, PlayerStats, PlayerVitals, PlayerMovement, PlayerCombat)
├── Weapons (WeaponBase, ProjectileManager, RecoilSpreadSystem, WeaponRegistry, 10 Weapons)
├── Zombies (ZombieBase, ZombieAI FSM, ZombieGroupBehavior, 10 Zombies + 3 Bosses)
├── Waves (WaveManager, WaveSpawner, WaveBalancer)
├── World (MapBase, MapManager, TileEngine, ObstacleManager, DoorManager, 7 Maps)
├── Inventory (InventoryManager, ItemDatabase, EquipmentManager, ContainerManager)
├── Shop (ShopManager, WeaponUpgradesManager)
├── Progression (XPManager, LevelingSystem, SkillTreeManager)
├── Missions (MissionManager, MissionDatabase)
├── Achievements (AchievementManager, AchievementDatabase, StatisticsTracker)
├── Storage (SaveSystem, SettingsManager, ImportExportManager)
├── Audio (AudioManager, SoundSynthesizer, MusicSynthesizer)
├── Rendering (Camera, MasterRenderer, WorldRenderer, EntityRenderer, WeaponRenderer, MinimapRenderer)
├── Effects (ParticleEngine, ScreenShake, DamageNumberSystem, BloodDecalSystem)
├── UI (UIManager, 20 Screen Controllers)
└── Tests (TestRunner, Unit Tests, DevTools)
```

## Spatial Hashing & Performance

To render hundreds of active entities and bullet projectiles without O(N^2) performance slowdown, entities are inserted into a 2D `SpatialHash` grid (128px cell size) allowing O(1) broadphase collision lookups and horde separation vector math.
