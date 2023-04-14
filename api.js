const API_URL = "https://dogsapi.origamid.dev/json";

const TOKEN_POST = (body) => {
  return {
    url: `${API_URL}/jwt-auth/v1/token`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export { API_URL, TOKEN_POST };
