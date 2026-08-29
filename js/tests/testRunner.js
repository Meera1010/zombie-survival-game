/**
 * Zombie Survival Game - Built-in Unit Test Suite & Assertion Runner
 * 
 * Lightweight test runner executing automated assertions directly in browser or node.
 */

window.ZS = window.ZS || {};
window.ZS.Tests = window.ZS.Tests || {};

window.ZS.Tests.TestRunner = class TestRunner {
    constructor() {
        this.tests = [];
        this.passed = 0;
        this.failed = 0;
    }

    add(name, testFn) {
        this.tests.push({ name, testFn });
    }

    assert(condition, message) {
        if (!condition) {
            throw new Error(`Assertion Failed: ${message}`);
        }
    }

    assertEqual(actual, expected, message) {
        if (actual !== expected) {
            throw new Error(`Assertion Failed: ${message} (Expected ${expected}, got ${actual})`);
        }
    }

    runAll() {
        console.log('--- RUNNING ZOMBIE SURVIVAL TEST SUITE ---');
        this.passed = 0;
        this.failed = 0;

        for (let i = 0; i < this.tests.length; i++) {
            const t = this.tests[i];
            try {
                t.testFn(this);
                this.passed++;
                console.log(`[PASS] ${t.name}`);
            } catch (err) {
                this.failed++;
                console.error(`[FAIL] ${t.name}: ${err.message}`);
            }
        }

        console.log(`--- TEST RESULTS: ${this.passed} PASSED, ${this.failed} FAILED ---`);
        return { passed: this.passed, failed: this.failed };
    }
};

window.ZS.Tests.testRunner = new window.ZS.Tests.TestRunner();
