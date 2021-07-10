import { showError } from "../helpers/toast";
import { clearToken, getToken } from "../helpers/token";

/** @type {import("use-http").Options} */
const options = {
  interceptors: {
    request: async ({ options }) => {
      const token = getToken();
      if (token.accessToken) {
        if (token.expiresAt < Date.now()) {
          //await refreshToken();
        }
        options.headers["Authorization"] = token.accessToken;
      }
      return options;
    },
    response: ({ response }) => {
      if (response.status == 403 || response.status == 401) {
        clearToken();
        window.location.replace("/login");
      }

      if (response.status == 500) {
        showError("Unexpected error. Please try again later.");
      }
      return response;
    },
  },
  onError: ({ error }) => {
    if (error.message == "Failed to fetch") {
      showError("Please check your network connection. ");
    }
  },
};

export default options;
