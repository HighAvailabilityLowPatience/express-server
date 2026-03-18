
const app = require('./app')


// We're telling the app to listen for network requests on port 3000
app.listen(3000, function() {
  console.log('Server is listening on http://localhost:3000');
});
