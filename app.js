import express from 'express';
import path from 'path';

const app = express();

const expressPort = 8002;

app.use(express.static('public'));

//const staticPath = path.join(__dirname, 'public');
app.get('/pets', (req,res) => {
  res.send(petData);
})
// app.get('/', (req, res) => {
//   res.sendFile('/Users/kevingoble/HR/MCSP/2311/exampleFullStackApp/public/index.html');
// });

// app.get('/index.js', (req, res) => {
//   res.sendFile('/Users/kevingoble/HR/MCSP/2311/exampleFullStackApp/public/index.js');
// });

app.listen(expressPort, () => {
  console.log(`Listening on port ${expressPort}...`);
})