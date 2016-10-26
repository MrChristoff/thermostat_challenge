describe ("Thermostat", function() {

  beforeEach(function() {
     thermostat = new Thermostat()
  });

  describe ("New Thermostat", function(){
    it("Has a START_TEMP of 20", function(){
      expect(thermostat.startTemp).toBe(20)
    });
    it("has a TEMP of 20", function(){
      expect(thermostat.temperature).toBe(thermostat.startTemp)
    });
    it("has a maxTemp of 25", function(){
      expect(thermostat.maxTemp).toBe(25)
    });
  });

  describe ("Change Temperature", function(){
    it("increases temperature with upTemp()", function(){
      thermostat.upTemp()
      expect(thermostat.temperature).toBeGreaterThan(thermostat.startTemp)
    });
    it("decreases temperature with downTemp()", function(){
      thermostat.downTemp()
      expect(thermostat.temperature).toBeLessThan(thermostat.startTemp)
    });
  });

  describe ("Power Saving mode", function(){
    it("sets powerSaveMode to true", function(){
      thermostat.powerSaveOn()
      expect(thermostat.powerSaveMode).toEqual(true)
    });
    it("sets maxTemp to 25 if powerSaveMode is true", function(){
      thermostat.powerSaveOn()
      expect(thermostat.maxTemp).toBe(25)
    });
    it("sets powerSaveMode to false", function(){
      thermostat.powerSaveOff()
      expect(thermostat.powerSaveMode).toEqual(false)
    });
  });

  describe ("Reset", function(){
    it("resets the temperature to 20 on reset", function(){
      thermostat.upTemp()
      thermostat.reset()
      expect(thermostat.temperature).toEqual(thermostat.startTemp)
    });
  });

  describe ("Energy usage", function(){
    it("returns low energy use statement based on temperature", function(){
      thermostat.temperature = 17
      expect(thermostat.energyUse).toMatch("low-usage")
    });
    it("returns medium energy use statement based on temperature", function(){
      thermostat.temperature = 24
      expect(thermostat.energyUse).toMatch("medium-usage")
    });
    it("returns high energy use statement based on temperature", function(){
      thermostat.temperature = 28
      expect(thermostat.energyUse).toMatch("high-usage")
    });
  });
});
