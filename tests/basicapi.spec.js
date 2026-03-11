const { test, expect, request } = require('@playwright/test');

let token;
let bookingId;

test.beforeAll(async () => {

  const apiContext = await request.newContext();

  // Create Token
  const authResponse = await apiContext.post('https://restful-booker.herokuapp.com/auth', {
    data: {
      username: "admin",
      password: "password123"
    }
  });

  const authBody = await authResponse.json();
  token = authBody.token;

  console.log("Token:", token);

  // Create Booking
  const bookingResponse = await apiContext.post('https://restful-booker.herokuapp.com/booking', {
    data: {
      firstname: "rajkumar",
      lastname: "singamshetti",
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: "2025-03-10",
        checkout: "2025-03-15"
      },
      additionalneeds: "Breakfast"
    }
  });

  const bookingBody = await bookingResponse.json();
  bookingId = bookingBody.bookingid;

  console.log("Booking ID:", bookingId);

});
test('Get Booking', async ({ request }) => {

  const response = await request.get(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`
  );

  const body = await response.json();
  console.log(body);

  expect(response.status()).toBe(200);

});