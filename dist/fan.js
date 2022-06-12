"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fan = void 0;
var Speed;
(function (Speed) {
    Speed[Speed["ZERO"] = 0] = "ZERO";
    Speed[Speed["SLOW"] = 1] = "SLOW";
    Speed[Speed["MEDIUM"] = 2] = "MEDIUM";
    Speed[Speed["FAST"] = 3] = "FAST";
})(Speed || (Speed = {}));
class Fan {
    constructor(speed, on, radius, color) {
        this.speed = Speed.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = "blue";
        this.speed = speed;
        this.on = on;
        this.radius = radius;
        this.color = color;
    }
    get getSpeed() {
        return this.speed;
    }
    set setSpeed(speed) {
        this.speed = speed;
    }
    get getOn() {
        return this.on;
    }
    set setOn(on) {
        this.on = on;
    }
    get getRadius() {
        return this.radius;
    }
    set setRadius(radius) {
        this.radius = radius;
    }
    get getColor() {
        return this.color;
    }
    set setColor(color) {
        this.color = color;
    }
    toString() {
        if (this.getOn == true) {
            return `Speed: ${this.getSpeed} | Color: ${this.getColor} | Radius: ${this.getRadius} | fan is on`;
        }
        else {
            return `Color ${this.getColor} | Radius: ${this.getRadius} fan is off`;
        }
    }
}
exports.Fan = Fan;
