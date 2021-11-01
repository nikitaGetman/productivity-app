import { loadStorageItem, saveStorageItem, removeStorageItem } from "./storage";

import client from "@/http/client";

const ACCESS_TOKEN = "app:accessToken";
const REFRESH_TOKEN = "app:refreshToken";

class AuthService {
  _accessToken = null;

  _refreshToken = null;

  _isTokensSync = true;

  get isTokensSync() {
    return this._isTokensSync;
  }

  set isTokensSync(isSync) {
    this._isTokensSync = isSync;
  }

  get accessToken() {
    return this._accessToken;
  }

  set accessToken(token) {
    this._accessToken = token;

    if (this.isTokensSync) {
      if (token) {
        saveStorageItem(ACCESS_TOKEN, this._accessToken);
      } else {
        removeStorageItem(ACCESS_TOKEN);
      }
    }
  }

  get refreshToken() {
    return this._refreshToken;
  }

  set refreshToken(token) {
    this._refreshToken = token;

    if (this.isTokensSync) {
      if (token) {
        saveStorageItem(REFRESH_TOKEN, this._refreshToken);
      } else {
        removeStorageItem(REFRESH_TOKEN);
      }
    }
  }

  getAuthHeader() {
    return this.accessToken ? `Bearer ${this.accessToken}` : undefined;
  }

  setAuthTokens({ accessToken, refreshToken }) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  hasAuthTokens() {
    return !!this.accessToken || !!this.refreshToken;
  }

  removeAuthTokens() {
    this.accessToken = null;
    this.refreshToken = null;
  }

  restoreAuthTokens() {
    this.setAuthTokens({
      accessToken: loadStorageItem(ACCESS_TOKEN),
      refreshToken: loadStorageItem(REFRESH_TOKEN),
    });
  }

  refreshAuthTokens() {
    const { refreshToken } = this;
    return client
      .post("/refresh", { refreshToken }, { _withoutAuthHeader: true })
      .then(({ accessToken, refreshToken, user }) => {
        this.setAuthTokens({ accessToken, refreshToken });
        return user;
      });
  }

  login({ email, password, isTokensSync = this.isTokensSync }) {
    this.isTokensSync = isTokensSync;

    return client
      .post("/login", { email, password })
      .then(({ accessToken, refreshToken, user }) => {
        this.setAuthTokens({ accessToken, refreshToken });
        return user;
      });
  }

  register({ name, email, password, isTokensSync = this.isTokensSync }) {
    this.isTokensSync = isTokensSync;

    return client
      .post("/registration", { name, email, password })
      .then(({ accessToken, refreshToken, user }) => {
        this.setAuthTokens({ accessToken, refreshToken });
        return user;
      });
  }

  // eslint-disable-next-line
  logout() {
    return client.post("/logout").then(() => {
      this.removeAuthTokens();
    });
  }
}

export default new AuthService();
