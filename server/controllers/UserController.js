const userService = require("../service/UserService");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/ApiError");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("Ошибка валидации данных", errors.array())
        );
      }
      const { name, email, password } = req.body;
      const data = await userService.registration({
        name,
        email,
        password,
      });

      return res.json(data);
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("Ошибка валидации данных", errors.array())
        );
      }
      const { email, password } = req.body;
      const data = await userService.login(email, password);
      return res.json(data);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.body;
      const tokens = await userService.refresh(refreshToken);
      return res.json(tokens);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const { user } = req;
      await userService.logout(user.id);
      return res.status(200).json({ status: "Ok" });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
