import { loadStorageItem, saveStorageItem, removeStorageItem } from "./storage";

// import client from "@/http/client";

const ACCESS_TOKEN = "app:access";
const REFRESH_TOKEN = "app:refresh";

class AuthService {
  _access = null;

  _refresh = null;

  _isTokensSync = true;

  get isTokensSync() {
    return this._isTokensSync;
  }

  set isTokensSync(isSync) {
    this._isTokensSync = isSync;
  }

  get access() {
    return this._access;
  }

  set access(token) {
    this._access = token;

    if (this.isTokensSync) {
      if (token) {
        saveStorageItem(ACCESS_TOKEN, this._access);
      } else {
        removeStorageItem(ACCESS_TOKEN);
      }
    }
  }

  get refresh() {
    return this._refresh;
  }

  set refresh(token) {
    this._refresh = token;

    if (this.isTokensSync) {
      if (token) {
        saveStorageItem(REFRESH_TOKEN, this._refresh);
      } else {
        removeStorageItem(REFRESH_TOKEN);
      }
    }
  }

  getAuthHeader() {
    return this.access ? `Bearer ${this.access}` : undefined;
  }

  setAuthTokens({ access, refresh }) {
    this.access = access;
    this.refresh = refresh;
  }

  hasAuthTokens() {
    return !!this.access || !!this.refresh;
  }

  removeAuthTokens() {
    this.access = null;
    this.refresh = null;
  }

  restoreAuthTokens() {
    this.setAuthTokens({
      access: loadStorageItem(ACCESS_TOKEN),
      refresh: loadStorageItem(REFRESH_TOKEN),
    });
  }

  // implementation of refresh tokens
  refreshAuthTokens() {
    // const { refresh } = this
    // return client.POST('/auth/refresh', { refresh }).then(tokens => {
    //   this.setAuthTokens(tokens)
    // })

    return Promise.resolve({
      access: "someAccess",
      refresh: "someRefresh",
    }).then((tokens) => {
      this.setAuthTokens(tokens);
    });
  }

  // eslint-disable-next-line
  login({ login, password, isTokensSync = this.isTokensSync }) {
    this.isTokensSync = isTokensSync;

    // return client.GET('/auth', { login, password }).then(tokens => {
    //   this.setAuthTokens(tokens)
    // })

    return new Promise((resolve) => {
      setTimeout(() => {
        const model = {
          username: "some user",
        };
        this.setAuthTokens({
          access: btoa(`${login}:${password}`),
          refresh: btoa(`${login}:${password}`),
        });
        resolve(model);
      }, 1500);
    });
  }

  restoreUser() {
    // return client.GET("/auth/user")

    return new Promise((resolve) => {
      setTimeout(() => {
        const model = {
          username: "some user",
        };
        resolve(model);
      }, 1500);
    });
  }

  // eslint-disable-next-line
  logout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 0);
    }).then(() => {
      this.removeAuthTokens();
    });
  }
}

export default new AuthService();
