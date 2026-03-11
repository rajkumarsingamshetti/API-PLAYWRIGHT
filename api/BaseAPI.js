export class BaseAPI {
  constructor(request, baseURL) 
  {
    this.request = request;
    this.baseURL = baseURL;
  }

  async get(endpoint) {
    return await this.request.get(`${this.baseURL}${endpoint}`);
  }

  async post(endpoint, data, headers = {}) {
    return await this.request.post(`${this.baseURL}${endpoint}`, {
      headers: { "Content-Type": "application/json", ...headers },
      data
    });
  }

  async put(endpoint, data, headers = {}) {
    return await this.request.put(`${this.baseURL}${endpoint}`, {
      headers,
      data
    });
  }

  async delete(endpoint, headers = {}) {
    return await this.request.delete(`${this.baseURL}${endpoint}`, {
      headers
    });
  }
}





