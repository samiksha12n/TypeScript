let spacecraftName1 : string = 'Determination';
let speedMph1 : number = 17500;
let kilometersToMars1 : number = 225000000;
let kilometersToTheMoon1 : number = 384400;
let milesPerKilometer1 : number = 0.621
let milesToMars:number = kilometersToMars1 * milesPerKilometer1;
 console.log(milesToMars);
 let hoursToMars : number = milesToMars/speedMph1;
 console.log(hoursToMars);
 let daysToMars : number = hoursToMars/24;
 console.log(daysToMars);

