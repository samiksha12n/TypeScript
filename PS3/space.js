var spacecraftName1 = 'Determination';
var speedMph1 = 17500;
var kilometersToMars1 = 225000000;
var kilometersToTheMoon1 = 384400;
var milesPerKilometer1 = 0.621;
var milesToMars = kilometersToMars1 * milesPerKilometer1;
console.log(milesToMars);
var hoursToMars = milesToMars / speedMph1;
console.log(hoursToMars);
var daysToMars = hoursToMars / 24;
console.log(daysToMars);
