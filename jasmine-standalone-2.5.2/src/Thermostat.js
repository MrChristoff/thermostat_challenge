function Thermostat(){
  this.startTemp = 20;
  this.temperature = null || this.startTemp;
};

Thermostat.prototype.upTemp = function (n) {
  this.temperature++
};

Thermostat.prototype.downTemp = function (n) {
  this.temperature--
};
