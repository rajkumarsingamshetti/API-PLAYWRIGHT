import { BaseAPI } from "./BaseAPI.js";
import { ENV } from "../config/env.js";

export class BookingAPI extends BaseAPI {

  constructor(request) {
    super(request, ENV.baseURL);
  }

  // CREATE BOOKING
  async createBooking(data) {
    return await this.post("/booking", data);
  }

  // GET BOOKING
  async getBooking(id) {
    return await this.get(`/booking/${id}`);
  }

  // UPDATE BOOKING (PUT)
  async updateBooking(id, data, token) {
    return await this.put(`/booking/${id}`, data, {
      Cookie: `token=${token}`,
      Accept: "application/json"
    });
  }

  // DELETE BOOKING
  async deleteBooking(id, token) {
    return await this.delete(`/booking/${id}`, {
      Cookie: `token=${token}`
    });
  }
}