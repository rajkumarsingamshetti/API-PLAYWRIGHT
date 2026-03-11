import { ENV } from "../config/env.js";

export async function getToken(request) {

  const response = await request.post(`${ENV.baseURL}/auth`, {
    headers: { "Content-Type": "application/json" },
    data: {
      username: ENV.username,
      password: ENV.password
    }
  });

  const body = await response.json();
  return body.token;
}















