const test = require("node:test");
const assert = require("node:assert/strict");

const greet = require("../src/greet");

test("greet returns a personalized welcome", () => {
    assert.equal(
        greet("DevOps"),
        "Hello DevOps! Welcome to DevOps-17-Lab."
    );
});

test("greet rejects an empty name", () => {
    assert.throws(
        () => greet(" "),
        {
            name: "TypeError",
            message: "Name must be a non-empty string"
        }
    );
});