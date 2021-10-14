module.exports = class UserDto {
  name;
  surname;
  email;
  id;
  isActivated;

  constructor(model) {
    this.email = model.email;
    this.name = model.name;
    this.surname = model.surname;
    this.id = model._id;
    this.isActivated = model.isActivated;
  }
};
