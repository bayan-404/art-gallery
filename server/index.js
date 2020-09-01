// define express
const express = require('express');

//define next
const next = require('next');

//your port
const PORT = process.env.PORT || 3000;

//constant that next gave to us , tells us to read form node environment and != production this will turn to booleen operetor

const dev = process.env.NODE_ENV !== 'production';

// pass the booleen result to next
const app = next({ dev });

//handle it >> this function is a part of next framework
const handle = app.getRequestHandler();

app
  // .prepair prepaire it to go to 'next' file or next framework
  .prepare()
  // here you can launch your server
  .then(() => {
    const buildJs = require('./database/config/db.build');

    const server = express();
    //--------------------------------------- build the database ------------------------------------------
    // buildJs()
    //   .then((res) => console.log('resposne', res))
    //   .catch((err) => console.log('error', err))
    //-----------------------------------------------------------------------------------------------------

    server.get('/api/category', (req, res) => {
      return res.send('the server is ready !');
    });
    // grab and rout and , tell express to include the index.html ....
    server.get('*', (req, res) => {
      //this is just next taking care of some of the heavy lifting for us in case we have different kind of routes
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`ready on ${PORT}`);
    });
  })

  // we catch the error this way here ...
  // in some codes it's 'ex' = exceptions
  .catch((err) => {
    console.error(err.stack);
    //kill the process with an exit code of 1 so that the server kind of just crashes and burns
    process.exit(1);
  });
