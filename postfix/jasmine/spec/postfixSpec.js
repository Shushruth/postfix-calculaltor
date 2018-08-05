describe("Postfix", function() {
    let instance = null;
    let result = null;
    let input = null;
    beforeEach(function() {
      instance = new Postfix();
      input = document.createElement("input");
      result = document.createElement("div");
      input.id="input";
      input.type = "text";
      input.value = "2 3 +";
      result.id="result";
      document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(input);
    });
  
    it("should be able to assert 5", function() {
      expect(instance.value.length).toBe(0);
      instance.processData();
      expect(instance.value.pop()).toBe("5");
    });

    it("should be able to assert -11.5 15 20", function() {
        input.value = "3.5 2 + 4.25 4 x - 15 20";
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(input);
        expect(instance.value.length).toBe(0);
        instance.processData();
        expect(instance.value.pop()).toBe("-11.5 15 20");
      });

  });
  