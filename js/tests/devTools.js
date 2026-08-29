/**
 * Zombie Survival Game - Developer Console Tools & Cheats
 * 
 * Cheats: God mode, give coins, give XP, spawn boss, skip wave, unlock all skills.
 */

window.ZS = window.ZS || {};
window.ZS.DevTools = class DevTools {
    static godMode() {
        if (window.ZS.Player && window.ZS.Player.playerInstance) {
            window.ZS.Player.playerInstance.vitals.health = 999999;
            window.ZS.Player.playerInstance.stats.baseMaxHealth = 999999;
            console.log('God mode activated!');
        }
    }

    static giveCoins(amount = 10000) {
        if (window.ZS.Player && window.ZS.Player.playerInstance) {
            window.ZS.Player.playerInstance.addCoins(amount);
            console.log(`Gave ${amount} coins!`);
        }
    }

    static spawnBoss(bossType = 'BOSS_BUTCHER') {
        const p = window.ZS.Player ? window.ZS.Player.playerInstance : { x: 500, y: 500 };
        if (window.ZS.Zombies && window.ZS.Zombies.zombieManager) {
            window.ZS.Zombies.zombieManager.spawn(bossType, p.x + 100, p.y + 100);
            console.log(`Spawned ${bossType}!`);
        }
    }

    static skipWave() {
        if (window.ZS.Waves && window.ZS.Waves.waveManager) {
            window.ZS.Waves.waveManager.completeWave();
            console.log('Wave skipped!');
        }
    }

    static runTests() {
        if (window.ZS.Tests && window.ZS.Tests.testRunner) {
            return window.ZS.Tests.testRunner.runAll();
        }
    }
};

window.godMode = window.ZS.DevTools.godMode;
window.giveCoins = window.ZS.DevTools.giveCoins;
window.spawnBoss = window.ZS.DevTools.spawnBoss;
window.skipWave = window.ZS.DevTools.skipWave;
window.runTests = window.ZS.DevTools.runTests;
