const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";

interface IToken {
  accessToken: string;
}

export function setToken(token: IToken) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token.accessToken);
}

export function getToken(): IToken {
  return {
    accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) || "",
  };
}

export function clearToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}
