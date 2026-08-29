/**
 * Zombie Survival Game - Weapon Firing & Reload Unit Tests
 */

if (window.ZS && window.ZS.Tests && window.ZS.Tests.testRunner) {
    const runner = window.ZS.Tests.testRunner;

    runner.add('Pistol Magazine Ammo Consumption', (r) => {
        const pistol = new window.ZS.Weapons.Pistol();
        r.assertEqual(pistol.currentAmmo, 12, 'Pistol initial ammo should be 12');
        pistol.fire(0, 0, 0, new window.ZS.Player.PlayerStats(), false, false);
        r.assertEqual(pistol.currentAmmo, 11, 'Ammo should drop to 11 after 1 shot');
    });

    runner.add('Pistol Reload Logic', (r) => {
        const pistol = new window.ZS.Weapons.Pistol();
        pistol.currentAmmo = 0;
        pistol.reload();
        r.assertEqual(pistol.isReloading, true, 'Reload state should be active');
        pistol.finishReload();
        r.assertEqual(pistol.currentAmmo, 12, 'Current ammo should reload to 12');
    });
}
