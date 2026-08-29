/**
 * Zombie Survival Game - Player Unit Tests
 */

if (window.ZS && window.ZS.Tests && window.ZS.Tests.testRunner) {
    const runner = window.ZS.Tests.testRunner;

    runner.add('Player Health Initialization', (r) => {
        const p = new window.ZS.Player.Player('Tester');
        r.assertEqual(p.vitals.health, 100, 'Initial health should be 100');
        r.assertEqual(p.vitals.isDead, false, 'Player should be alive initially');
    });

    runner.add('Player Damage & Armor Absorption Math', (r) => {
        const p = new window.ZS.Player.Player('Tester');
        p.vitals.armor = 50;
        p.vitals.takeDamage(20, 'test');
        r.assert(p.vitals.health < 100, 'Health should drop after taking damage');
        r.assert(p.vitals.armor < 50, 'Armor should absorb part of the damage');
    });

    runner.add('Player Level Up XP Curve', (r) => {
        const p = new window.ZS.Player.Player('Tester');
        p.addXP(150);
        r.assertEqual(p.level, 2, 'Player should level up to 2 after gaining 150 XP');
        r.assertEqual(p.skillPoints, 1, 'Player should gain 1 skill point on level up');
    });
}
