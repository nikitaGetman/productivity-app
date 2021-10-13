const UserModel = require("../models/UserModel");
const UserDto = require("../dtos/UserDto");
const ApiError = require("../exceptions/ApiError");
const mailService = require("./MailService");
const tokenService = require("./TokenService");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

async function issueTokens(user) {
  const userDto = new UserDto(user);
  const tokens = tokenService.generateTokens({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refreshToken);

  return { ...tokens, user: userDto };
}

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(
        `Пользователь с таким email (${email}) уже существует`
      );
    }

    const hashedPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserModel.create({
      email,
      password: hashedPassword,
      activationLink,
    });

    await mailService.sendActivationMail(
      email,
      `${process.env.APP_URL}/api/activate/${activationLink}`
    );

    return await issueTokens(user);
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest("Некорректная ссылка активации");
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest(
        "Пользователь с таким email или паролем не найден"
      );
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      throw ApiError.BadRequest(
        "Пользователь с таким email или паролем не найден"
      );
    }

    return await issueTokens(user);
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (
      !userData ||
      !tokenFromDb ||
      userData.id.toString() !== tokenFromDb.user.toString()
    ) {
      throw ApiError.UnauthorizedError();
    }

    const user = await UserModel.findById(userData.id);

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    tokenFromDb.refreshToken = tokens.refreshToken;
    await tokenFromDb.save();

    return { ...tokens, user: userDto };
  }

  async logout(userId) {
    const token = await tokenService.removeToken(userId);
    return token;
  }
}

module.exports = new UserService();
