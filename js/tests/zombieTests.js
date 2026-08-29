/**
 * Zombie Survival Game - Zombie AI & Damage Unit Tests
 */

if (window.ZS && window.ZS.Tests && window.ZS.Tests.testRunner) {
    const runner = window.ZS.Tests.testRunner;

    runner.add('Normal Zombie Creation', (r) => {
        const z = new window.ZS.Zombies.NormalZombie(100, 100);
        r.assertEqual(z.health, 80, 'Normal zombie HP should be 80');
        r.assertEqual(z.ai.currentState, 'IDLE', 'Initial state should be IDLE');
    });

    runner.add('Zombie Damage & Death Rewards', (r) => {
        const z = new window.ZS.Zombies.NormalZombie(100, 100);
        z.takeDamage(100, true);
        r.assertEqual(z.health, 0, 'Zombie health should drop to 0');
        r.assertEqual(z.destroyed, true, 'Zombie should be destroyed on death');
    });
}
