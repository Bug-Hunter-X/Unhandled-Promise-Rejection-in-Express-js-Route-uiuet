const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello!');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred'); // Send error response
    });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a potential error
      const error = new Error('Something went wrong');
      reject(error);
      //resolve();
    }, 1000);
  });
}