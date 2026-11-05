const appName = "DevOps-17-Lab";

function greet(name) {
    if (typeof name !== "string" || name.trim().length === 0) {
        throw new TypeError("Name must be a non-empty string");
    }

    return `Hello ${name}! Welcome to ${appName}.`;
}

module.exports = greet;