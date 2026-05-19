const jwt = require('jsonwebtoken');
const http = require('http');

const secret = "oxilo-jwt-super-secret-key-dev-2024";
const payload = { sub: "test-user-id", shopId: "demo-shop-001", role: "OWNER" };
const token = jwt.sign(payload, secret);

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/settings/garment-types',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`
  }
};

const req = http.request(options, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Body: ${data}`);
  });
});

req.on('error', e => console.error(e));
req.end();
