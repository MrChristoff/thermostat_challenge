function Thermostat(){
  this.startTemp = 20;
  this.temperature = null || this.startTemp;
  this.maxTemp = 25;
  this.powerSaveMode = true;
};

Thermostat.prototype.upTemp = function (n) {
  this.temperature++
};

Thermostat.prototype.downTemp = function (n) {
  this.temperature--
};

Thermostat.prototype.powerSaveOn = function () {
  this.setMaxTemp(25)
  this.powerSaveMode = true
};

Thermostat.prototype.powerSaveOff = function () {
  this.setMaxTemp(32)
  this.powerSaveMode = false
};

Thermostat.prototype.setMaxTemp = function (n) {
  this.maxTemp = n
};

Thermostat.prototype.reset = function () {
  this.temperature = this.startTemp
};

Thermostat.prototype.energyUse = function () {
  if (this.temperature < 18) {
    return "low-usage" }
  else if (this.temperature < 25) {
    return "medium-usage" }
  else {
    return "high-usage"
  }
};
