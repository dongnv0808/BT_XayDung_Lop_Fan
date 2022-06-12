"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fan_1 = require("./fan");
let fan1 = new fan_1.Fan(1, true, 10, "Blue");
let fan2 = new fan_1.Fan(2, false, 10, "Red");
console.log(fan1.toString());
console.log(fan2.toString());
