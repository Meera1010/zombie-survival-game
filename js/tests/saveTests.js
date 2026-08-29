/**
 * Zombie Survival Game - Save System Unit Tests
 */

if (window.ZS && window.ZS.Tests && window.ZS.Tests.testRunner) {
    const runner = window.ZS.Tests.testRunner;

    runner.add('LocalStorage Serialization Test', (r) => {
        const saved = window.ZS.Storage.saveSystem.saveGame();
        r.assertEqual(saved, true, 'Game save operation should succeed');
        r.assertEqual(window.ZS.Storage.saveSystem.hasSave(), true, 'Save existence check should return true');
    });
}
