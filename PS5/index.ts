
class Spacecraft{
    milesperKilometer:number=0.621;
    name:string;
    speedMph:number;
    constructor(name:string,speedMph:number){
        this.name=name;
        this.speedMph=speedMph;
    }
    getdaysLocation(kilometersToaway:number):number{
        const milesAway = kilometersToaway * this.milesperKilometer;
        const hoursToLocation = milesAway / this.speedMph;
        const daysToLocation = hoursToLocation / 24;
        return daysToLocation;
    }
   
}

let spaceShuttle = new Spacecraft('Determination', 17500);
let kilometerstoMars:number=225000000;
let kilometerstoTheMoon:number=384400;

console.log(`
${spaceShuttle.name} would take ${spaceShuttle.getdaysLocation(kilometerstoMars)}days to reach Mars
`);

console.log(
    `${spaceShuttle.name} would take ${spaceShuttle.getdaysLocation(kilometerstoTheMoon)}days to reach Mars
    `
);
