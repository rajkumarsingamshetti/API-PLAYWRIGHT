import { BaseAPI } from "./BaseAPI.js";
import { ENV } from "../config/env.js";

export class BookingAPI extends BaseAPI {

  constructor(request) {
    super(request, ENV.baseURL);
  }

  async createBooking(data) {
    return await this.post("/booking", data);
  }

  async deleteBooking(id, token) {
    return await this.delete(`/booking/${id}`, {
      Cookie: `token=${token}`
    });
  }

}