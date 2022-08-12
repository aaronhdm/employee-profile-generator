const Manager = require('../manager');

describe('Manager', () => {
  describe('Initialization', () => {

    it("should exist with a name, id, email, and office property set to the name, id, email, and office argument provided when called with the new keyword", () => {

      const name = "name";
      const id = "48";
      const email = "test@test.com"
      const office = "1111";
      const obj = new Manager(name, id, email, office);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.office).toEqual(office);
    });
  });

  describe('getRole', () => {

    it("should return role when getRole function is called", () => {

      const name = "name";
      const id = "48";
      const email = "test@test.com"
      const office = "1111";
      const role = "Manager";


      const obj = new Manager(name, id, email, office);

      expect(obj.getRole()).toEqual(role);
    });
  });
});