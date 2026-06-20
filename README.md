<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1b27,100:70a5fd&height=160&section=header&text=API-PLAYWRIGHT&fontSize=42&fontColor=cdd6f4&fontAlignY=45&desc=REST%20API%20Automation%20%E2%80%94%20Practice%20Project&descAlignY=68&descColor=a6adc8"/>

</div>

<div align="center">

[![Language](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Framework](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev)
[![Type](https://img.shields.io/badge/Type-Practice%20Project-blueviolet?style=for-the-badge)](https://github.com/rajkumarsingamshetti)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)](https://github.com/rajkumarsingamshetti/API-PLAYWRIGHT)

</div>

---

> ⚠️ **Practice Project:** Built as a personal learning initiative to demonstrate REST API automation depth using Playwright. Not from employment.

---

## 📌 Overview

**API-PLAYWRIGHT** is a focused REST API automation project using Playwright's powerful `request` context. It demonstrates how to validate API behaviour comprehensively — covering happy paths, authentication, schema validation, error handling, and performance assertions.

---

## ✨ Key Capabilities

| Capability | Coverage |
|---|---|
| 🟢 HTTP Methods | GET · POST · PUT · PATCH · DELETE |
| 🔐 Authentication | Bearer token · API Key · Basic Auth |
| ✅ Response Validation | Status codes · headers · body · schema |
| 📐 Schema Validation | JSON structure & data type assertions |
| ❌ Error Scenarios | 400 · 401 · 403 · 404 · 500 handling |
| ⏱️ Performance | Response time assertions |
| 🔄 Chained Requests | End-to-end API workflow tests |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| **Playwright** | API request execution & assertions |
| **JavaScript** | Test scripting language |
| **Node.js** | Runtime environment |

---

## 📂 Project Structure

```
API-PLAYWRIGHT/
│
├── 📁 tests/
│   ├── users.spec.js          # User API tests
│   ├── products.spec.js       # Product API tests
│   ├── auth.spec.js           # Authentication tests
│   ├── errors.spec.js         # Error scenario tests
│   └── performance.spec.js    # Response time tests
│
├── 📁 utils/
│   ├── api-client.js          # Reusable API wrapper
│   ├── assertions.js          # Custom API assertions
│   └── test-data.json         # Centralised test data
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/rajkumarsingamshetti/API-PLAYWRIGHT.git
cd API-PLAYWRIGHT

# Install dependencies
npm install

# Install Playwright
npx playwright install
```

---

## 🏃 Running Tests

```bash
# Run all API tests
npm test

# Run specific test file
npx playwright test tests/users.spec.js

# Run with verbose output
npx playwright test --reporter=list

# Run and view HTML report
npx playwright test && npx playwright show-report
```

---

## 🔑 Testing Patterns Demonstrated

### ✅ Response Validation
```javascript
// Status code
expect(response.status()).toBe(200);

// Response header
expect(response.headers()['content-type']).toContain('application/json');

// Response body field
expect(body.id).toBeDefined();
expect(body.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
```

### 🔐 Authentication Handling
```javascript
// Bearer token injection
const response = await request.get('/api/users', {
  headers: { Authorization: \`Bearer \${token}\` }
});
```

### ❌ Error Scenario Testing
```javascript
// 401 Unauthorized
const res = await request.get('/api/secure', { headers: {} });
expect(res.status()).toBe(401);
```

---

## 📚 Practice Project Note

> Built entirely as a **personal learning project** to deepen REST API automation skills with Playwright.
> Reflects real-world patterns from enterprise API testing in regulated financial environments.

---

## 📫 Author

**Raj S.** | QA Automation Engineer · SDET · ISTQB Certified | Cape Town 🇿🇦

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github)](https://github.com/rajkumarsingamshetti)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/rajkumarsingamshetti)

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:70a5fd,100:1a1b27&height=100&section=footer"/>

*"Quality is not an act, it is a habit."* — Aristotle
</div>
