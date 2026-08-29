/**
 * Zombie Survival Game - Inventory Stacking & Usage Unit Tests
 */

if (window.ZS && window.ZS.Tests && window.ZS.Tests.testRunner) {
    const runner = window.ZS.Tests.testRunner;

    runner.add('Inventory Item Addition & Stacking', (r) => {
        const inv = new window.ZS.Inventory.InventoryManager(24);
        inv.addItem('item_bandage', 5);
        r.assertEqual(inv.slots[0].quantity, 5, 'Bandages should stack in slot 0');
        inv.addItem('item_bandage', 3);
        r.assertEqual(inv.slots[0].quantity, 8, 'Bandages should stack to 8');
    });
}
