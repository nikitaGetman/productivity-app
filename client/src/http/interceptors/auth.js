import { AUTH_HEADER, ERROR_STATUSES } from "@/constants/http";
import client from "@/http/client";
import authService from "@/services/auth";

export function requestWithAuth({ _withoutAuthHeader = false, ...config }) {
  if (_withoutAuthHeader) {
    return { _withoutAuthHeader, ...config };
  }

  const additionalHeaders = {
    [AUTH_HEADER]: authService.getAuthHeader(),
  };

  return {
    ...config,
    headers: {
      ...config.headers,
      ...additionalHeaders,
    },
  };
}

export const handleAuthError = (() => {
  let refreshRequest = null;

  return (error) => {
    const errorStatus = error.response.status;
    const { _retry, _withoutAuthHeader } = error.config;

    if (
      errorStatus === ERROR_STATUSES.UNAUTHORIZED &&
      !_retry &&
      !_withoutAuthHeader
    ) {
      if (!refreshRequest) {
        refreshRequest = authService.refreshAuthTokens();
      }

      return refreshRequest.then(() => {
        refreshRequest = null;
        return client.request({
          ...error.config,
          headers: {
            ...error.config.headers,
          },
          _retry: true,
        });
      });
    }

    return Promise.reject(error.response);
  };
})();
