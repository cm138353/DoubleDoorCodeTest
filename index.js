const express = require('express');
const app = express();


app.route('/user')
   .get((req, res) => {
      res.send("I respond to /user over GET");
   })
   .post((req, res) => {
      res.send("I respond to /user over POST");
   })
   .put((req, res) => {
      res.send("I respond to /user over PUT");
   })
   .delete((req, res) => {
      res.send("I respond to /user over DELETE");
   });
app.listen(3000, () => console.log('Example app listening on port 3000!'));
