describe ("Thermostat", function() {

});

describe ("New Thermostat", function(){
  it("Has a START_TEMP of 20", function(){
    var thermostat = new Thermostat()
    expect(thermostat.startTemp).toBe(20)
  });
  it("has a TEMP of 20", function(){
    var thermostat = new Thermostat()
    expect(thermostat.temperature).toBe(thermostat.startTemp)
  });
});

describe ("Change Temperature", function(){
  it("increases temperature with upTemp()", function(){
    var thermostat = new Thermostat()
    thermostat.upTemp()
    expect(thermostat.temperature).toBeGreaterThan(thermostat.startTemp)
  });
  it("decreases temperature with downTemp()", function(){
    var thermostat = new Thermostat()
    thermostat.downTemp()
    expect(thermostat.temperature).toBeLessThan(thermostat.startTemp)
  });
});
