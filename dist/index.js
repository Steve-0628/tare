"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tare {
    constructor(username = "stesan") {
        this.commands = ["pull", "push", "collect", "help"];
        this.username = username;
    }
    init() {
        const args = process.argv.slice(2);
        const arg = args[0];
        if (args.length != 1) {
            this.printHelp("Error: Number of argument is invalid");
            return -1;
        }
        if (this.commands.every(v => v != arg)) {
            this.printHelp("Error: Command not found");
            return -1;
        }
        if (arg == "help") {
            this.printHelp();
        }
        if (arg == "pull") {
            //todo
        }
        if (arg == "push") {
            //todo
        }
        if (arg == "collect") {
            //todo
        }
    }
    printHelp(additionalInfo = "") {
        console.log(additionalInfo);
        console.log("Usage: yarn start [ pull | push | collect | help ]");
        console.log("  pull     Pulls config from somewhere on the internet");
        console.log("  push     Pushes config to somewhere on the internet");
        console.log("  collect  Collects configs from your disk");
        console.log("  help     Showes this help");
    }
}
const Tare1 = new Tare();
Tare1.init();
