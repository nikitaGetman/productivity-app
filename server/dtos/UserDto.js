module.exports = class UserDto {
  name;
  email;
  id;
  isActivated;

  constructor(model) {
    this.email = model.email;
    this.name = model.name;
    this.id = model._id;
    this.isActivated = model.isActivated;
  }
};
