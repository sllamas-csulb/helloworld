// Load the Express package as a module
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");

const upload = multer();
const jsonParser = bodyParser.json();

// Access the exported service
const app = express();

var articles = [];  

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(express.static("public"));
app.use(express.static("css"));

app.get( "/", ( request, response ) => {
    response.sendFile( `${__dirname}/views/index.html` );
});

app.get( "/api/order", ( request , response ) => {
    response.sendFile( `${__dirname}/views/ex1.html` );
});
app.post( "/api/order", upload.array(), ( request, response ) => {
    const name = request.body.name;
    const mail = request.body.mail;
    const payment = request.body.payment;
    const promotion = request.body.promotion;
    const location = request.body.location;
    response.send(`${name}, Thank you for your order. We will keep you posted on delivery status at ${mail}.`);
});

app.get( "/api/countries", ( request , response ) => {
    response.sendFile( `${__dirname}/views/ex2.html` );
});
app.post("/api/countries", jsonParser, (request, response) => {
    const data = request.body;
    response.send(`Your name is ${data.name} and you visited ${data.countries.length} countries. Keep traveling!`);
  });

app.get( "/api/articles", ( request , response ) => {
    response.sendFile( `${__dirname}/views/ex3.html` );
});
app.post( "/api/articles", upload.array(), ( request, response ) => {
    const title = request.body.title;
    const content = request.body.content;

    const newArticle =
    {
        mId: articles.length + 1,
        mTitle: title,
        mContent: content
    };

    articles.push( newArticle );

    response.send(`New article added successfully with tite \"${title}\" and ID ${articles.length}!`);
});

const listener = app.listen( process.env.PORT || 3000, () => {
    console.log( `Your app is listening on port ${listener.address().port}` );
});