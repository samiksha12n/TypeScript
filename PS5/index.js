var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesperKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getdaysLocation = function (kilometersToaway) {
        var milesAway = kilometersToaway * this.milesperKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        var daysToLocation = hoursToLocation / 24;
        return daysToLocation;
    };
    return Spacecraft;
}());
var spaceShuttle = new Spacecraft('Determination', 17500);
var kilometerstoMars = 225000000;
var kilometerstoTheMoon = 384400;
console.log("\n".concat(spaceShuttle.name, " would take ").concat(spaceShuttle.getdaysLocation(kilometerstoMars), "days to reach Mars\n"));
console.log("".concat(spaceShuttle.name, " would take ").concat(spaceShuttle.getdaysLocation(kilometerstoTheMoon), "days to reach Mars\n    "));
