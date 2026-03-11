import { test, expect } from "@playwright/test";
import { BookingAPI } from "../api/BookingAPI.js";
import { getToken } from "../utils/tokenManager.js";
import bookingData from "../test-data/bookingData.json" assert { type: "json" };

test("Create and Delete Booking", async ({ request }) => {

  const bookingAPI = new BookingAPI(request);

  const token = await getToken(request);

  const createResponse = await bookingAPI.createBooking(bookingData);

  const body = await createResponse.json();

  const bookingId = body.bookingid;

  expect(body.booking.firstname).toBe(bookingData.firstname);

  const deleteResponse = await bookingAPI.deleteBooking(bookingId, token);

  expect(deleteResponse.status()).toBe(201);

});