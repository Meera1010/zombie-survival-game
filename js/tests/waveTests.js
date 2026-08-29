/**
 * Zombie Survival Game - Wave Balancer Unit Tests
 */

if (window.ZS && window.ZS.Tests && window.ZS.Tests.testRunner) {
    const runner = window.ZS.Tests.testRunner;

    runner.add('Wave 1 Scaling Formula', (r) => {
        const config = window.ZS.Waves.WaveBalancer.getWaveConfig(1);
        r.assert(config.totalZombies > 0, 'Wave 1 should have zombies');
        r.assertEqual(config.isBossWave, false, 'Wave 1 should not be boss wave');
    });

    runner.add('Wave 10 Boss Flag', (r) => {
        const config = window.ZS.Waves.WaveBalancer.getWaveConfig(10);
        r.assertEqual(config.isBossWave, true, 'Wave 10 should be a boss wave');
        r.assertEqual(config.bossType, 'BOSS_BUTCHER', 'Wave 10 boss should be The Butcher');
    });
}
