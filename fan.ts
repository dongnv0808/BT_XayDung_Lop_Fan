enum Speed{
    ZERO,
    SLOW,
    MEDIUM,
    FAST,
}
export class Fan{
    private speed: Speed = Speed.SLOW;
    private on: boolean = false;
    private radius: number = 5;
    private color: string = "blue";
    constructor(speed: number, on: boolean, radius: number, color: string){
        this.speed = speed;
        this.on = on;
        this.radius = radius;
        this.color = color;
    }
    get getSpeed(): number{
        return this.speed;
    }
    set setSpeed(speed: number){
        this.speed = speed;
    }
    get getOn(): boolean{
        return this.on;
    }
    set setOn(on: boolean){
        this.on = on;
    }
    get getRadius(): number{
        return this.radius;
    }
    set setRadius(radius: number){
        this.radius = radius;
    }
    get getColor(): string{
        return this.color;
    }
    set setColor(color: string){
        this.color = color;
    }
    toString():string{
        if(this.getOn == true){
            return `Speed: ${this.getSpeed} | Color: ${this.getColor} | Radius: ${this.getRadius} | fan is on`;
        }else{
            return `Color ${this.getColor} | Radius: ${this.getRadius} fan is off`
        }
    }
}